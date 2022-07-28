---
  title: "Introduction to Flux - React Exercise"
  section: "react"
  exercise: "flux"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        # Flux
  
        TODO: Read this: <https://facebook.github.io/flux/docs/overview.html>
        TODO: Read about the dispatcher: <https://github.com/facebook/flux/blob/master/dist/Flux.js>
  
        Flux is not a library, but a pattern.
  
        It's also not a new thing that Facebook invented. Rather it's a buzzword for an good old pattern that many of us have been using for years.
  
        ## Flux is an **Observer pattern**.
  
        Assume we have two objects, X and Y. When X changes, we want Y to change with it. There are two ways to do this:
  
        ## Declarative: X updates, then calls a method on Y.
  
      :ruby
        code = <<-CODE
        const X = {
          doSomething: function() {
            this.a = 12;
            y.doSomethingElse(this.a)
          }
        }
  
        const Y = {
          doSomethingElse: function(a) {
            this.a = a;
          }
        }
        CODE
      =code(code)
  
      :markdown
  
        This is initially simple, but experience shows us that ultimately we have a problem because we have tightly coupled X to Y. If we want to add Z, we now need to update X.
  
        Now imagine we have hundreds of things changing in the DOM. Whenever we add a component, we need to find all the things that might update it and modify them. Imagine that Z needs to respond to changes in X and Y. Everything knows about everything else. This road leads to **spaghetti**.
  
        ## Observer Pattern: X triggers an event. Y is listening (Flux)
  
        In an observer pattern, when X updates, it triggers an event. Y subscribes to that event. When the event is triggered, the method on Y gets called.
  
        This makes our X slightly more complex initially (though we can fix this with a library or a prototype).
  
      :ruby
        code = <<-CODE
        const X = {
          doSomething: function() {
            const a = 12
            this.a = a;
            this.fire(a);
          },
          this.observers: [],
          this.subscribe: function(fn) {
            this.observers.push(fn);
          },
          this.fire: function(data) {
            this.observers.forEach(function(fn) {
              fn(data);
            })
          }
        }
  
        const Y = {
          init: function() {
            X.subscribe(Y.doSomethingElse)
          }
          doSomethingElse: function(a) {
            Y.a = a;
          }
        }
        CODE
      =code(code)
  
      :markdown
  
        The observer pattern allows us to decouple X from Y. It makes it much easier to extend because if we want to make Z respond to X, we now only need to listen to it.
  
      :ruby
        code = <<-CODE
        const Z = {
          init: function() {
            X.subscribe(Z.doSomethingElse)
          }
          doMoreThings: function(a) {
            Z.a = a;
          }
        }
        CODE
      =code(code)
  
      :markdown
  
        Initially we have written more code, but ultimately we have a more scalable, decoupled architecture.
  
        ## One-way data flow
  
        Facebook people often talk about "one-way" data flow when talking about Flux. This simply means that the event is triggered on one element, and listened to by the other. Data flows from X to Y via the event, rather than from X to Y and back to X again, as would be the case if X called a method on Y and got the return value.
  
        ## Flux in MVC
  
        To put this into the context of MVC:
  
        1. A user types in a form. The View is watching the form for a change event.
        2. The View fires an event notifying everyone that its state has changed.
        3. The Model is watching the View. When the event fires it updates itself and triggers another event to say that it has changed.
        4. Another View is listening to the model. It updates itself in response.
  
        So you see we have views listening to models, models listening to views. Models listening to other models. Data flows from component to component via events. Each transaction is uni-directional.
  
        ## Cycles
  
        One way data flow does not preclude cycles.
  
        ## Further Reading
  
        <http://blog.andrewray.me/reactjs-for-stupid-people/>
  