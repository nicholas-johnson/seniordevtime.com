---
title: "Promises"
section: "angular"
exercise: "promises"
layout: "exercise"
---




# Promises

Promises are now a core feature of JavaScript, and are available in Chrome and Firefox. This is interesting news.

Angular gives us $q which is an implementation of promises that works in all modern browsers including IE.

## What is a promise?

JavaScript is single threaded, but it needs to deal with asynchronous events. In the past we used callbacks for this. Say we wanted to make an AJAX request, we might pass a callback in like this:

```js
const url = '/mydata.json';

$.getJSON(url, function(data, status) {
  if ((status) == '200') {
    // update the page;
  } else {
    // alert the user
  }
});
```





This is fine if we need to do only one thing, but what if we need multiple things to wait for each other? Now we have callbacks within callbacks within callbacks. Our code becomes a callback Christmas tree. A deeply nested triangle of code decorated with behaviour.

More recently we got the ability to write code like this (again jQuery):

```js
const url = '/mydata.json';

$.getJSON(url)
  .done(function(data) {
    // update the page;
  })
  .fail(function(){
    // alert the user
  });
```





This is a nicer pattern. We have smaller functions, each of which does a single thing, and the conditional is gone.

The call to $.getJSON(url) returns a promise of future data, a Promise. We can chain methods off it to deal with the success and error states.

Promises are a formalisation of this syntax. We get standardised method names and parameters, which makes it easier to make libraries interoperate with one another.

## Promises are now core JavaScript

A variety of Promise specifications and libraries have been produced over the last few years. Fortunately we now have an official specification.

We create a promise like this:

```js
const getA = new Promise(function(resolve) {
  const a = 12;
  resolve(a);
});
```





We can then have something happen when the promise resolves:

```js
getA
  .then(function(a) {
    console.log(a);
  });
```






## Chaining thens

We may wish to have multiple things happen when our promise resolves. If our thenned function returns a value, that value will be passed on down the chain, like so:

```js
const getA = new Promise(function(resolve) {
  const a = 12;
  resolve(a);
});

getA
  .then(function(a) {
    console.log(a);
    return a + 1;
  })
  .then(function(b) {
    console.log(b);
    return b + 1;
  })
  .then(function(c) {
    console.log(c);
  });
```





If the function returns a value, the next element in the chain is called right away, but if a thenned function returns a promise, we wait until it is resolved. This can happen anywhere in the chain.


```js
const getA = new Promise(function(resolve) {
  const a = 12;
  resolve(a);
});

getA
  .then(function(a) {
    console.log(a);
    return a + 1;
  })
  .then(function(b) {
    console.log(b);
    // This promise won't resolve for 1000ms
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(b + 1);
      }, 1000)
    });
  })
  .then(function(c) {
    console.log(c);
  });
```





## Creating a promise which has already resolved

This code is not cool:

```js
const getA = new Promise(function(resolve) {
  resolve();
});
```





I've done this solely for the purpose of creating a promise object which I can chain from. We can create a promise which is already resolved like so:

```js
const sequence = Promise.resolve();
```





When a promise is in the resolved state, any thennable functions fill be executed right away in sequence.

```js
sequence
  .then(function() {
    console.log("First")
  })
  .then(function() {
    console.log("Second")
  })
```






We can then make use of this promise to chain sequential code.




## Thenning regular functions

This means that any function which receives a value and returns one can be integrated into the chain. For example parseInt:

```js
const getA = new Promise(function(resolve) {
  const a = "12";
  console.log(a + a); // outputs "1212"
  resolve(a);
});

getA
  .then(parseInt)
  .then(function(a) {
    console.log(a + a); // outputs 24
  });
```







## Catch

It may be the case that our promise fails to resolve. Perhaps our AJAX request fails. Perhaps our API is down. Perhaps there is no database. Perhaps we timeout.

In these instances we might need to reject the promise. We can do this like so:

```js
const getA = new Promise(function(resolve, reject) {
  reject('Sorry, there was no A');
})
```





We can then catch the error like so:

```js
getA
  .catch(function(reason) {
    console.log(reason);
  });
```





If a promise is rejected, we skip any intervening thens, and go right to the catch, then we continue as normal.

```js
const getA = new Promise(function(resolve) {
  resolve();
});

getA
  .then(function() {
    console.log('one');
    return new Promise(function(resolve, reject) {
      reject("There was a problem!");
    });
  })
  .then(function() {
    console.log('two');
    // This function will not be called
  })
  .then(function() {
    console.log('three');
    // Nor will this one
  })
  .catch(function(error) {
    // We skip right to this one
    console.log(error)
  })
  .then(function() {
    console.log('four');
    // This function will be run
  })
```





Note that if your code throws an exception, the promise will be implicitly rejected and execution will proceed to the next catch block.

## Promise.all

Sometimes we might want to wait until all our promises have resolved before we execute the next step. For this we have Promise.all.

```js
const waitAWhile = new Promise(function(resolve) {
  setTimeout(function() {
    console.log('waited a while');
    resolve('a');
  }, 1000);
});

const waitAWhileMore = new Promise(function(resolve) {
  setTimeout(function() {
    console.log('waited a while more');
    resolve('b');
  }, 2000);
});

Promise.all([
  waitAWhile,
  waitAWhileMore
]).then(function(a) {
  console.log(a, 'done waiting'); // output ['a', 'b'] 'done waiting'
});
```





The thenned function will receive an array of return values from the functions.

## Promises in Angular with $q

We can use native promises in Angular, but we might be more happy injecting the $q service into our application.

We can create a $q promise like so:

```js
$q(function(resolve, reject) {})
```





Say we have an API accessor service, typically we might just return the $http promise object like so:


```js
angular.module('github', [])
  .constant('githubBase', 'https://api.github.com')
  .service('github', function( $http, githubBase, $q ) {
    this.getEvents = function() {
      const url = githubBase + '/events?callback=JSON_CALLBACK';
      return $http.jsonp(url)
    }
  });
```





But what if we wanted to pre-process the result, we could compose a promise which does more work, like so:


```js
angular.module('github', [])
  .constant('githubBase', 'https://api.github.com')
  .service('github', function( $http, githubBase, $q ) {
    this.getEvents = function() {
      const url = githubBase + '/events?callback=JSON_CALLBACK';
      return $http.jsonp(url)
        .then(function(response) {
          resolve(response.data.data);
        });
    }
  });
```





Now we might use this in our controller:


```js
angular.module('app', ['github'])
  .controller('demoController', function($scope, github) {
    const showSpinner = function() {
      $scope.spinner = true;
    }
    const hideSpinner = function() {
      $scope.spinner = false;
    }
    const showError = function() {
      $scope.error = true;
    }
    showSpinner();
    github.getEvents()
      .then(function(github) {
        $scope.github = github;
      })
      .catch(showError)
      .then(hideSpinner);
  });
```








## Exercise - Make use of promises to show a spinner

Extend your Flickr controller. Use promises to show and hide a spinner.

Use a catch to show an error if the feed fails to download.



## Exercise - Preprocess your flickr response

Modify your Flickr service to preprocess the response and only return the list of items.
