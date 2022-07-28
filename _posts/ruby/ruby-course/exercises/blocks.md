---
title: "Ruby Blocks"
description: ""
section: "ruby"
course: "ruby-course"
exercise: "blocks"
layout: "exercise"
---

%article




# Blocks Rock

A Block is an unnamed function, a lambda, which is received by a function, and which can tell it what to do.


Blocks are where the fun really starts. A block in Ruby is a sort of unnamed function that can be passed to a method using a special syntax. It can be as long or as complicated as we like, and can span many lines. Here's a simple example:

```js
  5.times {puts "Ruby Ruby"}

  Ruby Ruby
  Ruby Ruby
  Ruby Ruby
  Ruby Ruby
  Ruby Ruby
```





The block here is the bit of code: puts "Ruby Ruby". This piece of code is passed to the times method. We use blocks for everything in Ruby, most notably when looping, but in plenty of other ways too. Come with me now as we enter the world of loops…

## Why is this cool?

This is super great because it means that the number 5 knows in itself how to iterate up to itself. We have perfect encapsulation. We don't need a for loop. We don't need to make any assumptions about implementation. It's all hidden under the surface.

## Passing parameters to a block

We can have our function pass parameters to it's block. We do this using the \| \| "chute" syntax. For example:

```js
  5.times{|i| puts i}

  0
  1
  2
  3
  4
```





Here the times method passes a number to the block, which is available in the variable i. This is one of the many ways in which we do iteration in Ruby.

## Blocks are better than loops

One of the most common and programmer friendly applications of blocks is in looping. Many objects, most notably, Arrays and Hashes will accept a block then apply that block to each of their members in turn. All the looping code is encapsulated, meaning we don't need to worry about the internal structure of the array.

```js
  people = ["jim","harry","terrence","martha"]
  people.each { |person| puts person }

    => "jim"
    "harry"
    "terrence"
    "martha"
```





As we saw earlier, the Fixnum.times method works in a similar way:

```js
  5.times { puts "Ruby" }

    => Ruby
    Ruby
    Ruby
    Ruby
    Ruby
```





If we wanted to iterate over some specific numbers, we might use the upto method to create an Enumerable object, and then iterate over that. Observe:

```js
  5.upto(10) {|i| puts i}

    => 5
    6
    7
    8
    9
    10
```





We could also iterate over a Range object. more on Ranges shortly:

```js
  (6..8).each {|i| puts i}
    => 6
    7
    8
```





The most common use of a loop, iterating over an array is totally covered, and in fact, when writing Ruby code, we almost never write the sort of looping constructs you might be used to. Blocks have them covered

## each_with_index

If for some reason we need t get the index of an array, we can do this too using Array.each_with_index.

This method accepts a block with two parameters, the value and an index. We can use it like so:

```js
  people = ["jim","harry","terrence","martha"]
  people.each_with_index { |person, i|   puts "person: #\{i} is called #\{person}" }
    => person: 0 is called jim
    person: 1 is called harry
    person: 2 is called terrence
    person: 3 is called martha
```





## Short and Curlies

We can declare a block in two ways. We can use the curly braces syntax, or the do/end syntax.

The difference between them is that the curly braces syntax can only take a single line of code, whereas the do/end syntax can take as much code as you like, even an entire web page template if needed.

Here is an example of the curly braces syntax:

```js
  favourable_pets = ["kittens","puppies","hamsters"]

  favourable_pets.each_with_index { |pet, i| puts pet; puts i }
    => kittens
    puppies
    hamsters
```





And here is an example of the do/end syntax. Notice the code is more spread out. This is more readable for large blocks of code.

```js
  favourable_pets.each_with_index do |pet, i|
    puts pet
    puts i
  end

    => kittens
    0
    puppies
    1
    hamsters
    2
```








## Exercise - Gsub accepts a block

The String.gsub method will find and replace substrings in text. It's terribly useful, but sometimes we need more, we need to find and manipulate strings in text.

Say you have a string containing URLs, maybe culled from twitter. You could replace all the urls like this:

```js
  tweet_text = "hello http://www.google.com hi"

  tweet_text.gsub(/http:\\/\\/[^ ]*/, "A URL was here.")

    => "hello A URL was here. hi"
```





This is OK, but what if we wanted to replace the URL with a functioning link. The gsub method will optionally accept a block. The block receives a parameter which contains the match. The block must then return a value which is used to replace the match.

1. Create a string containing one or more URLs. Now write code using gsub to hyperlink all the urls.
2. Assume your string is a tweet. Now write code to hyperlink all the hash tags. Hashtags start with a # and end with a space or newline.
3. Finally write code to hyperlink all the user names. User names start with @.







## Map - Reversing the letters

We can split a string about an array using the split function, like this:

'hello world'.split(' ')
=> ['hello', 'world']

Use string.split and Array#map method to take a sentence and reverse the letters of all the words, like so.

```ruby
  "Hello there" # => "olleH ereht"
```



First split, then map to reverse.



For Bonus points, capitalise the first letter to produce:

```ruby
  "Olleh ereht"
```











## Inject - Adding all the numbers

Inject is a ridiculously handy function that will allow you to inject a block between each element of an array. The block will in turn receive the next element in the array and the output of the previous call to the block.

I have an array of numbers like this:

```ruby
  [4,9,6,3]
```





1. Use inject to add up all the numbers in an array.
2. Use inject to multiply all the numbers in the array.







## Filing - save to the file system

Filing also uses a block. We call File.open and pass it a block. Within the block we have access to the file object.

```ruby
  File.open("path/to/file", 'wb') do |file|
    file.write('hey there!', :ruby)
  end
```





Write code which saves a random string to a file.

