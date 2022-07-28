%article


# Modules

One of the problems with JavaScript in a browser is the global scope. Any variables you create in the global scope are shared between all scripts. They can easily clash. Also, global variables are generally bad news when it comes to making any sort of sensibly architected system.

Node solves all this with a module system.

## A node module

A node module is a simple JavaScript file that saves an object in a variable called module.exports

For example, we could create a cat module like this

```js
  var Cat = {
    legs: 4,
    head: 2,
    ears: 2,
    sayHello: function() {
      console.log('meow');
    }
  };

  module.exports = cat;
```





In another file we can now require('./cat'), like so:

```js
  var cat = require('./cat');

  console.log(cat.legs)
  cat.sayHello();
```



%aside.box

## How require works

The require function simply creates an object called module which has an attribute called exports. It then loads your file and executes it with the module object available to it. Once your code has run it returns module.exports.

There is no magic in Node. This is by design.

## Further Reading

[nodejs.org/api/modules.html](http://nodejs.org/api/modules.html)





## Returning a newable object

If we want to mimic a class, we could might create a newable object using prototypical inheritance.

Our cat.js file might look like this:

```js
  var Cat = function() {}

  Cat.prototype = {
    legs: 4,
    head: 2,
    ears: 2,
    sayHello: function() {
      console.log('meow');
    }
  };

  module.exports = Cat;
```






When we require it using we can treat it like a class, like so:

```js
  var Cat = require('./cat');

  var tigger = new Cat();
  console.log(tigger.legs)
  tigger.sayHello();
```





## Exercise - Create a Date Module

Revisit your code from earlier. Create an ultra-simple date module that can tell you the current date and time.

Create some code that requires this module and have it output the time.



## Further Exercise - Days Till Module

Extend your code to create a daysTill module. It should be able to tell you the number of days till Christmas and the number of days till mothers day. Pick any other significant dates you see fit to include.

Integrate this module into your Node server so you can hit a URL and find the number of days till different dates.



## Harder Exercise - A Router

This is a bit tougher. Only tackle this if you feel able.

Create a router module. It should receive a URL. It should return the path of a static file which you can then serve out, or else return nil.

Your node app can now var router = require('./router');

You can pass the url to the router and get back the file that should be returned.



## Much Harder Exercise - A controller

Create a controller module. It should have methods in it which can write to the response object. Now have your router send messages to your controller. I'll leave the implementation details up to you here.

.downloads

## Downloads

[Code Samples (Dropbox)](https://www.dropbox.com/sh/lj5li9ce68ogru1/AACohTbshpD0JHPWzThC3-lXa?dl=1)
