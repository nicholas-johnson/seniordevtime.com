---
title: "Karma - AngularJS Exercise"
section: "angular"
exercise: "karma"
layout: "exercise"
---




# Unit Testing with Karma

Karma is a unit testing framework that works especially nicely with Angular. A unit test will test a single tiny piece of our app. We might write a test for a single controller for example. Unit tests generally don't care about the template, they only test the code. We can write unit tests for template code, but this is generally a little more complex.

In this section we are going to use Karma to unit test a controller.

%aside.box

## What about Jasmine?

Jasmine is a unit testing syntax. It allows us to write tests using an English like syntax. Karma is most commonly written using Jasmine syntax, but can also be written using QUnit, and several other syntaxes.

If you don't know which syntax to choose, choose Jasmine because it's the most popular, and is the syntax that Angular itself is tested with.





## Installation

First up we need to install Karma. Karma is a NodeJS module, and Node is a JavaScript runtime that runs in your command line. We will need to have Node installed to run Karma. If you don't have it, you can grab it from here:

<http://nodejs.org/>

test your installation by typing `node` at a command line.

## NPM

Once you have Node, you will we use NPM (Node Package Manager) to install a few Karma packages, like so:

```js
npm init
npm install karma --save-dev
npm install -g karma-cli
npm install jasmine-core --save-dev
npm install karma-jasmine --save-dev
npm install karma-chrome-launcher --save-dev
```

=code(code, :bash)



Depending on your exact version of Node and Karma, NPM may complain about missing dependencies. If you see any red error messages, go and get those dependencies too.

Once Karma is installed, you should be able to type `karma` at a command line and see a helpful message.

## Initialise Karma

Karma needs a karma.conf.js file in the root of your project directory to tell it how to work. Use the command line to navigate to the folder in which you want to work. Now type `karma init`. You will be taken through a wizard which will create the karma.conf.js file. Keep all the defaults for now.

```js
karma init
```

=code(code, :bash)



We can now start the Karma runner using:

```js
karma start
```

=code(code, :bash)



## Specifying files

Karma may be running, but until we give it some files to test, nothing will happen. We need to tell it where to find our JavaScript. Open up the karma.conf.js file, look for the `files` attribute, and change it like so:

```js
files: [
  'lib/*.js',
  'js/*.js',
  'specs/angular-mocks.js',
  'specs/*.js'
]
```





This is a list of file paths to look at in order. Karma will use this to create a complete version of our app.

## Writing a test

A Karma test contains one or more describe blocks, which can be nested. These define groups of functionality. Inside these are our tests, which are defined using the `it` function. These tests contain numerous expectations.

If a test fails, the strings in the describe and it blocks will be used to create an error message.

```js
describe('Maths in the universe', function() {

  it('should be the case that 1 plus 1 is 2', function() {
    expect( 1 + 1 ).toEqual( 2 );
  })

});
```








## Exercise - Check that basic maths works

Download the base calculator app from the Github repository. You will notice that the code has been split up into directories, like so:

* lib - Angular itself (also possibly JQuery, D3, etc). Imported first, just like in our app.
* js - Our code. Karma needs to create an instance of our app in order to test it.
* specs - By convention, Karma tests live in the specs folder. All tests in here will be executed.

## Let's play with Jasmine

We are not going to test anything useful here, we are just going to play with Jasmine. Create a file in the spec folder. Call it maths_tests.js.

* Now write a simple test to demonstrate that 1 + 1 == 2.
* Now test that 1 + 1 != 3

You can view the Jasmine documentation here: <http://jasmine.github.io/2.1/introduction.html>



## Testing the actual app.

To test an Angular controller, we have to do a little more work. Remember that the main purpose of the controller is to initialise $scope. If we want to test functions on our controller, we must get hold of a $scope object, use the controller to initialise it, and then check that it does what we expect it to do.

We do this in a beforeEach block. This will build a new $scope object before each test is executed:


```js
describe('MyController', function() {

  // Load the module containing MyController
  beforeEach(module('app'));

  const scope;
  // inject the $controller and $rootScope services
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope from $rootScope
    scope = $rootScope.$new();
    // Instantiate the controller
    $controller('myController', {
      $scope: scope
    });
  }));

  it('should have a hamster', function() {
    expect(scope.hamster).toBeDefined();
  });

  it('should say hello to Hammy', function() {
    scope.sayHello();
    expect(scope.greeting).toBe('Hello Hammy');
  });

});
```







## Exercise - destroy the helidrones

Your helidrones have been destroyed by United Nations special forces.

The calculator app has a reset button which resets the inputs to zero. Write a test which calls the zero() function and checks that num1 and num2 have become zero.
