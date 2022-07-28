
%article



# Hello JavaScript - you darling little thing

## Downloads

* [Demo code from the board](https://www.dropbox.com/sh/y4fmkkmivrgtt5d/AAAO8lt2DNdM-gXj5pRzvTAna?dl=1)

## Executing JavaScript

We execute JavaScript in a browser by linking to it. with a script tag, like so:

```html
  <!DOCTYPE html>
  <html>
  <head>
    <script src="script.js"></script>
  </head>
  <body>

  </body>
  </html>
```






Typically we link to an external file, though we can include JavaScript directly between the <script></script> tags.



## Exercise - Hello World

1. Create a folder in which to work.
2. Create a new HTML file in a text editor. Call it index.html.
3. Create a JavaScript file in a text editor. Call it script.js.
4. Put an alert in the script file, like this: alert('Hello world');
5. Use a script tag to link the JavaScript file into the HTML file
6. Open the HTML file in a browser. See the alert?
7. Extend the code so it pops up two alerts.




## Exercise - From the book

Review the sections on [Strings](/javascript-book#dont-string-me-along), [Variables](/javascript-book#variables---buckets-of-fun) and [Maths](/javascript-book#maths-operators---doing-sums) operators in the JavaScript book and attempt the exercises.




## Further Exercise - Conditional logic

1. Create a little program that tells you if it's the morning, afternoon or night. You can get the hour of the day something like this:


```js
  var date = new Date();
  date.getHours(); // returns a number
```

=code(code, :javascript)

