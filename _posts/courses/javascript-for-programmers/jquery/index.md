%article


# JQuery

JQuery is a standard DOM manipulation tool. It abstracts the browser differences and gives you a clean cross browser DOM API.

## Downloads

*[Code from the board](https://www.dropbox.com/sh/sn9quphy0pltwcn/AAD8O_HuuvM8qqEnIEo42vZda?dl=1)

## The $ function

JQuery gives us just one function, the $ function. The $ function behave differently depending on the parameters we pass it.

We can pass $ another function like this:

```js
  $(function() {
    alert("Hello from jQuery");
  });
```





This function is a callback. It will be executed when the DOM is loaded. Within it we have access to the DOM.


## Selecting element

We can select elements from the page using CSS syntax:

```js
  $(function() {
    $("p") // this gives us an array of all the paragraphs
  });
```





When we select from the page we get back an array of all the matched elements.

## Changing DOM Nodes

We can change the content of the DOM like this:

```js
  $(function() {
    $("p").html("Hello jQuery");
  });
```





## Adding Attributes

We can add attributes to an element like this:

```js
  $(function() {
    $("a").attr('href', 'http://www.google.com');
  });
```





## Styling

We can add styling like this:

```js
  $(function() {
    $("p").css('color', 'red')
  });
```






## Appending

We can append to a DOM node like this:

```js
  $(function() {
    $("p").append('<strong>Hi from jQuery</strong>')
  });
```





This will append a strong tag to every paragraph.




## Exercise - Styling

1. Use jQuery to select the body element
2. Use the .css() function to style the body. Give it a red background and blue text.



## Exercise - Changing the DOM

1. Use jQuery to select the body element
2. Use the .html() function to change the body text. Replace the DOM with a new one.

We can completely rewrite our page.



## Exercise - Append

1. Use jQuery to select the body element
2. Use the .append() function to append a new hyperlink.
3. Use the .attr() function to set an href attribute on the hyperlink. Open it in your DOM and check it's clickable.

We can add elements to our DOM.
