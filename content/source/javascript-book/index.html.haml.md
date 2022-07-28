;;;
  "title": "JavaScript plus a dash of JQuery",
  "description": "JavaScript tutorial, step by step learn to program in JavaScript, designer to developer conversion course.",
  "canonical": "http://nicholasjohnson.com/javascript-book/"
  ;;;
  
  %article.book_cover
    %section
      %hgroup
        %h1 JavaScript plus a dash of JQuery
        %h2 A Sensible Introduction to Coding with JavaScript
  
      %p
        %em Won't somebody help Mrs Potts!?
  
      %p
        %strong By Nicholas Johnson
  
      %p Document version 1.0.1
  
      %p (c) 2014 Nicholas Johnson
  
      %img{ src: '/images/station2.jpg', alt: "" }
  
  %article
    %section
      :markdown
        # Hello There! #
  
        Hello there new programmer! If you've never programmed before, you're in for a treat because this is the section for you! In this section we're going to be covering the very basics of JavaScript from the ground up. These are the fundamentals that you will need to know to do the fancy schmancy stuff that you're probably quite keen to get started on shortly.
  
        ##Welcome new programmer, to a whole world of wonder...
  
        We'll be creating some fun little programs, making some sandwiches, and learning a little (or a lot) along the way.
  
        ## Not a new programmer? ##
  
        If you're already a ninja coder, you have a different set of challenges ahead of you. Javascript is rather different to what you might be used to. If you've used a language with C based syntax before, such as Java, you might feel lulled into a false sense of security by the similarities, but don't be fooled, under the hood, JavaScript is a different sort of animal.
  
        Do feel free to skim. You should check out functions though as these are a little different from what you may be used to. You might find you have to unlearn a few things along the way.
  
    %section
      :markdown
        # Exercise: Saying Hello to JavaScript
  
        This is the first exercise. In this exercise, we'll be saying hello to JavaScript. Of course the JavaScript won't actually hear us saying hello, unless we shout really loud...
  
        ## Create some HTML ##
  
        First of all we'll need to make a web page for our script to live in. Create the following ultra simple html document and save it in a folder. Call it hello.html.
  
  
      :ruby
        code = <<-CODE
        <!DOCTYPE html>
        <html>
          <head>
            <title>Hello JavaScript</title>
          </head>
          <body>
          </body>
        </html>
        CODE
      =code(code, :html)
  
      :markdown
  
        ## Write some Script ##
  
        Next create a document to contain your javascript. Save it in the same folder as your html and call it hello.js.
  
      :ruby
        code = <<-CODE
        alert("Hello JavaScript, your new best friend!");
        CODE
      =code(code)
  
      :markdown
  
  
        ## Hook them up ##
  
        Now we need to link the two together. In the head of your html document add a script tag like so:
  
  
      :ruby
        code = <<-CODE
        <script src="hello.js"></script>
        CODE
      =code(code, :html)
  
      :markdown
  
        _(If you're an XHTML type of person, you should note that the script tag cannot be self closing. It will break in IE.)_
  
        ## What do you get? ##
  
        Now open the page you just created in your web browser of choice. You should see a handy little box pop up welcoming you to JavaScript.
  
        **Tip. To open the file in a web browser, you can double click it in your exporer or finder window, or you can open Firefox and choose File -> open from the menu**
  
      %aside.box
        :markdown
          ## So what did we do here?
  
          1. We created an HTML and a JavaScript file, and linked them together.
          2. We used the built in alert function to pop up little box containing the text "Hello JavaScript, your new best friend!".
  
          Well done! You just created your first JavaScript program!
  
    %section
      :markdown
        # Don't string me along... #
  
        The next thing we should know about is strings. A piece of text in JavaScript is called a string. It's a string of letters all attached together. We can tell it's a string because it sits between quote marks like this:
  
  
      :ruby
        code = <<-CODE
        "I am a String"
        CODE
      =code(code)
  
      :markdown
  
        Everything between the quotes is part of the string and will be treated by JavaScript as a piece of text, and not part of your program.
  
        We can also use single quotes too like so:
  
  
      :ruby
        code = <<-CODE
        'I am a String'
        CODE
      =code(code)
  
      :markdown
  
        We can add strings together to make longer strings using the plus character:
  
  
      :ruby
        code = <<-CODE
        "Hi there " + "hello"
        CODE
      =code(code)
  
      :markdown
  
        If we need to know what's inside a string we can find out using an alert box like so:
  
  
      :ruby
        code = <<-CODE
        alert("Hi there " + "hello");
        CODE
      =code(code)
  
      :markdown
  
        One of the ways we can use strings is to help our program talk to our user. We saw this in the first example in exercise 1. We used an alert box to display the string "Hello JavaScript, your new best friend!". Strings have a whole host of uses that we'll come too soon.
  
        ## Exercise: Let's alert some strings ##
  
        Nice and simple this one. We're just going to create some strings and pop them up in little boxes.
  
        1. Put the phrase "Hello there JavaScript" in an alert box.
        2. Put the phrase "Hello there Java" + "Script" in an alert box.
  
        ## Answers ##
  
        1.
  
      :ruby
        code = <<-CODE
        alert("Hello there JavaScript");
        CODE
      =code(code)
  
      :markdown
  
        2.
  
      :ruby
        code = <<-CODE
        alert("Hello there Java" + "Script");
        CODE
      =code(code)
  
      :markdown
  
        Works? Fine.
  
        Doesn't work? First check your HTML. Make sure you are importing the right JavaScript file.
  
    %section#variables
      :markdown
        # Variables - buckets of fun #
  
        Imagine for a moment your program is a bit like a child on a beach making a sandcastle. The child is going to need lots of raw materials to make that castle, sand, little shiny rocks, pebbles, flags, water from the sea. The child is going to need somewhere to keep all of those raw materials. He's going to need some buckets.
  
        Variables are like JavaScript buckets. We can store things in them until we need them later, and we can use the bucket in place of the thing that's inside.
  
        We can tell JavaScript to make a variable just by putting something in one, like this:
  
  
      :ruby
        code = <<-CODE
        var greeting = "Hi there!";
        alert(greeting);
        CODE
      =code(code)
  
      :markdown
  
        We have put the string "Hi there!" inside a variable (bucket) called greeting.
  
        ## Changing the value of a variable ##
  
        We can also change the value of a variable any time, just by assigning a new value to it, so we could write:
  
  
      :ruby
        code = <<-CODE
        var name
        name = "Dave";
        alert(name);
        name = "Susan";
        alert(name);
        CODE
      =code(code)
  
      :markdown
  
        The variable called name contains first the string "Dave", and then the string "Susan". Dave is now renamed Susan.
  
        ## Variables are containers
  
        Imagine I have a basket full of kittens, now when I hand you that basket, I'm actually handing you a bunch of kittens. This is probably a pleasant experience for you.
  
        We can write this like this:
  
      :ruby
        code = <<-CODE
        var basket = "kittens";
        CODE
      =code(code)
  
      :markdown
  
        Now the basket can stand in wherever we previously needed kittens. For example, I could write:
  
      :ruby
        code = <<-CODE
        alert('kittens');
        CODE
      =code(code)
  
      :markdown
  
        or I could write
  
      :ruby
        code = <<-CODE
        alert(basket);
        CODE
      =code(code)
  
      :markdown
  
        Either way I would alert some kittens.
  
  
        ## Variable names ##
  
        Variables can be called almost anything you like. Hamster, pie or cheeseOnToast are all perfectly sound variable names. The one restriction is that you can't have any spaces or maths characters in them. You can't have a variable called "cheese on toast" for instance, or a variable called five+five. This would confuse JavaScript and give it a headache.
  
        Don't worry about giving your variables long and descriptive names. This is encouraged as it makes your code easy to read.
  
        We can call our variables anything we like but it makes our lives easier if we give them sensible English names or common abbreviations.
  
  
      %aside.box
        :markdown
          ## Naming Conventions
  
          If you want to look like a pro, use camel casing for your variable names. Camel casing means you use all lower case for the first word, then start subsequent words in upper case. For example:
  
          * toast
          * monkeyMoron
          * humpyTheCamel
  
          See, each variable name looks like a camel with it's head down low. The upper case letters are the humps.
  
      :markdown
  
        ## The Var Keyword ##
  
        Please note that when we first create a variable we must always remember to use the var keyword. If we forget it, __bad things will happen__. More on this when we get to Scope. For now, just remember to put them in.
  
    %section.exercise
      :markdown
  
        ## Exercise: Thanks for all the fish ##
  
        Variables are like little buckets in which we can store any information we like. Let's pop a string in one, and then pop it out in an alert box.
  
        1. Create an HTML document and linked JavaScript file.
        2. In your JavaScript file, create a variable called farewell and give it a value of "Thanks for all the fish"
        3. Pop your farewell variable up in an alert box.
  
        ### Answers
  
        To answer this question, first we create a variable, lets call it greeting, and assign a value of "Thanks for all the fish" to it. The variable greeting is a bucket that contains the string. We can now use it in place of the string, and alert it.
  
  
      :ruby
        code = <<-CODE
        var greeting = "Thanks for all the fish";
        alert(greeting);
        CODE
      =code(code)
  
    %section.exercise
      :markdown
  
  
        ## Exercise: What's for dinner... ##
  
        1. Create a variable called question. Give it a value of "What's for dinner?"
        2. Create a variable called answer. Give it a value of "Fish"
        3. Add the two variables together and put the result in an alert box.
  
        ### Answers ###
  
        Variables are buckets. We can use variables in place of the things they represent, so:
  
  
      :ruby
        code = <<-CODE
        var question = "What's for dinner?";
        var answer = "Fish";
        alert(question + answer);
        CODE
      =code(code)
  
      :markdown
  
        If we'd like to improve the output slightly we can separate the two with a space:
  
      :ruby
        code = <<-CODE
        alert(question + " " + answer);
        CODE
      =code(code)
  
  
  
  
  
    %section
      :markdown
        # Maths Operators - Doing Sums #
  
        JavaScript is great for maths. Lets say we need to know what 3 times 5 is. We can just ask JavaScript:
  
      :ruby
        code = <<-CODE
        alert(3*5);
        CODE
      =code(code)
  
      :markdown
  
        So handy! You'll never need a desk calculator again. We can also combine maths with our new found knowledge of variables like so:
  
      :ruby
        code = <<-CODE
        var slices = 12;
        var slicesNeededForASandwich = 2;
        var numberOfSandwiches = slices / slicesNeededForASandwich;
        alert(numberOfSandwiches);
        CODE
      =code(code)
  
      :markdown
  
        Note the that a forward slash (/) means division.
  
        ## Maths characters ##
  
        The following special characters are used when doing maths in Javascript.
  
        * Addition: +
        * Subtraction: -
        * Multiplication: *
        * Division: /
        * Test for greater than: >
        * Test for less than: <
        * Test for equal to: ===
        * Brackets can be used as in maths to separate a part of the equation. ( )
  
        There are a few more that you might need later, but these will do for now.
  
        ## A note on === ##
  
        To test for equality in JavaScript we use ===. For example:
  
      :ruby
        code = <<-CODE
        10 === 10;
        CODE
      =code(code)
  
      :markdown
  
        this will come out true, because 10 is exactly the same as 10. You can also use == but you shouldn't. == in JavaScript does type conversion. This means that:
  
  
      :ruby
        code = <<-CODE
        "10" == 10
        CODE
      =code(code)
  
      :markdown
  
        will come out true. The string is equal to the number. This causes all sorts of problems, and most of the time is best avoided.
  
        On to the exercises!
  
        ## Exercise: Sandwich Calculator
  
      %ol
        %li Create an HTML file and linked JavaScript file.
        %li
          Enter the following code:
  
          :ruby
            code = <<-CODE
            var slices = 12;
            var slicesNeededForASandwich = 2;
            var numberOfSandwiches = slices / slicesNeededForASandwich;
            alert(numberOfSandwiches);
            CODE
          =code(code)
  
        %li Find out how many sandwiches you can make?
        %li You have taken a large job lot of bread, 800 slices in total, and it's starting to go stale. Quickly adjust the code to find out how many sandwiches you can make with all that bread.
        %li You decide to make Club sandwiches for a swanky dinner, and you need 3 slices for each. Adjust the code to find out how many sandwiches you can make with those 800 slices?
  
      :markdown
        ### Answers
  
        If you have 800 slices, you need to change the value of the slices variable like so:
  
  
      :ruby
        code = <<-CODE
        var slices = 800;
        var slicesNeededForASandwich = 2;
        var numberOfSandwiches = slices / slicesNeededForASandwich;
        alert(numberOfSandwiches);
        CODE
      =code(code)
  
      :markdown
  
        To find out how many club sandwiches we need, all we need to do is change the value of slicesNeededForASandwich from 2 to 3. We will now get the correct answer.
  
      :ruby
        code = <<-CODE
        var slices = 800;
        var slicesNeededForASandwich = 3;
        var numberOfSandwiches = slices / slicesNeededForASandwich;
        alert(numberOfSandwiches);
        CODE
      =code(code)
  
      :markdown
  
        ## Exercise: Doing Sums ##
      %ol
        %li Create an HTML file and linked Javascript file.
        %li Output 5 - 2 using an alert box
        %li Output 6 * 9
        %li Output 6 * 9 + 4
        %li Output 6 * (9 + 4)
        %li Output (1 + 1) * (1 + 1)
  
      :markdown
        ### Answers ##
  
      %ol
        %li &nbsp;
        %li alert( 5 - 2 );
        %li alert( 6 * 9 );
        %li alert( 6 * 9 + 4 );
        %li alert( 6 * (9 + 4) );
        %li alert( (1 + 1) * (1 + 1) );
  
      :markdown
  
        You did it! Horray for maths! We need to do this sort of thing all the time in Javascript, whether we're working out the size of a page element, or writing a handy little VAT calculator for our online shopping cart.
  
        Now on to functions...
  
  
  
  
    %section
      :markdown
        # Functions - doing things more than once #
  
        Mrs. Potts is the school dinner lady. Today is the school trip, and it's her job to make sandwiches for all the children. She has to make a lot of sandwiches, and each one takes some work. The bus will be arriving soon and Mrs. Potts is worried she might not finish. Some of the children might not have enough food to eat. Hurry Mrs. Potts!
  
        To make a sandwich Mrs. Potts has to:
  
        1. Get some bread
        2. Spread the butter
        3. Spread the jam
        4. Cut off the crusts
        5. Put it in a little bag
  
        We could write a program to help her to this, it might look something like this:
  
  
      :ruby
        code = <<-CODE
        alert("Get bread");
        alert("Spread butter");
        alert("Spread jam");
        alert("Cut off crusts");
        alert("Put in a little bag");
        CODE
      =code(code)
  
      :markdown
  
        **Questions**
  
        1. Create an HTML file and linked JavaScript file.
        2. Enter the above program and run it. Help Mrs. Potts. The bus will be here soon. Time is running out!
  
        ## Who will help Mrs Potts? ##
  
        This is all very well, but Mrs. Potts has to make 40 sandwiches and we've only made one. To make 40 could take a lot of typing. What if there was a way to help her by wrapping up all the actions needed to make one sandwich into a single reusable function, something we could use over and over 40 times, 100 times even. Well...
  
        ## Wrapping it all up in a function ##
  
        Lets make a few changes to our program above.
  
  
      :ruby
        code = <<-CODE
        var makeSandwich = function() {
          alert("Get bread");
          alert("Spread the butter");
          alert("Spread the jam");
          alert("Cut off the crusts");
          alert("Put in a little bag");
        };
  
        makeSandwich();
        CODE
      =code(code)
  
      :markdown
  
        What have we done here? Well, you may have noticed that we've created a new variable called makeSandwich.
  
        The variables we have created so far have contained strings or numbers, see the section on variables if you need a refresher, but variables are buckets remember and they can hold any type of thing. In this case we have said that the makeSandwich variable should be equal to a new type of thing called a function.
  
        A function is a little ball of javascript, all wrapped up neatly so that we can use it again and again. After creating our function and assigning it to the makeSandwich variable, we can call it by writing:
  
  
      :ruby
        code = <<-CODE
        makeSandwich();
        CODE
      =code(code)
  
      :markdown
  
  
        The parenthesis (brackets) mean that we want to run the variable as a function. We can run the function as many times as we like. Just call makeSandwich() again and again, as many times as we need it.
  
      %aside.box
        :markdown
          ## Note that this is unusual.
  
          Most languages do not allow you to create a function and put it in a variable like this.
  
          Assigning functions to variables is one aspect of a programming paradigm called "functional programming". It is one of JavaScript's most powerful features, as you will soon come to understand.
  
      :markdown
  
        ## Exercise: Who will help Mrs. Potts?
  
        1. Create an HTML file and linked JavaScript file.
        2. Enter the code above carefully and run it.
        3. Add the line makeSandwich() again five times to help Mrs. Potts make five sandwiches. We're still a little way off...
  
        ## Marmite sandwiches - Passing Parameters ##
  
        This is all excellent, but oh dear, Mrs. Potts has just remembered that some of the children have asked for Marmite sandwiches because they are allergic to jam. Our function can only make jam. What will we do? Will the children still go hungry?
  
        What if there was a way to tell our function what filling we want? Thankfully there is using parameters. Let's change our program like so:
  
  
      :ruby
        code = <<-CODE
        var makeSandwich = function(filling) {
          alert("Get bread");
          alert("Spread the butter");
          alert("Spread the " + filling);
          alert("Cut off the crusts");
          alert("Put in a little bag");
        };
  
        makeSandwich("marmite");
        makeSandwich("jam");
        makeSandwich("squeezy cheez");
        CODE
      =code(code)
  
      :markdown
  
        See, we have changed our function and made it accept a parameter called filling. filling is a variable, a bucket. It is available anywhere inside the function **body**, that is between the {curly braces}. It can hold anything, even sandwich filling. We didt his when we wrote: var makeSandwich = function(filling).
  
        Further down in our code we call makeSandwich("marmite"); Here we are passing the **string "marmite"** to our function. It will be assigned to the variable called filling and will be available to our function when it runs.
  
        __Questions__
  
        1. Create an HTML file and linked JavaScript file.
        2. Enter the code above carefully and run it.
        3. Create a Crab Pate sandwich.
  
        ## Butter allergies - Passing Multiple Parameters ##
  
        Poor Mrs Potts. She's just remembered that some of the children are allergic to milk. If they eat butter they may go into anaphylactic shock.  She needs to make some of her sandwiches with margarine. Things keep getting worse and worse for Mrs Potts, she looks like she might cry. Fortunately, you are here to help her. We can extend our sandwich function to accept two parameters.
  
  
      :ruby
        code = <<-CODE
        var makeSandwich = function(filling, spread) {
          alert("Get bread");
          alert("Spread the " + spread);
          alert("Spread the " + filling);
          alert("Cut off the crusts");
          alert("Put in a little bag");
        };
  
        makeSandwich("marmite", "butter");
        makeSandwich("jam", "margerine");
        makeSandwich("squeezy cheez", "butter");
        CODE
      =code(code)
  
      :markdown
  
        Now we are passing in two parameters, one called filling and one called spread. Filling comes first, spread comes next. When we call the function, we pass in a filing, then a spread and those values get assigned to the filling and spread variables inside the **function body**, i.e. everywhere between the {curly braces}.
  
        __Questions__
  
        1. Create an HTML file and linked JavaScript file.
        2. Enter the code above carefully and run it.
        3. Create a tuna and sweetcorn sandwich with artisan linseed margarine.
        4. Some of the children need rye bread. Make the function accept another parameter: breadType and make some more sandwiches.
  
        ## Return Values - the Sandwich Machine ##
  
        So we have created a make sandwich function, and passed it some ingredients. We have control over our function.
  
        At the moment though, all our function does is bung the various stages of sandwich making up in alert boxes as it goes along. What if we don't want alert boxes, what if we want to output them to the console instead, or turn them into a web page? Mrs Potts doesn't like a fuss.
  
        It would be sort of handy if, instead of just alerting the sandwich stages, the makeSandwich function could make the sandwich, then just hand us the completed sandwich back, perhaps as a string, sort of like a sandwich machine. Then we could choose what to do with our sandwich, alert it, add it to a pile of other sandwiches, feed it to a child, etc...
  
        To do this, we need to understand about return values. When we use the return keyword in a function, the value that we ask to be returned is sent back out of the function.
  
      %aside.pullquote
        When we use the return keyword in a function, the value that we ask to be returned is sent back out of the function.
  
      :markdown
        **Observe:**
  
      :ruby
        code = <<-CODE
        var makeSandwich = function(filling) {
          return "A sandwich loving made with " + filling;
        };
  
        alert( makeSandwich("tofu mayonnaise") );
  
        CODE
      =code(code)
  
      :markdown
        See? Our make sandwich function now makes a sandwich and returns it.
  
        We sometimes call this __input, process and output__. It's as though we have made a sandwich machine. we pass it ingredients, it processes them into a sandwich (or a string in this case), and returns it to us.
  
        Note that we can use our sandwich machine anywhere where we might have used a string previously. JavaScript will see the function, execute it, get a string back, and then just act as though there was a string there all along.
  
        ## Exercise: A trickier sandwich
  
        1. Enter the code above and get it to run.
        2. Extend it so it takes 2 fillings, perhaps "tuna" and "falafel".
  
        ## Extra Difficult Exercise: involving stuff you haven't covered yet
  
        Here's a curve ball for Mrs Potts. Please ignore this question. Definitely don't try and do it yet. _(Tip, you'll need an if statement.)_
  
        1. Extend it so that it is possible to pass in either one or two fillings. The function should handle this by only outputting one filling if just one is passed in.
  
        ## Answers ##
  
  
      :ruby
        code = <<-CODE
        var makeSandwich = function() {
          alert("Get bread");
          alert("Spread the butter");
          alert("Spread the jam");
          alert("Cut off the crusts");
          alert("Put in a little bag");
        };
  
        makeSandwich();
        makeSandwich();
        makeSandwich();
        makeSandwich();
        makeSandwich();
        CODE
      =code(code)
  
      :markdown
  
        ### Marmite Sandwices - Passing Parameters ###
  
  
      :ruby
        code = <<-CODE
        var makeSandwich = function(filling) {
          alert("Get bread");
          alert("Spread the butter");
          alert("Spread the " + filling);
          alert("Cut off the crusts");
          alert("Put in a little bag");
        };
  
        makeSandwich("crab pate");
        CODE
      =code(code)
  
      :markdown
  
  
        ### Butter allergies - Passing Multiple Parameters ###
  
  
      :ruby
        code = <<-CODE
        var makeSandwich = function(filling, spread, breadType) {
          alert("Get" + breadType);
          alert("Spread the " + spread);
          alert("Spread the " + filling);
          alert("Cut off the crusts");
          alert("Put in a little bag");
        };
  
        makeSandwich("tuna and sweetcorn", "soya margarine", "rye bread");
        CODE
      =code(code)
  
      :markdown
  
        ### Return Values - The Sandwich Machine ###
  
        To solve this puzzle, we need to use an if statement. We can check to see if filling2 is present, and if it is, we can add it to the string.
  
  
      :ruby
        code = <<-CODE
        var makeSandwich = function(filling1, filling2) {
          var sandwich = "A sandwich with " + filling1;
          if (filling2) {
            sandwich += " and " + filling2;
          }
          return sandwich;
        };
        CODE
      =code(code)
  
      :markdown
  
        We can call this like so:
  
  
      :ruby
        code = <<-CODE
        alert( makeSandwich( "marmite", "cheese" ) );
        alert( makeSandwich( "marmite" ) );
        CODE
      =code(code)
  
      :markdown
  
        A handy feature of JavaScript is that if you don't pass in a parameter, it is set to be undefined. Undefined is a special value that a variable has before anything has been put in it. It's an empty bucket.
  
        One of the great things about undefined is that it's _falsey_. Falsey values evaluate to false, so we can call our makeSandwich function like this:
  
  
      :ruby
        code = <<-CODE
        alert( makeSandwich("butter", "marmite" ) );
        CODE
      =code(code)
  
      :markdown
  
        Filling2 is undefined, and so evaluates to false in the if statement. This is a very handy feature of JavaScript.
  
  
  
    %section
      :markdown
        # Flow Control - Do this, or else... #
  
        Our programs so far have been very nice, but quite linear. We can make sandwiches, but we can't decide whether or not we should be making sandwiches. Sometimes in our code we need to be able to be respond to things. We need to be able to say "what if?"
  
        ## Day into Night - Flow Control Exercise ##
  
        We do this using the if statement:
  
  
      :ruby
        code = <<-CODE
        var daytime = true;
        if (daytime) {
          alert("Nice day!");
        }
        CODE
      =code(code)
  
      :markdown
  
        In this example, daytime is a variable that contains a special value. The value is true. True means yes, absolutely, do it. The opposite of true is false. False means no, never, don't do it. The code between the curly braces will only run if daytime is true. It will not run if daytime is false.
  
        __Questions__
  
        1. Create an HTML file and linked Javascript file.
        2. Enter the code above and run it.
        3. Set the daytime to false and see what happens. Is that what you expected?
  
        ## Do this, or else ##
  
        Sometimes we want to do a different thing if we didn't do the first thing. We need an else statement. Thankfully, this is easy.
  
  
      :ruby
        code = <<-CODE
        var daytime = false;
        if (daytime) {
          alert("Nice day!");
        } else {
          alert("Nice night!");
        }
        CODE
      =code(code)
  
      :markdown
  
        Here the first block of code is run if daytime is true and the second block is run if daytime is false.
  
        __Questions__
  
        1. Create an HTML file and linked JavaScript file.
        2. Enter the code above and run it.
        3. Set the daytime variable to true and see what happens. Is that what you expected?
  
        ## Do this, or else do this, or else do this or else ##
  
        Sometimes we need more than 2 options. What if we wanted to say good evening and good morning too. We're going to need a little more information than just our true/false daytime variable. Let's create an hour variable to hold the hour of the day.
  
  
      :ruby
        code = <<-CODE
        var morning = true;
        var daytime = false;
        var nightime = false;
  
        if (morning) {
          alert("Good Morning!");
        } else if (daytime) {
          alert("Nice day!");
        } else if (nighttime){
          alert("Nice night!");
        } else {
          alert("I just don't know what time it is!");
        }
        CODE
      =code(code)
  
      :markdown
  
        Wow, that was a little longer, but it does seem to make sense. If morning is true it does the first bit of code, else if daytime is true it does the second bit of code, else if nighttime is true it does the third bit. If none of the above are true it does the last bit of code.
  
        __Questions__
  
        1. Create an HTML file and linked Javascript file.
        2. Enter the code above and run it.
        3. Set the nighttime variable to true and the daytime variable to false. What happens?
        4. Set all the variables to false, what happens?
        5. Set all the variables to true. What happens? Why?
        6. Add evening and midnight.
  
        ## An exciting foray into Booleans. What Ho! ##
  
        These values that we're using, true and false, have a special name. They are called Boolean values, named after the wonderful Victorian English mathematician George Boole who first described them. Boolean values are actually the basis for all computing. You may have heard it said that computers use ones and zeros, and it's true. Deep inside, computers are made of vast arrays of switches, which can be either on or off, one or zero, true or false.
  
      %figure
        %img{src: "/images/george-boole.jpg", alt:"George Boole"}
        %figcaption
          He looks like a nice sort of chap, a bit like Colin Firth.
  
      :markdown
  
        The simple operations we carry out on Boolean values, when combined in clever ways, let a computer do all the clever things it's able to do. When you move your mouse pointer, there's a whole cascade of little ones and zeroes bouncing around inside the chips and cables that you will never see.
  
        In the context of JavaScript, Booleans are useful in decision making. Should we do this or that? Should we let the user submit their shopping cart or not. Should this element be clickable or not. Lets have a look at what we can do.
  
  
  
        ## This and That ##
  
        One of the simplest things we can do with Booleans is the "and" operation. It looks like this:
  
  
      :ruby
        code = <<-CODE
        var daytime = true;
        var sunny = true;
        var canGoOut = (daytime && sunny);
        CODE
      =code(code)
  
      :markdown
  
        Here we set a variable called canGoOut. This variable will be true if both daytime and sunny are true.
  
        We can use this in a program like so:
  
  
  
      :ruby
        code = <<-CODE
        var daytime = true
        var sunny = true
        var canGoOut = (daytime && sunny);
        if (canGoOut) {
          alert("lets go out!")
        }
        CODE
      =code(code)
  
      :markdown
  
        or more simply
  
  
      :ruby
        code = <<-CODE
        var daytime = true
        var sunny = true
        if (daytime && sunny) {
          alert("lets go out!")
        }
        CODE
      =code(code)
  
      :markdown
  
        __Questions__
  
        1. Create an HTML file and linked Javascript file.
        2. Enter the daytime && sunny code above and run it.
        3. What happens if daytime is not true?
        4. What happens if sunny is not true?
  
  
  
        ## This OR That ##
  
        The second useful thing we can do with Booleans is or. Sometimes we want to be able to say "do something if this other thing is true, or if this second other thing is true. We say or in Javascript using the vertical bar character. For example:
  
  
      :ruby
        code = <<-CODE
        var iFancyIcecream = false;
        var youFancyIcecream = true;
        var buyIcecream = (iFancyIcecream || youFancyIcecream);
        CODE
      =code(code)
  
      :markdown
  
        We can use this in a program like this:
  
  
      :ruby
        code = <<-CODE
        var iFancyIcecream = false;
        var youFancyIcecream = true;
        if (iFancyIcecream || youFancyIcecream) {
          alert("I am just going to the shop now...");
        }
        CODE
      =code(code)
  
      :markdown
  
        __Questions__
  
        1. Create an HTML file and linked Javascript file.
        2. Enter the icecream code above and run it.
        3. What happens if I fancy icecream?
        4. What happens if you fancy icecream?
        5. What happens if neither of us fancies icecream?
  
        ## Not That! ##
  
        The last useful thing we can do with Booleans is Not. Sometimes we want something to happen if something is not true. For example we might want to display an error if someone has not filled in a field correctly. We say not! in JavaScript using an exclamation mark, like so:
  
      :ruby
        code = <<-CODE
        var filledInField = false
        if (!filledInField) {
          alert("Please fill in the field!");
        }
        CODE
      =code(code)
  
      :markdown
  
        __Questions__
  
        1. Create an HTML file and linked Javascript file.
        2. Enter the not that! code above and run it.
        3. What happens if the field is filled in?
  
        ## Equals this? ##
  
        So far and so esoteric. It's all very well setting Boolean values explicitly in our code, but for this to be useful we need to be able to be able to make Booleans from other values. Lets return to our timing example above. Lets say that have a variable called hour, and we want to determine if it's mid-day or not. We might do something like this:
  
      :ruby
        code = <<-CODE
        var hour = 12;
        var midday = (hour === 12);
        alert(midday);
        CODE
      =code(code)
  
      :markdown
  
        Here we're simply saying: if the hour variable is equal to 12, the midday variable is true. In JavaScript === means equal to.
  
      %aside.box
        :markdown
          ## == or ===?
          In most languages == (double equals) means equal to. In JavaScript === (triple equals) means exactly equals to and == means equal to with type casting.
  
          Type casting is fiddly stuff, and often behaves in unexpected ways. Good JavaScript programmers generally avoid ==.
  
          You should use ===.
  
      :markdown
  
        __Questions__
  
        1. Create an HTML file and linked JavaScript file.
        2. Enter the code above and run it.
        3. What is the value of midday?
  
        ## My dad is bigger than your dad ##
  
        We can do other mathematical operations to make Booleans. Here we do one thing if hour > 12 and another if hour is less than 12.
  
  
      :ruby
        code = <<-CODE
        var hour = 13;
        if (hour > 12) {
          alert("after midday");
        } else {
          alert("before midday");
        }
        CODE
      =code(code)
  
      :markdown
  
        We can combine Boolean operators too, for example:
  
  
      :ruby
        code = <<-CODE
        var hour = 13;
        if ((hour > 11) && (hour < 14)) {
          alert("you could have lunch now.");
        } else {
          alert("it isn't lunchtime.");
        }
        CODE
      =code(code)
  
      :markdown
  
        __Questions__
  
        1. Create an HTML file and linked Javascript file.
        2. Enter the code above and run it.
        3. What is the result?
        4. Use else if operators to create a sort of an alert clock that says different things at different times of day.
        5. You can use the following code to get the actual time of day:
  
      :ruby
        code = <<-CODE
        var hour = (new Date()).getHours();
        CODE
      =code(code)
  
      :markdown
  
        Hook your clock up to the actual hour of the day.
  
        __More Questions__
  
        1. Create a myDadSize variable
        2. Create a yourDadSize variable
        3. If my dad is bigger than your dad, alert this fact.
        4. If your dad is bigger than my dad, alert this also.
        5. If both dads are the same size, alert this fact also.
  
        ## Answers ##
  
        ### My dad is bigger than your dad ###
  
        The best way to tackle this is with an if / else if / else statement. There are 3 possible results, either one dad is bigger than the other, or they are the same.
  
  
      :ruby
        code = <<-CODE
        var myDadSize = 12;
        var yourDadSize = 13;
  
        if ( myDadSize > yourDadSize ) {
          alert("My dad is the biggest (of course).");
        } else if  ( myDadSize < yourDadSize ) {
          alert("Oh, your dad is the biggest.");
        } else{
          alert("Our dads are the same size");
        }
        CODE
      =code(code)
  
  
  
  
    %section#loops
      :markdown
        # Loops #
  
        So, we've learned most of the major things we need to know in order to program. We're nearly ready to create some cool stuff. There are just one more thing we need to know before we jump into section two. Loops.
  
        Remember Mrs. Potts and the poor starving children? I wonder what happened with that. Do you think the children were OK? I hope so. We helped Mrs. Potts a lot by giving her a makeSandwich function, but she still needs to call it a lot of times. What if there was an easy way for her to call the makeSandwich function 10 times, 100 times, a million times without writing one more line of code.
  
        Thankfully there is! Enter Loops!
  
  
  
        ## While Loops - Get them while you can! ##
  
        A while loop in JavaScript is a type of loop that will keep going while some condition is true. For example
  
  
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
  
        First we set the number of sandwiches we have made so far:
  
  
      :ruby
        code = <<-CODE
        var sandwichesMade = 0;
        CODE
      =code(code)
  
      :markdown
  
        Then we say to the Javascript engine
  
  
      :ruby
        code = <<-CODE
        while (sandwichesMade < 5) {
          //do something
        }
        CODE
      =code(code)
  
      :markdown
  
        This is the loop. It will go round until the condition sandwichesMade < 5 is not true any more.
  
        Inside the loop we have to remember to do this:
  
  
      :ruby
        code = <<-CODE
        sandwichesMade = sandwichesMade + 1;
        CODE
      =code(code)
  
      :markdown
  
        This increases the value of sandwichesMade. Without this, the loop will go around forever until the page times out.
  
  
      %aside.box
        :markdown
          ## // Comments in JavaScript
  
          A comment is a not to ourseles, or to a future developer. Commenting your code will help you later when you come to make changes. We write a JavaScript comment using  double forward slash like this:
  
        :ruby
          code = <<-CODE
            //This is a comment
          CODE
        =code(code)
  
        :markdown
          Comments are ignored by JavaScript, so we can write whatever we like in here.
  
  
      :markdown
  
        __Questions__
  
        1. Create an html file and linked javascript file.
        2. Enter the code in the previous section.
        3. Run it. What happens?
        4. Try to modify your code to make a javascript countdown. Start at 10 and count down to 0.
        5. Alert the string "Lift Off Mrs Potts!" when the countdown reaches zero.
  
        __More Questions__
  
        1. Create an html file and linked javascript file.
        2. Write a function called countdown that accepts a number parameter.
        3. When you call the function, it should alert the numbers down to zero, starting at the number passed to it.
  
        __Even More Questions__
  
        1. Try to write code that counts from zero to infinity, never stopping. You need a condition that always evaluates to true. Hmmm, what is always true?
  
        ## For Loops - for he's a jolly good fellow ##
  
        The other type of loop we need to know is the for loop. This type of loop is similar to the while loop, but we roll all the various different parts of it up into one line, like so:
  
  
      :ruby
        code = <<-CODE
        for (var sandwichesMade = 0; sandwichesMade < 5; sandwichesMade++) {
          alert("Making Sandwich: " + sandwichesMade);
        }
        CODE
      =code(code)
  
      :markdown
  
        This loop says. sandwichesMade starts at 0, the loop continues until sandwichesMade < 5, and at the end of each loop increase sandwichesMade by one.
  
  
      :ruby
        code = <<-CODE
        sandwichesMade++
        CODE
      =code(code)
  
      :markdown
  
        is just shorthand for add one to the sandwichesMade variable.
  
        __Questions__
  
        1. Create an html file and linked javascript file.
        2. Enter the code above.
        3. Run it. What happens?
  
  
        ## Answers ##
  
        ### While Loops - Get them while you can! ###
  
        __Answers__
  
        To tackle this problem, we need a variable to store the current countdown. Here I have called it number. While number is > 0, we loop, reducing the value of number. When number drops below zero, the loop exits and the lift off line is run.
  
        note that number-- decrements the value of number by one.
  
      :ruby
        code = <<-CODE
        var number = 10;
        while (number > 0) {
          alert(number);
          number--;
        }
        alert("Lift off Mrs Potts");
        CODE
      =code(code)
  
      :markdown
  
        __More Answers__
  
        This code is similar to the above, except we have wrapped it up in a function.
  
  
      :ruby
        code = <<-CODE
        var countdown = function(number) {
          while (number > 0) {
            alert(number);
            number--;
          }
        }
  
        coundown(10);
        CODE
      =code(code)
  
      :markdown
  
        __Even More Answers__
  
        We can make an infinite loop using a while loop. We simply say while(true). True is always true by definition.
  
  
      :ruby
        code = <<-CODE
        var number = 0;
        while (true) {
          alert(number);
          number++;
        }
        CODE
      =code(code)
  
      :markdown
  
  
  
  
    %section
      :markdown
        # Arrays #
  
        Mrs Potts is in trouble. She has been given the job of making Pizza's for the staff room Pizza Party. The head wants cheese and tomato, but the deputy head wants 5 cheese, pepperoni, mushroom and ham. How can she represent all these ingredients in a JavaScript friendly fashion? It's keeping her awake at night.
  
        Thankfully, we can rescue Mrs Potts using Arrays. If a variable is like a bucket, an array is like a rack of buckets, each with a label on it. We can add as many buckets to the rack as we like, and we can put any labels we like on the buckets.
  
  
        ## Making an Array ##
  
        The simplest way to make an array is to declare it, like so:
  
  
      :ruby
        code = <<-CODE
        var toppings = [ ];
        CODE
      =code(code)
  
      :markdown
  
        We use square brackets to define an array. This is an empty array.
  
  
  
        ## Putting things into an array ##
  
        If we like we can put some things in it:
  
  
      :ruby
        code = <<-CODE
        var toppings = ["ham", "cheese", "parmesan"]
        CODE
      =code(code)
  
      :markdown
  
        We now have an array containing 3 ingredients. It's a rack of 3 buckets.
  
        ## Finding things in an array ##
  
        Because we haven't declared any bucket names, Javascript has done it for us by giving each bucket a number. This is subtly different to other languages, do take note.
  
        Let's take pull out a bucket:
  
  
      :ruby
        code = <<-CODE
        var toppings = ["ham", "cheese", "parmesan"]
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
        var toppings = ["ham", "cheese", "parmesan"];
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
        var toppings = ["ham", "cheese", "parmesan"];
  
        for (i = 0; i < toppings.length; i++) {
          alert(toppings[i]);
        }
        CODE
      =code(code)
  
      :markdown
  
        Here we loop over each numbered bucket and output it's value. Note that this only works with sequentially ordered buckets. This is the most efficient way to iterate over an array.
  
  
  
        ## For in ##
  
        The other common way to iterate over an array is using a for in loop, like so:
  
      :ruby
        code = <<-CODE
        for (var i in toppings) {
          alert(toppings[i]);
        }
        CODE
      =code(code)
  
      :markdown
  
        This works if our arrays are not sequential, so for example:
  
  
      :ruby
        code = <<-CODE
        var toppings = [];
        toppings[10] = "ham";
        toppings[45] = "cheese";
        toppings["happy kittens"] = "parmesan";
  
        for (var i in toppings) {
          alert(toppings[i]);
        }
        CODE
      =code(code)
  
      :markdown
  
  
  
        ## Now to help Mrs Potts ##
  
        That's all very well and good, but what about poor Mrs Potts? Let's write some code that will let her make pizzas with any number of toppings.
  
        1. Write a make_pizza function that accepts an array of toppings.
        2. Put a loop in your function that loops over the toppings and makes a string to represent the pizza.
        3. Have your function return the string.
  
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
  
  
  
    %section
      :markdown
        # Basics Exercises #
  
        ## A Sandwich Calculator ##
  
        1. Write a function called sandwich calculator. This should accept one value: slicesOfBread
        2. The function should return the total number of possible sandwiches based on the amount of slices available, so if there are 10 slices, it should return 5. Test your function with an alert box.
        3. Extend your function so it accepts two values, slicesOfBread and slicesOfCheese.
        4. It takes two slices of bread and one of cheese to make a sandwich. The function should return the total number of possible sandwiches, so if there are 10 slices of bread, but only 1 of cheese, it should return 1. You'll need an if statement to make this work.
  
        ## An Array of Sandwiches ##
  
        Here is an array of requests:
  
  
      :ruby
        code = <<-CODE
        var filling_requests = ['ham', 'cheese and cucumber', 'humous and mayo'];
        CODE
      =code(code)
  
      :markdown
  
        1. Write a function that accepts an array of requests and alerts the sandwich it is making. You'll need to iterate over the array.
        2. Extend your function so that it returns an array or sandwiches, like this:
  
  
      :ruby
        code = <<-CODE
        ['ham sandwich', 'cheese and cucumber sandwich', 'humous and mayo sandwich'];
        CODE
      =code(code)
  
      :markdown
  
  
    %section
      :markdown
        # Welcome to JQuery #
  
        You've made it, now lets make it fly...
  
        For the most part, when we write JavaScript, we want to use it to talk to and affect web pages. We do this via a thing called the Document Object Model or DOM - a series of JavaScript objects that let us interact with every part of the page.
  
        Unfortunately the DOM was put together in a bit of a hurry and is not very easy to use. Douglas Crockford described the DOM as "The worst API ever conceived of". For this reason we tend to use a Javascript wrapper to make talking to the DOM easier.
  
        There are lots of libraries available that help us interact with the DOM such as MooTools, Prototype and Closure. In this course we'll be using a library called JQuery.
  
        If you're interested, we can look at so called DOM scripting later in the course. DOM scripting lets us talk to the DOM directly. It's slow, fiddly, and works differently in different browsers, but it's still good to know about.
  
        ## Hello JQuery! ##
  
        So lets jump right in! First we need to download a copy of jQuery, so go visit jquery.com and download the latest version. I've got version 1.8 here in front of me now, but you'll probably get a newer version that this. You'll be offered the choice between a regular or minified version. Choose the regular version for now.
  
        ## The HTML ##
  
        Now we need to create an html file for our scripts to live inside. Enter something like the following:
  
  
      :ruby
        code = <<-CODE
        <!DOCTYPE html>
        <html>
          <head>
            <title>jQuery</title>
            <script src="jquery.js"></script>
            <script src="hello.js"></script>
          </head>
          <body>
  
          </body>
        </html>
        CODE
      =code(code, :html)
  
      :markdown
  
        Note that the body element is empty.
  
        ## The Javascript ##
  
        Next we'll need to create the hello.js file, so go ahead and create it and add the following text:
  
  
      :ruby
        code = <<-CODE
        $(function() {
          $("body").html("Hello jQuery");
        });
        CODE
      =code(code)
  
      :markdown
  
        Whoah, that looked complicated! Don't worry though, there's actually nothing here that we haven't already covered in part 1. We'll break this down in a minute, but for now let's just type it in and have a look.
  
        __Questions__
  
        1. Create the program above and run it. What do you see?
        2. Modify the program to make it say a different greeting.
  
        ## Decomposing hello world ##
  
        The code we entered just now might look strange, but actually it's quite simple. JQuery works by defining a single function called $. Why $? Because $ easy to type and has no meaning in JavaScript. Here is our Hello jQuery script again.
  
  
      :ruby
        code = <<-CODE
        $(function() {
          $("body").html("Hello jQuery");
        });
        CODE
      =code(code)
  
      :markdown
  
        Notice that it is wrapped in the dollar function like this:
  
  
      :ruby
        code = <<-CODE
        $( ...code goes here... );
        CODE
      =code(code)
  
      :markdown
  
        Now it makes more sense, we have a function called $ (dollar) which accepts an argument. Remember in the last section we looked at functions, we said that a function could be assigned to a variable? That's because, in Javascript functions are "objects". We can pass them around, do things with them, assign them to variables, etc, etc.
  
        In this case the dollar function is accepting another function as an argument. The function it's accepting looks like this:
  
  
      :ruby
        code = <<-CODE
        function() {
          $("body").html("Hello jQuery");
        }
        CODE
      =code(code)
  
      :markdown
  
        This is an anonymous function, it doesn't have a name, but it's a function none the less. Lets look inside it:
  
  
      :ruby
        code = <<-CODE
        $("body").html("Hello jQuery");
        CODE
      =code(code)
  
      :markdown
  
        This looks simpler. We're calling the $ function again, but this time we're passing it a string "body". When the $ function receives a string, it uses it to find an element on the page. Horray, it has found the body element!
  
        JQuery adds a bunch of convenience methods to any element it returns including this one .html(). The html method lets us set the html content of an element, so here we've set the content to the string "Hello jQuery".
  
        __Passing $ a function__
  
        One mystery remains, why did we have to pass our code to $ as a function? Why wrap all that stuff up inside a function at all?
  
        Well...
  
        The dollar function behaves differently depending on what you pass it. If you pass it a string it finds the element that matches that string. If you pass it a function, it remembers that function and calls it as soon as the DOM is ready, that is, as soon as your page has downloaded. So by wrapping our code up in a function and passing it to jQuery first thing, we guarantee that jQuery won't try to run our code until our HTML is ready.
  
        Let's look at it another way...
  
        ## jQuery - a conversation. ##
  
        __You:__ Hi jQuery, I've written some code. Here's a function for you. I'll pass it to you using your $ function. I know you like that..
  
        __jQuery:__ Thanks User, I'll execute that function just as soon as the page html has finished loading and the DOM is ready. I'm clever and I know just when that will be for all the various different browsers.
  
        ...time passes...
  
        __jQuery:__ Ah, the DOM is ready, lets look at that function. Little Function? You can run now!
  
        __Little Function:__ Hello there jQuery, nice to be running at last. jQuery, can you find me the body element?
  
        __jQuery:__ Of course I can, with pleasure! Here it is, and I've taken the liberty of decorating it with a bunch of useful utility methods for you.
  
        __Little Function:__ Great, I'll call the html method to set the html of the body element you gave me on the DOM.
  
        __DOM:__ Aha, oho, you've set the inner html of the body element. I'll just tell the browser.
  
        __Browser:__ Thanks DOM. What's that you say? You've been updated? I'd better redraw myself. There, that's all done.
  
        ... more time passes...
  
        __You:__ Horray. My page now contains the text I wanted!
  
        ## jQuery Selectors ##
  
        In the example above, we used jQuery to set the html of the body element. We selected the body element, then called the html method on it.
  
        We can use jQuery to select any element on the page. We do this using CSS syntax. Lets say we wanted to select all the paragraphs on the page, we would do this like so:
  
  
      :ruby
        code = <<-CODE
        $("p");
        CODE
      =code(code)
  
      :markdown
  
        Lets say we wanted the hyperlink with class name "login":
  
  
      :ruby
        code = <<-CODE
        $("a.login");
        CODE
      =code(code)
  
      :markdown
  
        The string is just CSS.
  
        __Questions__
  
        1. Create an html document containing several hyperlinks, some of which have class attributes.
        2. Link the jQuery library and a blank script file of your own.
        3. Set the html of each hyperlink to "Hello from the hyperlink!", or some other text of your choosing.
        4. Pick a couple of hyperlinks with classes. Use CSS syntax in your selector to give them different html content.
  
        ## More on CSS Selectors. ##
  
        Because jQuery uses CSS to select elements, plus it's own extensions, you can use jQuery to pull out and make changes to pretty much anything on the page. It works in all browsers so you don't need to worry about browser inconsistencies.
  
        Read http://api.jquery.com/category/selectors for a full up to date list of selectors. It's a long and useful list.
  
        ## jQuery Events - listen to me and do what I say! ##
  
        The real strength of JavaScript is that it allows the page to respond to the user. Whenever the user does something on the page, from moving the mouse to pressing a button, to submitting a form, lots of little events are fired off in the browser. We can tell our code to listen for certain events and call functions in response to them.
  
        __Questions__
  
        1. Create an HTML file and import jQuery.
        2. Create a file called dont_click.js and import that too.
        3. Edit your html file so it looks like this:
  
  
      :ruby
        code = <<-CODE
        <!DOCTYPE html>
        <html>
          <head>
            <title>jQuery</title>
            <script src="jquery-1.5.js"></script>
            <script src="dont_click.js"></script>
            </head>
          <body>
            <div class="clickable">
              Do not press this button.
            </div>
          </body>
        </html>
        CODE
      =code(code, :html)
  
      :markdown
  
        4. Enter the following JavaScript into your dont_click.js file.
  
  
      :ruby
        code = <<-CODE
        $(function() {
          $(".clickable").click(function() {
            alert("I can't believe you just did that!");
          });
        });
        CODE
      =code(code)
  
      :markdown
  
        5. Reload your page and don't click the text!
  
        __Deconstructing don't click__
  
        How was that? Tricky? Make sense? Let's just deconstruct the JavaScript a little and have a look inside.
  
        First we have this
  
  
      :ruby
        code = <<-CODE
        $(function() {
          ...
        });
        CODE
      =code(code)
  
      :markdown
  
        This calls the dollar function and passes it a function. When we pass dollar a function, jQuery puts it on one side until the DOM is loaded and runs it then.
        jQuery
  
        The function we passed it looks like this:
  
  
      :ruby
        code = <<-CODE
        $(".clickable").click(function() {
            ...
          });
        CODE
      =code(code)
  
      :markdown
  
        Can you guess what it does? First it gets all the elements on the page with class "clickable". Then it calls a method called click on them. This method says what to do when we click. It's a click handler.
  
        And what happens when we click it? This happens:
  
  
      :ruby
        code = <<-CODE
        alert("I can't believe you just did that!");
        CODE
      =code(code)
  
      :markdown
  
        ...and we get our cute little alert box. So appealing!
  
        __More Questions__
  
        1. Review the list of events on: http://api.jquery.com/category/events/
        2. Try to write some code that pops up an alert when the user double clicks the button.
        3. Try to write some code that pops up an alert when the user mouses over the button.
        4. Try to write code that removes the button from the body when the user mouses over it. (hint: set the body html to an empty string "")
  
        ## jQuery Forms - Talk to me... ##
  
        OK, it's not sexy, but sooner or later we're going to have to cover it. Forms. There, I've said it. Don't worry, next well be looking at animation so lets just take a deep breath and...
  
        Make a form:
  
  
      :ruby
        code = <<-CODE
        <!DOCTYPE html>
        <html>
          <head>
            <title>jQuery</title>
            <script src="jquery-1.5.js"></script>
            <script src="form.js"></script>
          </head>
          <body>
            <form>
              <label for="gadget">Please enter a handy gadget, eg jet boots.</label>
              <input type="text" id="gadget" />
              <input type="submit" value="Go Go Gadget jQuery!">
            </form>
          </body>
        </html>
        CODE
      =code(code, :html)
  
      :markdown
  
        This simple form doesn't do much. Let's make something happen with some...
  
        __Go Go Gadget JavaScript!__
  
  
      :ruby
        code = <<-CODE
        $(function() {
          $("form").submit(function() {
            var gadget = $("#gadget").val();
            alert("Go Go Gadget " + gadget);
            return false;
          })
        });
        CODE
      =code(code)
  
      :markdown
  
        As you'd expect, jQuery lets us look at the values of form elements. It does this using the val method on any form element. As you can see above, we're responding to the submit event with a function that writes an alert to the screen.
  
        __Questions__
  
        1. Create the above Form. Yada yada (yawn)....
        2. Give it a spin.
        3. Change the program so that rather than popping up an alert, it puts the go go gadget string into a div.
        4. Extend the program so that you every time you click submit it adds a list item containing the string to an unordered list on the page.
  
        We can do lots of things with forms.
  
        __More Questions__
  
        1. Create an html file with linked jQuery and JavaScript file
        2. Add two form elements which should accept numbers.
        3. When the form is submitted, add the two numbers together and put the result on the screen.
        4. Add a dropdown containing functions for + and -. When the user clicks submit, call a function that does the appropriate action.
  
        ## jQuery Effects - Making it zippy ##
  
        As promised, here we are in the animation section, and what a section it is! jQuery provides a rich and detailed animation library. There are lots of built in effects, or we can define our own, transitioning between pretty much any CSS property you care to mention.
  
        Lets look at some examples
  
        Before we get stuck in, lets look at some examples.
  
        First of all, let's look at some examples, so head on over to:
  
        http://jqueryui.com/demos/effect/
        http://api.jquery.com/category/effects/
  
        ...and have a look at some of the demos there. They should give you an idea of what can be done.
  
        __I'm a Ninja, watch me fade__
  
        For this example we're going to look at the fadeIn effect. This is a nice effect for revealing things in a smooth way.
  
        __The HTML__
  
        There's a fair amount of inline CSS here. If you want to do this properly do please extract this into a separate CSS file, I'm just doing it this way for brevity and clarity.
  
  
      :ruby
        code = <<-CODE
        <!DOCTYPE html>
        <html>
          <head>
            <title>jQuery</title>
            <script src="jquery-1.5.js"></script>
            <script src="fade_in.js"></script>
            </head>
          <body>
            <div class="hi" style="display:none; width:200px; height:200px; background:red;">Hi There, I'm a ninja.</div>
          </body>
        </html>
        CODE
      =code(code)
  
      :markdown
  
        __The Javascript__
  
  
      :ruby
        code = <<-CODE
        $(function() {
          $(".hi").fadeIn(1000);
        });
        CODE
      =code(code)
  
      :markdown
  
        As you can see, when the DOM is ready the hi div is faded in.
  
        __Questions__
  
        1. Enter the code above. Try to get the div to fade in slowly.
        2. What happens if you change the number.
        3. Try using a slidedown animation instead.
        4. Now use a show animation.
        5. If you feel up to it, check out the jQuery animation API on the jQuery website and try to get some other effects running.
        6. If you're still up for it, check out the effects on jQuery UI. You'll need to download the jQuery UI library. Horray! Animation!
  
        ## Other things we can do with jQuery ##
  
        There's lots more we can do with Javascript. We can get and set attributes using the attr method. We can add and remove classes using the addClass and removeClass methods. We can set CSS styling using the css method. It all fits inside the same basic framework and I encourage you to try things out.
  
  
    %section#close
      :markdown
        # Where next
  
        Well that just about wraps it up for this little book. I hope you've enjoyed it, and that you now have a pretty sound footing in JavaScript.
  
        IF you;d like to continue your JavaScript journey, the next thing to look at is JQuery. My little book of JQuery will be available soon.
  
  
  -#  %section
  -#    :markdown
  -#      # Object Orientation with JSON and Mario #
  -#
  -#      __Everything is an object...__
  -#
  -#      In JavaScript, pretty much __everything is an object.__
  -#
  -#      In JavaScript, pretty much everything is an object. Got that? I'll say it -#again: In JavaScript, pretty much everything is an object.
  -#
  -#      If you've programmed before, you might think you have it. If you program Java/-#Ruby/Python you might be saying. I know about object orientation. You don't, -#you need to forget all that. JavaScript is different, JavaScript is special.
  -#
  -#      So first of all, let's look at what we mean by the word "Object".
  -#
  -#
  -#      ## What is an Object ##
  -#
  -#      An object is a programmatic representation of a thing. What type of thing? -#Well, anything at all. Let's say you're writing a form, your browser will -#create a form object, and lots of little objects to represent all the elements -#in the form. In fact every page element, every script, every stylesheet has a -#little object to represent it.
  -#
  -#      Lets say you're writing a hypothetical Mario game. You might create an object -#to represent Mario, another to represent Luigi, another to represent Peach, -#etc, etc.
  -#
  -#      ## Very nice, but what is an object? ##
  -#
  -#      OK, let's get down to the nitty gritty. In Javascript, objects are represented -#as arrays. In fact we can go one further than that, in Javascript, Objects are -#Arrays, specifically, Objects are associative arrays of key value pairs.
  -#
  -#      __Programmed before?__
  -#
  -#      If you've programmed before, you might be thinking that's crazy, how can an -#object be an array, that's rubbish, what about inheritance, and methods, and -#attributes and all that stuff. What about classes and class hierarchy and all -#that jazzy malarky. Hear me out, it will all make sense soon.
  -#
  -#      __New Programmer?__
  -#
  -#      If you've not programmed before you might be thinking "what is an associative -#array?". Well. An associative array is a list of pairs of keys and values. A -#key might be something like "height" or "colour" or "density", and a value -#might be something like "tall" or "puce" or "very very dense". The key is the -#name of the property, and the value is the property itself. Provided you know -#the key, you can get the value, kind of like a row of buckets with labels on.
  -#
  -#      This will make sense when we come to a concrete example...
  -#
  -#      ## There are several different syntaxes for declaring Objects ##
  -#
  -#      There are several different syntaxes for declaring objects in JavaScript. Of -#these, the cleanest and most commonly used is JavaScript Object Notation (-#JSON), pronounced Jason.
  -#
  -#      ## Welcome to JSON ##
  -#
  -#      Packaging our code up into JSON gives us several significant advantages:
  -#
  -#      1. It looks pretty.
  -#      2. It reduces the number of objects in the global namespace.
  -#      3. It's great for AJAX, smaller than XML and readily parsable both client and -#server side.
  -#
  -#      In this series of exercises we'll write some JSON, create an API and finally -#add a thin layer of listeners to hook it up to a jQuery User Interface.
  -#
  -#      JSON looks like this:
  -#
  -#          mario = {
  -#            description:"Small and jumpy. Likes princesses.",
  -#            height: 10,
  -#            weight: 3,
  -#            speed: 12
  -#          }
  -#
  -#          bowser = {
  -#            description: "Big and green, Hates princesses.",
  -#            height: 16,
  -#            weight: 6,
  -#            speed: 4
  -#          }
  -#
  -#      Here we have defined two objects, one called mario and on called bowser. As -#you can see, they consist of a series of name value pairs. We can access the -#values like so:
  -#
  -#          alert(mario.description);
  -#
  -#      We can modify values like so:
  -#
  -#          mario.description = "Big and smashy, having eaten a mushroom"
  -#
  -#      We can even add new attributes like so:
  -#
  -#          mario.can_fly = true;
  -#
  -#      Objects are useful for keeping things neat and tidy. We have encapsulated all -#the information about Mario in a single place so it's easy to get at and -#understand.
  -#
  -#      **Exercise**
  -#
  -#      1. Enter the above code
  -#      2. Alert the values of mario.description and bowser.description
  -#      3. Use Firebug to add a breakpoint. Check the values of the JSON objects in -#the debugger.
  -#      4. Add a can_fly attribute to Mario using the dot syntax. Again, check the -#debugger.
  -#      5. Create an entry for Luigi. He's a bit thinner that Mario, but slightly -#taller, and he wears a green outfit.
  -#
  -#
  -#      ## A Rather Dull Mario Game ##
  -#
  -#      A (rather dull) Mario Game:
  -#
  -#      If we wanted we could write a little Mario game using these objects. Lets -#create a little function to see who wins in a boss battle:
  -#
  -#          boss_battle = function() {
  -#            if (mario.speed > bowser.speed) {
  -#              alert("Mario has escaped and saved Peach");
  -#            } else {
  -#              alert("Bowser has stomped all over Mario. Mario is dead.");
  -#            }
  -#          }
  -#
  -#          boss_battle();
  -#
  -#      As we can see, Mario wins. Let's swing the odds a little in Bowser's favour. -#Bowser can go into a powered up mode where he swoops from side to side on the -#screen. We'll call this Bowser Boost.
  -#
  -#      Let's extend our game a little to add Bowser Boost:
  -#
  -#          mario = {
  -#            description:"Small and jumpy. Likes princesses.",
  -#            height: 10,
  -#            weight:3,
  -#            speed:12
  -#          }
  -#
  -#          bowser = {
  -#            description:"Big and green, Hates princesses.",
  -#            height: 16,
  -#            weight: 6,
  -#            speed: 4,
  -#            boost: 0
  -#          }
  -#
  -#          boss_battle = function() {
  -#            if (mario.speed > bowser.speed + bowser.boost) {
  -#              alert("Mario has escaped")
  -#            } else {
  -#              alert("Bowser has stomped all over Mario")
  -#            }
  -#          }
  -#
  -#          boss_battle();
  -#
  -#          bowser.boost = 20
  -#
  -#          boss_battle();
  -#
  -#      **Exercise**
  -#
  -#      1. Enter the above code and get it to run. Who wins?
  -#      2. Give Mario an invincibility attribute. If invincibility is true, Mario -#always wins. Unfair I know.
  -#
  -#      Don't worry, we are going somewhere with this. Next!
  -#
  -#      ## Lets clean this code up a little ##
  -#
  -#      1. Add two more attributes to each character: attack_power and name.
  -#      2. Extend the boss battle function so it receives two parameters, contestant_1 -#and contestant_2.
  -#      3. Rewrite it so that instead of running the conditional, it simply prints out -#the name of the contestant with the highest attack_power. This renders all the -#other attributes irrelevant, it only checks the attack_power.
  -#
  -#      ## Functions within JSON ##
  -#
  -#      This is all very well. We have Mario and Bowser objects and a function to -#compare them, but it seems a little artificial having all our functions -#scattered all over the place like this. Also, the more functions we have in -#our global namespace, the more likely it is that they will conflict, and we'll -#accidentally overwrite something important.
  -#
  -#      Let's see if we can improve things.
  -#
  -#          mario_world = {
  -#            mario: {
  -#              name:"Mario",
  -#              description:"Small and jumpy. Likes princesses.",
  -#              celebration: "Mario wins and does a little dance",
  -#              height: 10,
  -#              weight:3,
  -#              speed:12,
  -#              attack_power: function() {
  -#                return this.weight * this.speed;
  -#              }
  -#            },
  -#            bowser: {
  -#              name:"Bowser",
  -#              description:"Big and green, Hates princesses.",
  -#              celebration: "Bowser wins and does a big roar",
  -#              height: 16,
  -#              weight: 6,
  -#              speed: 4,
  -#              boost: 0,
  -#              attack_power: function() {
  -#                return this.weight * (this.speed + this.boost);
  -#              }
  -#            },
  -#
  -#            boss_battle: function(contestant_1, contestant_2) {
  -#              alert(contestant_1.name + " vs " + contestant_2.name);
  -#              if (contestant_1.attack_power() > contestant_2.attack_power()) {
  -#                alert(contestant_1.celebration);
  -#              } else {
  -#                alert(contestant_2.celebration);
  -#              }
  -#            }
  -#          }
  -#
  -#          mario_world.boss_battle(mario_world.mario, mario_world.bowser);
  -#
  -#      Ah, that's better. As you can see, this entire program is encapsulated within -#a single object called mario_world. The mario_world object is the only object -#in the global namespace. the boss_battle function is now an attribute of -#mario_world, and each contestant has an attack_power function that works out -#his strength in a battle. The boss_battle function is parameterised, so you -#can battle any contestant against any other.
  -#
  -#      We have also written an attack_power function which is implemented by bowser -#and mario. This calculates the attack power from a series of other parameters.
  -#
  -#      Because functions are objects, we can assign them as attributes of objects. -#They're key value pairs, but if you've programmed before, you'll notice they -#work like methods. We can now call methods on our JSON objects.
  -#
  -#      **What is this?**
  -#
  -#      You might have noticed also that in the attack_power function we use the -#"this" keyword. We say this.speed and this.boost.
  -#
  -#      This is a troublesome keyword that trips up even quite advanced JavaScript -#developers all the time. "this" refers to the context in which the code is -#currently operating in. In this case, the context is mario (or bowser) and so -#this refers to these variables. That's because the attack_power function is an -#attribute of mario. This points to the object the current object is a member -#of. Your knowledge of JavaScript will be measured by your understanding of -#scope, and the "this" keyword, so we'll come back to this, but for now, let's -#make a real game...
  -#
  -#      **Exercise**
  -#
  -#      1. Enter the above code and make it work.
  -#      2. Add Princess Peach. The princess is smaller and lighter but compensates for -#this by being quicker and having a dash mode. Battle Peach vs Bowser and Peach -#vs Mario.
  -#      3. Add an activate_boost function to Bowser that adds 5 to his boost. You -#should be able to call mario_world.bowser.activate_boost.
  -#      4. Add a toggle_dash function to peach. Calling it should activate or -#deactivate her dash attribute.
  -#      5. Just for kicks, change the boss battle function so instead of outputting -#alerts, it returns a string. Now we have an API.
  -#
  -#      ## But what about the jQuery? ##
  -#
  -#      Having defined our API, it's now time to hook it up to a user interface. This -#is where jQuery comes into it's own.
  -#
  -#      1. Extend your HTML page. Create a form. Add two dropdowns, containing the -#names of the available characters. Ideally populate these dropdowns by -#querying the API. You may need to adjust your JSON to do this.
  -#      2. Add a "Fight" button that will make those two characters battle.
  -#      3. Add handlers
  -#
  -#      ## Further Challenge ##
  -#
  -#      Now lets take things a little further. I'll leave this up to you.
  -#
  -#      1. Add a button for Bowser Boost. When you click it, his boost is increased.
  -#      2. Add a Peach Dash button. Every time you click it, Peach's dash mode is -#toggled on and off.
  -#      3. Make it so that when the dash and boost buttons are only visible when Peach -#or Bowser are selected.
  -#      4. Handle the case where the battle is a draw.
  -#      5. Grab images for each character. Store the URL of the image in the JSON. -#Draw an arena and put the characters in it when they are selected.
  -#      6. Destroy the losing character with an appropriate animation.
  -#      7. When the fight button is clicked, animate a fight briefly before destroying -#the loser.
  -#
  -#      ## Answers ##
  -#
  -#      The following are sample answers only, and you may be able to come up with a -#better way.
  -#
  -#      ### Welcome to JSON ###
  -#
  -#          mario = {
  -#            description:"Small and jumpy. Likes princesses.",
  -#            height: 10,
  -#            weight: 3,
  -#            speed: 12
  -#          }
  -#
  -#          bowser = {
  -#            description: "Big and green, Hates princesses.",
  -#            height: 16,
  -#            weight: 6,
  -#            speed: 4
  -#          }
  -#
  -#          luigi = {
  -#            description: "Best Friend of Mario, fond of green",
  -#            height: 18,
  -#            weight: 5,
  -#            speed: 4
  -#          }
  -#
  -#          alert(mario.description);
  -#          alert(bowser.description);
  -#          mario.can_fly = true;
  -#          alert(mario.can_fly);
  -#
  -#      Note that we can add the can_fly attribute without declaring it first. Our -#JSON object is simply extended.
  -#
  -#      ### A Rather Dull Mario Game ###
  -#
  -#      The first part is a simple extension to our previous JSON exercise. We add an -#invincible attribute and set it to false. We don't need to initialise this -#attribute, since undefined is falsey, but it feels neater to give it a -#starting value. Then we simply extend the check in the boss battle function to -#look for the invincible attribute.
  -#
  -#          mario = {
  -#            description: "Small and jumpy. Likes princesses.",
  -#            height: 10,
  -#            weight: 3,
  -#            speed: 12,
  -#            invincibile: false
  -#          }
  -#
  -#          bowser = {
  -#            description: "Big and green, Hates princesses.",
  -#            height: 16,
  -#            weight: 6,
  -#            speed: 4,
  -#            boost: 0
  -#          }
  -#
  -#
  -#          boss_battle = function() {
  -#            if ((mario.speed > bowser.speed + bowser.boost) || (mario.invincible)) {
  -#              alert("Mario has escaped")
  -#            } else {
  -#              alert("Bowser has stomped all over Mario")
  -#            }
  -#          }
  -#
  -#          boss_battle();
  -#
  -#          bowser.boost = 20
  -#
  -#          boss_battle();
  -#
  -#          mario.invincible = true;
  -#
  -#          boss_battle();
  -#
  -#
  -#      ### Lets clean this code up a little ###
  -#
  -#      A simple solution to this problem might look something like this:
  -#
  -#          mario = {
  -#            name: "mario",
  -#            attack_power:8
  -#          }
  -#
  -#          bowser = {
  -#            name: "bowser",
  -#            attack_power:10
  -#          }
  -#
  -#          boss_battle = function(contestant_1, contestant_2) {
  -#            if (contestant_1.attack_power > contestant_2.attack_power ) {
  -#              alert(contestant_1.name + " has won")
  -#            } else {
  -#              alert(contestant_2.name + " has won")
  -#            }
  -#          }
  -#
  -#          boss_battle(mario,bowser);
  -#
  -#      We have used a simple conditional. Note the duplication of the alert.
  -#
  -#      An improved version might look something like this:
  -#
  -#          mario = {
  -#            name: "mario",
  -#            attack_power:8
  -#          }
  -#
  -#          bowser = {
  -#            name: "bowser",
  -#            attack_power:10
  -#          }
  -#
  -#          boss_battle = function(contestant_1, contestant_2) {
  -#            winner = (contestant_1.attack_power > contestant_2.attack_power ) ? -#contestant_1 : contestant_2
  -#            alert(winner.name + " has won")
  -#          }
  -#
  -#          boss_battle(mario,bowser);
  -#
  -#      Here we have assigned the winner to a variable using the ternary operator. We -#can then just call winner.name.
  -#
  -#      ### Functions within JSON ###
  -#
  -#      Your solution to this task might look something like the following:
  -#
  -#          mario_world = {
  -#            mario: {
  -#              name: "Mario",
  -#              description: "Small and jumpy. Likes princesses.",
  -#              celebration: "Mario wins and does a little dance",
  -#              height: 10,
  -#              weight: 3,
  -#              speed: 12,
  -#              attack_power: function() {
  -#                return this.weight * this.speed;
  -#              }
  -#            },
  -#            bowser: {
  -#              name: "Bowser",
  -#              description: "Big and green, Hates princesses.",
  -#              celebration: "Bowser wins and does a big roar",
  -#              height: 16,
  -#              weight: 6,
  -#              speed: 4,
  -#              boost: 0,
  -#              activate_boost: function() {
  -#                this.boost += 5;
  -#              },
  -#              attack_power: function() {
  -#                return this.weight * (this.speed + this.boost);
  -#              }
  -#            },
  -#            peach: {
  -#              name:"Peach",
  -#              description:"Beloved of Mario.",
  -#              celebration: "Peach wins and jumps in the air",
  -#              height: 8,
  -#              weight:2,
  -#              speed:15,
  -#              dash_mode: false,
  -#              toggle_dash: function() {
  -#                this.dash_mode = !this.dash_mode;
  -#              },
  -#              attack_power: function() {
  -#                p = this.weight * this.speed;
  -#                if (this.dash_mode) {
  -#                  p *= 2;
  -#                }
  -#                return p;
  -#              }
  -#            },
  -#            boss_battle: function(contestant_1, contestant_2) {
  -#              return (contestant_1.attack_power() > contestant_2.attack_power() ) ? -#contestant_1 : contestant_2
  -#            }
  -#          }
  -#
  -#          winner = mario_world.boss_battle(mario_world.mario, mario_world.bowser);
  -#          alert(winner.celebration);
  -#
  -#          mario_world.bowser.activate_boost();
  -#          winner = mario_world.boss_battle(mario_world.peach, mario_world.bowser);
  -#          alert(winner.celebration);
  -#
  -#          mario_world.peach.toggle_dash();
  -#          winner = mario_world.boss_battle(mario_world.bowser, mario_world.peach);
  -#          alert(winner.celebration);
  -#
  -#
  -#      ### But what about the JQuery ###
  -#
  -#      Here's an example of one way you could tackle this exercise. If you have taken -#a different approach, that's fine.
  -#
  -#      First we define some html. This is just a skeleton, it will be populated by -#the JavaScript:
  -#
  -#          <!DOCTYPE html>
  -#          <html>
  -#          <head>
  -#          <title>Super Mario World 9</title>
  -#          <script src="jquery.js"></script>
  -#          <script src="script.js"></script>
  -#          </head>
  -#          <body>
  -#            <form>
  -#              <select class="character_box" id="char_1"></select>
  -#              vs.
  -#              <select class="character_box" id="char_2"></select>
  -#              <input type="submit" value="Fight!" />
  -#            </form>
  -#            <p class="victor"></p>
  -#          </body>
  -#          </html>
  -#
  -#      Now the JavaScript, Note how the interface code is separated from the code -#that does the actual work. This is good practice. Notice how we append the -#characters to the dropdowns, and how we retrieve the characters by using the -#string values in the option field.
  -#
  -#          // User Interface
  -#          $(function() {
  -#
  -#            // populate the dropdowns
  -#            $.each(mario_world.characters, function(i,el) {
  -#              $(".character_box").append("<option value='" + i + "'>" + el.name + "</-#option>");
  -#            });
  -#
  -#            // add the submit handler
  -#            $('form').submit(function() {
  -#              char_1 = $('#char_1').val();
  -#              char_2 = $('#char_2').val();
  -#              winner = mario_world.boss_battle(mario_world.characters[char_1],-#mario_world.characters[char_2]);
  -#              $('.victor').html(winner.celebration)
  -#              return false;
  -#            })
  -#
  -#          })
  -#
  -#          mario_world = {
  -#            characters: {
  -#              mario: {
  -#                name: "Mario",
  -#                description: "Small and jumpy. Likes princesses.",
  -#                celebration: "Mario wins and does a little dance",
  -#                height: 10,
  -#                weight: 3,
  -#                speed: 12,
  -#                attack_power: function() {
  -#                  return this.weight * this.speed;
  -#                }
  -#              },
  -#              bowser: {
  -#                name: "Bowser",
  -#                description: "Big and green, Hates princesses.",
  -#                celebration: "Bowser wins and does a big roar",
  -#                height: 16,
  -#                weight: 6,
  -#                speed: 4,
  -#                boost: 0,
  -#                activate_boost: function() {
  -#                  this.boost += 5;
  -#                },
  -#                attack_power: function() {
  -#                  return this.weight * (this.speed + this.boost);
  -#                }
  -#              },
  -#              peach: {
  -#                name:"Peach",
  -#                description:"Beloved of Mario.",
  -#                celebration: "Peach wins and jumps in the air",
  -#                height: 8,
  -#                weight:2,
  -#                speed:15,
  -#                dash_mode: false,
  -#                toggle_dash: function() {
  -#                  this.dash_mode = !this.dash_mode;
  -#                },
  -#                attack_power: function() {
  -#                  p = this.weight * this.speed;
  -#                  if (this.dash_mode) {
  -#                    p *= 2;
  -#                  }
  -#                  return p;
  -#                }
  -#              }
  -#            },
  -#            boss_battle: function(contestant_1, contestant_2) {
  -#              return (contestant_1.attack_power() > contestant_2.attack_power() ) ? -#contestant_1 : contestant_2
  -#            }
  -#          }
  -#
  -#
  -#
  -#
  -#  %section
  -#    :markdown
  -#      # Ajax #
  -#
  -#      It's not just a scouring powder any more.
  -#
  -#      ## What is AJAX? ##
  -#
  -#      AJAX is Asynchronous Javascript and XML. It's a broad term for a set of -#techniques that let Javascript talk to the internet all by itself. Lets look -#at an example.
  -#
  -#      Twitter is handy for this. It exposes a nice rich API that lets us get at all -#sorts of information. Let's pull the public timeline.
  -#
  -#      ## Looking at the Twitter public timeline ##
  -#
  -#      Go to a web browser and enter the url:
  -#
  -#          http://api.twitter.com/1/statuses/public_timeline.json
  -#
  -#      Got some data back? Horray? Twitter is working! The rather long piece of code -#that Twitter returned is encoded in a format called Javascript Object Notation -#(JSON), or Jason to it's friends.
  -#
  -#      We pulled this up in a web browser to show you there's nothing magic going on -#here, it's just a file on the internet that Twitter made for us.
  -#
  -#      ## AJAXing it up ##
  -#
  -#      To be useful we need JavaScript to get this file by itself. We're going to do -#this using jQuery again. If you want to attempt this you're going to need -#access to a web server of some description.
  -#
  -#          $(function() {
  -#            var url = "http://www.yourdomain.com/twitter_stream"
  -#            $.getJSON(url, function(data) {
  -#              alert('Load was performed.');
  -#              $('.result').html(data[1].['text']);
  -#            });
  -#          });
  -#
  -#      ## Security, stop that file! ##
  -#
  -#      Notice how the domain is not the twitter domain, it's another domain that you -#own, the domain that your JavaScript has to live on. This is because -#JavaScript will only allow you to talk to your own domain via AJAX. This is a -#security feature that helps prevent cross site scripting attacks.
  -#
  -#      To get around this we're going to have to mirror the twitter feed on our own -#server. We can do this in a number of ways, using PHP to pull the feed on -#request for example, but for now we're going to just upload a static version -#to our webserver, so download the latest Twitter feed and upoad it as a file -#to your webserver.
  -#
  -#      Now create an html file that imports jQuery and your javascript file and -#upload that too. Finally, view your html file in a web browser. You should see -#the latest tweet from the twitter timeline.
  -#
  -#
  -#  %section
  -#    :markdown
  -#      # Canvas #
  -#
  -#      Canvas is a relatively new tag that allows you to draw on a page, a little -#like microsoft paint.
  -#
  -#      It has reasonable support in new browsers, and older browsers can easily show -#a fallback.
  -#
  -#      ## Getting a context ##
  -#
  -#      To use the Canvas, first we must get a reference to it. Let's do this now. -#We'll use jQuery's onDomReady functionality to help here.
  -#
  -#          $(function() {
  -#            var canvas = document.getElementById('demo_canvas');
  -#            var context = canvas.getContext('2d');
  -#          });
  -#
  -#      We use getElementById to get the canvas element DOM node here. Having -#retrieved the reference we then get a context for us to draw on. An emerging -#3D spec allows us to draw hardware accellerated 3D graphics here, but for now -#let's stick with 2D.
  -#
  -#      ## Drawing a box ##
  -#
  -#      Now we have a context, we can draw on to it:
  -#
  -#            context.fillRect(10,10,30,30);
  -#
  -#      This will make a little rectangle.
  -#
  -#      We also have
  -#
  -#          strokeRect
  -#
  -#      ...which draws an outline and:
  -#
  -#        clearRect
  -#
  -#      ...which is an eraser.
  -#
  -#      ## Box Exercise ##
  -#
  -#      Create a canvas, and draw 3 nested boxes on it.
  -#
  -#      ## Drawing lines ##
  -#
  -#      We can also draw lines, like so:
  -#
  -#          context.beginPath();  
  -#          context.moveTo(75,50);  
  -#          context.lineTo(100,75);  
  -#          context.lineTo(100,25);  
  -#          context.fill();
  -#
  -#      The above code will draw a triangle.
  -#
  -#      ## Lines Exercise ##
  -#
  -#      1. Try and draw a hexagon.
  -#      2. If you fancy, try for a little star. Pretty.
  -#
  -#      ## Arcs ##
  -#
  -#      We can draw arcs and circles like so:
  -#
  -#          arc(x, y, radius, startAngle, endAngle, anticlockwise)
  -#
  -#      * x and y are the center points
  -#      * radius is the radius
  -#      * startAngle and endAngle are expressed as radians, not degrees
  -#      * anticlockwise is a boolean
  -#
  -#      We can draw a whole circle like so:
  -#
  -#          arc(100,100, 50, 0, Math.PI*2, false)
  -#
  -#      ## Arcs Exercise ##
  -#
  -#      1. Experiment with Arcs. TRy to produce a semi-circle
  -#      2. If you feel up to it, use a for loop to draw a grid of semi-circles, each -#one rotated a little.
  -#
  -#      ## Further Reading ##
  -#
  -#      For more on the canvas tag, consult the Mozilla docs here:
  -#
  -#      http://mzl.la/id6Xc
  -#
  -#      ## Canvas Exercises ##
  -#
  -#      1. Draw a picture of your house/flat/yurt.
  -#      2. Draw a self portrait.
  -#      3. Check out the docs, and draw a bezier curve.
  -#      4. Use a for loop to draw a kaleidoscopic picture made of beziers.
  -#
  -#      # Projects #
  -#
  -#      Go on, now you try...
  -#
  -#      In this section we're going to attempt some fun little projects. Don't worry -#about shouting for help if you get stuck, that's what I'm here for! Also if -#you have any projects of your own you'd rather get involved with do go ahead.
  -#
  -#      ## Project 1 - Creating a cute little JavaScript Reveal ##
  -#
  -#      In this project we're going to create a little JavaScript reveal. We'll start -#with a hidden element on the page, then when the user clicks a read more link, -#the rest of the content is revealed.
  -#
  -#      1. You're going to need an HTML file which imports jQuery and another blank js -#file to hold your code. While you're at it you might as well import a CSS file -#too to make it look pretty. Go ahead, you know the drill.
  -#      2. Add some copy to the page. You can cut and paste this from anywhere you -#like. You'll need quite a lot.
  -#      3. Put the second half of the copy into a div. Give the div a class of -#"hidden".
  -#      4. In your CSS, hide your hidden div using display:none;
  -#      5. Now create a link. Give your link a class of reveal.
  -#      6. Write JavaScript which listens for a click on reveal and reveals the hidden -#div. Choose an appropriate animation for this.
  -#
  -#      __Danger Points__
  -#
  -#      If you're feeling super dangerous try the following bonus questions:
  -#
  -#      1. What will the user see if they have JavaScript turned off in their browser? -#Can you think of a way to give them a good experience too?
  -#
  -#      2. It would be nice to be able to hide the text as well. Try to create a -#little hide link. The hide link should only be visible when the text is -#visible.
  -#
  -#      ## Project 2 - Create a Smashing JavaScript Rollover ##
  -#
  -#      In this project we're going to create a rollover button using JavaScript. -#We'll do this by swapping an image for another image when the mouse moves over -#it, then swapping back again when the mouse moves out. Rollovers are cool, -#lets make one!
  -#
  -#      1. You're going to need two images, so go ahead and make some using the image -#creation package of your choice. Save them as PNGs, GIFs or JPEGs, your choice.
  -#      2. Create an html document. Import jQuery. Pop the image in it.
  -#      3. Create a file to hold your code. Link it to jQuery, an empty js file, an -#empty CSS file, you know the score.
  -#      4. Read up on the jQuery rollover event. Look at api.jquery.com and then look -#for events.
  -#      5. The rollover function accepts two functions. The first one gets called when -#the user's mouse rolls over the element, the second when the user's mouse -#rolls out. These functions should change the "src" attribute of the image, to -#pint to the correct image file. Write them.
  -#
  -#      __Secret Agent Bonus Questions__
  -#
  -#      If you're James Bond, you might like to try these bonus questions.
  -#
  -#      1. Is this a good use of JavaScript? What will a user see if they have -#JavaScript turned off?
  -#
  -#      2. Could we achieve a similar result using CSS? When should we use CSS and -#when should we use JavaScript?
  -#
  -#      3. Can you think of a way to make this generic, so any image element with a -#class of rollover will be a rollover (hint, try something like:  -#"image_filename_off".replace('_off', '_over');)
  -#
  -#      ## Project 3 - Creating an Awe Inspiring VAT calculator ##
  -#
  -#      We often use jQuery to spice up our forms. In this project, we're going to -#make a handy little VAT calculator. The user can enter a price into a web form -#and jQuery automatically tells us the value of the VAT as we type.
  -#
  -#      1. You're going to need a form. Make an html page and put a form on it. The -#form will need a price field to let the user enter an amount in pounds.
  -#      2. You'll need somewhere to display the result. Create an empty div on the -#page and give it a class of vat. We're going to use jQuery to put the VAT into -#this little div once it's calculated.
  -#      3. Import jQuery and a blank js file into your html using script tags. You -#might as well go ahead and import a CSS file too for later prettification.
  -#      4. Write an event handler that responds to the keyUp event on your price -#field. It should do the following:
  -#
  -#      * Get the value the user has entered in the price field and store it in a -#variable.
  -#      * Calculate the VAT and store the result in a vat variable
  -#      * Put the VAT into the vat div you created.
  -#
  -#      __Hidden Ninja Round__
  -#
  -#      If you're crouching on the ceiling waiting for more challenge, try this.
  -#
  -#      1. What will happen if the user enters a value that is not a number. Test for -#this case and avoid it (hint: google the isNaN function)
  -#
  -#      ## Project 4 - Make a Calculator ##
  -#
  -#      If you're itching for greater challenge, this should stretch you. Use CSS to -#design up a little calculator with number keys. Write functions to be executed -#for each button. Try and make it work
  -#
  -#      1. You'll need an HTML page with all the buttons on. Make it.
  -#      2. You'll need a CSS file to make it look like a calculator. I'd suggest using -#absolute positioning for the layout, but hey.
  -#      3. You'll need to hook each of the buttons up to an event handler so do this.
  -#      4. You'll need a variable to store the current value in the display, one to -#store the current function (+, -, / or *), and one for the running total. -#Whenever you press the equals button, use the value in the display to update -#the running total using the currently selected function.
  -#
  -#
  -#      ## Further Work ##
  -#
  -#      Further Work
  -#
  -#      1. Reinvent your calculator application from the previous day using the best -#practice principles you've learned today. You'll need to create a calculator -#object, then namespace all the functions within it. Wire up the buttons to the -#functions using jQuery.
  -#
  -#      2. Create a JavaScript dropdown menu. Create an unordered nested list of lists -#in your html. Use CSS to hide all the sublists, then style the top list -#horizontally, using floats. Use jQuery hover to reveal the sublist on hover.
  -#
  -#      3. Form validation. Create a form containing four fields. The first one is an -#email field and must be filled in. The second is a password field and must be -#over 8 characters in length. The third is a password verification field and -#must be the same as the password field. The last one is a checkbox. It must be -#checked.
  -#
  -#      Make the form validate on submit and add a class to all the field elements -#that fail validation. Then use CSS to highlight the failed fields.
  -#
  -#      For bonus points, make the form validate on keyUp, so that any field that is -#valid is marked with a little tick, or similar. The entity reference for a -#tick is: &#10003;
  
  %article
    #disqus_thread
    %script
      :plain
        var disqus_shortname = 'nicholasjohnson';
        (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    %noscript
      Please enable JavaScript to view the
      %a{ href: "http://disqus.com/?ref_noscript"}comments powered by Disqus.
  
    %a.dsq-brlink{href: "http://disqus.com"}
      comments powered by
      %span.logo-disqus Disqus
  