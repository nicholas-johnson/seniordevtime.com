---
  title: "$scope - AngularJS Exercise"
  section: "angular"
  exercise: "scope"
  layout: "exercise"
  ---
  
  %section
    :markdown
      # $Scope and the $scope tree
  
      $scope is a shared object which we use to pass data back and forthe between our controllers and our front end. We can make it available in our controller by injecting it, and it is always magically available in our template.
  
      (Note, there is no magic, and we'll look more at expression compilation in a bit.)
  
      ## What goes in $scope?
  
      We can store objects such as models, helper functions and even the controller itself as attributes of $scope.
  
      ## Getting $scope in a controller
  
      We get access to $scope in a controller, just by injecting it (more on injection later.) Injecting $scope, means our controller constructor function receives a variable called $scope:
  
    :ruby
      code = <<-CODE
      angular.module('app', [])
        .controller('MyController', function($scope) {
          $scope.hello = 'Hey from $scope!'
        });
      CODE
    =code(code)
  
    :markdown
  
      ## Accessing $scope from the template
  
      We can then show attributes of $scope in the front end, like so:
  
    :ruby
      code = <<-CODE
      <p>{{hello}}</p>
      CODE
    =code(code, :html)
  
    :markdown
  
      Note that we never refer to $scope in the front end. $scope is implicit, because in our template, $scope is all we have. When we access what looks like a variable in our template, we are really accessing an attribute of $scope.
  
      ## Storing functions in $scope
  
      We can also store functions in $scope. This lets us create callbacks that might be executed when a button is clicked for example, like so:
  
  
    :ruby
      code = <<-CODE
      angular.module('app', [])
        .controller('MyController', function($scope) {
          $scope.handleClick = function() {
            $scope.buttonWasClicked = true;
          }
        });
      CODE
    =code(code)
  
    :markdown
  
      We might then trigger this helper function when a button is clicked using ng-click like so:
  
    :ruby
      code = <<-CODE
      <button ng-click="handleClick()">Click me!</button>
      <p>{{buttonWasClicked}}</p>
      CODE
    =code(code, :html)
  
    :markdown
  
      Notice that we have to call the function in the ng-click expression using braces ().
  
      ## Scope of $scope
  
      You might be wondering in which parts of our template $scope is available.
  
      Whenever we use the ng-controller *directive* we get a new $scope object that belongs only to that part of the template. Some other *directives* will also create a new $scope.
  
      ## $scope forms a Tree
  
      Each new $scope that is created will inherit for its parent using JavaScript prototypical inheritance. This means we get a tree of $scope objects that roughly follows the shape of our DOM. At the root of this tree is an object called $rootScope.
  
      If we set a value on $rootScope it becomes available everywhere. If we set a value on a $scope in our controller, it is available in the current $scope and all child $scopes
  
  %section.exercise
    :markdown
  
      ## Exercise - Fix the code
  
      The following pieces of code are suffering from scope issues. Have a look inside and see if you can fix the code for exercise_1 and exercise_2.
  
      Find specific instructions in the readme.txt files.
  
      You can find the exercises in the Github respository.
  
  %section.exercise
    :markdown
  
      ## Exercise - Multiple profile widgets
  
      Extend the profile exercise from the previous section. We should be able to have multiple profile widgets on the same page. Copy and paste a few profile widgets next to each other. Type in one. Notice how they are separate units of interaction, each with its own controller and $scope.
  
      Now copy paste a few profile widgets inside one another, notice how they inherit, typing in the parent
  
  
  
  %section.exercise
    :markdown
  
      ## Harder Exercise - Storing data on the controller
  
      *This is a harder, more freeform exercise. Feel free to skip this. We will return to writing code like this later in the course.*
  
      Because our controller is just an object, we can store your controller itself in $scope, like this:
  
    :ruby
      code = <<-CODE
      .controller('myController', function($scope) {
        const vm = $scope.vm = this;
        vm.profile = {
          name: "Dave"
        }
      })
      CODE
    =code(code)
  
    :markdown
  
      This is possible because the controller itself is an object, so we can set attributes of it and use it to store data.
  
      You can now access your controller and associated model in your view, like this:
  
    :ruby
      code = <<-CODE
      <p>{{vm.profile.name}}</p>
      CODE
    =code(code, :html)
  
    :markdown
  
      You don't need to write code like this, but if you do it leads nicely onto components.
  
      Modify the profile widget so that the data is stored on the controller.
  
  
  %section
    :markdown
      ## Further Reading
  
      Read the scope documentation here: <https://docs.angularjs.org/guide/scope>
  