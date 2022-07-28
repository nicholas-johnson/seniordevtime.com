---
  title: "Directive compilation - AngularJS Exercise"
  section: "angular"
  exercise: "directive-compilation"
  layout: "exercise"
  ---
  
  %section
    :markdown
      # Directive Compilation and the link function
  
      Every DOM manipulation we have made so far has involved templates and $scope. For almost every case, this is sufficient.
  
      However, sometimes we do need just a little more control, and so Angular gives us direct, low level access to the compiler.
  
      ## Link
  
      The link function is where we can make direct DOM manipulations, access attributes, and pretty much do whatever we like.
  
      Misko has called it the escape hatch, you can do everything here, but before you do so, consider if you need it. Often there is a solution involving templates that will be simpler and more maintainable.
  
      Here is a link function that appends a string to the current element.
  
  
    :ruby
      code = <<-CODE
      angular.module('app', [])
        .directive('usefulDirective', function() {
          const directive = {
            link: function(scope, element, attributes, controller) {
              element.append('Hello Angular!')
            }
          }
          return directive;
        });
      CODE
    =code(code)
  
    :markdown
  
      ## Link Function Parameters
  
      This function is low level and doesn't work with injection. It receives hardcoded parameters.
  
      The parameters are:
  
      * scope - the current directive scope. Note this will be more complex if you have a transclusion scope active, more on this later.
      * element - the element that your directive has been applied to. This is a jqLite element, you can talk to it just like jQuery.
      * attributes - the element attributes. You can optionally use this to pass values to your directive. You can also pass values using an isolate $scope. More on this later.
      * controller - the current controller object
  
      ## JQLite or templates
  
      Directives give us access to jQuery or jqLite. If jQuery is available, Angular will automatically make it available. If not, Angular will use jQLite which is a cut-down version of jQuery.
  
      However in most cases you will find that you can get your work done faster and more cleanly using templates, and this is the approach you should generally favour.
  
  %section.exercise
    :markdown
  
      ## Simple Exercise - a link function
  
      Create a very simple directive using the code above that uses the link function to append the string "hello from the directive" to your directive using jqLite.
  
  %section.exercise
    :markdown
  
      ## Simple Exercise - accessing attributes
  
      Create a simple greeting directive using the code above. Add an attribute "name" to your element. The directive should look in the attributes array and append 'hello dave' to the DOM, assuming the name was "dave".
  
  %section
    :markdown
  
      ## Order of Compilation
  
      Angular is a real compiler which will traverse your DOM executing directives as it goes. Understanding the order of compilation is crucial to understanding directives.
  
      Angular will traverse your DOM depth first, instantiating controllers on the way down, and running link functions on the way up.
  
      * If your directive has a controller it will instantiate this on the way down the DOM tree.
      * If your directive has a link function it will execute this on the way back up the DOM tree after all the controllers have been instantiated. We guarantee the existence of all controllers before the link functions are run.
  
  
    :ruby
      code = <<-CODE
      angular.module('app', [])
        .directive('usefulDirective', function() {
          const directive = {
            controller: function($scope) {
              // this will be instantiated on the way down the tree
            },
            link: function() {
              // this will be instantiated on the way up the tree
            }
          }
          return directive;
        });
      CODE
    =code(code)
  
    :markdown
  
      If you want to execute link functions on the way down the tree declare pre and post link functions like this:
  
  
    :ruby
      code = <<-CODE
      angular.module('app', [])
        .directive('usefulDirective', function() {
          const directive = {
            controller: function($scope) {
              // this will be instantiated on the way down
            },
            link: {
              pre: function() {
                // this will be instantiated on the way down
                // but after the controller
              },
              post: function() {
                // this will be instantiated on the way up
              }
          }
          return directive;
        });
      CODE
    =code(code)
  
    :markdown
  
  
  
  %section.exercise
    :markdown
      ## Exercise - Parameterise Flickr
  
      We're going to use the link function to access a attribute from the tag.
  
      Assume we have a directive which we would like to use like this:
  
    :ruby
      code = <<-CODE
      <div flickr tag="toast"></div>
      CODE
    =code(code, :html)
  
    :markdown
  
      Add a link function to the directive that will look inside the attrs array and pull out the value for tag. Save this value in $scope.
  
      Now in your controller, watch the tag attribute, and get the feed when it is set, something like this: `$scope.$watch('tag', getFeed)`
  
      Remember your controller will be instantiated before the link function is run.
  
  %section.exercise
    :markdown
  
      ## Bonus Exercise - Random quote
  
      Create a directive which renders a random quote on the page. Use the link function to replace the content of the current element with the joke.
  
      Bonus, pull the quote from an API, such as the Chuck Norris random joke API: <http://api.icndb.com/jokes/random>
  
  
  %section.downloads
    :markdown
      ## Further reading - you will like this.
  
      * [Jurgen Van de Moere on directive compilation](http://www.jvandemo.com/the-nitty-gritty-of-compile-and-link-functions-inside-angularjs-directives/)
  