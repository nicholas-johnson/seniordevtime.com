---
  title: "Strings"
  section: "javascript"
  course: "intro-to-javascript"
  exercise: "strings"
  layout: "exercise"
  ---
  
  %article
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
  
        ## Alerting
  
        If we need to know what's inside a string we can find out using an alert box like so:
  
      :ruby
        code = <<-CODE
        alert("Hi there " + "hello");
        CODE
      =code(code)
  
      :markdown
  
        One of the ways we can use strings is to help our program talk to our user. We saw this in the first example in the last section. We used an alert box to display the string "Hello JavaScript, your new best friend!". Strings have a whole host of uses that we'll come too soon.
  
        ## Console.log
  
        We can also get data out using the console object. We write:
  
        console.log('Hi from the console');
  
        The console is a developer tool. On windows you can open it by pressing F12.
  
    %section.exercise
      :markdown
        ## Exercise - Let's alert some strings ##
  
        Nice and simple this one. We're just going to create some strings and pop them up in little boxes.
  
        1. Put the phrase "Hello there JavaScript" in an alert box.
        2. Put the phrase "Hello there Java" + "Script" in an alert box.
  
    %section
      :markdown
        ## Strings are objects
  
        Objects are little balls of related data and ability. We can access information stored in an object using a dot (.).
  
        Let's get the length of the string. We can do it like this:
  
      :ruby
        code = <<-CODE
        "Allo allo allo".length
        CODE
      =code(code)
  
      :markdown
  
        We might even alert this:
  
      :ruby
        code = <<-CODE
        alert("Allo allo allo".length)
        CODE
      =code(code)
  
    %section.exercise
      :markdown
  
        ## Exercise - Monkey with Strings
  
        1. Write a program that tells me the the number of characters in your name.
        2. Tell me what 123+456 is. Now tell me what "123" + "456" is.
  