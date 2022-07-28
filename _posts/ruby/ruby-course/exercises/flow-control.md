---
title: "Ruby Flow Control"
description: ""
section: "ruby"
course: "ruby-course"
exercise: "flow-control"
layout: "exercise"
---

%article




# Flow Control #

Ruby loves it when you tell it what to do.

## if/elsif/else/end ##

If statements are present. They work as you'd expect. Notice that no braces are required.

```ruby
  bacon = true
  fish = false
  if fish
    puts 'I like fish'
  elsif bacon
    puts 'I like bacon'
  else
    puts "I don't like fish or bacon"
  end

    => 'I like bacon'
```






## unless

The unless keyword is the opposite of the if keyword. It's equivalent to !if (not if). It can make your code more readable.

```ruby
  bacon = false
  unless bacon
    puts 'fish'
  else  puts 'bacon'
  end

    => "fish"
```






## Statement Modifiers

Ruby loves it when you write things concisely. The if and unless keywords can also be placed after the line of code you may or may not want to execute. When used in this way they are called statement modifiers:

```js
  user = "dave"

  puts "Hello \#{user}" if user
  puts 'please log in' unless user
```







## The Ternary operator

Like most languages Ruby includes a ternary operator. It works as you'd expect. If the first portion evaluates to true the first result is given, otherwise the second result is given:

```js
  bacon = true
  puts bacon ? 'bacon' : 'fish'
    => "bacon"
```





This is equivalent to:

```js
  bacon = true
  if bacon
    puts 'bacon'
  else
    puts 'fish'
  end

    => "bacon"
```







# Booleans, Logic, nil and undefined #

Booleans in Ruby are logical and clear

## What counts as false? ##

Only Nil and False are false in Ruby. If it exists it's true. That includes zeros, empty strings, etc. This is because 0 is an object in Ruby, as is the empty string ""

We can test this with a short function, that determines if the parameter evaluates to true or false, like so:

```ruby
  def true?(value)
    if (value)
      true
    else
      false
    end
  end

  true?(false)    # => false
  true?(nil)      # => false
  true?(0)        # => true
  true?("")       # => true
  true?(true)     # => true
  true?(15)       # => true
  true?([0,1,2])  # => true
  true?('a'..'z') # => true
  true?("pears")  # => true
  true?(:bananas) # => true
```





A variable is nil if the variable has been declared but doesn't point to anything (remember Ruby is fully object oriented so all variables are pointers to objects)


## Nil ##

A variable is nil if it has been declared, but holds no value. Nil exists as a type, and has methods. For example:

```js
  a = nil
  a.to_s
    => ""
  a.nil?
    => true
```





Nil is a very useful thing to be able to return. It means "no value".


## Undefined

A variable is undefined if it has not been declared. You can test for this using the defined? operator.

```js
  a = 1
  defined? a
    => "local-variable"
  defined? b
    => nil
```





## Boolean Algebra

You can do all the standard things using Boolean algebra.

```js
  true && true
    => true
  true || false
    => true
  12 == 12
    => true
```





are all supported.

## Special uses for logical OR ||

There are useful things that can be done with the OR \|\| command. The second part is only evaluated if the first part returns false (nil or false evaluate to false), and the return value is the last value calculated. Rails exploits this letting you do neat things like this:

```js
  name = nil
  user_name = name || "Anonymous Coward"
```





Here we have a default value. If name is nil, anonymous coward will be used instead.






## Exercise - Student Simulator

A simple one to start with. I have a boolean variable called hungry:

```js
  hungry = true
```





1. If hungry is true output "Make toast".
2. If it is not, output the word: "Go to sleep".





## Exercise - Cat name picker

I want to choose a name for my cat, but for personal and ideological reasons I am only interested in cat names which start with the letter R.

1. Make a function that receives a cat name.
2. If a cat starts with the letter "R", return the name, else return nil. (Remember you do not need to explicitly return nil, just don't return.)

You can get the first letter of a string using the square bracket syntax:

```js
  "hello"[0]
  # => "h"
```




## Optional extension

Employ a while loop to loop over the function until an acceptable name is suggested. A while loop in ruby looks like this:

```js
  x = 0
  while x < 5
    x += 1
    puts x
  end
```





## Further extension

Catch the case where I accidentally type "Ruby the Cat" instead of "ruby the Cat". The easiest way to do this is with a downcase.

<http://ruby-doc.org/core-2.1.0/String.html#method-i-downcase>




# Case Statements

Of course Ruby also has case statements. You almost never see these in the wild as case statements are a bit, well, 1990s, but if you should decide you need one, here's how they work.

```js
  refreshment_type_required = "biscuit"
  suggest_you_eat = case refreshment_type_required
    when "pastry" : "cinnamon danish whirl"
    when "hot drink" : "mocha with sprinkles"
    when "biscuit" : "packet of bourbon creams"
    else "glass of water"
  end
```





A case statement will break automatically if you hit a matching term, you don't need to tell it to break as with some other languages.


-# TODO Make Case Exercise!!!!
