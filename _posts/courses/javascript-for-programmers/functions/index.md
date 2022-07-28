%article


# Functions

In JavaScript all functions are objects. You can pass them around, store them in variables and arrays, and pass them as parameters to other functions.

Create a function like this:

```js
  function() {
    alert('hello function!');
  }
```





This is an unnamed function, sometimes called a lambda expression (really it's just a function without a name).

## Functions assigned to variables

Because functions are objects, we can assign them to variables:

```js
  var sayHello;
  sayHello = function() {
    alert('hello function!');
  }
```





This is the normal way of dealing with functions in JavaScript.

## Calling Functions

If you save a function in a variable, you can call it using braces like this:

```js
  var sayHello = function() {
    alert('hello function!');
  }
  sayHello();
```





## Passing Parameters

Pass parameters to functions between the braces:

```js
  var sayHello = function(name) {
    alert('hello ' + name);
  }

  sayHello('Dave'); // alerts 'hello Dave'
```





If you pass too many parameters, additional ones will be discarded.

```js
  sayHello('Dave', 'Mike', 'Dan');
  // alerts 'hello Dave'
```





If you pass too few, unassigned parameters will get the value undefined.

```js
  sayHello();
  // alerts 'hello undefined'
```







## Exercise - A Sandwich Calculator

1. Write a function called sandwich calculator. This should accept one value: slicesOfBread
2. The function should return the total number of possible sandwiches based on the amount of slices available, so if there are 10 slices, it should return 5. Test your function with an alert box.
3. Extend your function so it accepts two values, slicesOfBread and slicesOfCheese.
4. It takes two slices of bread and one of cheese to make a sandwich. The function should return the total number of possible sandwiches, so if there are 10 slices of bread, but only 1 of cheese, it should return 1. You'll need an if statement to make this work.




## Exercise - Lint your code

Use Grunt and jshint to lint your code.
