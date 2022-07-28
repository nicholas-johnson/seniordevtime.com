---
title: "Ruby Strings"
description: ""
section: "ruby"
course: "ruby-course"
exercise: "strings"
layout: "exercise"
---

%article



# Strings

Ruby has an unusually rich and detailed String manipulation toolkit. String creation is similar to other languages

```js
  string_1 = "Hello Ruby"
  string_2 = 'Hello Everyone'
  puts string_1
    => Hello Ruby
  puts string_2
    => Hello Everyone
```





You are free to use single or double quotes around your string.

## Strings are Objects

Strings are real objects and have methods:

```js
  s = "Hello Ruby"
  puts s.reverse
    => "ybuR olleH"
```






## String Literals are allowed

As you might expect, you can create strings, and call methods on them directly.

```js
  "Hello Ruby".upcase
    => "HELLO RUBY"
```






## Embedding Variables right in Strings

Use double quotes and the \#{} syntax if you want Ruby to look for variables embedded in a string:

```ruby
  name = "Derrick"
  puts "Hello, my name is \#{name}"
    => "Hello, my name us Derrick"
```





Nice, simple, inline, readable.

## Escaping with \\

You can include escape characters in your string with a backslash:

```ruby
  "Ruby\'s great! \\n Oh yes it is!"
    => "Ruby's great"
    => "Oh yes it is!"
```



%aside.box



## 'Single' vs "double" quoted strings

A question I get asked all the time is whether we should prefer single or double quotes.

Double quotes will hunt for variables and escape characters, so are technically slightly slower.

For this reason you should use single quotes, except where you need an embedded variable or escape character.





## String concatenation

Add two strings together using simple arithmetic:

```js
  "Hello " + "Ruby"
    => "Hello Ruby"
  "Hello " << "Everybody"
    => "Hello Everybody"
  "Hello " * 5
    => "Hello Hello Hello Hello Hello"
```





More likely you will want to do a join on an array, something more like this:

```js
  ["Hello", "Ruby"].join(' ')
```





## Conversion to other types

Strings can be converted to lots of other types using the casting methods. There are lots of these built in, but feel free to write your own as well. The "to_i" method converts to an integer.

```js
  "5".to_i
    => 5
  "99 Red Balloons".to_i
    => 99
```





## Conversion from other types

Strings can be created from any other type using the to_s method. For example, if you have an integer, and you need it to be a string, do it like this:

```js
  5.to_s
    => "5"
```






-#  ## Exercise - The String API

-#  The String API is rich and deep




## Exercise - Working with Strings

Review the above and attempt the following

1. Create a string and assign it to a variable.
2. Reverse the string using the reverse method.
3. Permanently reverse the string using the reverse! method. Methods that end in an ! are destructive, they affect the original variable.
4. Use gets to populate a variable which contains your name. Now use the #{} syntax to create a greeting string that incorporates this variable.






## Exercise GSub

The gsub String method gives us is global substitution. Read about it here:

<http://ruby-doc.org/core-2.1.4/String.html#method-i-gsub>

I have an issue where I commonly type a instead of e. It's a terrible problem for me, but you can help. Write code to replace all instances of the letter 'a' in a string with the letter 'e'.




## Exercise - The String API

Check out the string API here:

<http://ruby-doc.org/core-2.2.2/String.html>

In my application I have a string like this:

```js
  email = "   dave@davely.com "
```





I need rid of that whitespace. Please clean it up for me.

Now I have a string like this:

```js
  first_name = "  dave"
```





I need it to be "Dave"

Please tidy it so we can save it to the database.



## Exercise - Casting

1. Write code which receives a number and a name from the command line, say "Hal" and "123".
2. Now output "I'm sorry Dave, I can't do that" 123 times



## Exercise - strftime

The Time class will allow you to easily format a Time object as a String using strftime.

Get the current time using Time.now

Now review the strftime api here <http://ruby-doc.org/core-2.2.2/Time.html#method-i-strftime>

Now output the time in this format:

"20 Jan 1946 at 12:45"
