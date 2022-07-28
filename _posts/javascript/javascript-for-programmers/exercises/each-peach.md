---
title: "Functional Loops"
section: "javascript"
course: "javascript-for-programmers"
exercise: "each-peach"
layout: "exercise"
---

%article




# Each Peach

JavaScript comes with all the looping constructs you would expect, for, while, etc. The work as you would hope, and I'm not going to go into these here.

## Functional loops

Because JavaScript is a functional language, there are many libraries that allow you to use functional style loops.

A functional loop is one where you pass in a lambda function. The looping function then takes care of supplying values to the lambda function one at a time.

## JQuery each

JQuery selectors return an array of DOM nodes. This means that with a single selector, you can pull out all the paragraphs on the page, or all the hyperlinks with a particular class. When we apply methods to a jQuery object, we are generally working on all of the DOM nodes at the same time. This is part of the power of jQuery. For example.

```js
  $('p').hide();
```





...will hide every single paragraph on the page without exception. It applies hide to all paragraphs. The selector returns all the paragraphs as an array of DOM nodes, then the hide method iterates over all of the paragraphs, hiding them.

A selector may return just one DOM node, and this is fine, but it will still return it in an array with just one item:

```js
  $('.page_header h1')
```





...will likely only match one item on the page, but it is still returned in an array. This common interface makes things very simple for us, provided we want to do exactly the same thing to every matched DOM node, but what if things aren't so simple.

## Iterating with Each ##

What if we want to treat each element as a special case. What if we want to do a different thing to each element.

Fortunately, jQuery gives a really simple way to iterate over our elements one at a time using the .each function. .each accepts a function, and then applies the function to the nodes one at a time, passing in the node itself as "this".

Here we use each to create the beginnings of an image gallery:

__HTML__

```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Each</title>
      <script src="jquery-1.5.js"></script>
      <script src="each.js"></script>
    </head>
    <body>
      <img src="kitten.jpg" alt="kitten" />
      <img src="puppy.png" alt="puppy" />
      <img src="lemur.gif" alt="lemur" />
    </body>
  </html>
```





This HTML file contains three images, each of which has an alt attribute. For each image, we're going to pull out the alt attribute, pop it in a span, and put that after the image.

### JavaScript - each.js

```js
  $(function() {
    $("img").each(function() {
      var img = $(this);
      var alt_text = img.attr('alt');
      img.after("<span>" + alt_text + "</span>");
    });
  });
```





Here we select every image on the page, then iterate over the resulting array using each. Each receives a function, and the function has access to the DOM node via the "this" variable. We convert "this" into a jQuery object, pull out the alt text, then append the alt text after the image.

# Each Peach Exercises #

We use the each to iterate over a jQuery object, performing an action on each one in turn. Lets try that now



## Exercise - A big mess

You can generate a random integer between 0 and 500 using the following code:

```js
  Math.random() * 500
```





You can generate a jQuery object that contains everything on the page inside the body element like so:

```js
  $('body *');
```





Write a jQuery function that iterates over everything on the page using each, makes them all position:absolute, and assigns random top and left values. You need to use each here to give them all different random values.




## Further Exercise

Assume you want to put email addresses on the Internet, but you want to keep them hidden from automated spam bots.

Rather than write your email as a link like this:

```html
  <a href="mailto:hello@example.com">hello@example.com</a>
```




You instead choose to obfuscate it like this:

```html
  <span class="email">hello at example dot com</span>
```





Use your knowledge of JQuery to rewrite the span as a clickable mailto hyperlink.

Put multiple different emails addresses on the page. Use the each method to ensure the code works for every email address on the page.

### Manipulating the string

Note that you can use "string".replace('val', 'replacement') to replace values in a string.

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace>
