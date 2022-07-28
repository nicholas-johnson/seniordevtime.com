---
  title: "Ruby Functions"
  description: ""
  section: "ruby"
  course: "ruby-course"
  exercise: "functions"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        # Functions
  
        Functions are declared using the def keyword:
  
      :ruby
        code = <<-CODE
        def greeting
          puts "Hello Ruby"
        end
  
        greeting()
          => Hello Ruby
        CODE
      =code(code, :ruby)
  
      :markdown
  
  
        ## Accepting parameters
  
        Functions can accept parameters as you would expect. We pass them like this:
  
      :ruby
        code = <<-CODE
        def greet(name)
          puts "hello #\{name}"
        end
  
        greet("dave")
        => "hello dave"
        CODE
      =code(code, :ruby)
  
      :markdown
  
  
        ## Optional braces
  
        When calling a function, the braces are optional.
  
      :ruby
        code = <<-CODE
        greet "dave"
          => "hello dave"
        CODE
      =code(code, :ruby)
  
      :markdown
  
        This is a really nice syntax, and comes into it's own when we start writing methods.
  
        ## Returning a Value
  
        Functions can return a value. We pass back a value using the return statement, like so:
  
      :ruby
        code = <<-CODE
        def say_hello_to(name)
          return "hello #\{name}"
        end
  
        puts say_hello_to "dave"
        => "hello dave"
        CODE
      =code(code, :ruby)
  
      :markdown
  
        get_greeting_for "dave" __evaluates__ to the string "hello dave". This string is received by puts, which then outputs it to the screen.
  
        ### Optional return statements ###
  
        The return statement is also optional. If it's omitted the function will return the last evaluated expression, so:
  
      :ruby
        code = <<-CODE
        def get_greeting_for(name)
         "hello #\{name}"
        end
  
        puts get_greeting_for "dave"
        => "hello dave"
        CODE
      =code(code, :ruby)
  
      :markdown
  
        This is a clean and useful syntax for short methods such as getters.
  
        ### Default Values ###
  
        We can set the default value of an argument, so if no value is passed, our function will still work:
  
      :ruby
        code = <<-CODE
        def get_greeting_for(name="anonymous")
          return "hello #\{name}"
        end
  
        puts get_greeting_for
        => "hello anonymous"
        CODE
      =code(code, :ruby)
  
      :markdown
  
        Note that if we have several arguments, and some are missing, they will be filled in from left to right, so the last ones will take their default values.
  
  
        ## Upshot
  
        * Functions in Ruby are created using the def keyword (short for define).
        * Functions that exist in an object are typically called methods.
        * Functions and methods are the same, except one belongs to an object.
        * Objects are created from classes using the .new method
  
  
    %section.exercise
      :markdown
  
        ## Exercise - Meet and greet
  
        Write a simple function that greets a person by name. It should receive a name and return a string.
  
        If it is called without parameters it should say "Hello anonymous"
  
    %section.exercise
      :markdown
  
        ## Exercise - A simple function
  
        Write a function which receives a value and outputs a string containing all the numbers up to and including that value.
  
        Integrate this into a command line app.
  
  
  -# TODO: Write moar exercises?
  