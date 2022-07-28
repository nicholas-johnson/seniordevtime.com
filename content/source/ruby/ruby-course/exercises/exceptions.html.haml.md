---
  title: "Ruby Exceptions"
  description: ""
  section: "ruby"
  course: "ruby-course"
  exercise: "exceptions"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        # Exception Handling
  
        Exception handling in Ruby is very similar to other languages.
  
        ## Raising an Exception
  
        Raising an exception in Ruby is trivially easy. We use raise.
  
      :ruby
        code = <<-CODE
        raise "A Error Occurred"
        CODE
      =code(code)
  
      :markdown
  
        This will raise the default RuntimeException.
  
  
        ## Raising a Specific Exception
  
        We can also raise a specific type of exception:
  
      :ruby
        code = <<-CODE
        value = "Hi there"
        raise TypeError, 'Expected a Fixnum' if value.class != Fixnum
        CODE
      =code(code)
  
      :markdown
  
        ## Rescuing Exceptions
  
        We can rescue exceptions easily. Put the code that might raise an exception in a begin, rescue end block. If an exception occurs, control will be passed to the rescue section.
  
      :ruby
        code = <<-CODE
        begin
          raise "A problem occurred"
        rescue => e
          puts "Something bad happened"
          puts e.message
        end
        CODE
      =code(code)
  
      :markdown
  
        ## Rescuing Specific Exceptions
  
        We can rescue different types of exceptions
  
      :ruby
        code = <<-CODE
        value = "Hi there"
  
        begin
          raise TypeError, 'Expected a Fixnum' if value.class != Fixnum
          raise "A problem occurred"
        rescue TypeError => e
          puts "A Type Error Occurred"
          puts e.message
        rescue => e
          puts "an unspecified error occurred"
        end
        CODE
      =code(code)
  
      :markdown
  
        ## The Ruby Exception Hierarchy
  
        Here are the built in exceptions available in Ruby:
  
      :ruby
        code = <<-CODE
        Exception
         NoMemoryError
         ScriptError
           LoadError
           NotImplementedError
           SyntaxError
         SignalException
           Interrupt
         StandardError
           ArgumentError
           IOError
             EOFError
           IndexError
           LocalJumpError
           NameError
             NoMethodError
           RangeError
             FloatDomainError
           RegexpError
           RuntimeError
           SecurityError
           SystemCallError
           SystemStackError
           ThreadError
           TypeError
           ZeroDivisionError
         SystemExit
         fatal
        CODE
      =code(code)
  
      :markdown
  
        ## Defining Your Own Exception
  
        You can define your own exceptions like so:
  
      :ruby
        code = <<-CODE
        class MyNewError < StandardError
        end
        CODE
      =code(code)
  
      :markdown
  
        You can then raise your new exception as you see fit.
  
    %section.exercise
      :markdown
  
        ## Exception Exercises ##
  
        Try these exercises to get a feel for exception handling in Ruby.
  
    %section.exercise
      :markdown
  
        ## Raising an Argument Error
  
        Extend your kitten class from yesterday. Lets assume your kitten needs an age (0 will not do) Raise an argument error if age is not set in the initialiser
  
    %section.exercise
      :markdown
  
        ## Raise a Type Error
  
        Your kittens age must be a Fixnum. Check for this, if it is not, throw a Type Error
  
    %section.exercise
      :markdown
  
        ## Catching a Division By Zero Error
  
        Can your kitten do maths? If not, write a divide function now that accepts two values and divides them. Catch the division by zero error, and if it occurs, return nil.
  
  
  