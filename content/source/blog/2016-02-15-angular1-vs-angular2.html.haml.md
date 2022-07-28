---
  title: Angular 1 vs. Angular 2
  tags: javascript, angular
  layout: 'blog'
  ---
  :markdown
    Angular 1 and Angular 2 are philosophically different.
  
    ## Angular 1
  
    Angular 1 is at heart a DOM compiler. We write HTML, and the Angular compiler takes care of compiling it into a web application.
  
    It was originally designed to allow designers to create web applications without writing any code, and you can actually build some pretty complex applications without any JavaScript at all (other than angular.js)
  
    If we want extra behaviour, we extend the compiler by adding more directives.
  
    The template drives our app. The HTML is our wiring.
  
    Anyone with simple HTML skills can create a simple web application. It's an exercise in democracy.
  
    ## Angular 1 gets bigger
  
    Over time Angular 1 was used to create larger and larger applications. We started arranging our code into components. We repurposed directives to make them serve as web components, then used isolate scope to separate them one from another.
  
    This humble, elegant, beautiful DOM compiler was twisted and repurposed into something it was never meant to be.
  
    ## Angular 2
  
    Angular 2 is the logical endpoint of this transformation. It is no longer a DOM compiler. Instead, it's an implementation of web components.
  
    We create components in JavaScript. Each component contains everything it needs to function. All the logic, data, behaviour and templates for a particular page element are balled up into components (although you can still use external templates if you wish)
  
    We create a tree of components. A root component (typically the app) contains child components (e.g. a header, sidebar, list of cats, etc.)
  
    The HTML is no longer in the driving seat. In fact our HTML page may be almost blank. All the templates belong in the components.
  
    The code is no longer readily accessible to a designer with simple HTML/CSS skills. Building a web app is once again a job for a hardcore JavaScripter.
  
    ## Upshot.
  
    I liked Angular 1. I like Angular 2. They represent different ways of thinking about what JavaScript should be.
  
    Angular 1 attempted to democratise web application development, allowing anyone with simple HTML skills to build a web application at the cost of a complex core. Conversely, Angular 2 puts the power back into the hands of the coder, with the application of hardcore design patterns and rigour that will be beyond most HTML designers.
  
    Both are acceptable approaches. I half wish they could co-exist under separate names.
  
    Angular 2 is the successor of Angular 1, but it is not an iterative change. It is a philosophical groundswell. A new way of doing things.
  
    Onwards and upwards.
  