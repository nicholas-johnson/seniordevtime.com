---
title: "JavaScript Evnets"
section: "javascript"
course: "javascript-for-programmers"
exercise: "events"
layout: "exercise"
---

%article




# JQuery Events

The real strength of JavaScript is that it allows the page to respond to the user. Whenever the user does something on the page, from moving the mouse to pressing a button, to submitting a form, lots of little events are fired off in the browser. We can tell our code to listen for certain events and call functions in response to them.

Assume a little div like this:

```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>jQuery</title>
      <script src="jquery.js"></script>
      <script src="dont_click.js"></script>
      </head>
    <body>
      <div class="clickable">
        Do not press this button.
      </div>
    </body>
  </html>
```





We can write some corresponding JavaScript to find the clickable element and assign a function to the click event.


```js
  $(function() {
    $(".clickable").click(function() {
      alert("I can't believe you just did that!");
    });
  });
```






## Deconstructing don't click

Let's just deconstruct that JavaScript a little and have a look inside.

First we have this:


```js
  $(function() {
    ...
  });
```





This calls the dollar function and passes it a function. When we pass dollar a function, jQuery puts it on one side until the DOM is loaded and runs it then.
jQuery

The function we passed it looks like this:


```js
  $(".clickable").click(function() {
      ...
    });
```





Can you guess what it does? First it gets all the elements on the page with class "clickable". Then it calls a method called click on them. This method says what to do when we click. It's a click handler.

And what happens when we click it? This happens:


```js
  alert("I can't believe you just did that!");
```





...and we get our cute little alert box. So appealing!




## Exercise - Make it red

1. Create a web page with half a dozen paragraphs on it.
2. Add a click handler. When you click a paragraph it goes red.




## Exercise - Keyup

Create a text input field. Listen for the keyup event. Alert the value of the text box whenever keyup occurs.

Get the value of an input field using:

```js
  $('input').val();
```





For bonus points, append the value of the text box into a div.



## Further Exercise - Rollover

1. Review the list of events on: http://api.jquery.com/category/events/
2. Create code that listens for a hover event. When the user rolls over a div, place the word "over" in that div.
3. When the user mouses out of the div, place the word "out" in the div.

## Further work

Count the total number of rollovers and output that in a div.

.downloads


## Downloads

* [Code from the board](https://www.dropbox.com/sh/af47ivbh2aue6rr/AADCgVFdfRoN9MunmXHeJ1h5a?dl=1)
