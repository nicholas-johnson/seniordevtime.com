---
title: "Object Orientation"
section: "javascript"
course: "javascript-for-programmers"
exercise: "object-orientation"
layout: "exercise"
---

%article


# Object Orientation

You may have noticed JavaScript doesn't have classes. In fact, as we have seen with JSON JavaScript doesn't need any of that to make an object, but without classes we do lose a few pieces of functionality, specifically:

* Constructor functions
* Inheritance


In fact we don't lose any such functionality. Because there are no classes, we are free in JavaScript to use any object as the parent of another object.

We can also use any function as a constructor function.

## Constructor functions

Constructor functions are just regular functions. By convention we capitalise them, like this:

```js
  var Toaster = function() {};
  var CheeseDip = function() {};
```





We then create a new object using this function with the new keyword:

```js
  var myToaster = new Toaster();
  var myCheeseDip = new CheeseDip();
```





In our Toaster function we can initialise the toaster by writing to the 'this' variable, which in the context of a constructor will be set to point to the object under construction's prototype.


```js
  var Toaster = function() {
    this.goPing = function() {
      alert('ping');
    }
    this.toastQuotient = 2;
  };

  var myToaster = new Toaster();
  myToaster.goPing();
```







## Exercise - Constructor Functions

Make me a little car (or choose your own domain). The car should have a latitude and longitude attributes. It should have goNorth, goSouth, goEast and goWest functions. It should have a toString method that prints the current location.

Now go for a drive.



## Prototypical inheritance

Most classical languages have classes which inherit from one another. Objects are then instances of classes. JavaScript has no classes, so objects inherit directly from other objects, which when you think about it is quite sensible.

We talk about an object's prototype. The prototype is the object which our new object will inherit from.

Here's a cut down example, we're just inheriting from a humble JSON object called x.

```js
  var x = {y:'z'}
  var A = function() {}
  A.prototype = x;
  a = new A();
  a.y; // 'z'
```





Here's a more practical example. This time our Toaster inherits from an instance of Appliance.

Notice we inherit from an object, not from the constructor function.

```js
  var Appliance = function() {
    this.goPop = function() {
      alert('pop');
    }
  };

  var Toaster = function() {
    this.goPing = function() {
      alert('ping');
    }
    this.toastQuotient = 2;
  };
  Toaster.prototype = new Appliance();

  var myToaster = new Toaster();
  myToaster.goPing();
```







## Prototypical inheritance Exercise

Create a Vehicle constructor to be a parent of the Car. Move your functions and attributes up into the vehicle.

Now create a new Car, it should still be able to drive.

Add a new method to the car, so we can change the oil.

Now make a bike object which also inherits from Vehicle and instantiate it. Very nice.



## Object.create

ES5 gave us a new Object prototype method designed to make inheritance easier.

```js
  var appliance = {
    goPop: function() {
      alert('pop');
    }
  };
  var toaster = Object.create(appliance)
  toaster.goPing = function() {
    alert('ping');
  }
  toaster.goPop();
  toaster.goPing();
```





Object.create lets us create a child of any other object. The prototype chain can be as long as you like.




## Exercise - Object.create

Re-implement your car using object.create. Be sure to keep you old version around somewhere.



## Composition

Because objects in JavaScript are just associative arrays, we can compose an object from parts of another object without using inheritance just by copying attributes from one to another.

```js
  var toaster =  {
    goPing: function() {
      alert('ping');
    }
  };

  var cheeseWhizMachine = {
    goPing: toaster.goPing
  }
  cheeseWhizMachine.goPing()
```





We can use this to implement a decorator pattern:

```js
  var pingDecorator = {
    decorate: function(obj) {
      obj.goPing = function() {
        alert('ping');
      }
    }
  }
  var cheeseWhizMachine = {};
  pingDecorator.decorate(cheeseWhizMachine);
  cheeseWhizMachine.goPing();
```







## Composition Exercise

Create a navigation decorator that will decorate any object with goNorth, goSouth, etc methods.




## Optional Extra JQuery Exercise

If you finish first, create a driving simulator.

There should be 4 buttons, up, down, left and right. Use JQuery to draw the car on the screen and wire up the buttons. Use CSS to absolutely position it. Use the buttons to update its top and left values.




## Further Reading

The MDN developer docs have a good write up of all of this here: [Inheritance and the prototype chain](https://developer.mozilla.org/en/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
