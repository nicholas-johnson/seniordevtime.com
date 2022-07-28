---
  title: "Models"
  description: ""
  section: "ruby"
  course: "rails-course"
  exercise: "models"
  layout: "exercise"
  ---
  
  
  %article
    %section
      :markdown
  
        # Models, Validation and Resources
  
        We are going to create a Cat model to held information about a single cat. Use the model generator to create a simple model:
  
      :ruby
        code = <<-CODE
        rails g model cat name:string description:text
        CODE
      =code(code, :bash)
  
      :markdown
  
        You will see we have made a nice cat class in the models directory, and also a migration in the db/migrations directory.
  
        Run the migration using:
  
      :ruby
        code = <<-CODE
        rake db:migrate
        CODE
      =code(code, :bash)
  
      :markdown
  
        This has updated your database schema.
  
        ## Test using the console
  
        Drop into the rails console by typing:
  
      :ruby
        code = <<-CODE
        rails c
        CODE
      =code(code, :bash)
  
    %section.exercise
      :markdown
  
        ## Exercise - playing with cats
        Now you can play with your Cat.
  
        Try out the following commands in the console:
  
      :ruby
        code = <<-CODE
        c = Cat.create name: "Markey"
        Cat.all
        c.name = "Dave"
        c.save
        Cat.first
        Cat.first.name
        Cat.find(1)
        CODE
      =code(code, :ruby)
  
      :markdown
  
        What do they all do? You can do all this in your controller.
  
    %section.exercise
      :markdown
  
        ## Exercise - A basket full of tiny little cats
  
        Now create 10 more cats, and try out the following.
  
      :ruby
        code = <<-CODE
        Cat.order(:name)
        Cat.order(:name).limit(5)
        Cat.where(name: "Dave")
        Cat.where("created_at > ?", Time.now - 1.minute)
        Cat.count
        CODE
      =code(code, :ruby)
  
    %section.exercise
      :markdown
  
        ## Exercise - Making use of our cat
  
        Now create a controller and route. The route should point to a method called show in the controller. It should be possible to visit:
  
        <http://localhost:3000/cats/1>
  
  
      :markdown
  
        In the controller retrieve the cat based on the id in the params hash.
  
        Now make a view to display your cat. Output all the fields nicely.
  
    %section.exercise
      :markdown
        ## Optional Extension, create an index page
  
        Create a route of the form:
  
        <http://localhost:3000/cats>
  
      :markdown
  
        This should point to the index method in the cat_controller. This method should retrieve all of the cats with Cat.all.
  
        Make a view which loops over the cats, displaying them all. To loop over a collection, you can do something like this:
  
      :ruby
        code = <<-CODE
        <% @cats.each do |cat| %>
          <%= cat.name %>
        <% end %>
        CODE
      =code(code, :erb)
  
  