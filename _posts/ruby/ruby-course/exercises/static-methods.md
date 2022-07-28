---
title: "Static Methods"
description: ""
section: "ruby"
course: "ruby-course"
exercise: "static-methods"
layout: "exercise"
---

%article




# Eigenclasses (Static Methods)

In Ruby, all methods exist within a class. When you create an object, the methods for that object exist within it's class. Methods can be public, private or protected, but there is no concept of a __static method__. Instead, we have singleton classes, commonly referred to as eigenclasses.

## No static methods

Static methods are class methods. they belong to the class, not the instance. This would break Ruby's simple object structure, since classes are instances of class Class, adding methods to Class, would make them available everywhere, which is not what we want.


## Singletons

Instead, Ruby lets us define an unnamed singleton class that sits in the inheritance tree directly above any object. Lets do this now and create a static method.

```js
  class Kitten
    class << Kitten
      def max_size
        8
      end
    end
  end
```





The class << Kitten syntax opens up the eigenclass and pops the max_size method within it. We can then access it like this

```js
  puts Kitten.max_size
```





Notice that we are talking to the Kitten class as an object here.

## Shorthand

We use the class << self syntax to explicitly open an object's eigenclass. We can accomplish the same thing using the shorthand syntax:

```js
  def Kitten.max_size
    8
  end
```





This adds a method to the Kitten eigenclass. We can also add a method to the eigenclass of any other object, like so:

```js
  fluffy = Kitten.new
  popsy = Kitten.new

  def popsy.deploy_wheels
    @wheels = :deployed
  end

  def popsy.launch_scouter
    @scouter = :launched
  end
```





Here we have added a method to popsy's eigenclass, allowing her to deploy wheels.


## Eigenclasses in the Inheritance Hierarchy

The eigenclass sits directly above the object in the inheritance hierarcy, below the class of the object. It provides a handy place to put methods hat we want to apply directly to the object, rather than to every instance of that object. It feels technical, but once you get it, it's actually rather nice.



## Exercise - Adding a method directly to an object

In irb (or in a ruby file) create 3 instances of your warship/pet class. Add a different method to each of them. Verify that only the instance you added the method to it to can call it.

You're writing to an eigenclass. Feels natural doesn't it?
