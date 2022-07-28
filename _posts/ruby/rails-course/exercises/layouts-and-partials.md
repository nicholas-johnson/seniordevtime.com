---
title: "Layouts and Partials"
description: ""
section: "ruby"
course: "rails-course"
exercise: "layouts-and-partials"
layout: "exercise"
---


%article




# Layouts and Partials

Layouts allow you to wrap your code in a standard header and footer.

The default layout is called app/views/layouts.application.html.erb

Any changes we make to this file will be visible in all out views, unless we specify another layout.



## Layouts Exercise

Your default layout file lives in app/views/application.html.erb. Any changes you make to this file will be visible in every page on your site, unless you explicitly use a different layout.

Add a header and footer to your application.html.erb file. It should be visible on each of your pages.

## Passing a title

Try to pass through a @title variable from the controller to the view. Use this as the page title at the top of your layout file.





## Partials

Partials are partial views. They allow you to break your code up into smaller sensible chunks.



## Partials exercise

Partial filenames start with an underscore.

Create a header partial called /app/views/layouts/_header.html.erb

Include it in your template using the render method, like so:

```js
  <%= render partial: "layouts/header" %>
```





You may wish to create partials for things like:

* Headers and footers
* Metadata
* JavaScript includes
* Facebook widgets
* Tables
* Forms

Create a footer partial now.
