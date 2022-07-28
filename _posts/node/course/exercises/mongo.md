---
title: "Publishing an API with Mongo"
description: "Mongo is a JSON based document storage engine. Use it to publish an API"
section: "node"
exercise: "mongo"
layout: "exercise"
---

%article



# Mongo plus Node - perfect together

To talk to Mongo we use Mongoose. Mongoose gives us a simple wrapper around Mongo with data validation and access to the Mongo commands.




## A schema

A simple Mongoose schema might look something like this:

```js
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
```





You would save this in a file called message.js, and require it using require('./message.js')



## Exercise - Create a schema

* Install mongoose with:

```js
  npm install mongoose --save
```




* Create a Person schema for based on the message schema above.
* Import it into your express app using require('./Person')
* Restart express and verify that everything is still working.



## Connecting to the database

To talk to Mongo, we need to connect to our database.

Start the mongo daemon running by typing mongod at the command line:

```js
  mongod
```





Leave mongod running in a shell somewhere.

Now connect by adding something like the following near the start of your express app:

```js
  mongoose.connect('mongodb://localhost/database-name');
  var db = mongoose.connection;
  db.on('error', function () {
    throw new Error('unable to connect to database');
  });
```





## Exercise - Connect to Mongo

* Start mongod and connect to mongo.
* Restart your app. Verify all is well.





## Create a route

Finally we need a route which will get all the people.

```js
  app.get('/people', function (req, res, next) {
    Person.find({}, function(err, people) {
      res.json(people);
    });
  });
```








## Exercise - Make your route

* Create a route to show all of the people.

Wow, you jut made an API!



## Exercise - Create a show page

Create a route which shows a person with a particular ID. You will need to receive this id using somethig like:

```js
  router.get('/people/:id')
```





You can get hold of the parameter in the route function using:

```js
  req.params.id
```





Your code will look something like this:


```js
  app.get('/people/:id', function (req, res, next) {
    Product.findOne({_id: req.params.id}, function(err, product) {
      res.json(product);
    });
  };
```


