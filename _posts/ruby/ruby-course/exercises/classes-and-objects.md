---
title: "Ruby Functions and Objects"
description: ""
section: "ruby"
course: "ruby-course"
exercise: "classes-and-objects"
layout: "exercise"
---

%article



# Classes and Objects

Ruby is Object Oriented. Many languages claim to be object oriented, but most fall short in some area or another. When Ruby says it's object oriented, it really, really means it.

We have used lots of Ruby objects so far, when we have done things like:

```ruby
  "Abracadabra".reverse.downcase
```





and

```ruby
  Time.now
```





Lets look now at how we can define our own objects.



## Classes

Ruby has a class based object model. This means we define classes, then use them to stamp out as many objects as we like. Of course, this being Ruby, classes are objects and have methods in their own right, but we'll get to this soon enough.

We define a class like so:

```ruby
  class Pet
  end
```





Here we have defined a very simple class, called Pet. By convention, classes in Ruby always start with a capital letter. Now lets create a pet:

```ruby
  flopsy = Pet.new
```





This is great, we have created a new instance of the Pet class. Flopsy is an instance of Pet.

Note that all objects get a new method for free. This they inherit from the Object superclass. More on inheritance in a bit.

%aside.box

## Convention in Ruby

Because Ruby is such a relaxed language, conventions become very important. snake_case for variables, CapitalLetters for classes.

These things are not mandated by the language but they will help you to write more consistent, legible and inter-operable code.




## Finding the class of an object

We can go in reverse, to find the class of an instance like this

```ruby
  flopsy.class
    => Pet
```





Ruby doesn't shy away from introspection, it comes baked in, as we shall see later.


## Methods - Giving Flopsy Abilities

This is all very nice, but flopsy is not very interesting, she can't walk the tightrope or play chess, or really do anything much. To make Flopsy more interesting, we need a method:

```ruby
  class Pet
    def play_chess
      puts "Now playing chess"
    end
  end
```





Here see now. We have added a play chess method to flopsy. We can now write:

```ruby
  flopsy.play_chess
```





...and she will, after a fashion. She is only a housepet after all.


## Naming Conventions

There are a few things to bear in mind when naming methods in Ruby if you want to appear cool and down with the kids.

First, use snake case for all function names, like this.

```ruby
  each_with_index
```





Second, if your method returns a boolean, and is a question, frame it as such. Use a question mark, like so:

```ruby
  ['toast','jam','honey'].include? 'ham'
  person.has_name?
  password.valid?
```





Third, if your method modifies the original object in place, rather than returning a new object, and is therefore destructive, indicate this with an exclamation mark, like so:

```ruby
  ['toast',['jam','honey']].flatten!
    => ['toast','jam','honey']
```





## Instance variables - Giving flopsy some superpowers

Flopsy is still a little dull. It would be great to be able to store some data about her, maybe give her some custom attributes.

In Ruby we save an instance variable using the @ syntax. Instance variables are @ variables. All instance variables are private, so to get at them, we need to write methods called getters and setters to access them. Lets have a look now:

```ruby
  class Pet

    def super_powers=(powers)
      @super_powers = powers
    end

    def super_powers
      @super_powers
    end

  end
```





Here we have given flopsy two methods, a getter and a setter. The first is a setter. The super_powers= method receives a parameter and stores it in an instance variable called @super_powers.

The second is a getter. It simply returns the @super_powers instance variable that was previously set.

We can now set flopsy's super power like this:

```ruby
  flopsy.super_powers = "Flight"
```





and retrieve it like this:

```ruby
  flopsy.super_powers
    => "Flight"
```





Note we don't have to declare the @super_powers variable anywhere. We can just set it, and that's fine.

## This is great because...

Getters and setters give us a clean way to provide an interface onto our object. It insulates us from implementation details. We are free to store the data in any way we wish, as a variable, as a file, in a database, in an encrypted hash, or as a combination of other variables.

This is how active record works when using Rails. Values can be got from the database as though we were accessing object attributes.

Just like Flopsy, the boundary between attributes and methods is far more fuzzy than in most languages. This is partly because of Ruby's optional parentheses, which make it look as though we are accessing attributes, when in fact we are always accessing methods.

We can have read only attributes by only creating a getter, and write only attributes by only creating a setter. An example of a write only attribute would be a password, which might get set, and then encrypted with a one way hash, never to be read again.

## The attr method

Since class variables are so common, ruby defines shortcuts for creating them and their associated getters and setters. The attr method creates an attribute and its associated getter. If the second parameter is true a setter is created too. The attr_reader and attr_writer methods create getters and setters independently.


## Initialising flopsy using the initialize method.

The initialize method is called by the new method and it is here that we put any code we need to initialize the object.

When flopsy's sidekick mopsy was first created, she didn't have any powers at all, observe:

```js
  mopsy = Pet.new
  mopsy.super_powers
    => nil
```





Poor mopsy. We can remedy this situation by giving mopsy a basic superpower when she is initialised. Lets do this now.

```js
  class Pet
    def initialize(args = {})
      @super_powers = args[:power] || "Ability to eat toast really really quickly"
    end
  end
```





Now when we recreate mopsy, she comes already tooled up

```js
  mopsy = Pet.new
  mopsy.super_powers
    => "Ability to eat toast really really quickly"
```





We can also do this:

```js
  mopsy = Pet.new :power => "none worth mentioning"
  mopsy.super_powers
    => "none worth mentioning"
```





If you need to see a list of all mopsy's attributes you can do so using inspect like so:

```js
  mopsy.inspect
    => "#<Pet:0x102f87fe8 @super_powers=\"Ability to eat toast really really quickly\">"
```





## Upshot

* Functions in Ruby are created using the def keyword (short for define).
* Functions that exist in an object are typically called methods.
* Functions and methods are the same, except one belongs to an object.
* Objects are created from classes using the .new method






## Exercise - Create your own fluffster

Everything is an object, so it’s important that we get a whole lot of practice in with making them. In this series of exercises we will create a class, implement some methods, overload some operators and create some virtual attributes.

## Define your class

1. Define a class either for a lethal warship or a fluffy animal, depending on your mood today.
2. Add methods so you can set a name for your gunship/fluffster.
3. Add methods to get and set an age in milliseconds.
4. Write a method that retrieves the age in days. You should use the same age attribute as in 3, just modify it before returning it.
5. Write a method that sets the age in days. Again, use the same age attribute, just monkey with it a bit before setting it.
6. Write a getter that returns the age in weeks. (age in days / 7)
7. Write getters and setters that return a string representing a standard action, e.g. “wriggle cutely”, or “blow things up with extravagant firepower”




## Exercise - Receiving a hash

Extend the warship / flufster class you created earlier so it can receive a hash of initial values.

Write an initializer method that accepts a hash and sets default values appropriately. You should be able to call it like this:

```js
  Fluffster.new age: 2, name: "Floppy"
```









## Exercise - Read only virtual attributes

1. Add x and y position attributes, with getters, but no setters. Initialise the position attributes to be zero.
2. Add move north, south, east and west methods. When these methods are called they should modify the x and y positions.
3. Add a distance_from_home method that computes the current distance from home.
4. Add an at_home? method that returns true if the person is at home, i.e. if their x and y coordinates are zero.

Virtual attributes are particularly useful for things like passwords where you don't actually want to store the password anywhere, or allow retrieval.
