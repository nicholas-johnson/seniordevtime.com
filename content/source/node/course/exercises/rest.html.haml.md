%article
    %section
      :markdown
  
        # REST
  
  
        REST stands for REpresentational State Transfer. It's a complex term for a simple idea, that you should get a different result if you send a POST request to a URL than if you send a GET request to that same URL.
  
        Typically POST requests are used for sending data to the server, and GET requests for retrieving data. We also have PUT, PATCH and DELETE requests available to us.
  
        ## Parsing Post Parameters with Body Parser
  
        Body Parser is a piece of Express middleware that you can use to parse post requests. You add it to your middleware stack and it will automatically parse post data and add it to the the request object.
  
        require it like this:
  
      :ruby
        code = <<-CODE
        var bodyParser = require('body-parser');
        CODE
      =code(code)
  
      :markdown
  
        We can then add the middleware somewhere near the top of our stack, like so:
  
      :ruby
        code = <<-CODE
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded());
        CODE
      =code(code)
  
      :markdown
  
        We compose s form that submits data as a post request like this.
  
      :ruby
        code = <<-CODE
        form(url='/myurl' method='post')
         input(name="testValue")
         button Submit
        CODE
      =code(code, :jade)
  
      :markdown
  
        We will then find that we have a params object in our request which we can read values from.
  
      :ruby
        code = <<-CODE
        request.params.testValue
        CODE
      =code(code)
  
      :markdown
  
    %section.exercise
      :markdown
        ## Exercise - Create a calculator
  
        Create a simple form that can send a POST request to an Express endpoint containing 2 numbers.
  
        Have Express return a simple page that shows the sum of the two numbers.
  
    %section
      :markdown
  
        ## A Restful API
  
        We are going to build a proxy onto a RESTful API. We will build a little module that uses http.get and http.post to hit the API and return the result. This is the foundation of a Service Oriented Architecture (SOA).
  
        The following is a simple API spec.
  
        ### Pull a list of all articles
  
        GET <http://simple-api.herokuapp.com/api/v1/articles>
  
        ### Pull a single article by id
  
        GET <http://simple-api.herokuapp.com/api/v1/articles/1>
  
        ### Create an article
  
        POST <http://simple-api.herokuapp.com/api/v1/articles>
  
        with params:
  
        * title
        * intro
        * content
        * author_id
  
        ### Update an article
  
        POST <http://simple-api.herokuapp.com/api/v1/articles/1/update>
  
        with params:
  
        * title
        * intro
        * content
        * author_id
  
    %section.exercise
      :markdown
  
        ## GET a list of articles
  
        Create a module that can use http.get to hit the API and pull a list of articles. For bonus points, have it return a promise.
  
        Create a Node URL that hits this endpoint and returns the data.
  
        ## CREATE an article
  
        Extend your module so it can POST to the API to create an article. Again, have it return a promise.
  
        Bonus points t othe first one to create an Article.
  