---
  title: "How to do Everything in Angular 2 using vanilla ES5 or ES6"
  tags: angular, angular2, javascript, es6
  layout: 'blog'
  description: "The Angular team have done a great job providing proper fluent JavaScript APIs for interacting with all the Angular 2 stuff. In this article, we look at all the biggies"
  course_sidebar: :angular2
  ---
  
  :markdown
  
    Most of the information and tutorials on Angular 2 currently available focus on TypeScript, with perhaps a handwavy gesture towards ES5 somewhere at the start.
  
    The few JavaScript tutorials that do exist, generally resort to such abominations as hand coded decorators or a manually populated parameters attribute, neither of which are needed any more.
  
    * DI can be done by passing an array of newables to the constructor.
    * Decorators can be inserted using the fluent API wrapper, without ever having to see them.
  
    ## Developers still like JavaScript, and Angular lets us use it
  
    A few sites have even begun suggesting that JavaScript is analogous to Assembler: A low-level language, suitable only as a compiler target. Those of us who eat and breathe JavaScript know this is not true.
  
    JavaScript is uniquely beautiful. Angular 2 helps us to write beautiful JavaScript.
  
    Having a decent JavaScript API is especially important given <a href="http://angularjs.blogspot.co.uk/2015/09/angular-2-survey-results.html" target="_blank">this survey.</a>
  
    * 42.2% or respondents said that they were planning to use ES5 or ES6 to work with Angular 2.
    * 11.3% said they weren't sure.
  
    ## Enter the Fluent API
  
    Luckily the Angular team have done a great job at providing a proper <a href="https://en.wikipedia.org/wiki/Fluent_interface" target="_blank">fluent JavaScript API</a> for interacting with all the new Angular 2 stuff.
  
    We don't need to manually hack injectors, or hand code decorators any more. There are wrappers for everything.
  
    In this article, we look at the biggies:
  
    * Imports
    * Component Decorators
    * Services
    * DI
  
  %aside.questions_answered
    :markdown
      ## Questions Answered:
  
      * How do I make a service in Angular 2 with ES5 or ES6?
      * How do I do DI in Angular 2 with ES5 without decorators?
      * How do I import components in Angular 2 with ES5?
  
  :markdown
  
    ## Caveat - TypeScript is still cool!
  
    Before you start hating on me, I should mention that I approve of TypeScript. I like the decorators. I even like the classes (which are really just sugar for IIFEs that return a newable). TypeScript is actually (surprisingly) rather cool.
  
    However, I believe it is important to at least know how to do things the old fashioned (proper?) way using regular JavaScript.
  
    On a small project, or a solo build this is fine and, I think, appropriate.
  
    ## Import statements
  
    One of the first surprises you might find when using Angular are the import statements:
  
  :ruby
    code = <<-CODE
    import {Component} from 'angular2/core';
    CODE
  =code(code)
  
  :markdown
  
    When we write TypeScript, we are typically creating lots of little IIFEs. The import statements create local variables in them that contain Angular objects.
  
    ## Import statements in JavaScript
  
    We can use requireJS if we want to preserve this modularity, but we also have the UMD (Universal Module Definition) build of Angular.
  
    Our script tag looks like this:
  
  :ruby
    code = <<-CODE
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/2.0.0-beta.3/angular2-all.umd.js"></script>
    CODE
  =code(code, :html)
  
  :markdown
  
    This gives us an ng global variable that contains all of Angular 2. Now we can write:
  
  :ruby
    code = <<-CODE
    ng.core.Component
    CODE
  =code(code)
  
  :markdown
  
    To get hold of the Component constructor, just as we could in Angular 1. This constructor does the same job as the `@Component` decorator as we shall see next.
  
    ## Component Decorators
  
    As we all know, TypeScript components look like this:
  
  :ruby
    code = <<-CODE
    @Component({
      selector: 'x',
      template: `x`
    })
    class XComponent {
      constructor() {}
    }
    CODE
  =code(code)
  
  :markdown
  
    ##  Components in JavaScript
  
    The @ is a decorator, and people often try to convert to JavaScript by manually writing decorators, which is frankly painful. Luckily we have an API for that:
  
  :ruby
    code = <<-CODE
    const XComponent = ng.core
      .Component({
        selector: 'x',
        template: `x`
      })
      .Class({
        constructor: function() {}
      });
    CODE
  =code(code)
  
  :markdown
  
    Presto: Just as nice I think.
  
    ## Services
  
    Services in Angular 2 are classes, which in TypeScript are just IIFEs which return a constructor. We might, in addition want to make them injectable so they can receive injections later:
  
  :ruby
    code = <<-CODE
    @Inject
    class PetService {
      get() {
        return [
          'Boa Constrictors',
          'Hamster Beans',
          'Small Cats'
        ];
      }
    }
    CODE
  =code(code)
  
  :markdown
  
    ## Services In JavaScript
  
    The purpose of @Inject is to add metadata that the injector can use to do DI. The Fluent API does DI differently, so we can skip the decorator altogether, and just make a newable function:
  
  :ruby
    code = <<-CODE
    const PetService = function() {
      this.get = function() {
        return [
          'Boa Constrictors',
          'Hamster Beans',
          'Small Cats'
        ];
      }
    };
    CODE
  =code(code)
  
  :markdown
  
    Because Angular 2 DI uses objects for keys instead of Strings, this is all that's needed here. This is now an injectable service. Any newable function from any library can be an injectable service.
  
    Blimey, that was easy.
  
    ## Dependency Injection
  
    In TypeScript, DI is magical. We just specify the things we would like to inject in the class, and Angular does it for us.
  
  :ruby
    code = <<-CODE
    class PetService {
      get() {
        return [
          'Boa Constrictors',
          'Hamster Beans',
          'Small Cats'
        ];
      }
    }
  
    @Inject
    class PetshopService {
      contructor(pets:PetService) {
        pets.get();
      }
    }
    CODE
  =code(code)
  
  :markdown
  
    Angular will make the PetService and inject it into the PetshopService service. This is done using Reflect.metadata. [You can read more on this here.](/blog/how-angular2-di-works-with-typescript/)
  
  
    ## DI in JavaScript the wrong way
  
    Angular 2 DI with JavaScript is just as simple, as we shall see.
  
    Unfortunately, due to some confusion with some of the early tutorials, we often find people:
  
    * manually trying to work directly with the injector, or
    * manually set a params attribute.
  
    *This is ugly, and you just don't need to do it.*
  
    ## Anything is injectable
  
    First up, anything is injectable in Angular, so PetService can be just a newable function.
  
    The Angular DI mechanism will automatically use it to create a singleton that is local to the correct branch of the injector tree. If you only have a root injector (made automatically by Angular 2 on bootstrap), this will be a global singleton, just like Angular 1. I'll go into injector trees properly in another article. They are pretty spiffy.
  
    Here is our injected constructor PetService:
  
  :ruby
    code = <<-CODE
    const PetService = function() {
      this.get = function() {
        return [
          'Boa Constrictors',
          'Hamster Beans',
          'Small Cats'
        ];
      }
    }
    CODE
  =code(code)
  
  :markdown
  
    Now we need to inject it. As for Angular 1, we use an array as a constructor attribute. The first parameters are the injectables. The last one is the newable function:
  
  :ruby
    code = <<-CODE
    const PetshopService = ng.core
      .Class({
        constructor: [PetService, function(pets) {
          pets.get();
        }]
      });
    CODE
  =code(code)
  
  :markdown
  
    And that's it. Our `PetshopService` receives a `PetService` as an injection and assigns it to the `pets` local variable. No need to manually configure injectors, no need to muck about with parameters. It all just works as it should, with all the singletons we would expect.
  
    ## To sum up
  
    Angular 2 works well with TypeScript, but equally well with JavaScript. TypeScript is clever, but we happily get work done using JavaScript too, and still create beautiful code.
  