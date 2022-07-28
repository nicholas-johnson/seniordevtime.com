---
  title: "UI-Router - AngularJS Exercise"
  section: "angular"
  exercise: "ui-router"
  layout: "exercise"
  ---
  
  %section
    :markdown
      # UI-Router
  
      The default Angular router lets us define URLs and describe how the router should respond, which template it should pull in, and which controller it should use.
  
      UI Router comes from a different angle. Instead of defining URLs, we define named states, then define the URL, controller and templates associated with that state.
  
      We can have multiple named template insertion points for a single state. We can define nested states. We can drop into HTML5 mode and generate real URLs.
  
      ## There are 3 ways to change state
  
      ### Using the ui-sref directive
  
      From the template using the ui-sref directive like so:
  
      <a ui-sref="statename">link</a>
  
      ### Using the $state service
  
      From JavaScript using the $state service:
  
      $state.go('statename');
  
      ### By simply changing the URL
  
      From the browser by navigating to the URL. You can do this by typing in the address bar, or by setting document.location.
  
  
      ## A default route
  
      We can create a default route using otherwise:
  
    :ruby
      code = <<-CODE
      angular.module('app', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
          $urlRouterProvider.otherwise("/");
        });
      CODE
    =code(code)
  
    :markdown
  
      Any unmatched route will redirect to '/'
  
      ## A state
  
      We define a state like this:
  
    :ruby
      code = <<-CODE
      angular.module('app', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
  
          $urlRouterProvider.otherwise("/");
  
          $stateProvider
            .state('home', {
              url: "/home",
              templateUrl: "home.html"
            })
        });
      CODE
    =code(code)
  
    :markdown
  
      We use the ui-sref directive to generate hyperlinks based on the state names. We use the ui-view directive to locate our template.
  
    :ruby
      code = <<-CODE
      <!DOCTYPE html>
      <html>
        <head>
          <title>Scope</title>
          <script src="angular.js"></script>
          <script src="ui-router.js"></script>
          <script src="demo.js"></script>
        </head>
        <body ng-app="app">
  
          <a ui-sref="home">home</a>
          <div ui-view></div>
        </body>
      </html>
      CODE
    =code(code, :html)
  
    :markdown
  
      The state has a name, a URL and a template URL. It can also optionally have a controller.
  
  %section.exercise
    :markdown
  
      ## Exercise - Add a route to your CRUD
  
      Add a router to your CRUD application that can show a particular article based on the URL.
  
      Optionally add a route to show a list of articles with links to navigate.
  