---
  title: "This"
  section: "javascript"
  course: "javascript-for-programmers"
  exercise: "meaning-of-this"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
        # This
  
        This is a special variable in JavaScript. It is instantiated when you *call* a function,and it's value will change depending on how you call the function.
  
        ## This in the global scope
  
        If we open a console and simply type this, we get back "window".
  
      :ruby
        code = <<-CODE
        console.log(this)
        //Window
        CODE
      =code(code)
  
      :markdown
  
        The default value for this is the global scope. If we do nothing else, this will be the global scope.
  
        ## This within a function
  
        Likewise, the value of this within a global function will also be the global scope:
  
  
      :ruby
        code = <<-CODE
        var a = function() {
          console.log(this);
        }
        a();
        // Window
        CODE
      =code(code)
  
      :markdown
  
        ## This in an object
  
        If we are calling a function as an attribute of an object, this is set to that object. This is always the object we are operating inside of.
  
        The simple heuristic is that this is the object immediately preceding the dot.
  
      :ruby
        code = <<-CODE
        var car = {
          speedUp: function() {
            console.log(this);
          }
        }
        car.speedUp();
        // outputs the car
  
        var speedUp = car.speedUp;
        var speed = 0;
        speedUp();
        // outputs the global scope object Window
  
        var bus = {
          speedUp: car.speedUp
        }
        bus.speedUp();
        // outputs the bus
        CODE
      =code(code)
  
      :markdown
  
        ## This in a closure
  
        People often confuse this. The value of this is related to JavaScript as an object oriented language. It is not affected by the closure.
  
      :ruby
        code = <<-CODE
        var fnc = function() {
          var inner_fnc = function() {
            console.log(this)
          }
          inner_fnc();
        }
        fnc();
        // Window
  
        CODE
      =code(code)
  
      :markdown
  
        ## Setting this with apply
  
        We can also manually set the value of this to any value we like. This trick is employed by several frameworks to make your life easier.
  
        For example, jQuery will set the value of this to be the DOM node that received an event. Angular will set the value of this to the controller when you call a function on that controller's $scope object.
  
      :ruby
        code = <<-CODE
        var myFunc = function() {
          console.log(this);
        }
        var myObj = {
          test:"cucumbers"
        }
  
        myFunc.apply(myObj,[]);
        // outputs myObj
        CODE
      =code(code)
  
      :markdown
  
    %section.exercise
      :markdown
  
        ## Exercises - Guess the Value of This
  
        ### Question 1
  
      :ruby
        code = <<-CODE
        var x = function() {
          console.log(this);
        };
        x();
        CODE
      =code(code)
  
      :markdown
  
        ### Question 2
  
      :ruby
        code = <<-CODE
        var x = {
          y: function() {
            console.log(this);
          }
        }
        x.y();
        CODE
      =code(code)
  
      :markdown
  
        ### Question 3
  
      :ruby
        code = <<-CODE
        var x = function() {
          console.log(this);
        }
        var y = {
          x: x
        }
        y.x();
        CODE
      =code(code)
  
      :markdown
  
        ### Question 4
  
      :ruby
        code = <<-CODE
        var x = {
          y: function() {
            console.log(this);
          }
        };
        var a = {
          b:x.y
        };
        a.b();
        CODE
      =code(code)
  
      :markdown
  
  
        ### Question 5
  
      :ruby
        code = <<-CODE
        (function() {
          var x = function() {
            console.log(this);
          }
          x();
        })();
        CODE
      =code(code)
  
      :markdown
  
        ### Question 6
  
      :ruby
        code = <<-CODE
        (function() {
          var x = function() {
            console.log(this);
          }
          y = {};
          y.x = x;
          y.x();
        })();
        CODE
      =code(code)
  
      :markdown
  
        ### Question 7
  
      :ruby
        code = <<-CODE
        (function() {
          var x = function() {
            console.log(this);
          };
          x.apply({a:'b'});
        })();
        CODE
      =code(code)
  
      :markdown
  
        ### Question 8
  
      :ruby
        code = <<-CODE
        (function() {
          var Cat = function() {
            console.log(this);
          };
          var x = new Cat();
        })();
        CODE
      =code(code)
  
      :markdown
  
    %section.exercise
      :markdown
        ## Exercise - Fix the broken code
  
        The following code is broken. There are a few ways it could be fixed, we are going to fix it by storing the value of "this" in a variable which we will call "that".
  
      :ruby
        code = <<-CODE
        $(function() {
  
          var ui = {
            init: function() {
              $('a').click(function() {
                this.showSpinner();
                this.getContent();
              });
            },
            showSpinner: function() {
              console.log('spinning');
            },
            getContent: function() {
              console.log('getting that content');
            }
          }
          ui.init();
  
        });
        CODE
      =code(code)
  
      :markdown
  