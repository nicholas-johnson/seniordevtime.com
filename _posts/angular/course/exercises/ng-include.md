---
title: "ng-include - AngularJS Exercise"
section: "angular"
exercise: "ng-include"
layout: "exercise"
---



# Templates, ng-include and the $templateCache

Our applications thus far have used a single template. This is fine while we are learning, but will become limiting fairly quickly. We really need to be able to break our application down into smaller templates that can be inserted into the page when they are needed.

## The $templateCache

Angular maintains an object called the $templateCache where all the templates for the application are stored. Each template is identified by a unique string (typically a url), and we can pull the data from the template cache using this string.

## Putting Data into the $templateCache

We have several options

1. AJAX in the template from a URL (this is the default).
2. Create an inline template using `<script type="ng-template">`.
3. Put it directly into the cache using `$templateCache.put`.
4. Write a directive or a component that defines a template literal.

## Requesting data from the $templateCache

We request an object from the $templateCache using a string. This is typically a URL. The cache will first check to see if it already has the template. If not it will use the string as a URL and try to AJAX it in.

## ng-include

The simplest way to show a template is by using the ng-include directive:

<div ng-include="/path/to/template.html"></div>

This directive will request a template from the $templateCache. The cache will attempt to supply the template, and will try to AJAX it in if necessary.

%aside.box

## And Components?

A component is an object that combines a template with a controller. We then include the component on our page rather than using ng-include. We will get to these later.




## Exercise - Create a Flickr Item Template

In the AJAX section we wrote an application to display a Flickr feed. We iterated over the items in the items array and rendered them. In this section we are going to start to break down this app into templates.

First create a template to render a single item in the feed. Now in your ng-repeat loop, render the template.

**Note: Because the $templateCache uses AJAX, you will need to be running a server here, or you will get errors when making the AJAX call**

## Extension

Try using an inline template in a script tag.



## Writing to the $templateCache directly

When a template is downloaded, it is saved to the template cache so it available again quickly. It's possible to write directly to the template cache. This allows you to pre-compile portions of your app into JavaScript, making your app more responsive at the expense of a longer initial load time.

We do this in a run block like this. Run blocks are executed once when the app is first initialised:

```js
angular.module('templates', [])
  .run(function($templateCache) {
    $templateCache.put('cachedTemplate', '<h1>Lovely caching!</h1>')
  });
```








## Exercise - Writing directly to the template cache.

Modify the Flickr exercise above, so that the item template is written directly to the $templateCache using `$templateCache.put`

