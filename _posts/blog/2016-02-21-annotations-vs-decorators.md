---
title: "What's the difference between annotations and decorators in Angular?"
tags: angular, angular2, javascript, es6
layout: 'blog'
description: "Annotations and decorators are two competing and incompatible ways to compile the @ symbols that we often see attached to Angular components. Annotations create an annotations array. Decorators are functions that receive the decorated object and can make any changes to it they like. Traceur gives us annotations. TypeScript gives us decorators. Angular 2 supports both."

---



**TL;DR: Annotations and decorators are two competing and incompatible ways to compile the @ symbols that we often see attached to Angular components. Annotations create an "annotations" array. Decorators are functions that receive the decorated object and can make any changes to it they like.**

**Traceur gives us annotations. TypeScript gives us decorators. Angular supports both.**

One of the humps you'll likely run into when learning about Angular is this initially non-obvious distinction between Annotations and Decorators. The two, although sharing a syntax, are actually almost entirely different and represent two superficially similar, but actually radically different ways of thinking about how the little @ symbols should work in Angular and future JavaScript.

Annotations and Decorators are two very different language features competing for the @ symbol. Although the syntax is identical, they are not the same; the difference is not even subtle. Read on to find out more.

## What they look like:

You will have noticed that an Angular component is often written like this:

```js
  @Component({
selector: 'app',
template: 'Hello World!'
  })
  class MyComponent {}
```





This is obviously not JavaScript, but it can be compiled to JavaScript using Traceur (annotations) or TypeScript (decorators). The two compilers will treat this annotation very differently. Let's look at what we get.

## Annotations (as used in Traceur and AtScript (now defunct) )

Annotations are a hardcoded language feature. When I annotate a class (really just a newable function), the compiler creates an attribute on that class called "annotations", stores an array in it, then tries to instantiate an object with the same name as the annotation, passing the metadata into the constructor. The annotated object can then make any use of this 'annotations' array that it likes.

Google's Traceur compiler includes annotations as an experimental feature. If we run the above code through Traceur, we get the following:

```js
  $traceurRuntime.ModuleStore.getAnonymousModule(function(require) {
"use strict";
var $__3;
var MyComponent = $traceurRuntime.initTailRecursiveFunction(function() {
  return $traceurRuntime.call(function() {
    function MyComponent() {}
    return $traceurRuntime.continuation($traceurRuntime.createClass, $traceurRuntime, [MyComponent, {}, {}]);
  }, this, arguments);
})();
Object.defineProperty(MyComponent, "annotations", {get: function() {
    return [new Component({
      selector: 'app',
      template: 'Hello World!'
    })];
  }});
;
return ($__3 = {}, Object.defineProperty($__3, "MyComponent", {
  get: function() {
    return MyComponent;
  },
  configurable: true,
  enumerable: true
}), $__3);
  });
```





<a href="https://google.github.io/traceur-compiler/demo/repl.html#%2F%2F%20Options%3A%20--annotations%20--array-comprehension%20--async-functions%20--async-generators%20--exponentiation%20--export-from-extended%20--for-on%20--generator-comprehension%20--jsx%20--member-variables%20--proper-tail-calls%20--require%20--types%20%0A%40Component(%7B%0A%20%20selector%3A%20'app'%2C%0A%20%20template%3A%20'Hello%20World!'%0A%7D)%0Aexport%20class%20MyComponent%20%7B%0A%0A%7D%3B%0A" target="_blank">Have a play with this code in the Traceur REPL here.</a>

The key thing to notice here is this bit:

```js
  Object.defineProperty(MyComponent, "annotations", {get: function() {
  return [new Component({
    selector: 'app',
    template: 'Hello World!'
  })];
}});
```





Paraphrasing somewhat, Traceur is actually generating something like this:

```js
  var MyComponent = function MyComponent() {}
  MyComponent.annotations = [
new Component({
  selector: 'app',
  template: 'Hello World!'
})
  ]
```






An annotations property is being defined on MyComponent, which is populated with a newly instantiated Component object. This is what annotations do. They just create this array. You are then free to do what you like with the array. Angular inspects it to decide how to treat the component.


## Decorators

Decorators are different (better?). A decorator is a function that receives the object to be decorated. It is then free to modify the object in any way it likes.

