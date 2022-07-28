---
title: "Ruby Object Inheritance"
description: ""
section: "ruby"
course: "ruby-course"
exercise: "inheritance"
layout: "exercise"
---

%article



# Inheritance

Rails supports single object inheritance. This means a class can have one parent class and will inherit all the methods and attributes belonging to that class. We define inheritance relationships using the < operator.

For example, let's say we'd like to define a particular type of pet, say a small and fluffy kitten. Let's create a kitten class that can inherit from our Pet class:

```js
  class Kitten < Pet
    def play_tennis
      puts "I am now playing tennis"
    end
  end
```





Our kitten now has all the attributes of a pet. It can shoot fire from it's eyes, and play some good chess, but in addition it can also play tennis:

```js
  tiger = Kitten.new
  tiger.play_tennis
    => I am now playing tennis
  tiger.shoot_fire
    => now shooting fire
```






## Exercise - Subclasses

Extend your Fluffster / Warship exercise from before. Create a subclass of warship, perhaps a frigate, that has different abilities.
