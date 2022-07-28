---
title: "Ruby Blocks"
description: ""
section: "ruby"
course: "ruby-course"
exercise: "receiving-a-block"
layout: "exercise"
---

%article



# Writing methods which accept blocks

So how does a method yield control to a block? Well, we use a keyword called yield. For example, the following (very simple and not terribly useful) function accepts a block of code and then simply runs it once:

```js
  def do_once
    yield
  end

  do_once {puts "hello"}
    => "hello"
  do_once {10+10}
    => 20
```





You can call yield as many times as you like. This is how the Array.each method works, by iterating over the array and calling yield for each item, passing the item as a parameter. Here's a silly example:

```js
  def do_thrice
    yield
    yield
    yield
  end

  do_thrice {puts "hello"}
    => "hello hello hello"

  do_thrice {puts "hello".upcase}
    => "HELLO HELLO HELLO"
```





### Passing Parameters to a Block ###

A block is an unnamed function and you can easily pass parameters to it. The following example accepts an array of names and for each one sends a greeting to the block. The block in this case just puts the greeting to the screen.

```js
  def greet(names)
    for name in names
      yield("Hi There #\{name}!")
    end
  end

  greet(["suzie","james","martha"]) { |greeting| puts greeting }
    => Hi There suzie!
    Hi There james!
    Hi There martha!
```





## Upshot

We can tell our function to receive a block in two ways:

1. Explicitly, by simply receiving a block parameter
2. Implicitly, by calling yield within our block

We can check if a block was passed in using the block_given? method.

## Re-implement the Fixnum#times method Exercises

This calls the block a specified number of times. It allows you to write code like this:

```ruby
  12.times_over { puts "starfish" }
```





Recreate this method in your own words.

Extend it so you can call it like this:

```ruby
  12.times_over_with_index { |i| puts "\#{i} - starfish" }
```





## Re-implement the Array#each_with_index method.

This method calls its block once for each element in an array. You call it like this:

```ruby
  [1,2,'cats'].each_with_index { |el, i| puts "\#{i} - \#{el}" }
```





## Further Exercise - Real world block code

Check out the Rails link_to method. Like many helpers it receives an optional block.

Read through the codebase and see if you can see how it does it:

<https://github.com/rails/rails/blob/433ad334fa46623f4b218d3bb34e3f63d5481c18/actionview/lib/action_view/helpers/url_helper.rb#L135>
