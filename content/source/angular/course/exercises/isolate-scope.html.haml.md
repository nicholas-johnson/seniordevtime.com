---
  title: "Isolate scopes - AngularJS Exercise"
  section: "angular"
  exercise: "isolate-scope"
  layout: "exercise"
  ---
  
  %section
    :markdown
  
      # Isolate Scopes
  
      When we create a directive we often (but not always) want it to act like it's own little application, separate from its parent. In short, we want it to have its own $scope.
  
      Angular allows us to do this. We can create a directive which has an isolate scope. We can optionally pass parameters to the child scope, seeding it, and we can also optionally bind values from the document scope, so that when the document scope updates, those parameters in the child scope also update.
  
      ## Creating an isolate $scope
  
      Creating an isolate $scope in a directive is simple. Set the $scope to be an empty object, like so:
  
    :ruby
      code = <<-CODE
      .directive('myDirective', function() {
        return {
          scope: {}
        }
      })
      CODE
    =code(code)
  
    :markdown
  
      This will create a little application completely divorced from its parent.
  
      ## Passing parameters to an isolate $scope with @
  
      We can parameterise our directive using @. We can tell our directive to take an initial value from an attribute of the directive element, like so:
  
    :ruby
      code = <<-CODE
      .directive('myDirective', function() {
        return {
          scope: {cheese: '@'},
          template: "<input ng-model='cheese' />{{cheese}}"
        }
      })
      CODE
    =code(code)
  
    :markdown
  
      The isolate $scope will be seeded with the cheese attribute from the directive element.
  
    :ruby
      code = <<-CODE
      <div my-directive cheese="Wensleydale"></div>
      CODE
    =code(code, :html)
  
    :markdown
  
      ## Two-way isolate $scope binding with =
  
      @ will allow you to pass a variable into your isolate scope.
  
      = will allow you to bind a value in the isolate scope to a value outside of the isolate scope.
  
      This works using simple watchers. Watchers are created to monitor the values on both $scopes. When one changes, the watcher will update the other and vice versa.
  
      ## When to use isolate scopes
  
      Isolate scopes should be used with care. They are not suitable for every case as they break the simple $scope inheritance tree. It's worth noting that none of the built in Angular directives use isolate scopes.
  
      Use an isolate scope when you have created a reusable component that you might want to use in multiple places, for example, a map, or a login form component.
  
      While isolate scopes give us portability they do this at the expense of some flexibility.
  
      ## Isolate scopes with transclusion
  
      Isolate scopes will typically be used with a template to work properly. Only template code will gain access to the isolate scope. Transcluded content (content nested in the directive) will still use the parent scope.
  
  %section.exercise
    :markdown
  
      ## Exercise - Isolate the Flickr app
  
      Give your Flickr app an isolate scope. It should be able to receive a tag from its parent scope.
  
      I want to be able to call it like this:
  
    :ruby
      code = <<-CODE
      <input ng-model="search" />
      <flickr tag="search"></flickr>
      CODE
    =code(code, :html)
  
    :markdown
  