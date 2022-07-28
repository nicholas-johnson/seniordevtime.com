---
  title: "JSONP - AngularJS Exercise"
  section: "angular"
  exercise: "jsonp"
  layout: "exercise"
  ---
  
  
  %section
    :markdown
      # JSONP
  
      JSONP is a hack which lets us make cross site AJAX requests.
      We use the $http object to make a request.
      We use the .success promise to respond when an AJAX request completes.
  
    :ruby
      code = <<-CODE
      angular.module('app', [])
        .controller('ajaxController', function($scope, $http) {
          $http.jsonp('http://example.com/cats?callback=JSONN_CALLBACK').success(function(data) {
            $scope.cats = data;
          })
        });
      CODE
    =code(code)
  
    :markdown
  
      Choose one of the following exercises:
  
  %section.exercise
    :markdown
  
  
      ## Flickr Exercise
  
      The flickr JSONP endpoint looks like this:
  
      <http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=JSON_CALLBACK>
  
      Pull the Flickr feed from the internet and display the images.
  
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
  