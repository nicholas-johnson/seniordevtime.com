---
  title: "Directives - AngularJS Exercise"
  section: "angular"
  exercise: "directives"
  layout: "exercise"
  ---
  
  %section
    :markdown
      # Directives
  
      Angular is a DOM compiler. It receives an HTML template, and compiles it into an app. Directives allow us to extend the capabilities of the compiler. We can recognize new elements, new attributes, even classes.
  
      ## Directives let us touch the DOM
  
      Directives are the places where Angular is wired into the DOM. In a directive, we get full access a particular DOM node including the element, element children and attributes.
  
      Try not to touch the DOM anywhere else (except in templates). If you find yourself needing to do this, you may need to have a rethink.
  
      ## Built-in directives
  
      Angular comes with many built-in directives which we have been using. Some obvious examples are:
  
      * ng-repeat
      * ng-model
      * ng-show
      * ng-app
      * ng-src
  
      Some less obvious examples are:
  
      * form
      * input
      * textarea
  
      Angular will treat form elements, input elements, hyperlinks, img tags and many others as directives.
  
      ## Don't Despise the Built-In Directives
  
      You can get quite a lot of your work done using the built in directives. Upon finding a new hammer, it's normal to find that everything starts looking like a nail. Before you get stuck into creating a directive consider if you really need one or if the built-in directives will do the job.
  
      ## Declaring a directive
  
      We declare a directive by writing a constructor function that returns a definition object, like so:
  
    :ruby
      code = <<-CODE
      angular.module('app', [])
        .directive('usefulDirective', function() {
          const directive = {
            template: "<p>Hello from the directive!</p>",
            restrict: "A",
            scope: true,
            controller: function($scope) {}
          }
          return directive;
        });
      CODE
    =code(code)
  
    :markdown
      * template - a string that will be used as a template. This is a real template and can include other directives or curly braces.
      * templateUrl - use this instead of template if your template content is web accessible.
      * restrict - Accepts the characters "AEC" or any subset thereof. Tells the directive to match an attribute, element or class.
      * scope - pass true if you want a new child scope.
      * controller - your directive can have a controller which can receive injectors in the normal way.
  
      Use your directive like this:
  
    :ruby
      code = <<-CODE
      <div useful-directive></div>
      CODE
    =code(code, :html)
  
    :markdown
  
      ## Directive naming - HTML is case InSenSiTiVe!
  
      Because HTML is not case sensitive, directive names are camelCased in the JavaScript and hyphenated-in-the-html. Angular automatically translates between the two forms.
  
      This is very important to remember. This will bite you if you forget it.
  
      * In your HTML, hyphenate-your-directive-names
      * In your JavaScript, camelCaseYourDirectiveNames
  
      ## Precomposing templates
  
      It's common to use Gulp or Grunt to compose your template strings, perhaps from a directory of HTML.
  
      Precomposing your templates will limit the number of AJAX requests your app needs to make to get hold of the content.
  
      See the section on Gulp if you'd like to know more on this.
  
  
  %section.exercise
    :markdown
  
      ## Exercise - Flickr Directive
  
      We are going to create a directive which displays the Flickr application.
  
      1. Review the Angular directives guide - <https://docs.angularjs.org/guide/directive>
      2. Create a directive which has a controller and a template. The controller should get the flickr feed (ideally using a service). It should save the feed into $scope, so the template can display it.
      3. It should be possible to add a `<flickr></flickr>` element to the page, and have it output a little flickr application, possibly containing a list of cat pictures.
  
    :ruby
      code = <<-CODE
      <flickr></flickr>
      CODE
    =code(code, :html)
  
    :markdown
  
      Don't worry about passing data into your directive at this stage, we'll get to that.
  