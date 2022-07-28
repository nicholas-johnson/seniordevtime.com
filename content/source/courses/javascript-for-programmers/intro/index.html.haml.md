%article
    %section
      :markdown
  
        # Hello JavaScript
  
        ## Downloads
  
        * [Demo code from the board](https://www.dropbox.com/sh/y4fmkkmivrgtt5d/AAAO8lt2DNdM-gXj5pRzvTAna?dl=1)
  
        ## Executing JavaScript
  
        We execute JavaScript in a browser by linking to it. with a script tag, like so:
  
      :ruby
        code = <<-CODE
        <!DOCTYPE html>
        <html>
        <head>
          <script src="script.js"></script>
        </head>
        <body>
  
        </body>
        </html>
        CODE
      =code(code, :html)
  
      :markdown
  
  
        Typically we link to an external file, though we can include JavaScript directly between the <script></script> tags.
  
    %section.exercise
      :markdown
        ## Exercise - Hello World
  
        1. Create a folder in which to work.
        2. Create a new HTML file in a text editor. Call it index.html.
        3. Create a JavaScript file in a text editor. Call it script.js.
        4. Put an alert in the script file, like this: alert('Hello world');
        5. Use a script tag to link the JavaScript file into the HTML file
        6. Open the HTML file in a browser. See the alert?
        7. Extend the code so it pops up two alerts.
  
  
    %section
      :markdown
        # Variables
  
        Variables in JavaScript are global by default. This is because JavaScript is designed to be easy for non-programmers to use, and non-programmers might not understand about variable scope.
  
        As a real programmer though you should always initialize your variables correctly using the var keyword:
  
      :ruby
        code = <<-CODE
        var a; // creates the variable in the current scope
        a = 12; // stores a value in the variable
        CODE
      =code(code)
  
      :markdown
  
        You can create and assign a variable in the same line:
  
      :ruby
        code = <<-CODE
        var a = 12;
        CODE
      =code(code)
  
      :markdown
  
        ## Single Global Scope
  
        JavaScript has a single global scope which any script can write to. You should avoid creating global variables wherever possible, or sooner or later you will get a conflict.
  
        You may have multiple scripts on the page. Some of these might be advertiser scripts which you don't control. Avoid putting variables in this messy space wherever possible.
  
        The var keyword creates a local variable, local to the current function. **Always remember your var keyword.** We will look later at additional ways to keep variables private with functions, closure and objects.
  
        ## Variables a fully Polymorphic
  
        Variables are fully polymorphic, you can store anything you like in any variable, there is no type checking. JavaScript is weekly typed.
  
      :ruby
        code = <<-CODE
        var a;
  
        a = 12;
        a = "Hello JavaScript!";
        CODE
      =code(code)
  
      :markdown
  
        This is different to a language like Java where variables can only store one type of thing.
  
        Having weekly typed variables is appropriate for JavaScript. It allows our scripts to be much shorter as we don't have to write any code to get around the type system. Shorter scripts means faster downloads.
  
        However weak typing makes it harder for large teams to work together, and it makes it hard for an IDE to do code completion. It's a trade off.
  
  
    %section
      :markdown
  
        # Strings
  
        Strings in JavaScript are arrays of characters. You define them using single or double quotes:
  
      :ruby
        code = <<-CODE
        "Hi there";
        'Hi there';
        CODE
      =code(code)
  
      :markdown
  
        Double quoted strings allow escape characters. Single quoted strings are literal:
  
      :ruby
        code = <<-CODE
        "Hi \\n "there";
        CODE
      =code(code)
  
      :markdown
  
        You should prefer single quoted strings unless you need escape characters as they are slightly more performant.
  
        ## Concatenation
  
        You can concatenate strings using the + character:
  
      :ruby
        code = <<-CODE
        "Hello " + "There";
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
  
        You can replace a value in a string using the replace function:
  
      :ruby
        code = <<-CODE
        "Hello".replace('e', 'a');
        // "Hallo"
        CODE
      =code(code)
  
      :markdown
  
        You can also use a regular expression:
  
      :ruby
        code = <<-CODE
        'Hello'.replace(/l/g, 'w');
        // "Hewwow"
        CODE
      =code(code)
  
    %section.exercise
      :markdown
        ## Exercise - String Concatenation
  
        1. Create a variable called greeting. Store the value 'hello' in it.
        2. Create a variable called name. Store the value 'world' in it.
        3. Use your variables to alert "hello world"
        4. Use a couple of regex to change the output to "heyyy wyryd"
  
    %section
      :markdown
  
        # Numbers
  
        All numbers in JavaScript are floating point. There are no integers. This keeps things simple for new developers, but you need to be aware of this if you are writing code to deal with financial transactions.
  
        Typically it's not an issue.
  
        ## Conversion
  
        Convert a string to a number using parseInt or parseFloat:
  
      :ruby
        code = <<-CODE
        parseInt("123");
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
        # Conditionals
  
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
        In most languages == (double equals) means equal to. In JavaScript === (triple equals) means exactly equals to and == means equal to with type casting.
  
        Type casting is fiddly stuff, and often behaves in unexpected ways. Good JavaScript programmers generally avoid ==.
  
        You should use ===.
  
    %section.exercise
      :markdown
  
        ## Exercise - Conditional logic
  
        1. Create a little program that tells you if it's the morning, afternoon or night. You can get the hour of the day something like this:
  
  
      :ruby
        code = <<-CODE
        // returns a number between 0 and 24
        new Date().getHours();
        CODE
      =code(code, :javascript)
  
  
    %section
      :markdown
        # Arrays and Loops
  
        JavaScript comes with an array of looping constructs. We also have functional style loops which we'll get to soon.
  
        ## Arrays
  
        We can declare an array using the square bracket syntax, like this:
  
      :ruby
        code = <<-CODE
        var a = ["cheese", "ham", "toast"];
        CODE
      =code(code)
  
      :markdown
  
        ## Arrays are polymorphic
  
        Arrays are fully polymorphic. You can store anything in them:
  
      :ruby
        code = <<-CODE
        var a = [1, "ham", new Date()];
        CODE
      =code(code)
  
      :markdown
  
        ## Get the length with .length()
  
      :ruby
        code = <<-CODE
        a = [3,6,9]
        a.length // 3
        a[a.length] // 9
        CODE
      =code(code)
  
      :markdown
  
        ## Arrays are not arrays
  
        Arrays in JavaScript are not like arrays in other languages. They are in fact associative arrays, sometimes called hashmaps or hashes.
  
        They have numerical keys associated with arbitrary values.
  
        This means we can create gappy arrays without filling our computer's memory:
  
      :ruby
        code = <<-CODE
        var a = [];
        a[0] = 12;
        a[10000000] = 13;
        alert(a[10]); // undefined
        CODE
      =code(code)
  
      :markdown
  
        However, don't try to alert the array, or the browser will convert it to a very long string.
  
        You can also store a value in an array with a non-numerical key:
  
      :ruby
        code = <<-CODE
        var a = ["cheese", "ham", "toast"];
        a['condiment'] = 'ketchup';
        CODE
      =code(code)
  
      :markdown
  
        ## While Loops
  
        A while loop will keep going while some condition is true. For example:
  
      :ruby
        code = <<-CODE
        var sandwichesMade = 0;
        while (sandwichesMade < 5) {
          alert("Making Sandwich: " + sandwichesMade);
          sandwichesMade = sandwichesMade + 1;
        }
        CODE
      =code(code)
  
      :markdown
  
        ## For Loop
  
        A for loop is the most efficient type of loop in JavaScript. It looks very similar to classical languages such as C or Java.
  
      :ruby
        code = <<-CODE
        people = ['dave', 'jon', 'mikey'];
        for (var i = 0; i < a.length; i++) {
          alert("Making Sandwich for: " + people[i]);
        }
        CODE
      =code(code)
  
      :markdown
  
        ## For in loop
  
        We also have a for in loop. This is useful for iterating over arrays with non-numeric keys:
  
      :ruby
        code = <<-CODE
        a = [];
        a[0] = "Hello";
        a['name'] = "Dave"
        for (i in a) {
          alert(a[i]);
        }
        CODE
      =code(code)
  
      :markdown
  
    %section.exercise
      :markdown
  
        ## Countdown Exercise
  
        1. Create an html file and linked javascript file.
        2. Use the Alert function to alert the numbers from 10 down to zero.
  
  
    %section.exercise
      :markdown
  
        ## Iteration Exercise
  
        Assume I have an array with non-numeric keys like this:
  
      :ruby
        code = <<-CODE
        var petshop = []
        petshop['cats'] = 12;
        petshop['dogs'] = 9;
        petshop['mice'] = 'many';
        CODE
      =code(code)
  
      :markdown
  
        1. Use a for in loop to iterate over this array.
        2. Alert out the animal type and quantity for each animal in turn.
  
  
    %section.exercise
      :markdown
  
        ## Pizza Exercise
  
        1. Create an array of pizza toppings.
        2. Use a for loop to iterate over it.
        3. Output a string of the form: "A tasty pizza with ham, cheese and egg"
  