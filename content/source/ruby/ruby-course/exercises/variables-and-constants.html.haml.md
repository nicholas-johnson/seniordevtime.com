---
  title: "Ruby VAriables and Constants"
  description: ""
  section: "ruby"
  course: "ruby-course"
  exercise: "variables-and-constants"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        # Variables and Constants
  
        Let's talk about Variables. I'll assume here that you know what a variable is. Compared to some languages, Ruby is very free and easy about variables, it cuts you a lot of slack and assumes for the most part that you know what you are doing.
  
  
        ## Variables are duck typed
  
        Variables in Ruby are **duck typed**. If the contents of a variable can quack like a duck, it will be allowed to swim on the pond. The interpreter will not do any type checking for you in advance. This might upset people coming from a .Net, C++ or Java background, and it's one of the reasons Ruby is suited to small teams of crack developers, since you can't enforce an interface, and can't easily prevent people from passing silly parameters to your methods.
  
        You just have to trust to your basic intelligence. Scary?
  
        It's also one of the reasons that Ruby is so fabulously productive, since you don't need to interact with the type system. Polymorphism is assumed. You don't need to do any work to enable it. Productivity wise, this is an enormous win, provided you can trust yourself and your co-workers.
  
        ## Declaring variables
  
        Variables come into existence when they are first declared. There is no need to define them.
  
        For example:
  
      :ruby
        code = <<-CODE
        hi = "Hello Ruby"
        some_big_number = 1000000
        CODE
      =code(code, :ruby)
  
      :markdown
  
        This is pretty sensible. A variable can hold anything you like, and the same variable can be re-purposed to hold something else entirely:
  
      :ruby
        code = <<-CODE
        a = 10
        a = "red"
        CODE
      =code(code, :ruby)
  
      :markdown
  
        ## A little best practice: naming conventions
  
        There are naming conventions governing variable names in Ruby. These conventions are not enforced, but you should stick by them if you want people to like you, since Ruby is case sensitive.
  
        ## Variable names ##
  
        Variable names always start with a lower case letter. By convention they are all lower case with optional underscores (snake case) eg:
  
      :ruby
        code = <<-CODE
        number_of_people
        user_name
        height_of_the_eiffel_tower
        CODE
      =code(code, :ruby)
  
      :markdown
  
        ### Constants ###
  
        Constants start with an upper case letter and by convention are CAPITALISED_SNAKE_CASE:
  
      :ruby
        code = <<-CODE
        MAX_NUMBER_OF_PEOPLE = 20
        NUMBER_OF_DAYS_IN_A_LEAP_YEAR = 364
        CODE
      =code(code, :ruby)
  
      :markdown
  
        Note that constants are not actually constant, you can redefine them if you really, really need to. You'll get a warning, but it won't break. Ruby is like this, it assumes you're clever. Yes, Ruby is a language that gives you the respect you DESERVE.
  
        ## Clever Tricks ##
  
        There are lots of little tricks you can do with variables that are useful, and can help a lot when trying to appear clever.
  
        ### Assignment chaining
  
        Assignments can be chained saving typing eg:
  
      :ruby
        code = <<-CODE
        x = y = z = 4
        puts x + y + z
          => 12
        CODE
      =code(code, :ruby)
  
      :markdown
  
        This works because the output of the assignment is the value that is being defined, so the output of z = 4 is 4.
  
        ### Parallel assignment
  
        Ruby also supports parallel assignment allowing you to assign multiple different variables on one line, eg:
  
      :ruby
        code = <<-CODE
        a,b = 5,6
  
        # a => 5
        # b => 6
        CODE
      =code(code, :ruby)
  
      :markdown
  
        You can exploit this to swap the values of two variables in one line:
  
      :ruby
        code = <<-CODE
        a,b = b,a
  
        # a => 6
        # b => 5
        CODE
      =code(code, :ruby)
  
  
  -# TODO Make Exercises!!!!
  