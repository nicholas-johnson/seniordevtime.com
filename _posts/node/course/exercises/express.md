%article


# Express

Express is a node module that which provides us with middleware. Middleware is like a pipeline. Requests are passed through each middleware function in turn top to bottom. Each middleware function receives the request and response objects, and can modify them.

Middleware functions can do things like:

* Log a request
* Check authorisation
* Serve a static file
* Inspect the URL, parse out URL parameters, and save them in the request
* Compile a SASS file and serve the result as CSS
* Serve a web page
* Serve an error or 404

We can build an entire site out of middleware.





## Exercise 1 - Install express locally using NPM

We're going to use NPM to manage our packages.

Create a directory to hold your express app. We'll use the NPM generator to make a package file. This will define our dependencies. Run the following:

```js
  npm init
```





Npm init is smart. If you're in a Git repo, it will use the details from that.

Now install the express dependency:

```js
  npm install express --save
```





Check out your directory. You have gained an node_modules directory that contains express and all it's dependencies. Now check out your package.json file. The express dependency has been saved in it.

You can now run:

```js
  npm install
```





...to install these dependencies on any machine.

You might be interested in the other npm command line methods. You can find them here: <https://www.npmjs.org/doc/>



## A Server

We create a simple server in Express by wiring together middleware functions.

```js
  var express = require('express');
  var http = require('http');

  var app = express();

  // create a route
  app.get('/', function(req, res){
    res.writeHead(200);
    res.write('Hello Express!!!');
    res.end();
  });

  // Create a server
  http.createServer(app).listen(3000);
```









## Exercise - Create a server

Use the code above to create a simple Express server.

Add another route. Make your server respond to a request for "/yo".

Change the port. Make your server listen on port 4567






## Custom Middleware

We can tell express to use a piece of middleware using app.use. This function receives 3 parameters, request, response and next.

Next is a function. If you call it, control will pass to the next item of middleware.

A piece of custom middleware might look like this:

```js
  app.use(function(req, res, next) {
    console.log('hello from the middleware!');
    next();
  });
```






## Logging Middleware

Create a custom middleware function that outputs the current URL to the console.





## Static file handling

We can use built in functions for middleware. Here we will use express to serve some static files.

Insert the following line before your routes:

```js
  app.use('/public', express.static(__dirname + '/public'));
```





Now create directory called public. Express will try to serve static files from the public directory, or subdirectories before moving down the middleware stack. You can put JavaScript files in here, CSS files, even JavaScript templates.



## Exercise - static files

Add static files to your website. You can now serve out CSS and JavaScript files.

Have your '/' route serve out a complete web page that pulls in a CSS file with Jade and a layout file.

For bonus points, generate your CSS file from SASS using Gulp.

You see how this is all starting to come together?

%img{ src: '/images/hannibal.jpg', alt: "I love it when a plan comes together" }




## Further Reading

<http://evanhahn.com/understanding-express/>

<http://docs.nodejitsu.com/articles/getting-started/what-is-require>
