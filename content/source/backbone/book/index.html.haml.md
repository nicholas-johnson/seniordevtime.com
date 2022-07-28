;;;
  "title": "BackboneJS - Step by Logical Step",
  "description": "Backbone JS tutorial, Learn Backbone step by step",
  "alias": "backbone-book/"
  ;;;
  
  
  %article.book_cover
    :markdown
      # BackboneJS
  
      ## Step by Logical Step
  
      **By Nicholas Johnson**
  
    = partial :"version"
  
  
  %article.book
  
    %section#intro
      :markdown
        # What is this, what is that?
  
        Backbone is a the grand-daddy of all the JavaScript MVC frameworks. It's the progenitor of frameworks like Ember, Angular, even Meteor. It's a sensibly put together library full of tools to help you organise your web application, a toolkit for tidy JavaScript.
  
  
      %aside.pullquote
        [Backbone is] a toolkit for tidy JavaScript.
  
      :markdown
  
        You can use it to enhance your existing site, to add interactivity to a form for example, or you can go all out and create a single page app (SPA), where the entire site is generated clientside using JavaScript.
  
        Backbone comes packaged as a single JavaScript file which you link in the header of your page. It's purely clientside, and says very little about your server. Your server should ideally expose a restful JSON API, but this is not a requirement.
  
        Backbone engages in no magic, is very readable, and doesn't try to do too much for you.
  
    %section#mv
      :markdown
        # Architecture
  
        Backbone provides you with a Model View (MV) architecture. Unlike other JavaScript frameworks, there are no controllers. The view works a little like a controller.
  
        ## Models
  
        Your model is where you store your data. If you have an app for tracking sharks in the ocean, you might have a Shark model which would store the location and name of a shark.
  
        Models fire off events when they change. If your shark eats a swimmer and gains 10 notoriety points, it will fire an event to that effect.
  
        ## Views
  
        A view in Backbone is a region on the page into which Backbone will output some data. A view might be a form, or a map of sharks in the sea. Your page will be built up of one or more views.
  
        Views can listen to model events and redraw themselves when the model they are attached to changes.
  
        ## Collections
  
        A Backbone collection is an array of models. If you have 100 sharks, you would store those in a collection. If you tag a new shark, you might add it to the collection.
  
        Collections can also fire events. A view can listen to a collection.
  
        ## Router
  
        The Backbone Router uses JavaScript pushstate to change the URL in the address bar, allowing you to create an entire website clientside without hitting the server.
  
      %aside.box
        :markdown
          ## Backbone is a library, not a framework
  
          * A library is a set of functions and objects which you make use of in your code.
          * A framework wires your code together and calls it for you.
  
          Backbone is a library.
  
          You can use any of the Backbone components in any way you see fit, but it's up to you write the wiring code.
  
  
  
    %section#getting_started
      :markdown
        # Getting started
  
        Backbone depends on:
  
        ## Underscore
  
        an excellent library of useful JavaScript functions, including functions for functional style array and object manipulation, plus genuinely useful utility methods.
  
        Download here: <http://underscorejs.org/>
  
        ##JQuery
  
        Everyone's favourite DOM mainpulation tool. Choose 1.x if you want to support legacy browsers. Choose 2.x if you want a smaller faster codebase.
  
        Download here: <http://jquery.com/>
  
      %aside.sidenote
        Backbone depends on JQuery & Underscore
  
      :markdown
  
        ## Boilerplate
  
        A super stripped down Backbone boilerplate for local development might look something like this:
  
  
      :ruby
        code = <<-CODE
        <!DOCTYPE html>
        <html>
          <head>
            <title></title>
            <script src="underscore.js"></script>
            <script src="jquery.js"></script>
            <script src="backbone.js"></script>
            <!-- your code goes in app.js -->
            <script src="app.js"></script>
          </head>
          <body>
          </body>
        </html>
        CODE
      =code(code, :html)
  
      :markdown
  
        ## Content Delivery Network (CDN)
  
        You might also serve the libraries directly from a Content Delivery Network (CDN). Here are some options:
  
        * <http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js>
        * <http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js>
        * <http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js>
  
      If you serve from a CDN you will need to be connected to the internet to work on your site.
  
  
  
  
  
    %section#models
      :markdown
        # Getting Started with Backbone Models
  
        A model in Backbone is where we store our data. We create our model by inheriting from (extending) Backbone.Model.
  
        Extend is an underscore function that simply creates a new object using the provided object as a prototype.
  
  
      :ruby
        code = <<-CODE
        Shark = Backbone.Model.extend();
        const shark = new Shark();
        CODE
      =code(code)
  
      :markdown
  
        ## Initialising the model
  
        We can initialise our model with some values by passing in a JSON object, like so:
  
  
      :ruby
        code = <<-CODE
        const shark = new Shark({
          latitude: 45,
          longitude:38,
          name: 'Theophilus T. Shark'
        });
        CODE
      =code(code)
  
      :markdown
  
        ## Setting attributes on the model
  
        We can set attributes on our model using the set function.
  
  
      :ruby
        code = <<-CODE
        shark.set('name', 'Lennie');
        CODE
      =code(code)
  
      :markdown
  
        We can also set multiple attributes at the same time:
  
  
      :ruby
        code = <<-CODE
        shark.set({
          name: 'Lennie',
          age: 9.5
        });
        CODE
      =code(code)
  
  
      :markdown
        ## Getting values from the model
  
        We can get values back out of the model using the get function:
  
  
      :ruby
        code = <<-CODE
        shark.get('name');
        CODE
      =code(code)
  
  
      :markdown
  
        ## Why Do We Need .set & .get Functions?
  
        We typically set and get attributes on a JavaScript object using the dot notation, like this:
  
      :ruby
        code = <<-CODE
        shark.name = 'Lennie';
        console.log(shark.name); // Outputs 'Lennie'
        CODE
      =code(code)
      :markdown
  
        With Backbone we set and get attributes using .set and .get, like this.
  
      :ruby
        code = <<-CODE
        shark.set('name', 'Lennie');
        console.log(shark.get('name')); // Outputs 'Lennie'
        CODE
      =code(code)
      :markdown
  
        So why use these functions? The set function does 3 things:
  
        1. It sets the value as an attribute of the attributes object in your model, avoiding namespace collisions with functions defined by the Model prototype.
        2. It triggers a 'change' event on the model. Our views can listen out for the change event and optionally redraw themselves.
        3. It triggers a 'change' event on any collection that the model is part of. Again, any Views listening to the collection will be notified.
  
        Using .set allows us to trigger events and wire our app together using listeners. This prevents spaghettification.
  
        Using .get allows us to pull attributes from the shark.attributes object without our code explicitly referencing it.
  
  
    %section#more_models
      :markdown
        # More with Models
  
        When we first define our shark, we can pass in an object which will define it. For example:
  
        ## Setting defaults
  
        We can set default values for our shark by passing in a defaults object:
  
  
      :ruby
        code = <<-CODE
        const Shark = Backbone.Model.extend({
          defaults: {
            name: 'Mr Shark',
            age: 0
          }
        });
        const shark = new Shark();
        alert(shark.get('name')); // Outputs "Mr Shark"
        CODE
      =code(code)
  
      :markdown
  
  
    %section#model_events
      :markdown
  
        # Model Events
  
        We can wire up our model to listen to change events and respond. We can pass in an initialize function, and wire our events up here:
  
  
      :ruby
        code = <<-CODE
        const Shark = Backbone.Model.extend({
          initialize: function () {
            this.on("change:name", function (model) {
              alert("Shark is now called " + model.get("name"));
            });
          }
        });
  
        const shark = new Shark();
        shark.set('name', 'Davey'); // alerts "Shark is now called Davey"
        CODE
      =code(code)
  
      :markdown
  
        Here we have told our model to listen to itself. When it's name is changed, it calls a function which alerts the new name. More commonly models would listen to other models, or views would listen to models.
  
        ## Events are identified by a String
  
        Just like jQuery, Events are identified by a unique string. In the example above we were listening for: "change:name". Our model can fire lots of different types of events.
  
        ## Change Event
  
        The change event is fired whenever any of the model's attributes change. This is useful if we just want to detect any change in the model's attributes.
  
      :ruby
        code = <<-CODE
        shark.on('change', function() {
          alert("attribute changed")
        })
        CODE
      =code(code)
  
      :markdown
  
        ## Change:[attribute] Event
  
        This event is fired whenever a specific attribute change, for example "change:name" or "change:age". Use this if you want to listen to a specific attribute.
  
      :ruby
        code = <<-CODE
        shark.on('change:name', function() {
          alert("name changed")
        })
        CODE
      =code(code)
  
      :markdown
        ## All
  
        The all event is always fired whenever any other event is fired. This could be a network event, the model could be added or removed from a collection, an attribute could have been changed, anything. If we are interested in any type of event on our model, we can just listen for the all event.
  
      :ruby
        code = <<-CODE
        shark.on('all', function() {
          alert("some event occurred to shark")
        })
        CODE
      =code(code)
  
      :markdown
        ## Further reading
  
        You can view the complete list here:
  
        <http://backbonejs.org/#Events-catalog>
  
  
    %section#views
      :markdown
        # Views
  
        A Backbone View is an object which controls a part of your web page. It's linked to a DOM node which can either be on the page, or a fragment, not connected to the page.
  
        Your backbone view will typically have a render method which will redraw the view. You can call this method yourself, or you can set up listeners to track a model and call render when it changes.
  
        A simple view looks like this:
  
  
      :ruby
        code = <<-CODE
        const SharkTankView = Backbone.View.extend({
          initialize: function () {
            this.render();
          },
          render: function () {
            this.$el.append('sharks!');
          }
        });
        CODE
      =code(code)
  
      :markdown
  
        This sets up a SharkTankView prototype, effectively a class which you can inherit from to create SharkTankView objects. The render function simply uses jQuery to append the string 'Sharks!' to the $el object, which is a jQuery object. The initialize function simply calls render.
  
        In order to use your SharkTank, you need to create an object that inherits from it:
  
  
      :ruby
        code = <<-CODE
        $(function () {
          const sharkTankView = new SharkTankView({
            el: $('#tank')
          });
        });
        CODE
      =code(code)
  
      :markdown
  
        You would then need to hook this up to a HTML page with an element where id="tank", like this. **Your code will go in app.js**
  
  
      :ruby
        code = <<-CODE
        <!DOCTYPE html>
        <html>
          <head>
            <title>Hello</title>
            <script type="text/javascript" src="underscore.js"></script>
            <script type="text/javascript" src="jquery.js"></script>
            <script type="text/javascript" src="backbone.js"></script>
            <script type="text/javascript" src="app.js"></script>
          </head>
          <body>
            <div id="tank"></div>
          </body>
        </html>
        CODE
      =code(code, :html)
  
      %aside.box
        :markdown
  
          ## What are el and $el
  
          The el attribute of your view is the DOM node your view attaches to. You specify this when you create the view, or you can specify it in the view prototype. If you don't specify el, it will be set for you as an empty div.
  
          The $el attribute of your view is a jQuery version of your el. This is created for you by Backbone.
  
    %section#view_events
      :markdown
        # View Events
  
        Views are responsible for listening out for events that happen in the region of the DOM they control.
  
        Events are specified in a JSON object, and are written in the form: {"event selector": "callback"}
  
        Selectors are scoped to the DOM node controlled by the view, so if you have a lot of shark tanks on the page, you don't have to worry about them conflicting with each other.
  
  
      :ruby
        code = <<-CODE
        $(function () {
  
          const SharkTankView = Backbone.View.extend({
            initialize: function () {
              this.render();
            },
            events: {
              "click button": "dunk"
            },
            dunk: function () {
              alert('Oh dear, my legs have been bitten off.');
            }
          });
  
          const sharkTankView = new SharkTankView({
            el: $('#tank'),
          });
        });
        CODE
      =code(code)
  
      :markdown
        and the html
  
      :ruby
        code = <<-CODE
        <!DOCTYPE html>
        <html>
        <head>
          <title>Hello</title>
          <script type="text/javascript" src="underscore.js"></script>
          <script type="text/javascript" src="jquery.js"></script>
          <script type="text/javascript" src="backbone.js"></script>
          <script type="text/javascript" src="hello.js"></script>
        </head>
        <body>
          <button>This button does nothing</button>
          <div id="tank">
            <button>Click to Dunk</button>
          </div>
  
        </body>
        </html>
        CODE
      =code(code, :html)
  
      :markdown
  
        Notice that the first button does nothing because it it outside of the tank element. Backbone will only look for elements within the view's el.
  
        ## The events attribute is just a shorthand
  
        Using the events attribute to set up our view events is just a convenient shorthand. We can just as well set up events in the initialize function, like so:
  
  
      :ruby
        code = <<-CODE
        const SharkTankView = Backbone.View.extend({
          initialize: function () {
            this.$('button').click(this.dunk);
          },
          dunk: function () {
            alert('Oh dear, my legs have been bitten off.');
          }
        });
        CODE
      =code(code)
  
      :markdown
  
        This is acceptable, but arguably less readable. You should favour the events attribute for listening to the DOM.
  
      %aside.box
        :markdown
          ## What is this.$?
  
          This.$ is a convenience attribute of a backbone view. It contains a reference to jQuery scoped to the current view.
  
          If you call this.$('p') for example it will get all the paragraphs in the current el.
  
          this.$el is by contrast is the current el attribute packaged as a jQuery object. You could get the same effect by calling this.$el.find('p')
  
  
  
    %section#templates
  
      :markdown
  
        # Templates
  
        Packing your render methods full of jQuery rapidly becomes yawnsome. Templates are a way of helping you to write less HTML generation code by compiling strings.
  
        Backbone does not come with a templating language of it's own, but is designed to work well with underscore templates.
  
        ## Generating a template
  
        We can generate a template by passing a string to the _.template function. This will return a function which we can call to generate an HTML string, like so:
  
      :ruby
        code = <<-CODE
        const template = _.template("<p>Hello!</p>");
        template();
        // outputs "<p>Hello!</p>"
        CODE
      =code(code)
  
      :markdown
        Let's use our template to generate a view:
  
      :ruby
        code = <<-CODE
        $(function () {
  
          const template = _.template("<p>Hello World!</p>");
  
          const SharkTankView = Backbone.View.extend({
            initialize: function () {
              this.render();
            },
            render: function () {
              this.$el.html(template);
            }
          });
  
          new SharkTankView({
            el: $('#tank'),
          });
        });
        CODE
      =code(code)
  
      :markdown
        Note that we don't need to call the template. If this.$el.html receives a function instead of a string, it will call the function for us.
  
        ## Template includes
  
        We can include variables in our templates using erb style syntax. We can then generate a string by calling the template function and passing an object, like so:
  
      :ruby
        code = <<-CODE
        const template = _.template("<p>Hello <%= name %>!</p>");
        template({name: "Wavy Davey"})
        // generates the string "<p>Hello Wavy Davey!</p>"
        CODE
      =code(code)
  
      :markdown
  
        You need to make sure you pass through all attributes or you will get an error.
  
      %aside.box{:'ng-non-bindable' => true}
        :markdown
          ## Using {{Mustache}} style syntax
  
          If you're not a big fan of erb <%= => syntax, you can use Mustache style curly brace syntax instead by modifying the _.templateSettings variable, like so:
  
          _.templateSettings = {interpolate: /\{\{(.+?)\}\}/g};
  
          Your template can now look like this:
  
          template("<p>Hello {{ name }}</p>");
  
      :markdown
  
        ## Further reading
  
        Read more about underscore templates here:
  
        <http://underscorejs.org/#template>
  
  
    %section#more_templates
      :markdown
  
        # Extracting Templates from your HTML
  
        Creating templates as strings in JavaScript is OK, provided our templates are very small, but what if they become larger? It would be much nicer if we could define templates directly in our HTML, and of course we can.
  
        We compose the template into our HTML page, then we just use jQuery to pull it out as a string which we can then pass to _.template.
  
      %aside.pullquote
        We compose the template into our HTML page, then we use jQuery to pull it out as a string.
  
      :markdown
        The convention is to put the template in a script tag with type="text/template". Content between script tags will not be rendered to the page, but can still be accessed using jQuery.
  
        See below:
  
      :ruby
        code = <<-CODE
        <!DOCTYPE html>
        <html>
          <head>
            <title>Hello</title>
            <script src="../../underscore.js"></script>
            <script src="../../jquery.js"></script>
            <script src="../../backbone.js"></script>
            <script src="hello.js"></script>
          </head>
          <body>
            <div id="tank"></div>
  
            <!-- And here is the template -->
            <script type="text/template" id="tank-template">
              <p>Swim Away <%= name  %></p>
            </script>
  
          </body>
        </html>
  
        CODE
      =code(code, :html)
  
      :markdown
  
        We then pull this content as a string using a simple jQuery selector, and store it as a template function in the tankTemplate attribute.
  
        Then in our render function we can simply call the template, passing in any expected values.
  
      :ruby
        code = <<-CODE
        const SharkTankView = Backbone.View.extend({
          initialize: function () {
            this.render();
          },
          tankTemplate: _.template(
            $('#tank-template').html()
          ),
          render: function () {
            this.$el.html(this.tankTemplate({
              name: "Danger Mouse McGree"
            }));
          }
        });
        CODE
      =code(code, :javascript)
  
      :markdown
  
  
  
    %section#code-organisation
  
      :markdown
        # Further reading
  
        The Backbone sample in MVCTodo gives a very clear demo of how to build a simple todo app.
  
        <https://github.com/tastejs/todomvc/tree/gh-pages/architecture-examples/backbone>
  
  
  
  