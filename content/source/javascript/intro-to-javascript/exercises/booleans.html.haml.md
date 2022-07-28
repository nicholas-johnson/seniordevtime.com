---
  title: "Booleans"
  section: "javascript"
  course: "intro-to-javascript"
  exercise: "booleans"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
        # An exciting foray into Booleans. What Ho!
  
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
        const daytime = true;
        const sunny = true;
        const canGoOut = (daytime && sunny);
        CODE
      =code(code)
  
      :markdown
  
        Here we set a variable called canGoOut. This variable will be true if both daytime and sunny are true.
  
        We can use this in a program like so:
  
  
  
      :ruby
        code = <<-CODE
        const daytime = true
        const sunny = true
        const canGoOut = (daytime && sunny);
        if (canGoOut) {
          alert("lets go out!")
        }
        CODE
      =code(code)
  
      :markdown
  
        or more simply
  
  
      :ruby
        code = <<-CODE
        const daytime = true
        const sunny = true
        if (daytime && sunny) {
          alert("lets go out!")
        }
        CODE
      =code(code)
  
      :markdown
  
    %section.exercise
      :markdown
  
        ## Exercise - this and that
  
        1. Create an HTML file and linked Javascript file.
        2. Enter the daytime && sunny code above and run it.
        3. What happens if daytime is not true?
        4. What happens if sunny is not true?
        5. Add an icecreamTruck variable. Only go out if there's icecream.
  
  
    %section
      :markdown
  
  
        ## This OR That ##
  
        The second useful thing we can do with Booleans is or. Sometimes we want to be able to say "do something if this other thing is true, or if this second other thing is true. We say or in Javascript using the vertical bar character. For example:
  
  
      :ruby
        code = <<-CODE
        const iFancyIcecream = false;
        const youFancyIcecream = true;
        const buyIcecream = (iFancyIcecream || youFancyIcecream);
        CODE
      =code(code)
  
      :markdown
  
        We can use this in a program like this:
  
  
      :ruby
        code = <<-CODE
        const iFancyIcecream = false;
        const youFancyIcecream = true;
        if (iFancyIcecream || youFancyIcecream) {
          alert("I am just going to the shop now...");
        }
        CODE
      =code(code)
  
      :markdown
  
    %section.exercise
      :markdown
  
        ## Exercise - IceCream
  
        1. Create an HTML file and linked Javascript file.
        2. Enter the icecream code above and run it.
        3. What happens if I fancy icecream?
        4. What happens if you fancy icecream?
        5. What happens if neither of us fancies icecream?
        6. Add the sunny variable. Only go out if I fancy icecream or you fancy icecream, and it's sunny. You'll need to use some braces here.
        7. Add the icecreamTruck variable. Only go out if I fancy icecream or you fancy icecream, and it's sunny and there's an icecream truck nearby.
  
    %section
      :markdown
  
        ## Not That! ##
  
        The last useful thing we can do with Booleans is Not. Sometimes we want something to happen if something is not true. For example we might want to display an error if someone has not filled in a field correctly. We say not! in JavaScript using an exclamation mark, like so:
  
      :ruby
        code = <<-CODE
        const filledInField = false
        if (!filledInField) {
          alert("Please fill in the field!");
        }
        CODE
      =code(code)
  
      :markdown
  
    %section.exercise
      :markdown
  
        ## Exercise - NOT
  
        1. Create an HTML file and linked Javascript file.
        2. Enter the not that! code above and run it.
        3. What happens if the field is filled in?
  
    %section
      :markdown
  
        ## Equals this?
  
        So far and so esoteric. It's all very well setting Boolean values explicitly in our code, but for this to be useful we need to be able to be able to make Booleans from other values. Lets return to our timing example above. Lets say that have a variable called hour, and we want to determine if it's mid-day or not. We might do something like this:
  
      :ruby
        code = <<-CODE
        const hour = 12;
        const midday = (hour === 12);
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
  
    %section.exercise
      :markdown
  
        ## Exercise - Midday
  
        1. Create an HTML file and linked JavaScript file.
        2. Enter the code above and run it.
        3. What is the value of midday?
  
    %section
      :markdown
  
        ## My dad is bigger than your dad ##
  
        We can do other mathematical operations to make Booleans. Here we do one thing if hour > 12 and another if hour is less than 12.
  
  
      :ruby
        code = <<-CODE
        const hour = 13;
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
        const hour = 13;
        if ((hour > 11) && (hour < 14)) {
          alert("you could have lunch now.");
        } else {
          alert("it isn't lunchtime.");
        }
        CODE
      =code(code)
  
      :markdown
  
    %section.exercise
      :markdown
  
        ## Exercise - Build a little clock
  
        1. Create an HTML file and linked Javascript file.
        2. Enter the code above and run it.
        3. What is the result?
        4. Use else if operators to create a sort of an alert clock that says different things at different times of day.
        5. You can use the following code to get the actual time of day:
  
      :ruby
        code = <<-CODE
        const hour = (new Date()).getHours();
        CODE
      =code(code)
  
      :markdown
  
        Hook your clock up to the actual hour of the day.
  
    %section.exercise
      :markdown
        ## Further Exercise
  
        1. Create a myDadSize variable
        2. Create a yourDadSize variable
        3. If my dad is bigger than your dad, alert this fact.
        4. If your dad is bigger than my dad, alert this also.
        5. If both dads are the same size, alert this fact also.
  
    %section
      :markdown
  
        ## Answers ##
  
        ### My dad is bigger than your dad ###
  
        The best way to tackle this is with an if / else if / else statement. There are 3 possible results, either one dad is bigger than the other, or they are the same.
  
  
      :ruby
        code = <<-CODE
        const myDadSize = 12;
        const yourDadSize = 13;
  
        if ( myDadSize > yourDadSize ) {
          alert("My dad is the biggest (of course).");
        } else if  ( myDadSize < yourDadSize ) {
          alert("Oh, your dad is the biggest.");
        } else{
          alert("Our dads are the same size");
        }
        CODE
      =code(code)
  
  
  