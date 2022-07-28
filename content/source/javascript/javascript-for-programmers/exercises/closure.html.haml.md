---
  title: "JavaScript Closure"
  section: "javascript"
  course: "javascript-for-programmers"
  exercise: "closure"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
        # JavaScript Closure
  
        Closure is one of those things that looks hard, but it's actually really simple once you understand it. It works like this:
  
        1. Functions are objects and can be declared anywhere.
        2. If I declare a function within another function, the inner function has access to the local variables of the outer function.
        3. Normally when a function exits, all it's local variables are destroyed, but...
        4. If I hang on to the inner function in some way, the local variables of the outer function are still needed by the inner function.
        5. They are still in scope, so they are not garbage collected.
  
        ## For example
  
      :ruby
        code = <<-CODE
        var outer = () => {
          let a = "A local variable";
          let inner = function() {
            console.log(a)
          }
          return inner;
        }
        const returnedFnc = outer();
        returnedFnc();
        CODE
      =code(code)
  
      :markdown
  
        This is a function that returns another function. When I call `outer` it makes two local variables, `a` which holds the string "A local variable", and `inner` which points to another function. We then return inner, and assign it to the global variable `returnedFnc`.
  
        The key thing to note here, is that, when I call `returnedFnc`, the local variable `a` is no longer in scope, and yet the code still works. This is because the variable `a` was in scope when I first defined the function `inner`.
  
        Closure simply means that all the local variables that were in scope when the function was declared continue to be in scope for as long as that function exists.
  
    %section.exercise
      :markdown
        ## Exercise - Watch a Video
  
        This is a tricky thing to explain in words, so I made a video explaining it in code. In the first part of this video, I'll explain what closure is, and in the second half, I'll show you three places where you're probably already using it.
  
      = partial :"/layouts/youtube", locals: {id: "2cRjcXwsG0I"}
  
      :markdown
        For bonus points, feel free to leave a comment and say hello. I always try to reply!
  
    %section
      :markdown
  
        ## Why would you want this?
  
        ### 1. Event Handlers
  
        JavaScript is asynchronous. This means that events happen at unpredictable times. Network events complete, someone connects to a server, a user clicks a button, submits a form or moves a mouse. 
        
        We want to set up functions to handle these events, but these functions will be called later. The only way this is possible is if these functions bring their call-stack with them.
        
        You'll have noticed in the video I created a function to handle the cat click. This function was defined when the code first ran, but it was run when I clicked on the cat -- and yet it still worked. All the local variables that were needed to make it work were still in scope for the event handler.
  
        ### 2. Self Executing Functions a.k.a Modules
  
        We can convert our code into an Instantly Invoked Function Expression (IIFE) by wrapping it in braces and calling it right away. The function will be called and local variables inside will remain private. Only the published function will be available outside the closure.
  
        In the old days we did this by hand. Nowadays, we have formalised this pattern into CommonJS modules or ES6 Modules, and we have tooling like Webpack or Rollup to do the wrapping for us.
  
        Here is an IIFE. Notice the braces at the end of the function? This is a function that runs immediately, creates a closure, then appends a function called inner to a global `modules` store in the parent scope. As long as `modules` persists, `inner` will persist, and will continue to have access to the variable `a`
  
      :ruby
        code = <<-CODE
  
        const modules = {}
  
        (function() {
          var a = "A Local variable"
          var inner = function() {
            console.log(a)
          }
          modules.inner = inner
        })()
  
        modules.inner();
        CODE
      =code(code)
  
  
    %section.exercise
      :markdown
  
        ## Exercise - Guess the output
  
        For each of the following, try to work out what the output will be. Run the code in the browser console to check your answer.
  
        ### 1.
  
      :ruby
        code = <<-CODE
        var a = 12;
        (function() {
          console.log(a);
        })();
        CODE
      =code(code)
  
      :markdown
  
        ### 2.
  
      :ruby
        code = <<-CODE
        var a = 5;
        (function() {
          var a = 12;
          console.log(a);
        })();
        CODE
      =code(code)
  
      :markdown
  
        ### 3.
  
      :ruby
        code = <<-CODE
        var a = 10;
        var x = (function() {
          var a = 12;
          return (function() {
            console.log(a);
          });
        })();
  
        x();
        CODE
      =code(code)
  
      :markdown
  
        ### 4.
  
      :ruby
        code = <<-CODE
        var a = 10;
        var x = (function() {
          var y = function() {
            var a = 12;
          };
          return function() {
            console.log(a);
          }
        })();
  
        x();
        CODE
      =code(code)
  
      :markdown
  
  
        ### 5.
  
      :ruby
        code = <<-CODE
        var a = 10;
        var x = (function() {
          (function() {
            a = 12; // <<< look carefully at this line.
          })();
          return (function() {
            console.log(a);
          });
        })();
  
        x();
        CODE
      =code(code)
  
      :markdown
  
        ### 6.
  
      :ruby
        code = <<-CODE
        var a = 10;
        (function() {
          var a = 15;
          window.x = function() {
            console.log(a);
          }
        })();
  
        x();
        CODE
      =code(code)
  
      :markdown
  
        ## Further Reading
  
        * [Read my post on "What is a closure" on Stack Overflow](http://stackoverflow.com/a/7464475/687677)
  
  
  -# %article
  
  -#   %section.exercise
  -#     :markdown
  
  -#       ## Exercise - Closure and the Sandwich Calculator
  
  -#       Mrs Potts the school dinner lady is tired of all the global sandwich variables getting under her feet and tripping her up all the time. She needs help cleaning her kitchen. Will you help her?
  
  -#       She would like it very much if you would build a sandwich machine for her, but wrap it in a closure so as to keep everything neat.
  
  -#       ### 1. Create a self executing function
  
  -#       like this:
  
  -#     :ruby
  -#       code = <<-CODE
  -#       (function() {
  
  -#       })();
  -#       CODE
  -#     =code(code)
  
  -#     :markdown
  
  -#       This will be our closure and will hold the sandwich machine, keeping all it's parts nicely together.
  
  -#       ### 2. Create methods
  
  -#       Within the closure, create three little functions to add the bread, spread the soya margarine and add the jam. These little methods should use console.log to write a string representing their action to the DOM, e.g. "Now spreading the jam!"
  
  -#       Assign these functions to private variables, we don't want any of the children breaking in to the closure and spreading jam all over the place.
  
  -#       Now, also within the closure create a makeSandwich function which calls the three other methods in sequence, writing the sandwich instructions to the DOM.
  
  -#       ### 3. Smuggle makeSandwich out of the closure
  
  -#       We want Mrs Potts to be able to call makeSandwich, so we need to make a global variable which she can access from the kitchen, the news agent, a flight to Barbados, anywhere.
  
  -#       Assign makeSandwich to the global window object, thus smuggling it out of the closure. Refer back to the example if you need to remember how to do this.
  
  -#       ### 4. Call makeSandwich from outside the closure
  
  -#       You can now call makeSandwich from outside the closure. Because you've used onDomReady, you'll need to call it onDomReady.
  
  -#       If you've succeeded well done! This is super close to #{Time.now.year} best practice JavaScript!
  
  -#       ### Exercise Extension
  
  -#       If you'd like to take this a little further, you could make it receive an array of fillings, then output them in the sandwich.
  