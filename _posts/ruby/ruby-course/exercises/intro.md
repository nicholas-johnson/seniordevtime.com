---
title: "Ruby Intro"
description: ""
section: "ruby"
course: "ruby-course"
exercise: "intro"
layout: "exercise"
---

%article


# Welcome to Ruby

To get started you're going to need some basics. I'm going to assume here that you have a copy of Ruby, a terminal, and a text editor of some description. You'll need access to irb, the interactive ruby interpreter.

The following things need to be true:

1. You can get up a command line or terminal of some description, ideally bash or similar.
2. If you type ruby at the command line, this needs to work and not throw an error
3. If you type irb at a command line, this too needs to work (type exit to get back out again)

If these things are not all true for you, please see me.

## Hello IRB

IRB is the interactive ruby interpreter. If you have access to a command line and a copy of Ruby, you will have IRB. It's a testbed. It lets you try ideas out quickly. Here we're going to use it to write our first Ruby program.

At a command line, type

```js
  irb
```





to enter interactive Ruby. Got it up? Good. Now type:

```ruby
  puts "Hello Ruby you charming little thing"
```





Now press enter. See what you did there? Puts stands for put string. It just appends a string to the current output stream, which here is the terminal. Notice as well what you didn't do. You typed no semi-colons and no braces.

Now lets go a step further

In IRB, type:

```ruby
  puts "Hello Ruby " * 5
```





See what happened? Multiplication works on strings. This might seem odd at first, but it's actually consistent with the way that Ruby treats operators as methods. We'll come to this later.

IRB is tremendously useful for trying things out. Because Ruby is so expressive, you can do a huge amount just on one line. Ruby loves it when you write clean, concise, and above all, expressive code, and IRB can help you do this. You can tackle many of the exercises in this book using IRB.






## IRB Exercise

Throughout this book you'll find lots fun and exciting exercises. I'd encourage you to try them out, but be pragmatic. If something is really simple and obvious, you can skip it, I won't mind. Here's a simple one for starters:

Write a line of code in IRB which prints our "Hello Ruby". Use puts to output a string.

You can create a simple loop using the times method:

```js
  10.times { puts 'cheese and crackers' }
```





Make irb print Hello World 50 times, 1000 times, 100000 times.




## Editor Exercise

In this exercise we're going to create a simple ruby app and run it from the command line. The goal is just to make sure that our environment works and we can use it.

1. Fire up your editor (Sublime, Brackets, Vim, Notepad, etc) and create a file called hello_world.rb
2. Create a hello world app in the editor and call it from the command line.


## Further Editor Exercise

In this exercise we'll create a simple program that reads from the command line.

1. Get a value from the command line using a = gets
2. Write a little program that asks the user if they like cheese.
3. If they reply yes, hand them some gouda. If they reply no, give them a stern telling off.

An if statement in Ruby looks like this:

```js
  if a
    puts('a was true')
  else
    puts('a was false')
  end
```




