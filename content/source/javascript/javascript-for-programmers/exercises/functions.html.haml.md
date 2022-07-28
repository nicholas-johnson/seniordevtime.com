---
  title: "Functions"
  section: "javascript"
  course: "javascript-for-programmers"
  exercise: "functions"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
        # Functions
  
        In JavaScript all functions are objects. You can pass them around and store them in variables and arrays. You can pass them as parameters to other functions, or return them from other functions. Put them in an object and they become methods. This is code as data. We treat functions exactly as we would treat a string or a number.
  
        We have three ways of creating a function: 
        
        * Named functions
        * Lambda functions
        * ES6 fat arrows. 
        
        90% of the time, you're probably going to use fat arrows, so we'll look at those first.
  
        ## Fat Arrow Functions
  
        Fat arrows were introduced in the ES6 specification and are supported in all the browsers you probably care about.
  
        They look like this:
  
      :ruby
        code = <<-CODE
        const x = () => { 
          console.log('hey there')
        }
        CODE
      =code(code)
      :markdown
  
        Note that we are creating a local variable `x` here and assigning the function to it. **All functions are objects in JavaScript. We assign them to variables, we sling them around like any other data. This is one of the great strengths of JavaScript.**
  
        See the `=>`? That's the fat arrow that gives this syntax its name.
  
        ## Calling the function
  
        We can call this function like this:
  
      :ruby
        code = <<-CODE
        x();
        CODE
      =code(code)
      :markdown
  
        We just put braces after the variable. If the variable points to a function, that function will be called. If not, we'll get an error. JavaScript is loosly typed, so it's easy to screw up here. If you find this uncomfortable, you might like TypeScript which adds optional typing to the JavaScript syntax.
  
        ## Passing Parameters
  
        We can pass parameters to this function between the round braces, like this:
  
      :ruby
        code = <<-CODE
        const add = (a, b) => { 
          return a + b
        }
  
        console.log(add(12, 13))
        CODE
      =code(code)
      :markdown
  
        All values between the round braces become local variables inside the function body.
  
        ## Passing Exactly One Parameter
  
        If we have only one parameter, we can omit the braces, like so:
  
      :ruby
        code = <<-CODE
        const square = a => { 
          const result = a * a;
          return result;
        }
  
        console.log(square(12))
        CODE
      =code(code)
      :markdown
  
        ## One line functions that return a value
  
        In addition, if our function is exactly one line long, we can omit the curly braces and return statement. The evaluated value will be returned automatically.
  
      :ruby
        code = <<-CODE
        const square = a => a * a;
  
        console.log(square(12))
        CODE
      =code(code)
      :markdown
  
        ## Examples of ES6 Fat Arrow Functions =>
  
        Here are some examples of fat arrow functions:
  
      :ruby
        code = <<-CODE
        const square = a => a * a;
  
        const sum = (a, b) => a + b;
  
        const formattedDate = () => new Date().toLocaleString(
          'en-UK', {
            day: 'numeric', 
            month: 'long'
          }
        );
        formattedDate() // returns  7 February
  
        const getConnectionObject = (username, password) => ({
          username, password
        });
        getConnectionObject('dave', '123') // returns { username: 'dave', password: '123' }
        CODE
      =code(code)
  
  
      :markdown
        # ES5 functions
  
        The older function syntax is more verbose. We can create a named function like this. This will create a local variable called sayHello and assign the function to it.
  
      :ruby
        code = <<-CODE
        function sayHello() {
          alert('hello function!');
        }
        CODE
      =code(code)
  
      :markdown
  
        We can explicitly assign this function to a variable if we want:
  
      :ruby
        code = <<-CODE
        const sayHello = function() {
          alert('hello function!');
        }
        CODE
      =code(code)
  
      :markdown
  
        # Passing too many or too few parameters
  
        If you pass too many parameters, additional ones will be discarded.
  
      :ruby
        code = <<-CODE
        sayHello('Dave', 'Mike', 'Dan');
        // alerts 'hello Dave'
        CODE
      =code(code)
  
      :markdown
  
        If you pass too few, unassigned parameters will get the value undefined.
  
      :ruby
        code = <<-CODE
        sayHello();
        // alerts 'hello undefined'
        CODE
      =code(code)
  
      :markdown
  
        ## The Value of `this` in a fat arrow vs. an ES5 function
  
        In most circumstances, these two function specifications are identical, apart from one key thing, the value of a special variable called `this`.
  
        In JavaScript, `this` is a variable that is available inside a function that points to the function context. In ES5 functions, the value of `this` is set when the function is run. This means if you move a function from place to place, it can detect its own context and work differently. This is quite a useful feature in many circumstances.
  
        Fat arrow functions have a static value of `this`. It's set when the function is first defined. This is useful when you need to use a function as an event handler for example. You pass the function elsewhere, and it still continues to work.
  
        More on this in a later section.
  
    %section.exercise
      :markdown
        ## Exercise - A Sandwich Calculator
  
        1. Write a function called sandwich calculator. This should accept one value: bread
        2. The function should return the total number of possible sandwiches based on the amount of breads available. I need 2 breads to make one sandwich, so if there are 10 breads, it should return 5. Test your function with console.log.
        3. Extend your function so it accepts two values, bread and cheese.
        4. It takes two sbreads and one cheese to make a sandwich. The function should return the total number of possible sandwiches, so if there are breads, but only 1 cheese, it should return 1.
  
        Good luck!
  
      .hiddenanswer
  
  
        :ruby
          code = <<-CODE
          const sandwichCalculator = (bread, cheese) => {
            if (bread / 2 > cheese) return cheese; 
            return bread / 2;
          }
          CODE
        =code(code)
  
  