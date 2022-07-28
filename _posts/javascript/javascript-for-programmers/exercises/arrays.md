---
title: "Arrays"
section: "javascript"
course: "javascript-for-programmers"
exercise: "arrays"
layout: "exercise"
---

%article


# Arrays and Functional Loops

JavaScript comes with a vast array of looping constructs.

## Arrays

We can declare an array using the square bracket syntax, like this:

```js
  var a = ["cheese", "ham", "toast"];
```





## Arrays are polymorphic

Arrays are fully polymorphic. You can store anything in them:

```js
  var a = [1, "ham", new Date()];
```





## Get the length with .length()

```js
  a = [3,6,9]
  a.length // 3
  a[a.length] // 9
```





## Arrays are not arrays

Arrays in JavaScript are not like arrays in other languages. They are in fact associative arrays, sometimes called hashmaps or hashes.

They have numerical keys associated with arbitrary values.

This means we can create gappy arrays without filling our computer's memory:

```js
  var a = [];
  a[0] = 12;
  a[10000000000] = 13;
  alert(a[10]); // undefined
```





However, don't try to alert the array, or the browser will convert it to a very long string.

You can also store a value in an array with a non-numerical key:

```js
  var a = ["cheese", "ham", "toast"];
  a['condiment'] = 'ketchup';
```





## While Loops

A while loop will keep going while some condition is true. For example:

```js
  var sandwichesMade = 0;
  while (sandwichesMade < 5) {
    alert("Making Sandwich: " + sandwichesMade);
    sandwichesMade = sandwichesMade + 1;
  }
```





## For Loop

A for loop is the most efficient type of loop in JavaScript. It looks very similar to classical languages such as C or Java.

```js
  people = ['dave', 'jon', 'mikey'];
  for (var i = 0; i < a.length; i++) {
    alert("Making Sandwich for: " + people[i]);
  }
```





## For in loop

We also have a for in loop. This is useful for iterating over gappy arrays with non-contiguous keys:

```js
  a = [];
  a[0] = "Mikey";
  a[12] = "Davey"
  a[99] = "Stuey"
  for (i in a) {
    alert(a[i]);
  }
```





## forEach functional style loop

We can also iterate using a functional style loop. A functional loop leaves the iteration implementation up to the object itself. We pass a function to tha array, then the array calls this function for each element. In classical languages we sometimes refer to this as an iterator pattern.

```js
  [
    'Mikey',
    'Stuey'
    'Davey'
  ].forEach(function(el,i){
    console.log(el);
  });
```








## Exercise - Lunar Countdown

Simple one here. Use the alert function to alert the numbers from 10 down to zero.

When you reach zero, alert "Blast Off!"

Remember to lint your code.





## Iterate with a for loop

Assume I have an array of products in my shop, like this:

```js
  products = ['Cats', 'Cheese', 'Spanners', 'Lemons', 'Candyfloss'];
```




Use a for loop to iterate over this and console.log the products.

## Extension - Use a functional loop

Repeat the above exercise, but use a functional loop.




## Pizza Exercise

Create an array of pizza toppings, like this:

```js
  var toppings = ['Cheese', 'Ham', 'Bits', 'Tomatoes'];
```





Now write a function that we can call like this:

```js
  makePizza(toppings);
```





This function should return a string of the form:

```js
  "A tasty pizza with Cheese and Ham and Bits and Tomatoes"
```




You will find the [join function is very helpful here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)




## Harder Exercise - Capitalise every element

Write a short function to capitalise every element of the array.

You must use the Array#map function and the String#uppercase function.



* [Have a look at the map function here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)
