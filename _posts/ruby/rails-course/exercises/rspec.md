---
title: "RSpec"
description: ""
section: "ruby"
course: "rails-course"
exercise: "rspec"
layout: "exercise"
---

%article



# RSpec Rails

We are going to use RSpec plus FactoryGirl to test our site.

First we need to add the gems to our Gemfile:

```js
  group :test, :development do
    gem 'debugger'
    gem 'rspec-rails'
    gem 'factory_girl_rails'
  end
```





Now bundle and restart the server.

We now need to initialise the spec directory and helpers. We can do this using:

```js
  rails generate rspec:install
```







Next Configure Rails use rspec in the generators. Inside Application.rb, add a config block:

```js
  config.generators do |g|
    g.test_framework :rspec
    g.integration_tool :rspec
  end
```






Now when we run a generator we also get a spec file generated for us as well too.


## Generate scaffold Rspec

We are going to create a User scaffold for our blog. Posts will have Users.

Generate the scaffold. Now look in the spec directory. See the spec there?

rails g scaffold user name:String age:Integer

Run rake spec to run the specs. It will tell you if you have any errors and where they are.




## Exercise - Use FactoryGirl

The spec we generated creates a user model for us. This is OK, but not very scalable. We might need users in other places. We are going to use Factory Girl to make the Users for us.

Check out the FactoryGirl documentation here:

<https://github.com/thoughtbot/factory_girl>

Now create a User factory. Modify your generated spec to use the factory instead.




## Modify the .rspec config file

Edit the .rspec file so it looks like this:

```js
  --color
  --format documentation
```





You will find the output much easier to read.


## Testing a model

Say we have a Product model we want to test. We would first create a file spec/models/product_spec.rb

```js
  require 'spec_helper'

  describe Product do
    it "can be initialised"
    it "has a title"
  end
```





Running the test would show yellow, as the tests are not yet implemented.

Here I have filled in the initialiser test:

```js
  require 'spec_helper'

  describe Product do
    before :all do
      @product = Product.new
    end
    it "can be created" do
      expect(@product).to be_a(Product)
    end
    it "has a title"
  end
```





## Now let's implement a new feature, a title:


```js
  require 'spec_helper'

  describe Product do
    before :all do
      @product = Product.new :arkham
    end
    it "can be created" do
      expect(@product).to be_a(Product)
    end
    it "has a title" do
      expect(@product.title).to be("Arkham")
    end
  end
```







## Exercise - Write specs for your application

First have a looks through the Better Specs guide, it is good:

<http://betterspecs.org/>

Now, using the generated User specs as a guide, write specs for your  scaffold application. You might like to write some specs for your model and Controller. Remember Use FactoryGirl and run your specs often.
