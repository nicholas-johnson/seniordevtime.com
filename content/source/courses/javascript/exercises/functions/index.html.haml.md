%article
  
    %section
      :markdown
        # Functional Code
  
        In JavaScript we create functions like this:
  
      :ruby
        code = <<-CODE
        function() {
          alert('hello from the function');
        }
        CODE
      =code(code)
  
      :markdown
  
        We can assign a function to a variable like this:
  
  
      :ruby
        code = <<-CODE
        var say hello = function() {
          alert('hello from the function');
        };
        CODE
      =code(code)
  
      :markdown
  
        And call it like this:
  
      :ruby
        code = <<-CODE
        hello();
        CODE
      =code(code)
  
    %section.exercise
      :markdown
  
        ## Beginner Exercise - from the book
        Review the secion on [functions](/javascript-book/#functions---doing-things-more-than-once) and attempt the exercises.
  
        You can also find this material in your JavaScript book.
  
    %section.exercise
      :markdown
  
        ## Further Exercise
  
        Attempt the Sandwich calculator on page 30 of your book. [You can get this exercise online here](/javascript-book/#basics-exercises)
  