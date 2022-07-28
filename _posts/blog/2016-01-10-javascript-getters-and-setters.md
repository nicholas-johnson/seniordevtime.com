---
title: "Creating Read-Only & Virtual Attributes with JavaScript Getters and Setters"
tags: javascript
layout: 'blog'
course_sidebar: :js2
---



**TL;DR Getters and setters let us create read only attributes of JSON objects. They work in all current browsers (except IE8), so you can use them today**

Getters and Setters allow us to create functions to set attributes on our JavaScript objects. This allows us to create pseudoelements and store and retrieve computed values, much as we can with Ruby.

They allow us to write code such that, when we access an attribute of an object, we are actually calling a function. We can use them to create read only properties, write only properties, virtual properties, etc.

## Browser support

Getters and setters were actually part of the ES5 specification, but browser support is only now catching up. They work in all the evergreen browsers (as you would expect) plus IE9.

## Let's make a cat

Here's a nice cat called Miffy. You'll notice that Miffy is just a plain old JSON object:

```js
  const cat = {
name: "Miffy",
age: 12
  }
```





We can interact with Miffy as you would expect:

```js
  console.log(cat.name)
// outputs "Miffy"
```





## Enter Getters

Getters allow us to create a function that will be called when we access an attribute, and which will retrieve a value. Let's recode Miffy with a getter.

```js
  const cat = {
get name() {
  return "Miffy";
},
age: 12
  };
```





Note that we can still interact with our cat in exactly the same way:

```js
  console.log(cat.name);

"Miffy"
```





## The cat name is now immutable

Because we only have a getter, the value of cat.name cannot be changed. We have created a read only attribute of a JSON object:

```js
  cat.name = "Hermionie";
  console.log(cat.name);

"Miffy"
```





## Dynamic Values

We use getters to compute values dynamically and return them as though they were just attributes. Here we generate a description from the name and age. I can treat it just like an attribute:

```js
  const cat = {
name "Miffy",
age: 12,
get description() {
  return [
    this.name,
    'is',
    this.age
  ].join(' ');
}
  };

  console.log(cat.description);
"Miffy is 12"

  cat.age = 45;
  console.log(cat.description);
"Miffy is 45"
```





Say our cat has a date of birth. We might dynamically generate an age attribute. It just works. We don't need to manually call a function to compute it.

```js
  const cat = {
dateOfBirth: new Date(1953,12,12),
get age() {
  const now = new Date();
  return new Date(now - this.dateOfBirth).getFullYear()-1970
}
  };

  console.log(cat.age) // outputs 62. Poor old cat.
```





## Setters

Setters let us set a value as though it were a property of the object.

```js
  const cat = {
set name(name) {
  this._name = name
}
  };
```





Now we can set the value of name but not get it.

## This lets us create virtual object properties

We can store this value anywhere.

* We might store the value in an attribute of the object, as I've done above.
* We might store it in a closure.
* We might compute a value to save, perhaps doing some validation.
* We might save the value in a cookie, or supercookie.
* We might send the data to an API.

The possibilities are endless.

Here we receive a dateOfBirth and store an age:

```js
  const cat = {
set dateOfBirth(dateOfBirth) {
  const now = new Date();
  this.age = new Date(now - dateOfBirth).getFullYear()-1970
}
  };

  cat.dateOfBirth = new Date(1953,12,12);
console.log(cat.age);
```






## Removing Setters and Getters

You can remove setters and getters altogether just like any other property using delete:

```js
  delete cat.dateOfBirth

  console.log(cat.dateOfBirth)
undefined
```





This removes the virtual property altogether. It doesn't just overwrite it with null, it's completely gone.

