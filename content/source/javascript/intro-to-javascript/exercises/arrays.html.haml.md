---
  title: "Arrays"
  section: "javascript"
  course: "intro-to-javascript"
  exercise: "arrays"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
        # Arrays #
  
        Mrs Potts is in trouble. She has been given the job of making Pizza's for the staff room Pizza Party. The head wants cheese and tomato, but the deputy head wants 5 cheese, pepperoni, mushroom and ham. How can she represent all these ingredients in a JavaScript friendly fashion? It's keeping her awake at night.
  
        Thankfully, we can rescue Mrs Potts using Arrays. If a variable is like a bucket, an array is like a rack of buckets, each with a label on it. We can add as many buckets to the rack as we like, and we can put any labels we like on the buckets.
  
  
        ## Making an Array ##
  
        The simplest way to make an array is to declare it, like so:
  
  
      :ruby
        code = <<-CODE
        const toppings = [ ];
        CODE
      =code(code)
  
      :markdown
  
        We use square brackets to define an array. This is an empty array.
  
  
  
        ## Putting things into an array ##
  
        If we like we can put some things in it:
  
  
      :ruby
        code = <<-CODE
        const toppings = ["ham", "cheese", "parmesan"]
        CODE
      =code(code)
  
      :markdown
  
        We now have an array containing 3 ingredients. It's a rack of 3 buckets.
  
        ## Finding things in an array ##
  
        Because we haven't declared any bucket names, Javascript has done it for us by giving each bucket a number. This is subtly different to other languages, do take note.
  
        Let's take pull out a bucket:
  
  
      :ruby
        code = <<-CODE
        const toppings = ["ham", "cheese", "parmesan"]
        alert( toppings[1] );
        CODE
      =code(code)
  
      :markdown
  
        This will alert the string "cheese". If we want "ham", we need the zeroth bucket, like so:
  
  
      :ruby
        code = <<-CODE
        alert( toppings[0] );
        CODE
      =code(code)
  
      :markdown
  
        ## Making Buckets ##
  
        What if we want to store something at a particular point. Let's do this now:
  
  
      :ruby
        code = <<-CODE
        const toppings = ["ham", "cheese", "parmesan"];
        toppings[3] = "little tiny cherry tomatoes";
        CODE
      =code(code)
  
      :markdown
  
        Here we have put another value in toppings, this time in bucket number 3.
  
        We can verify that our array is now longer using toppings.length. The dot operator is to do with object orientation, which we will cover later.
  
  
      :ruby
        code = <<-CODE
        alert(toppings.length)
        CODE
      =code(code)
  
      :markdown
  
        ...will output the number 4.
  
        ## Arrays in JavaScript are a little bit different ##
  
        JavaScript arrays are different to arrays in most languages. In most languages, array elements are pointed to by a number. In JavaScript, you are free to use a number to point to an element in an array, but you can equally use a string.
  
        Arrays in JavaScript are actually same the datatype that many other languages call a hash table.
  
        ## Iterating over an array ##
  
        One of the most common things you will want to do with an array is to do something with each of it's values. We can use a for loop for this.
  
  
      :ruby
        code = <<-CODE
        const toppings = ["ham", "cheese", "parmesan"];
  
        for (i = 0; i < toppings.length; i++) {
          alert(toppings[i]);
        }
        CODE
      =code(code)
  
      :markdown
  
        Here we loop over each numbered bucket and output it's value. Note that this only works with sequentially ordered buckets. This is the most efficient way to iterate over an array.
  
  
    %section.exercise
      :markdown
        ## Exercise - Arrays
  
        If a variable is like a cup, an array is like a whole rack of cups.
  
        1. Create a function that receives array of pizza toppings. Use a for loop to loop over the array and alert each of the toppings in turn.
        2. Change your code so that instead of alerting the toppings, they are appended to a string. You'll need to create a string first outside the loop.
        3. Wrap your code up into a sandwich machine that accepts an array of toppings and returns a string representing the pizza.
  
    %section
      :markdown
  
        # For in
  
        The other common way to iterate over an array is using a for in loop, like so:
  
      :ruby
        code = <<-CODE
        for (let i in toppings) {
          alert(toppings[i]);
        }
        CODE
      =code(code)
  
      :markdown
  
        This works if our arrays are not sequential, so for example:
  
  
      :ruby
        code = <<-CODE
        const toppings = [];
        toppings[10] = "ham";
        toppings[45] = "cheese";
        toppings["happy kittens"] = "parmesan";
  
        for (let i in toppings) {
          alert(toppings[i]);
        }
        CODE
      =code(code)
  
    %section.exercise
      :markdown
        ## Exercise - Now to help Mrs Potts
  
        That's all very well and good, but what about poor Mrs Potts? Let's write some code that will let her make pizzas with any number of toppings.
  
        1. Write a make_pizza function that accepts an array of toppings.
        2. Put a loop in your function that loops over the toppings and makes a string to represent the pizza.
        3. Have your function return the string.
  
    %section
      :markdown
  
        ## Answers ##
  
        ### Now to help Mrs Potts ###
  
        Let's make pizza.
  
        You should have correctly identified that we needed a loop. Here I am using a for loop. I've added a little extra code to add ampersands between the toppings.
  
  
      :ruby
        code = <<-CODE
        var make_pizza = function(toppings) {
          var pizza = ""
          for (i = 0; i < toppings.length; i++) {
            pizza = pizza + toppings[i] + " ";
            if (i < toppings.length - 1) {
              pizza += "& ";
            }
          }
          pizza += "pizza";
          return pizza;
        }
  
        alert( make_pizza( ["ham", "cheese", "parmesan"] ) );
        CODE
      =code(code)
  
      :markdown
  