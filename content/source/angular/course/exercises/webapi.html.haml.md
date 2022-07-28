---
  title: "Routes - AngularJS Exercise"
  section: "angular"
  exercise: "webapi"
  layout: "exercise"
  ---
  
  %section
    :markdown
      # Microsoft WebAPI
  
      When implementing an API, we have 3 choices.
  
      1. Serve our templates from the same domain as the API to get around the same domain policy.
      2. Use CORS in IE10+. Optionally implement a polyfill for IE9.
      3. Use JSONP.
  
      In this section we will implement a solution where the templates are served from the same domain.
  
      Create a new asp.net web application. Then choose WebAPI as the project type.
  
  %section.exercise
    :markdown
  
      ## Building a simple hardcoded API
  
      We are now going to create a simple hardcoded web API.
  
      1. Go here and complete tasks 1 and 2. <http://www.asp.net/web-api/overview/older-versions/build-restful-apis-with-aspnet-web-api#Exercise1>
      2. Now we can visit a URL of this form and see a JSON feed: /api/contact.
  
      ## Build a service to consume the API
  
      We use an Angular service to create a web API. Create a new JavaScript file. Add a module and a service to pull the /api/contacts URL and save.
  
      Now create a controller which injects the service. Save the result into scope.
  
      Finally create an index.html file which uses ng-controller to instantiate scope and render the contacts.
  
  %section.exercise
    :markdown
  
      ## Build a RESTful API
  
      We're now going to take this further and build a Restful API.
  
      Go here and follow this. We don't need to deploy to Azure (doing so is optional). We just need to build the API.
  
      <https://azure.microsoft.com/en-us/documentation/articles/web-sites-dotnet-rest-service-aspnet-api-sql-database/>
  
      At the end we should be able to hit /api/contacts to get a list of contacts. We should also be able to post to the same URL to create a new contact.
  
      ## Build a service to talk to the API
  
      First up, build a service which can talk to the API. It will look something like the following:
  
    :ruby
      code = <<-CODE
      angular.module('products', [])
        .service('products', function($http) {
          this.index = function() {
            const url = '/api/products';
            return $http.get(url);
          };
          this.get = function(id) {
            const url = '/api/product/' + id;
            return $http.get(url);
          };
          this.delete = function(product) {
            const url = '/api/product/' + product._id;
            return $http.delete(url);
          };
          this.create = function(product) {
            const url = '/api/products';
            return $http.post(url, product);
          };
          this.save = function(product) {
            const url = '/api/products';
            return $http.patch(url, product);
          };
        });
      CODE
    =code(code)
  
    :markdown
  
      (You will need to update the URLs here.) Test this out in the console.
  
      Ideally build a Karma test to check it works.
  
      ## Build a controller
  
      Next build a controller which can pull a list of the contacts. Save the contacts in $scope. Write a view which can render them.
  
      ## Create a form
  
      Make a form which can create a new contact. Create a createContactController to manage the form. When the form is submitted, send the new contact.
  
      ## Optional Extra - Extract the form into a template
  
      If you extract the form into a template, you can reuse the same form to edit contacts.
  
      Optionally create an editContactForm controller which will let you edit a contact in scope.
  
  %section.exercise
    :markdown
      ## Optional Extra - Routing
  
      Create a route that will allow you to view a single contact. It should be of the form /contact/:id. You will need a controller which talks to the API and pulls in the relevant contact. It should then render an appropriate template.
  
      Choose ngRoute or uiRouter to accomplish this.
  
  
      ## Take this further with a contact directive
  
      Create a contact web component. You should be able to call:
  
      <contact contact_id="123"></contact>
  
      to render a contact. This contact can deal with the necessary AJAX calls to download the contact and display it.
  
      For bonus points have it display it's own spinner until the contact is ready to display.
  
  %section.exercise
    :markdown
      ## Harder Exercise - CORS
  
      CORS will allow us to serve templates from any URL. We can keep our front end and back end on different servers. We can use multiple APIs. we call this a component based architecture. It's a very nice way to do things.
  
      You can find instructions to enable CORS here:
  
      <http://www.asp.net/web-api/overview/security/enabling-cross-origin-requests-in-web-api#enable-cors>
  
      Try to enable CORS in your server.
  
  