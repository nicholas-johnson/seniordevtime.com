---
  title: "AJAX - AngularJS Exercise"
  section: "angular"
  exercise: "ajax"
  layout: "exercise"
  ---
  
  %section
    :markdown
  
      # AJAX
  
      We access remote services using the $http service, which we can inject into our controller.
  
    :ruby
      code = <<-CODE
      const url = 'http://www.mycats.com/api/cats';
      $http.get(url);
      CODE
    =code(code)
  
    :markdown
  
      This gives us a `Promise` object, which we can chain callbacks onto. In the callback, we generally push the response in to $scope, then allow the template to take over.
  
    :ruby
      code = <<-CODE
      $http.get(url)
        .then(function(response) {
          $scope.cats = response.data
        })
      CODE
    =code(code)
  
    :markdown
  
      Once your data is in scope, a digest will fire and your template will automatically update to display it.
  
  
  %section.exercise
    :markdown
  
      ## Exercise - update the Henchmen to pull from a JSON feed
  
      1. Have a look through the $http API documentation here: <https://docs.angularjs.org/api/ng/service/$http>
      2. Refactor your repeat and filter exercise to pull data from a JSON file via AJAX. Remember, your JSON must be well formed to work which means double quotes around all the keys.
  
  
  
  %section
    :markdown
      # JSONP
  
      JSONP is a hack which lets us make cross site AJAX requests. We use the $http object to make a request. We use the .then to respond when an AJAX request completes.
  
    :ruby
      code = <<-CODE
      angular.module('app', [])
        .controller('ajaxController', function($scope, $http) {
          const url = 'http://example.com/cats?callback=JSON_CALLBACK'
          $http.jsonp(url)
            .then(function(response) {
              $scope.cats = response.data;
            })
        });
      CODE
    =code(code)
  
    :markdown
  
      Choose one of the following exercises:
  
  %section.exercise
    :markdown
  
  
      ## Flickr Exercise
  
      The Flickr JSONP endpoint looks like this:
  
      <http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=JSON_CALLBACK>
  
      Pull the Flickr feed from the Internet and display the images.
  
      ## Extension
  
      Allow the user to search for a tag.
  
      Test with Karma.
  
  
  %section.exercise
    :markdown
  
      ## The Weather - Exercise
  
      You can pull in data from all over the internet. Here's the JSONP url for Open Weather Map:
  
  
      <http://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=JSON_CALLBACK>
  
      Use Open Weather Map to get the weather for a specific location
  
      ## Extension
  
      Allow the user to search for a city. You can find the Open Weather Map API here:
  
      <http://openweathermap.org/wiki/API/2.1/JSON_API>
  
      ## Extension
  
      Test with Karma.
  
  
  %section.exercise
    :markdown
  
      ## Exercise - Karma
  
      Write Karma tests. Use $httpBackend to mock out the AJAX call and verify that the data is retrieved.
  
  