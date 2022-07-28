---
title: "Routes - AngularJS Exercise"
section: "angular"
exercise: "routing"
layout: "exercise"
---



# Routes

Routes are configured injecting the $routeProvider object into the config function.

Here's a simple example:


```js
myApp.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home.html'
    })
    .when('/about', {
      templateUrl: 'about.html',
      controller: 'aboutController'
    });
  });
```





Use the ngView directive to output the content specified by the route:

```html
<div ng-view></div>
```








## Entry Exercise - Create a two page AJAX site

1. Read the docs here: <https://docs.angularjs.org/api/ngRoute/service/$route>
2. Create a site with two pages of content, home and contact. Use routing to swap between them.



## Exercise - Flickr Links

Add links to the top of your flickr app to allow the user to perform common searches - cats, hamsters, cheeses.

The user should be able to click the link to hit the URL and display the template.

Optionally activate HTML5 mode.




## Exercise - Flickr sharable URL

Extend the Flickr app so that the tag is in the URL.

When I click search, navigate to a url that contains the tag, like this:

localhost/flickr.html/#cats

This should show a list of cats.

You may need to use the $location service to do this ($location.path('/#cats');)




## Exercise - Simple API

Create a route which displays a single article from the simple API. It should receive an id parameter, then use this to make an api request to the server via your service.

You will need to inject the $routeParams service into your controller to retrieve the parameters in your controller.

From your articles index, link to the individual articles.

<https://docs.angularjs.org/api/ngRoute/service/$routeParams>




## Further Exercise - New article route

Create an "article_form" template in a separate file. Create a route that will display the form. The form fields should be bound to the scope. When you submit the form, use the values in scope to post to the API, creating a new article and displaying it.