Decorators are implemented by the TypeScript compiler. TypeScript compiles the MyComponent code like this:

```js
  var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
var c = arguments.length,
  r = c < 3 ? target : desc === null ?
  desc = Object.getOwnPropertyDescriptor(target, key) : desc,
  d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
  r = Reflect.decorate(decorators, target, key, desc);
else
  for (var i = decorators.length - 1; i >= 0; i--)
    if (d = decorators[i])
      r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var MyComponent = (function () {
function MyComponent() {}
MyComponent = __decorate(
  [
    Component({
      selector: 'app',
      template: 'Hello World!'
    })
  ],
  MyComponent
);
return MyComponent;
  }());
```






<a href="http://www.typescriptlang.org/Playground#src=%40Component(%7B%0A%20%20selector%3A%20'app'%2C%0A%20%20template%3A%20'Hello%20World!'%0A%7D)%0Aclass%20MyComponent%20%7B%7D" target="_blank">Have a play with this code in the TypeScript playground here.</a>

The key part is here (to paraphrase):

```js
  var __decorate = function(decorators, target) {
for (var i = decorators.length - 1; i >= 0; i--)
  d(target, key, r)
  }
```





Our component calls __decorate, which is defined automatically whenever we decorate something. Our component passes __decorate an array of decorators, and itself. The decorators are just functions. Each decorator function will receive the object, and can modify it in any way you see fit.

It follows that we can easily use decorators to implement annotations, but we can also do anything else we like. We might add attributes, modify attributes, run conditional code, even create and return a completely new object.

.box

## Relect.decorate

If you have sharp eyes, you may have noticed that TypeScript tries to shell out to a native Reflect.decorate, before running all the decorators. It turns out that Relect.decorate is in the draft ES7 specification. A polyfill is defined in the angular2-polyfills.js file.



## To sum up:

**Annotations** create an 'annotations' array. When the compiler encounters an annotation, it:

1. Creates an 'annotations' attribute on the annotated object and puts an array in it.
2. Instantiates a new object using a constructor with the same name at the annotation, passes the annotated metadata to this new object constructor, and stores the generated object in the annotations array.

Your code can make use of your annotations in any way you see fit.

Google's Traceur uses annotations.

**Decorators** are functions that receive the object under construction. Being functions they can modify the object in any way they like, adding or modifying any attributes you see fit to change.

MicroSoft's TypeScript uses decorators.

## Performance implications

Annotations, being harcoded, are much simpler for an optimising compiler to deal with, and for a code hinter to parse. They potentially offer more performant code, at the expense of a great deal of fun and flexibility. They are solid, staid, enterprise, (boring?)

Decorators, allow for arbitrary object changes (or even changes beyond the object). They are thus much harder for a compiler to reason about and optimise for. It is harder to provide code hinting for decorators, because you can't know for sure what they will do. They might even do something naughty like an eval, or modify the object differently depending on the time of day. They allow for all sorts of fun features, like metaprogramming. They are much more - what I would call - JavaScripty.


## Decorators and Annotations in Angular

Both Decorators and Annotations are supported by Angular. This is a legacy thing because Angular 2 swapped from AtScript to TypeScript while it was still in development.

* Compiling with Traceur? You have *annotations*.
* Handcoding ES5 or ES6 with the annotations style? You have *annotations*.
* Compiling with TypeScript? You have *decorators*.
* Handcoding ES5 or ES6 with the Lucid API (my favourite)? You have *decorators*.

The main difference you will notice is your imports. Because annotations and decorators are different, you will need to import different objects.

If you are using decorators, your imports will look like normal TypeScript imports:

```js
  import {Component, View} from 'angular2/angular2';
```





If you are using annotations then you'll have to import the annotation version of the core angular components

```js
  import {ComponentAnnotation as Component, ViewAnnotation as View} from 'angular2/angular2';
```





Otherwise, your Angular code will remain unchanged.

## Which should you use?

Decorators are the default, and the most fun, but also offer more flexibility, and therefore more scope for screw-ups. If you work in a bank, or you don't trust your co-workers, use annotations. Otherwise, you should probably use decorators.

## Further reading

* <a href="http://blog.wolksoftware.com/decorators-reflection-javascript-typescript" target="_blank">Decorators & metadata reflection in TypeScript: From Novice to Expert</a>
