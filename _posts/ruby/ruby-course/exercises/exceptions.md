---
title: "Ruby Exceptions"
description: ""
section: "ruby"
course: "ruby-course"
exercise: "exceptions"
layout: "exercise"
---

%article



# Exception Handling

Exception handling in Ruby is very similar to other languages.

## Raising an Exception

Raising an exception in Ruby is trivially easy. We use raise.

```js
  raise "A Error Occurred"
```





This will raise the default RuntimeException.


## Raising a Specific Exception

We can also raise a specific type of exception:

```js
  value = "Hi there"
  raise TypeError, 'Expected a Fixnum' if value.class != Fixnum
```





## Rescuing Exceptions

We can rescue exceptions easily. Put the code that might raise an exception in a begin, rescue end block. If an exception occurs, control will be passed to the rescue section.

```js
  begin
    raise "A problem occurred"
  rescue => e
    puts "Something bad happened"
    puts e.message
  end
```





## Rescuing Specific Exceptions

We can rescue different types of exceptions

```js
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
```





## The Ruby Exception Hierarchy

Here are the built in exceptions available in Ruby:

```js
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
```





## Defining Your Own Exception

You can define your own exceptions like so:

```js
  class MyNewError < StandardError
  end
```





You can then raise your new exception as you see fit.




## Exception Exercises ##

Try these exercises to get a feel for exception handling in Ruby.




## Raising an Argument Error

Extend your kitten class from yesterday. Lets assume your kitten needs an age (0 will not do) Raise an argument error if age is not set in the initialiser




## Raise a Type Error

Your kittens age must be a Fixnum. Check for this, if it is not, throw a Type Error




## Catching a Division By Zero Error

Can your kitten do maths? If not, write a divide function now that accepts two values and divides them. Catch the division by zero error, and if it occurs, return nil.


