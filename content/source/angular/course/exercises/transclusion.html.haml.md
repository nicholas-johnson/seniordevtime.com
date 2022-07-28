---
  title: "Directive Transclusion - AngularJS Exercise"
  section: "angular"
  exercise: "transclusion"
  layout: "exercise"
  ---
  
  %section
    :markdown
      # Transclusion
  
      Transclusion allows you to take content that is already in the element and modify it in some way. Say you have a div like this:
  
    :ruby
      code = <<-CODE
      <div my-directive>
        World of Wonder
      </div>
      CODE
    =code(code, :html)
  
    :markdown
  
      Now you apply a directive which includes a template.
  
    :ruby
      code = <<-CODE
      .directive('myDirective', function() {
        return {
          template: "<div>World of Template</div>"
        }
      });
      CODE
    =code(code)
  
    :markdown
  
      The innerHtml is set on the div and "World of Wonder" is no more. Sad. This is where transclusion comes in.
  
      **Transclusion allows us to access the element's original content which has been displaced by the template**
  
      When we tell a directive to transclude, the original content of the element is saved. Why would you want to do this?
  
      ## Uses of transclusion
  
      * **ng-if** - the transcluded content is only visible when a condition is met.
      * **ng-repeat** - the transcluded content is repeated for each element of an array.
      * **wrapping an element** - for example, wrapping a row of buttons in a menu bar.
  
      ## Scope of transcluded content
  
      Transcluded content will have the $scope in which it was declared. If your directive has an isolate $scope, the transcluded content will not share it unless you explicitly compile against the isolate scope.
  
      Consider carefully whether you need an isolate scope in this case.
  
      ## Two ways to transclude
  
      ### 1. the transclude directive
  
      If we tell our directive to transclude, the content that was originally in the element will still be available to us via the transclude directive in our template, like so:
  
    :ruby
      code = <<-CODE
  
      myApp.directive('transclusionDirective', function() {
        return {
          transclude:true,
          template: "Here is the transcluded content: <span ng-transclude></span> Nice huh?"
        }
      });
  
      CODE
    =code(code)
  
    :markdown
  
      ### 2. Use the transclude function in the link function
  
      If you have specified transclude: true, The link function will receive a handy transclusion function as it's 5th parameter. Call this function to compile the transclusion. Optionally pass in a scope to compile it with a scope object.
  
      This will allow you to compile the transcluded content against the isolate scope. Beware, this might surprise your user as you will have broken the $scope inheritance tree in your HTML. Do this only occasionally and with proper thought.
  
    :ruby
      code = <<-CODE
  
      myApp.directive('transclusionDirective', function($compile) {
        return {
          transclude:true,
          link: function(scope, element, attrs, controller, transclusion) {
            transclusion(scope, function(compiledTransclusion) {
              element.prepend(compiledTransclusion);
            });
          }
        }
      });
  
      CODE
    =code(code)
  
  %section.exercise
    :markdown
      ## Exercise - A transcluded header directive
  
      Create a directive that will add a header and footer to any element. You can do this entirely using the a template and the ng-transclude directive.
  
  
  %section.exercise
    :markdown
  
      ## Exercise - repeater
  
      Implement a really dumb little directive that simply repeats the content 5 times.
  
      Bonus marks for making it configurable, so that we can repeat the content n times. You would do this by inspecting the attrs array in the pre-link function.
  
      Bonus points for using the $parse service to parse the transcluded template as Angular code.
  
      Use the attr parameter in your link function to receive the value.
  
      Call it like this:
  
    :ruby
      code = <<-CODE
      <div repeat='5'>
        Hey there!
      </div>
      CODE
    =code(code, :html)
  
    :markdown
  
  
  %section.exercise
    :markdown
      ## Exercise - ng-if
  
      Reimplement ng-if. The transcluded content is shown if the passed in expression evaluates to true. You will need to use [$parse](https://docs.angularjs.org/api/ng/service/$parse) to evaluate the passed in expression.
  
      You will not need an isolate $scope here.
  
      Call it like this:
  
    :ruby
      code = <<-CODE
      <input ng-model="val" type='checkbox' />
      <div if='val'>
        Hey there!
      </div>
      CODE
    =code(code, :html)
  
  
  
  
  %section.downloads
    :markdown
      [Sample code](https://www.dropbox.com/sh/580ajhjqcvlzr54/AABa-gSujYVuIADWooujk4T0a?dl=1)
  