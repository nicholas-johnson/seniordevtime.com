---
title: "Models"
description: ""
section: "ruby"
course: "rails-course"
exercise: "models"
layout: "exercise"
---


%article



# Models, Validation and Resources

We are going to create a Cat model to held information about a single cat. Use the model generator to create a simple model:

```js
  rails g model cat name:string description:text
```

=code(code, :bash)



You will see we have made a nice cat class in the models directory, and also a migration in the db/migrations directory.

Run the migration using:

```js
  rake db:migrate
```

=code(code, :bash)



This has updated your database schema.

## Test using the console

Drop into the rails console by typing:

```js
  rails c
```

=code(code, :bash)




## Exercise - playing with cats
Now you can play with your Cat.

Try out the following commands in the console:

```ruby
  c = Cat.create name: "Markey"
  Cat.all
  c.name = "Dave"
  c.save
  Cat.first
  Cat.first.name
  Cat.find(1)
```





What do they all do? You can do all this in your controller.




## Exercise - A basket full of tiny little cats

Now create 10 more cats, and try out the following.

```ruby
  Cat.order(:name)
  Cat.order(:name).limit(5)
  Cat.where(name: "Dave")
  Cat.where("created_at > ?", Time.now - 1.minute)
  Cat.count
```






## Exercise - Making use of our cat

Now create a controller and route. The route should point to a method called show in the controller. It should be possible to visit:

<http://localhost:3000/cats/1>




In the controller retrieve the cat based on the id in the params hash.

Now make a view to display your cat. Output all the fields nicely.



## Optional Extension, create an index page

Create a route of the form:

<http://localhost:3000/cats>



This should point to the index method in the cat_controller. This method should retrieve all of the cats with Cat.all.

Make a view which loops over the cats, displaying them all. To loop over a collection, you can do something like this:

```js
  <% @cats.each do |cat| %>
    <%= cat.name %>
  <% end %>
```

=code(code, :erb)

