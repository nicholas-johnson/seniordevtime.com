---
title: "Scaffolding and CRUD"
description: ""
section: "ruby"
course: "rails-course"
exercise: "scaffolding"
layout: "exercise"
---


%article



# Scaffolding

The Scaffold Generator allows us to create a controller, model, views, partials, stylesheets and tests with a single call.

In this section we are going to look at using scaffolding to create a CRUD app in double quick time.

## Scaffold the resource

It's traditional to make a blog, but feel free to make a kitten, or similar.

First create a BlogPost scaffold and give it some attributes. You can use the following generator as a jumping off point. You will need to add a content:text and probably also a date:datetime too.

```js
  rails g scaffold blog_post title:string
```

=code(code, :bash)



## Look over the controller

Take a look at the controller that was made, you will find 7 standard actions allowing you to create, edit, show, index and destroy (edit and create get two methods each).

Spend a few minutes reading through the code and understanding it.

## Look at the routes

You will find one line has been added to the routes file, resources.

This single line generates all of the crud routes for you. Check them out from a console by typing:

```js
  rake routes
```

=code(code, :bash)



## Views

Look at the views. See the form partial? It's used by the new and edit templates. Have a read and try to understand what's going on.

## Tests

The tests that have been built for you should work right out of the box. Run:

```js
  rake test
```

=code(code, :bash)



to run all of the tests.



## Further Exercise: Validation

Use validates_presence_of :title to validate that the blog_post has a title. It is now not possible to save a blog_post without a title. Add validation for the content.

Try and create a blog post without a title, look at the error reporting. Do you see how it works?



## Further Further Exercise: Homepage

Set blog_post#index as the homepage, so when you visit your Blog, you see a list of entries.



## Harder Exercise: Friendly URLs

Add a slug attribute to the blog_post. Do a find_by_slug instead of a regular find in your show method like this:

```js
  BlogPost.find_by_slug params[:id]
```





Use a migration to add the field, generate the migration like this:

```js
  rails g migration add_slug_to_blog_post
```

=code(code, :bash)



Within the migration you will want to do something like this:

```ruby
  add_column :blog_posts, :slug, :string, index: true
```




Finally, ensure slug is a required field.

You can now hit a URL like this

<http://localhost/blog_posts/having-fun-learning-rails>
