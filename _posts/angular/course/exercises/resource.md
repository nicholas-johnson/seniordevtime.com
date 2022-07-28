---
title: "Resource - AngularJS Exercise"
section: "angular"
exercise: "resource"
layout: "exercise"
---



# $resource

ngResource is a module that provides us with a $resource service. We can use this to make API calls.

We can wrap our resource up in a factory, allowing us to generate a resource that will make an API call on our behalf and instantiate itself.

```js
$scope.author = $resource('http://simple-api.herokuapp.com/api/v1/authors/:id').get({ id: 1 });
```





The $scope.author object is in fact a promise. When the promise is fulfilled, the author will instantiate itself. This gives us this rather nice syntax, even though the author is instantiated asynchronously.

## Using a factory

It's common to create resources using a factory, like so:

```js
app.factory('Author', function($resource) {
  return $resource('http://simple-api.herokuapp.com/api/v1/authors/:id');
});
```





We can now get an author:

```js
const author = Author.get({ id:1 });
```





There's some magic going on here. The author object is in fact a promise that will configure itself when it is satisfied.

## Making overrides

We can make overrides to our resource routes by passing in a configuration object. This lets us use custom methods and URLs.

```js
app.factory('Author', function($resource) {
  return $resource('http://simple-api/api/vi/authors/:id', {}, {
    update: {
      method: 'PUT'
    }
  });
});
```





## Reading

Read the API spec here: <https://docs.angularjs.org/api/ngResource/service/$resource>




## Resource Exercise

Extend your CRUD exercise. Create a comment resource and use it to pull comments for articles.

For extra bonus points create a comments directive. You might write:

```js
<comments for="12" />
```





to get the comments for article 12.

.downloads


* [Code Samples](https://www.dropbox.com/sh/o7ej9gxikmb85ed/AADdf9CefPTpld0yErN2bUnPa?dl=1)
