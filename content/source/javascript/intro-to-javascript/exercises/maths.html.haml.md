---
  title: "Maths"
  section: "javascript"
  course: "intro-to-javascript"
  exercise: "maths"
  layout: "exercise"
  ---
  
  %article
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
    %section.exercise
      :markdown
        ## Exercise - equality
  
        * Try this now, alert (1 + 1) === 2, what do you get?
        * Now alert (5 + 5) === 10
  
        What do you get?
  
        Why the braces? Well, because I want to make sure that 1 + 1 is evaluated first. What if I were to do this?
  
        * 5 + (5 == 2) - try this now. Why did you get this result?
        * Now try 5 + (5 == 5) - Why did you get this result?
  
    %section.exercise
      :markdown
  
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
  
      %a{ href: "", :'ng-click' => 'showAnswers = !showAnswers' } Show Answers
      .answers{ :'ng-show' => 'showAnswers' }
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
  
    %section.exercise
      :markdown
        ## Exercise: Doing Sums ##
  
        1. Create an HTML file and linked Javascript file.
        2. Output 5 - 2 using an alert box
        3. Output 6 * 9
        4. Output 6 * 9 + 4
        5. Output 6 * (9 + 4)
        6. Output (1 + 1) * (1 + 1)
  
  
      %a{ href: "", :'ng-click' => 'showAnswers = !showAnswers' } Show Answers
  
      .answers{ :'ng-show' => 'showAnswers' }
        :markdown
          ### Answers ##
  
          1. &nbsp;
          2. alert( 5 - 2 );
          3. alert( 6 * 9 );
          4. alert( 6 * 9 + 4 );
          5. alert( 6 * (9 + 4) );
          6. alert( (1 + 1) * (1 + 1) );
  
      :markdown
  
    %section
      :markdown
  
        You did it! Horray for maths! We need to do this sort of thing all the time in JavaScript, whether we're working out the size of a page element, writing a handy little VAT calculator for our online shopping cart, or deciding to up our spend on Google AdWords.
  
        Now on to functions...
  
  