---
  title: "Putting it all together"
  section: "javascript"
  course: "intro-to-javascript"
  exercise: "integration"
  layout: "exercise"
  ---
  %article
    %section
      :markdown
  
        # Putting it all together
  
        We've now learned pretty much all the fundamentals of JavaScript. You should now be equipped to write some simple programs.
  
    %section.exercise
      :markdown
        ## Exercise - A Sandwich Calculator
  
        1. Write a function called sandwich calculator. This should accept one value: slicesOfBread
        2. The function should return the total number of possible sandwiches based on the amount of slices available, so if there are 10 slices, it should return 5. Test your function with an alert box.
        3. Extend your function so it accepts two values, slicesOfBread and slicesOfCheese.
        4. It takes two slices of bread and one of cheese to make a sandwich. The function should return the total number of possible sandwiches, so if there are 10 slices of bread, but only 1 of cheese, it should return 1. You'll need an if statement to make this work.
  
    %section.exercise
      :markdown
        ## Exercise - An Array of Sandwiches
  
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
  