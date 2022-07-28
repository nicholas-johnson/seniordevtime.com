---
  title: MVC JavaScript without a Framework
  tags: javascript
  layout: 'blog'
  ---
  
  :markdown
  
    Looking at Rails or Angular there's a tendency to think of MVC as something rather complicated and difficult to achieve,  something that really demands a  **framework**.
  
    In fact, MV* style JavaScript really is trivially easy to write. It's a pattern I'll often drop into if I need to make anything beyond the basics, but I don't want to break out Angular's **big guns**.
  
    In this post, we'll create a simple MV pattern. We'll build a Model and a View and wire these together using events.
  
    ## Wiring with Events
  
    We typically wire our MV components together using events, so when the model updates it fires an event which the view can listen out for. This gives us good encapsulation, and allows us to plug in new views without rewriting much code. This is how Backbone and Ember work. Angular is a little different (perhaps a little cleverer).
  
    One of the tricks here is to create an event handling system. This is typically just an array of functions, owned by our object, which get called whenever an event with a particular string identifier fires.
  
    Rather than write my own events system, I'm going to use the jQuery events system because it's simple and fully featured. We'll just create a naked jQuery object and hang our events on that. Underscore events would also be a good candidate. We can do something like this:
  
  
  :ruby
    code = <<-CODE
    const model = {
      events: $({})
    };
    // Now listen to the object
    model.events.on('miow', function() {
      alert('Post to youTube');
    });
    // finally fire the event
    model.events.trigger('miow');
    CODE
  =code(code)
  
  :markdown
  
    ## Model
  
    Our model is the "single source of truth". We store information about the current state of the world in it. It will fire events when it's internal state changes. To make our events fire we typically need to write a setter method which will set the attribute and trigger an event. (Angular takes a different approach to triggering events.)
  
    Let's create a method to set a name:
  
  :ruby
    code = <<-CODE
    const catModel = {
      events: $({}),
      setName: function(name) {
        this.name = name;
        this.events.trigger('change');
      }
    };
    // Listen for the change
    catModel.events.on('change', function() {
      alert('New cat name! ' + catModel.name);
    });
    // call the setter to trigger the event
    catModel.setName('Fru Fru McCat');
    CODE
  =code(code)
  
  :markdown
  
    ## View
  
    We now need a view. The view is where the code meets the DOM. (Code, I'd like you to meet my friend DOM.) The view typically implements a render method which displays the current state of the model.
  
    We use jQuery for DOM manipulation because that's the right way to do it. Yes, I'm opinionated.
  
    Let's create the render method and hook it to the model:
  
  
  :ruby
    code = <<-CODE
    const view = {
      render: function() {
        view.el.html("<p> Cat: " + view.model.name + "</p>");
      },
    };
  
    // And now we just listen to the model
    model.on('change', view.render);
    CODE
  =code(code)
  
  :markdown
  
    ## Putting it all together
    And there we have it. We change the model, an event fires, the view is listening to the model and re-renders itself. Clean separation of concerns. Let's wire it all together to make a whole cat app:
  
  
  :ruby
    code = <<-CODE
    // First we create a single global app object.
    // We could of course put the whole application in a closure and avoid any globals
    window.app = window.app || {};
  
    // Now we declare our application in a closure to give us a degree of encapsulation
    (function() {
      // The cat Model will hold the status of the cat
      app.catModel = {
        init: function(name) {
          // Cats have a name, perhaps "Fifi" or "Trixabell"
          this.name = name;
        },
        // Use jQuery to handle events
        events: $({}),
        // Set the name and fire a 'change' event
        setName: function(name) {
          this.name = name;
          this.events.trigger('change')
        }
      }
  
      // Now for our view
      app.catView = {
        // Initialise the view with a DOM node (el) and a model to render.
        init: function(el, model) {
          const view = this;
          this.el = $(el);
          const input = this.el.find('input');
          this.model = model;
          // Wire the view to the model
          this.model.events.on('change', function() {view.render()});
          // Wire the model to the view
          input.keyup(function() {
            view.model.setName(input.val());
          });
          this.render();
        },
        // A method to draw the DOM
        render: function() {
          const view = this; // Saves the value of this in a closure.
          view.el.find('.output').html("<p> Cat: " + view.model.name + "</p>");
        }
      }
    })()
  
    $(function() {
      // Finally initialise the components
      app.catModel.init("Dave");
      app.catView.init($("#cat"), app.catModel);
      // And let's set the name. Our View will update.
      app.catModel.setName("Mikey");
    });
    CODE
  =code(code)
  