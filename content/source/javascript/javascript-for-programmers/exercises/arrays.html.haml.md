---
  title: "Arrays"
  section: "javascript"
  course: "javascript-for-programmers"
  exercise: "arrays"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
        # Arrays and Functional Loops
  
        JavaScript comes with a vast array of looping constructs.
  
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
        a[10000000000] = 13;
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
  
        We also have a for in loop. This is useful for iterating over gappy arrays with non-contiguous keys:
  
      :ruby
        code = <<-CODE
        a = [];
        a[0] = "Mikey";
        a[12] = "Davey"
        a[99] = "Stuey"
        for (i in a) {
          alert(a[i]);
        }
        CODE
      =code(code)
  
      :markdown
  
        ## forEach functional style loop
  
        We can also iterate using a functional style loop. A functional loop leaves the iteration implementation up to the object itself. We pass a function to tha array, then the array calls this function for each element. In classical languages we sometimes refer to this as an iterator pattern.
  
      :ruby
        code = <<-CODE
        [
          'Mikey',
          'Stuey'
          'Davey'
        ].forEach(function(el,i){
          console.log(el);
        });
        CODE
      =code(code)
  
      :markdown
  
    %section.exercise
      :markdown
  
        ## Exercise - Lunar Countdown
  
        Simple one here. Use the alert function to alert the numbers from 10 down to zero.
  
        When you reach zero, alert "Blast Off!"
  
        Remember to lint your code.
  
  
    %section.exercise
      :markdown
  
        ## Iterate with a for loop
  
        Assume I have an array of products in my shop, like this:
  
      :ruby
        code = <<-CODE
        products = ['Cats', 'Cheese', 'Spanners', 'Lemons', 'Candyfloss'];
        CODE
      =code(code)
  
      :markdown
        Use a for loop to iterate over this and console.log the products.
  
        ## Extension - Use a functional loop
  
        Repeat the above exercise, but use a functional loop.
  
    %section.exercise
      :markdown
  
        ## Pizza Exercise
  
        Create an array of pizza toppings, like this:
  
      :ruby
        code = <<-CODE
        var toppings = ['Cheese', 'Ham', 'Bits', 'Tomatoes'];
        CODE
      =code(code)
  
      :markdown
  
        Now write a function that we can call like this:
  
      :ruby
        code = <<-CODE
        makePizza(toppings);
        CODE
      =code(code)
  
      :markdown
  
        This function should return a string of the form:
  
      :ruby
        code = <<-CODE
        "A tasty pizza with Cheese and Ham and Bits and Tomatoes"
        CODE
      =code(code)
  
      :markdown
        You will find the [join function is very helpful here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
  
  
    %section.exercise
      :markdown
        ## Harder Exercise - Capitalise every element
  
        Write a short function to capitalise every element of the array.
  
        You must use the Array#map function and the String#uppercase function.
  
  
  
        * [Have a look at the map function here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)
  