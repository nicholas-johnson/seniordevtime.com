---
  title: "Binding - AngularJS Exercise"
  section: "angular"
  exercise: "binding"
  layout: "exercise"
  ---
  
  %section
    :markdown
      # Binding
  
      Angular features super easy two way binding. Binding a value means setting up listeners so when the value changes, the front end updates to match, and when the front end is changed (say using a form) the saved value is updated.
  
      ## $scope
  
      Angular uses a special object called $scope to store data. All bound values are actually attributes of the $scope object. We will look at $scope in some detail shortly.
  
      ## ng-model
  
      We can bind an input to a model using the ng-model directive. This automatically creates watchers (listeners) on the input element. When the input element changes the watchers fire and set an attribute of a special object called $scope.
  
    :ruby
      code = <<-CODE
      <body ng-app>
        <input ng-model="test" />
      </body>
      CODE
    =code(code, :html)
  
    :markdown
  
      $scope is available elsewhere in the view, and also in the controller as we shall very soon see.
  
      ## Curlies {{}}
  
      We can output any attribute we have in $scope using the handlebars curly brace syntax. When we do this, Angular will create more watchers in $scope that recompile the DOM when the 'test' attribute changes.
  
      Like so:
  
    :ruby
      code = <<-CODE
      <body ng-app>
        <input ng-model="test" />
        {{test}}
      </body>
      CODE
    =code(code, :html)
  
    :markdown
  
      ## ng-bind
  
      We can also explicitly bind any element to scope using the ng-bind directive. In most circumstances this is entirely equivalent to the curly brace syntax.
  
    :ruby
      code = <<-CODE
      <p ng-bind="test"></p>
      CODE
    =code(code, :html)
  
  %section.exercise
    :markdown
  
      ## Exercise - Evil Siri
  
      You are a crazy scientist building an AI for world domination. For reasons known only to you, you have chosen Angular to help you in this epic task. Your first job is to teach your new creation to greet you by name.
  
      Write an Angular template which contains an "enter your name" form. As you type, it updates the page with an h1 tag, like this:
  
    :ruby
      code = <<-CODE
      <h1>
        Welcome Dave. How may I serve you today?
      </h1>
      CODE
    =code(code, :html)
  
    :markdown
  
  
  %section.exercise
    :markdown
  
      ## Exercise - Handy instant maths calculators
  
      As an evil genius, you need a calculator to help you work how many helidrones you will need to steal the houses of parliament.
  
      Let's build one now. There are two input fields, each with a number, like this:
  
    :ruby
      code = <<-CODE
      <input placeholder='Enter an evil number' />
      <input placeholder='And another' />
      CODE
    =code(code, :html)
  
    :markdown
  
      Use the curly brace syntax or ng-bind to output the sum of the two numbers.
  
      When you fill in the fields, output a little list in HTML that looks something like this:
  
    :ruby
      code = <<-CODE
      <ul>
        <li>
          2 + 2 = 4
        </li>
        <li>
          2 - 2 = 0
        </li>
        <li>
          2 * 2 = 4
        </li>
        <li>
          2 / 2 = 1
        </li>
      </ul>
      CODE
    =code(code, :html)
  
    :markdown
  
      * 3 + 2 = 5
      * 3 - 2 = 1
      * 3 * 2 = 6
      * 3 / 2 = 1.5
  
    :markdown
  
      When I type in the input fields the list should update in real time.
  
      * You might like to extend this to create a VAT calculator, a currency converter or a unit converter.
  
  
  %section.exercise
    :markdown
  
      ## Exercise - Time remaining
  
      In the last section we wrote code to let us see the number of seconds in a year.
  
      Add a little input box that lets us type in a your age in years.
  
      Output the number of weeks in your life so far. Have it output the approximate number of weeks remaining. Output a percentage completion.
  