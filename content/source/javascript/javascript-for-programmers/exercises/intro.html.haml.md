---
  title: "JavaScript Intro"
  section: "javascript"
  course: "javascript-for-programmers"
  exercise: "intro"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        # Hello JavaScript, you Handsome Little Thing
  
        JavaScript is a language with history and philosophy. Built in just two weeks, it has an incredibly pure heart. Unfortunately, 20 years of history has piled up on top of it, obscuring the beauty beneath layers of inconsistent APIs and anti-patterns. Clean away the loose earth and rubble though, and you can see the ancient wonder that lies beneath.
  
        JavaScript inherits from LISP via Scheme. It's a functional language, and not really related to Java at all. The name JavaScript is purely a marketing exercise. Java was the cool thing at the time. The Java like syntax is there to make JavaScript feel more accessible. Underneath however beats a heart of purest Scheme.
  
        ## Fully Object Oriented
  
        It's object oriented, but on it's own terms. All objects are hashmaps. Methods are just functions in a hashmap. Classes are optional. This actually works surprisingly well.
  
        ## Prototypical 
        
        Inheritance is directly from object to object, not class to class. Prototypical inheritance is a supertype of class based inheritance
      
        ## This
  
        In JavaScript, `this` is a variable, not a keyword. It's set at runtime whenever a function is called, so it can change. 
  
        ## Functional
  
        Functions are first class objects and can be passed around. Local variables are attributes of hidden scope objects, and persist as long as they are needed.
  
        ## It's Logical, but not the same as other languages 
  
        This can be confusing for people coming in from outside. JavaScript is radically internally consistent, but it is not like the other languages. This often leads people to think that JavaScript is "wrong" of "Broken". This is not true. JavaScript is luminous, it just does a few things differently.
  
        ## Executing JavaScript
  
        We have two ways of executing JavaScript. On the server we use NodeJS. In a browser we use a script tag, like so:
      
      :ruby
        code = <<-CODE
        <!DOCTYPE html>
        <html>
          <head>
            <script>
              console.log('Hello world')
            </script>
          </head>
          <body>
  
          </body>
        </html>
        CODE
      =code(code)
  
      :markdown
  
        Although we can write JavaScript between the script tags, we typically link to an external file, like so: 
        
      :ruby
        code = <<-CODE
        <script src="main.js"></script>
        CODE
      =code(code)
  
      :markdown
        Note that script tags are not self-closing, you need to explicitly close them or your page will disappear. 
  
        On the server we run JavaScript using NodeJS. Having downloaded Node from <https://nodejs.org>, you can simply run `node my_file.js` to run it locally in your console. More on this later.
  
    %section.exercise
      :markdown
        ## Exercise - Hello World
  
        The goal of this exercise is to get an environment set up and working.
  
        1. Create a folder in which to work.
        2. Create a new HTML file in a text editor. Call it index.html.
        3. Create a JavaScript file in a text editor. Call it main.js.
        4. Put an alert in the script file, like this: `alert('Hello world');``
        5. Use a script tag to link the JavaScript file into the HTML file
        6. Open the HTML file in a browser. See the alert?
        7. Extend the code so it pops up two alerts.
  
    %section
      :markdown
        # Variables
  
        We create variables using the let or const keywords. We also have the var keyword, which is older and slightly discouraged.
  
        ## Var, Let and Const 
  
        * `var` is the original variable declaration keyword. It has function level scope, which means that if you define it in a function, the variable will be available everywhere in that function. This behaviour is often surprising, so its use is often discouraged.
        * `let` is a replacement for `var`. It works the same, but it has block level scope. If you define it inside a for loop for example, it's only available inside that for loop.
        * `const` is the same as let, but once you declare the variable you can never change it. We actually use const a lot in JavaScript.
   
      :ruby
        code = <<-CODE
        let a; // creates the variable in the current scope
        a = 12; // stores a value in the variable
        const a = 12; // consts must be initialised when they are created
        CODE
      =code(code)
  
      :markdown
  
        ## Single Global Scope
  
        In the browser, JavaScript has a single global scope which any script can write to. You should avoid creating global variables wherever possible, or sooner or later you will get a conflict. This is generally a good idea in most languages, but is especially important in JavaScript, since JavaScript will allow you to overwrite any global variable with any value.
  
        You may have multiple scripts on the page. Some of these might be advertiser scripts which you don't control. Avoid putting variables in this messy space wherever possible.
  
        We have ways to work around this, specifically JavaScript modules which require a compilation step in most browsers, and strict mode which will stop you from doing this accidentally. More on this later.
  
        ## Variables are fully Polymorphic
  
        Variables are fully polymorphic, you can store anything you like in any variable, there is no type checking.
  
      :ruby
        code = <<-CODE
        let a;
  
        a = 12;
        a = "Hello JavaScript!";
        a = [1, 2, 'hulabaloo'];
        a = () => {}
        CODE
      =code(code)
  
      :markdown
  
        Having weekly typed variables is appropriate for JavaScript. JavaScript is designed to be super accessible to new coders, and even non-coders. As the language of the web, it is right that it should be democratic.
  
        However weak typing can make it harder for large teams to work together. If you find yourself working on a larger project, you might consider TypeScript. This is just JavaScript plus optional typing. More on this in another course.
  
    %section.exercise
      .question
        :markdown
          ## Exercise - Weeks in a lifetime
  
          Given three variables
  
        :ruby
          code = <<-CODE
          const daysInYear = 365.25;
          const daysInWeek = 7;
          const yearsInLifetime = 80;
          CODE
        =code(code)
  
        :markdown
  
          Calculate the average number of weeks in a human lifetime.
      
      .hiddenanswer 
  
        :markdown
  
          We can create a new variable and assign the calculation to it. 
  
        :ruby
          code = <<-CODE
          const weeksInALifetime = daysInYear / daysInWeek * yearsInLifetime
          CODE
        =code(code)
  
        :markdown
          The answer is 4174 by the way. What are you doing this week?
  
    %section
      :markdown
  
        # Strings
  
        Strings in JavaScript are arrays of characters. You define them using 'single quotes', "double quotes" or \`backticks\`:
  
        * Single and Double quoted strings are equivalent and can include escape characters, such as \\n which gives you a newline.
        * Backtick strings, sometimes called template strings, can be multiline and include code with the ${} syntax
  
      :ruby
        code = <<-CODE
        const doubleQuotedString = "Hi there";
  
        const singleQuotedString = 'Hi there';
        
        const backtickString = `
          Hi
          there
        `
        CODE
      =code(code)
  
      :markdown
  
        We can include escape characters in strings with a backslash. Here's a newline:
  
      :ruby
        code = <<-CODE
        "Hi \\n there";
        "Hi \\"there\\"";
        CODE
      =code(code)
  
      :markdown
  
        Backtick template strings can contain code includes, like this 
  
      :ruby
        code = <<-CODE
        const name = 'Dave'
        `I'm sorry ${name} I can't do that`
        CODE
      =code(code)
  
      :markdown
  
        This is especially useful for template strings. You might compose HTML as a string and later insert it into the DOM.
  
      :ruby
        code = <<-CODE
        const name = 'Dave';
        const template = `
          <p>
            I'm sorry ${name} 
            I can't do that
          </p>
        `;
  
        document.getElementById('root').innerHTML = template;
        
        CODE
      =code(code)
  
      :markdown
  
        Most styleguides prefer single quoted strings wherever possible because they use fewer pixels and therefore make your laptop weigh less in your bag. It's a small difference, but noticable.
  
        ## Concatenation
  
        You can concatenate strings using the + character:
  
      :ruby
        code = <<-CODE
        'Hello ' + 'There';
        CODE
      =code(code)
  
      :markdown
  
        ## Strings as arrays
  
        Strings work rather like arrays. Access a part of a string using the square brace syntax like so:
  
      :ruby
        code = <<-CODE
        "Hello there"[0]; // returns "H"
        CODE
      =code(code)
  
      :markdown
  
        Note that although strings look like arrays, they are not arrays, and don't give you the array API.
  
        ## Handy functions
  
        You can split a string into an array using the split function:
  
      :ruby
        code = <<-CODE
        "Hello".split('');
        // ['H', 'e', 'l', 'l', 'o']
        CODE
      =code(code)
  
      :markdown
  
        You can join the array back up again using the join function:
  
      :ruby
        code = <<-CODE
        ['H', 'e', 'l', 'l', 'o'].join('')
        // "Hello"
        CODE
      =code(code)
  
      :markdown
  
        If you want to reverse a string you can split it, reverse the array, then join them back together again:
  
      :ruby
        code = <<-CODE
  
        "Hello".split('').reverse().join('');
        // "olleH"
        CODE
      =code(code)
  
      :markdown
  
        You can replace a value in a string using the replace or replaceAll functions:
  
      :ruby
        code = <<-CODE
        "Hello".replaceAll('l', 'w');
        // "Hewwo"
        CODE
      =code(code)
  
      :markdown
  
        You can also use a regular expression:
  
      :ruby
        code = <<-CODE
        'Hello'.replace(/l/g, 'w');
        // "Hewwo"
        CODE
      =code(code)
  
    %section.exercise
      :markdown
        ## Exercise - String Concatenation
  
        1. Create a variable called greeting. Store the value 'hello' in it.
        2. Create a variable called name. Store the value 'world' in it.
        3. Use your variables to alert "hello world".
        4. Use a couple of regex to change the output to "he110 w0r1d"
        5. Use a couple more functions to reverse the result. A coding device! Write the reverse decoder.
  
    %section
      :markdown
  
        # Numbers
  
        All numbers in JavaScript are floating point. There are no integers. This keeps things simple for new developers, but you need to be aware of this if you are writing code to deal with financial transactions.
  
        Typically it's not an issue, but you do need to be aware of it, especially when dealing with large numbers. You'll want to represent long user ids as strings for example, not numbers.
  
        ## Conversion
  
        Convert a string to a number using parseInt or parseFloat:
  
      :ruby
        code = <<-CODE
        const myInt = parseInt("123");
        const myFloat = parseFloat("123.456");
        CODE
      =code(code)
  
      :markdown
  
        Convert a number to a string simply by concatenating it with a string, like so:
  
      :ruby
        code = <<-CODE
        "" + 123
        "123"
        CODE
      =code(code)
  
      :markdown
  
  
    %section
      :markdown
        # Conditionals and Boolean Algebra
  
        JavaScript comes with conditional statements, if, else if and else:
  
      :ruby
        code = <<-CODE
        var a = 12
  
        if (a > 12) {
          alert('a was greater');
        } else if (a < 12) {
          alert('a was smaller');
        } else {
          alert('a was 12');
        }
        CODE
      =code(code)
  
      :markdown
  
        ## == or ===?
        In most languages `==` (double equals) means equal to. In JavaScript `===` (triple equals) means *exactly equals* to and `==` means *equal to with type casting*.
  
        Type casting is fiddly stuff, and often behaves in unexpected ways. For example, it will try to see if a string can be cast into a number. 
        
      :ruby
        code = <<-CODE
        '1' == 1 // is true 
        '1' === 1 // is false
        CODE
      =code(code)
  
      :markdown
        
        It's there to help non-coders get work done, JavaScript is meant to be a democratic language. As a software engineer, you avoid this functionality and always use ===. We have linting tools that will enforce the use of ===, more on this later.
  
    %section.exercise
      :markdown
  
        ## Exercise - Conditional logic
  
        1. Create a little program that tells you if it's the morning, afternoon or night. You can get the hour of the day with `new Date().getHours()`:
  
    %section
      :markdown
        # Next - Functions 
  
        JavaScript is a functional language, which means that functions are a pertty big deal for us JavaScripters. Functions are first class objects in JavaScript and we treat them just like any other datatype.
        
        In the next section, we'll look how we can create them, pass them around, assign them to variables, nest them one inside the other, and generally get work done.
  