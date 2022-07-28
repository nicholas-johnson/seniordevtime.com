---
  title: "Publishing an API with Mongo"
  description: "Mongo is a JSON based document storage engine. Use it to publish an API"
  section: "node"
  exercise: "mongo"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        # Mongo plus Node - perfect together
  
        To talk to Mongo we use Mongoose. Mongoose gives us a simple wrapper around Mongo with data validation and access to the Mongo commands.
  
    %section
      :markdown
  
        ## A schema
  
        A simple Mongoose schema might look something like this:
  
      :ruby
        code = <<-CODE
        var mongoose = require('mongoose'),
          Schema = mongoose.Schema,
          message;
  
        if (mongoose.models.Message) {
          message = mongoose.model('Message');
        } else {
  
          var MessageSchema = new Schema({
            name: String,
            email: String,
            message: String
          });
  
          message = mongoose.model('Message', MessageSchema);
        }
  
        module.exports = message;
        CODE
      =code(code)
  
      :markdown
  
        You would save this in a file called message.js, and require it using require('./message.js')
  
    %section.exercise
      :markdown
        ## Exercise - Create a schema
  
        * Install mongoose with:
  
      :ruby
        code = <<-CODE
        npm install mongoose --save
        CODE
      =code(code)
  
      :markdown
        * Create a Person schema for based on the message schema above.
        * Import it into your express app using require('./Person')
        * Restart express and verify that everything is still working.
  
    %section
      :markdown
        ## Connecting to the database
  
        To talk to Mongo, we need to connect to our database.
  
        Start the mongo daemon running by typing mongod at the command line:
  
      :ruby
        code = <<-CODE
        mongod
        CODE
      =code(code)
  
      :markdown
  
        Leave mongod running in a shell somewhere.
  
        Now connect by adding something like the following near the start of your express app:
  
      :ruby
        code = <<-CODE
        mongoose.connect('mongodb://localhost/database-name');
        var db = mongoose.connection;
        db.on('error', function () {
          throw new Error('unable to connect to database');
        });
        CODE
      =code(code)
  
    %section.exercise
      :markdown
        ## Exercise - Connect to Mongo
  
        * Start mongod and connect to mongo.
        * Restart your app. Verify all is well.
  
    %section
      :markdown
  
  
        ## Create a route
  
        Finally we need a route which will get all the people.
  
      :ruby
        code = <<-CODE
        app.get('/people', function (req, res, next) {
          Person.find({}, function(err, people) {
            res.json(people);
          });
        });
        CODE
      =code(code)
  
      :markdown
  
    %section.exercise
      :markdown
  
        ## Exercise - Make your route
  
        * Create a route to show all of the people.
  
        Wow, you jut made an API!
  
    %section.exercise
      :markdown
        ## Exercise - Create a show page
  
        Create a route which shows a person with a particular ID. You will need to receive this id using somethig like:
  
      :ruby
        code = <<-CODE
        router.get('/people/:id')
        CODE
      =code(code)
  
      :markdown
  
        You can get hold of the parameter in the route function using:
  
      :ruby
        code = <<-CODE
        req.params.id
        CODE
      =code(code)
  
      :markdown
  
        Your code will look something like this:
  
  
      :ruby
        code = <<-CODE
        app.get('/people/:id', function (req, res, next) {
          Product.findOne({_id: req.params.id}, function(err, product) {
            res.json(product);
          });
        };
        CODE
      =code(code)
  