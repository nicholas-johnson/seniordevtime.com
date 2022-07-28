---
  title: "Services - AngularJS Exercise"
  section: "angular"
  exercise: "services"
  layout: "exercise"
  ---
  
  %section
    :markdown
  
      # Services & Factories
  
      Services and Factories are objects Angular injectables that we use to create objects. They are very similar to one another and are often used interchangeably.
  
      * Service and factories both yield singleton objects.
      * Once created this object will persist and you will get the same object back each time you request it.
      * We can inject services and factories into controllers using DI.
  
      ## A Service
  
      We compose a service by giving Angular a newable function (one which writes to "this").
  
    :ruby
      code = <<-CODE
      angular.module('app')
        .service('helloService', function() {
          this.sayHello = function() {
            alert("Hello");
          };
        });
      CODE
    =code(code)
  
    :markdown
  
      ## A Factory
  
      A factory on the other hand composes an object and returns it:
  
    :ruby
      code = <<-CODE
      angular.module('app')
        .service('helloFactory', function() {
          return {
            sayHello: function() {
              alert("Hello");
            }
          };
        });
      CODE
    =code(code)
  
    :markdown
  
      ## Making use of factories and services
  
      Once we declare them, services and factories become injectable. Let's inject them into a controller:
  
    :ruby
      code = <<-CODE
      angular.module('app')
        .controller('myController', function(helloService, helloFactory) {
          helloService.sayHello();
          helloFactory.sayHello();
        })
      CODE
    =code(code)
  
    :markdown
  
      ## Services as API accessors
  
      Services are often used as API accessors to take API code out of a controller and keep the controller focussed on $scope.
  
      Here is a service that can talk to Github:
  
    :ruby
      code = <<-CODE
      angular.module('app', [])
        .service('github', function( $http ) {
          const url = 'https://api.github.com/events?callback=JSON_CALLBACK';
          this.getEvents = function () {
            return $http.jsonp(url);
          }
        });
      CODE
    =code(code)
  
    :markdown
      ## Further Reading
  
      For more on the technical and conceptual differences between services and factories, read my Stack Overflow post here:
  
      <http://stackoverflow.com/a/27545899/687677>
  
  %section.exercise
    :markdown
      ## Flickr Service
  
      We are going to refactor our Flickr exercise to use a service. If you didn't complete the Flickr exercise, you can download some [sample code from here (look in the exercise section)](https://www.dropbox.com/sh/2kmvfno34kql3ff/AAAylZo0Vb1v5maMApgHcpKNa?dl=1)
  
      1. Create a Flickr service, that encapsulates the AJAX logic needed to pull data from the Flickr API. Return the $http object so that we can apply callbacks. You can use the code above as a template.
      2. Return to your Flickr exercise. Inject the Flickr service into your controller and use this instead.
  
  %section.exercise
    :markdown
      ## Further Exercise - Simple shopping cart service
  
      1. Create a service to manage a shopping cart. Give it a cart variable which holds an array of objects.
      2. Add an addToCart function to the service which pushes an item into the cart.
      3. Write a controller to display the cart. Inject the cart into your controller.
      4. In your controller, write a simple method on $scope which calls shoppingCart.addToCart.
      5. In your controller, create an attribute of $scope that holds the shoppingCart.cart.
      5. Write a view to render the cart.
  
  %section.downloads
    :markdown
  
      ## Downloads
  
      * [Code from the board](https://www.dropbox.com/sh/2kmvfno34kql3ff/AAAylZo0Vb1v5maMApgHcpKNa?dl=1)
  