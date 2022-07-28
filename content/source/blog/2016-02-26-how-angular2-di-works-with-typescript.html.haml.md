---
  title: "How does the TypeScript Angular DI magic work?"
  tags: angular, angular2, javascript, es6
  layout: 'blog'
  description: "Angular 2 comes with a brand new DI mechanism. The premier way to do DI in Angular 2 is using TypeScript \"Magic\". Most articles gloss over this magic. In this article we look at the mechanism."
  course_sidebar: :angular2
  ---
  
  :markdown
  
    **TL;DR: Using decorators and a Reflect.metadata polyfill.**
  
    Angular 2 comes with a brand new DI mechanism. The premier way to do DI in Angular 2 is using TypeScript "Magic". Most articles gloss over this magic. In this article, we dive through the magic and look at the mechanism.
  
  %aside.questions_answered
    :markdown
      ## Questions Answered:
  
      * How does Dependency Injection work in Angular 2 with TypeScript?
      * What is `Reflect.metadata`?
      * Where is Angular 2 injector metadata stored?
  
  :markdown
  
    ## DI in Angular 1
  
    DI is a pattern we all grew to love in Angular 1, so I'll assume, for the purposes of this article that you already know what DI is, and why it is so good.
  
    Angular 1 used strings as tokens for DI. You registered your component with Angular using a string token. It became injectable into any other Angular component.
  
    We might declare pterodactyls in one place:
  
  :ruby
    code = <<-CODE
    angular.module('app')
      .service('PterodactylService', function(){
        // PterodactylService Constructor
      })
    CODE
  =code(code)
  
  :markdown
  
    We could then inject our pterodactyls into the park controller like this:
  
  :ruby
    code = <<-CODE
    angular.module('app')
      .controller('ParkController', ['PterodactylService', function(PterodactylService){
        // Controller code
      }])
    CODE
  =code(code)
  
  :markdown
  
    or if you were happy to forgo minification or use ngAnnotate, it might even look like this:
  
  :ruby
    code = <<-CODE
    angular.module('app')
      .controller('ParkController', function(PterodactylService) {
        // Controller code
      });
    CODE
  =code(code)
  
  :markdown
  
    This magic was possible because Angular 1 used string tokens for injectors. All injectable objects had to be declared with a string and a constructor function. You couldn't just inject any old object. You could only inject Angular stuff.
  
    ## Limitations
  
    This was all well and good, with some limitations:
  
    1. You could only inject Angular components, not arbitrary stuff. This turned Angular into a ghetto.
    2. All injectables were global, and had to be identified with a unique string. Namespacing became a thing. This was not ideal for medium to large applications.
  
    ## Angular 2 has TypeScript
  
    Angular 2 addresses these issues through the magical medium of TypeScript decorators.
  
    To do DI in TypeScript, it's sufficient just to say the class of the thing we want to inject. The Injector will figure everything else out. All injectables are singletons. The Injector will instantiate them, and pass them to our new object
  
  :ruby
    code = <<-CODE
    class Pterodactyls {}
  
    @Component({...})
    class Park {
      constructor(x: Pterodactyls, y: string) {}
    }
    CODE
  =code(code)
  
  :markdown
  
    When Angular needs a Park, it automatically instantiates Pterodactyls for us. If the current Injector has already instantiated Pterodactyls, it will use the singleton.
  
    This is DI Magic.
  
    *If you're not familiar with decorators, how they work, and how they differ from annotations, you might wish to [read my article on it here](/blog/annotations-vs-decorators/).*
  
    ## Typescript doesn't do DI for us
  
    Being <a href="http://atomicrobo.wikia.com/wiki/Action_Scientists" target="_blank">action scientists</a> we naturally disapprove of magic and are keen to understand what is actually going on here.
  
    First up, TypeScript is not tied to Angular; it's its own language. It makes no special concessions to Angular, and has no special Angular features such as DI hardcoded into it.
  
    Removing the decorator for now, a TypeScript version of the above in Angular 2 looks like this:
  
  :ruby
    code = <<-CODE
    class Pterodactyls {}
  
    class Park {
      constructor(x: Pterodactyls, y: string) {}
    }
    CODE
  =code(code)
  
  :markdown
  
    Here's our Park, into which we will inject our Pterodactyls. If we look at the compiled ES5, we get this:
  
  :ruby
    code = <<-CODE
    var Pterodactyls = (function () {
      function Pterodactyls() {
      }
      return Pterodactyls;
    })();
  
    var Park = (function () {
      function Park(x, y) {
      }
      return Park;
    })();
    CODE
  =code(code)
  
  :markdown
  
    Note that nothing about this is specific to Angular 2. This is all regular typescript code, compiled into a couple of regular JavaScipt IIFEs.
  
    There is clearly nothing here for a DI mechanism to hook into. The type annotations are only used in the compile phase. Once the class is compiled, the class annotations are lost.
  
    ## Enter emitDecoratorMetadata
  
    If you are using TypeScript, you will probably have a file in your root called tsconfig.json. This will likely contain a few lines like this:
  
  :ruby
    code = <<-CODE
    {
      "compilerOptions": {
        "emitDecoratorMetadata": true
      }
    }
    CODE
  =code(code)
  
  :markdown
  
    This is the magic sauce. `emitDecoratorMetadata`. This option will preserve type information in your object's *metadata*.
  
    ## JavaScript Objects have metadata now?
  
    Whoa, MetaWhat? Metadata is a proposed ES7 specification. It will allow you to store data about an object without creating an attribute on that object. It's opaque to the object. You access the data using a global object called Reflect, which has an API.
  
    It's not implemented in current browsers, so we need a polyfill. The angular2-polyfills.js file contains one such that gives us a Reflect object with the correct API.
  
    ## Adding a decorator makes TypeScript save type information in metadata
  
    The `emitDecoratorMetadata` option encourages TypeScript to store type information in the metadata. It doesn't matter what decorator you add, any will do. We can just invent one. Let's compile our code again, this time with a decorator.
  
  :ruby
    code = <<-CODE
    class Pterodactyls {}
  
    @Aviary
    class Park {
      constructor(x: Pterodactyls, y: string) {}
    }
    CODE
  =code(code)
  
  :markdown
  
    Note there is no `@Aviary` decorator. I just made it up. The only thing that matters here to the compiler is that a decorator was present.
  
    Having decorated our Park, we now get this little beauty. Don't worry, we'll dissect it slowly:
  
  :ruby
    code = <<-CODE
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
  
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
    };
  
    // Here are the Pterodactyls
    var Pterodactyls = (function () {
        function Pterodactyls() {}
        return Pterodactyls;
    })();
  
    // Here's the Park
    var Park = (function () {
        function Park(x, y) {
        }
        Park = __decorate([
            Aviary,
            __metadata('design:paramtypes', [Pterodactyls, String])
        ], Park);
        return Park;
    })();
    CODE
  =code(code)
  
  :markdown
  
    Whoa, that's quite a bit of code just from our two little classes! There are helpers in there called `__decorate` and `__metadata`.
  
    Now we are talking! This is not code we would ever want to write by hand, but we can see how our injectors might work now. We have the names of the functions to use as constructors available and stored.
  
    ## The __metadata helper function
  
    We have a new global function: `__metadata`. This receives a key: `'design:paramtypes'` and an array of injectable objects.
  
    We also have our old friend `__decorate`. You may remember that `__decorate` receives an array of decorator functions. The object under constructions will be passed to these decorator functions one by one. These decorator functions can make arbitrary changes to the object.
  
    ## What does __metadata do?
  
    Here is the `__metadata` function as created by TypeScript:
  
  :ruby
    code = <<-CODE
    var __metadata = (this && this.__metadata) || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
    };
    CODE
  =code(code)
  
  :markdown
  
    All it does is shell out to `Reflect.metadata`. This is defined in angular2-polyfills.js.
  
    ## Reflect.metadata makes a decorator
  
    Let's call `Reflect.metadata('design:paramtypes', [Pterodactyls, String])` and see what we get:
  
  :ruby
    code = <<-CODE
    function decorator(target, targetKey) {
      if (!IsUndefined(targetKey)) {
        if (!IsObject(target)) {
          throw new TypeError();
        }
        targetKey = ToPropertyKey(targetKey);
        OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
      }
      else {
        if (!IsConstructor(target)) {
          throw new TypeError();
        }
        OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, undefined);
      }
    }
    CODE
  =code(code)
  
  :markdown
  
    Oh look! A decorator function. Calling `Reflect.metadata` gives us a plain old decorator. Angular uses a decorator to save the metadata on the object.
  
    Now TypeScript just chains this decorator into the call to __decorate:
  
  :ruby
    code = <<-CODE
    Park = __decorate([
      Aviary,
      __metadata('design:paramtypes', [Pterodactyls, String])
    ], Park);
    CODE
  =code(code)
  
  :markdown
  
    And hey presto, metadata saved using the Reflect API, all ready for the Angular DI mechanism to read from at injection time.
  
    ## So where did the metadata actually go?
  
    Until we understand this, we are still handwaving.
  
    Metadata is information about an object, which isn't an attribute. We need somewhere to save this data other than on the object itself.
  
    Some digging reveals that `Reflect.metadata` is actually storing this information internally in a `Map` which is stored inside the angular-polyfills closure. All metadata about all objects is stored inside this one object using the Object itself as the key. Your objects are untouched, and DI appears magically to work.
  
    ## To sum up
  
    Adding `emitDecoratorMetadata` to our compiler options forces TypeScript to save type information as metadata.
  
    It uses `Reflect.metadata` to do this. `Reflect.metadata` does not exist inside current browsers, so we need the angular-polyfills.js file.
  
    `Reflect.metadata` stores all type information about all objects currently known in a `Map`, leaving our objects unchanged.
  
    The Angular 2 DI can then query this `Map` to determine what to inject.
  
    What appears to be magic is just very clever science.
  
  