---
  title: "CRUD - AngularJS Exercise"
  section: "angular"
  exercise: "crud"
  layout: "exercise"
  ---
  
  %section
    :markdown
      # CRUD
  
      The simple API provides an API which allows you to list, view and manipulate Articles, Authors and Comments. It's a fully functional CRUD API built on Rails that get's flushed each night.
  
      * [You can review the API spec here](/simple-api)
      * [You can find the source code here](https://github.com/forwardadvance/simple-api)
  
  %section.exercise
    :markdown
  
      ## Exercise - Create a service to access the articles
  
      1. Create a service which can access the article api, doing a get request for the list of articles.
      2. Make a controller to call the service and get the articles and add them to $scope.
      2. Write a template which will display all of the articles.
  
  %section.exercise
    :markdown
  
      ## Exercise - Create articles
  
      Extend your service so it can post to the articles API to create a new article. Call it manually from within the controller to test it works.
  
      Create form template and ng-include it on your page. Create a controller to manage form submission. Optionally add a little link or button to show and hide the form. Create a new article object in your controller and bind the form fields to it.
  
      Now in your controller, write a submit function. Cass this function with ng-submit. This function should send the new article to your service and save it.
  
  
  %section.exercise
    :markdown
  
      ## Hard Exercise - Write a transcluded directive to add edit links
  
      Transclusion allows us to wrap the content of an element inside a template.
  
      Write a transcluded directive which adds edit links to your articles. When you click it, it should make the content editable in some way by revealing a form. If possible, reuse the article form template you wrote before.
  
  %section.exercise
    :markdown
  
      ## Bonus Exercise - Comments
  
      If you finish first (and are therefore amazing), consider making a comment service to allow people to comment on an article.
  