---
  title: "Repeat and Filter - AngularJS Exercise"
  section: "angular"
  exercise: "repeat-and-filter"
  layout: "exercise"
  ---
  
  %section
    :markdown
      # Repeat and Filter
  
  
      If we have an array of objects in $scope, like this:
  
    :ruby
      code = <<-CODE
      .controller('catController', function() {
        $scope.cats = [
          {name: "Tigger"},
          {name: "Cheeze Wizz"}
        ]
      })
      CODE
    =code(code)
  
    :markdown
  
      we might want to iterate over them and output them one by one. We can achieve this in the template using the ng-repeat directive:
  
    :ruby
      code = <<-CODE
      <li ng-repeat="cat in cats">
        {{cat.name}}
      </li>
      CODE
    =code(code, :html)
  
    :markdown
  
      ## What is happening here?
  
      For each item in the cats array, the ng-repeat directive creates a new $scope, seeding it with a value 'cat'. It then compiles the <li> against that scope and adds it to the DOM. The result is a list of cats.
  
      ## Search and sort
  
      We can pipe our cats array through a filters to modify it. ng-repeat will iterate over the modified array
  
    :ruby
      code = <<-CODE
      <input ng-model="filterString" />
      <input ng-model="orderString" />
      <li ng-repeat="cat in cats | filter:filterString | orderBy:orderString">
        {{cat.name}}
      </li>
      CODE
    =code(code, :html)
  
    :markdown
  
      You may wish to briefly review the ng-repeat docs here: <https://docs.angularjs.org/api/ng/directive/ngRepeat>. Familiarise yourself with the available variables.
  
  
  
  %section.exercise
    :markdown
  
      ## Exercise - List your Assets
  
      As an evil genius, you will have a list of henchmen that you rely on. Create such a list in JSON and add it to $scope from inside your controller.
  
      Now use ng-repeat to loop over the array and output it to the DOM. Add sort and search to help you choose the right villain for the job.
  
      **n.b.** If you have a particular love for another domain, please feel free to use that instead.
  
  
  %section.exercise
    :markdown
  
      ## Exercise - Search the henchmen
  
      We are now going to add a search field.
  
      Create an input field and bind it to a "search" model, like this:
  
    :ruby
      code = <<-CODE
      <input ng-model="search" />
      CODE
    =code(code, :html)
  
    :markdown
  
      Add a filter to allow you to search according to the term.
  
    :ruby
      code = <<-CODE
      <div ng-repeat="cat in cats | filter:search">
      CODE
    =code(code, :html)
  
    :markdown
  
      The filter documentation is here: <https://docs.angularjs.org/api/ng/filter/filter>
  
  
  
  
  %section.exercise
    :markdown
  
      ## Further Exercise - Sort the henchmen
  
      You have a problem. You have to kidnap a rocket scientist and you need to work out the best henchman for the job. We need to sort the henchmen
  
      Pipe the array through the orderBy filter to sort the array sensibly.
  
    :ruby
      code = <<-CODE
      <div ng-repeat="cat in cats | filter:search | orderBy:order">
      CODE
    =code(code, :html)
  
    :markdown
  
      Review the docs here to find out how: <https://docs.angularjs.org/api/ng/filter/orderBy>
  
      ### Optional extension
  
      Add buttons at the top of your page which set the value of order. You can click them to sort the array on different fields.
  
      ### Further extension
  
      You will find there is a variable called $index in scope. Output the $index variable to show the current position in the sorted array.
  
  
  
  %section.exercise
    :markdown
      ## Exercise - Write Unit Tests
  
      Write a unit test with Karma. All this needs to do is instantiate the controller and check that scope contains the array of objects.
  
      You'll know that:
  
      1. Your controller can be instantiated, and
      2. Your scope contains henchmen.
  
  
  %section.exercise
    :markdown
  
      ## Extra Exercise (if you finish first)
  
      Review the track by documentation here: <https://docs.angularjs.org/api/ng/directive/ngRepeat#tracking-and-duplicates>
  
      Add in a track by clause to your repeater.
  
      Implement the strict search example in the filter docs: <https://docs.angularjs.org/api/ng/filter/filter>
  
  
  