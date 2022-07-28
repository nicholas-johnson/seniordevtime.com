;;;
  "title": "Routing with Angular - Node Exercise",
  "description": "Node training course in London or Brighton UK"
  ;;;
  %article
    :markdown
      # Creating a Single Page App (SPA)
  
      Create a catch all route which will return index.html no matter what URL is requested.
  
      You will need a router, something like this. You can modify one of your existing routers:
  
    :ruby
      code = <<-CODE
      var express = require('express');
      var router = express.Router();
  
      /* GET index. */
      router.get('/*', function(req, res) {
        res.render('index', { title: 'Marks and Spencer' });
      });
  
      module.exports = router;
      CODE
    =code(code)
  
    :markdown
  
      Now add it to the middleware stack.
  
      You might want also want to create a route to serve template files from, or you could create a templates folder in the public directory and serve them from there.
  
      ## Exercise - Tabs
  
      Now let's make some tabs. Remember, everything in the public directory is shipped out as is. We can put static templates here, and Angular will find them. Alternately we can create a middleware route and serve Jade.
  
      Create an Angular router and try to wire together some tabs.
  
      ## Further exercise
  
      Using the simple API, create a view to add an article, a view to show an article with comments, and another to show a list of articles. Wire these together with an Angular router. Woot, a real website!
  