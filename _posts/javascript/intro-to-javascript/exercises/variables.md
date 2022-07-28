---
title: "Variables"
section: "javascript"
course: "intro-to-javascript"
exercise: "variables"
layout: "exercise"
---

%article



#variables

# Variables - buckets of fun

Imagine for a moment your program is a bit like a child on a beach making a sandcastle. The child is going to need lots of raw materials to make that castle, sand, little shiny rocks, pebbles, flags, water from the sea. The child is going to need somewhere to keep all of those raw materials. He's going to need some buckets.

Variables are like JavaScript buckets. We can store things in them until we need them later, and we can use the bucket in place of the thing that's inside.

We can tell JavaScript to make a variable just by putting something in one, like this:


```js
  var greeting = "Hi there!";
  alert(greeting);
```





We have put the string "Hi there!" inside a variable (bucket) called greeting.

## Changing the value of a variable ##

We can also change the value of a variable any time, just by assigning a new value to it, so we could write:


```js
  var name
  name = "Dave";
  alert(name);
  name = "Susan";
  alert(name);
```





The variable called name contains first the string "Dave", and then the string "Susan". Dave is now renamed Susan.

## Variables are containers

Imagine I have a basket full of kittens, now when I hand you that basket, I'm actually handing you a big stack of kittens. This is probably a pleasant experience for you.

We can write this like this:

```js
  var basket = "kittens";
```





Now the basket can stand in wherever we previously needed kittens. For example, I could write:

```js
  alert('kittens');
```





or I could write

```js
  alert(basket);
```





Either way I would alert some kittens.


## Variable names ##

Variables can be called almost anything you like. Hamster, pie or cheeseOnToast are all perfectly sound variable names. The one restriction is that you can't have any spaces or maths characters in them. You can't have a variable called "cheese on toast" for instance, or a variable called five+five. This would confuse JavaScript and give it a headache.

Don't worry about giving your variables long and descriptive names. This is encouraged as it makes your code easy to read.

We can call our variables anything we like but it makes our lives easier if we give them sensible English names or common abbreviations.


%aside.box

## Naming Conventions

If you want to look like a pro, use camel casing for your variable names. Camel casing means you use all lower case for the first word, then start subsequent words in upper case. For example:

* toast
* monkeyMoron
* humpyTheCamel

See, each variable name looks like a camel with it's head down low. The upper case letters are the humps.



## The Var Keyword ##

Please note that when we first create a variable we must always remember to use the var keyword. If we forget it, __bad things will happen__. More on this when we get to Scope. For now, just remember to put them in.




## Exercise: Thanks for all the fish ##

Variables are like little buckets in which we can store any information we like. Let's pop a string in one, and then pop it out in an alert box.

1. Create an HTML document and linked JavaScript file.
2. In your JavaScript file, create a variable called farewell and give it a value of "Thanks for all the fish"
3. Pop your farewell variable up in an alert box.

### Answers

To answer this question, first we create a variable, lets call it greeting, and assign a value of "Thanks for all the fish" to it. The variable greeting is a bucket that contains the string. We can now use it in place of the string, and alert it.


```js
  var greeting = "Thanks for all the fish";
  alert(greeting);
```







## Exercise: What's for dinner... ##

1. Create a variable called question. Give it a value of "What's for dinner?"
2. Create a variable called answer. Give it a value of "Fish"
3. Add the two variables together and put the result in an alert box.

### Answers ###

Variables are buckets. We can use variables in place of the things they represent, so:


```js
  var question = "What's for dinner?";
  var answer = "Fish";
  alert(question + answer);
```





If we'd like to improve the output slightly we can separate the two with a space:

```js
  alert(question + " " + answer);
```




