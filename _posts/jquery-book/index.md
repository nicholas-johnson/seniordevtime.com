;;;
"title": "JQuery For Programmers Book",
"description": "Learn to use JQuery",
"canonical": "http://nicholasjohnson.com/jquery-book/"
;;;

%article.book_cover

%hgroup
%h1 JQuery
%h2 Step by Logical Step

%p
%strong By Nicholas Johnson

%p Document version 0.0.1 - Alpha

%p (c) 2014 Nicholas Johnson

%article
#intro


# So what is jQuery anyway?

JQuery is a library written in JavaScript which is primarily about DOM manipulation. It lets you find parts of a web page and make changes to them with very little code. It's wildly popular and is used extensively across the Internet. It also forms the basis of other larger frameworks. If you're serious about web development you need to know jQuery.

JQuery is the Write Less, Do More JavaScript framework that makes web development fast and fun. It's an elegant, clean library of code, written in pure JavaScript that lets you accomplish a whole raft of web related tasks easily and quickly in a fraction of the time it would take using traditional techniques.

You're about to learn jQuery. Are you excited?


#love


# JQuery I love thee, shall I count the ways?

## Way 1. Massive Cross-browser Compatibility

jQuery works in every browser that matters. From IE6 to Chrome Nightly. From Mobile Safari to Blackberry Tablet OS. You don't need to worry about the incompatibilities, jQuery will smooth them out for you. Write your code once and expect it to run everywhere.

## Way 2. It uses CSS3 Selectors

jQuery lets you navigate the DOM using the syntax specifically designed for the job - CSS!. If you want to find all the paragraphs on the page:


```js
  $('p')
```





If you need all the hyperlinks with a class of rollover:


```js
  $('a.rollover')
```





If you know CSS, this is GOOD NEWS.

## Way 3. It's JavaScript

JavaScript is ubiquitous. It's the most widely available programming language in the world by an order of magnitude. It also happens to be rather good, in a strangely unexpected sort of way.

JQuery is written in JavaScript, so it can do everything JavaScript can do. You can talk to the whole page, not just a rectangle as with Flash or Silverlight. It's free, it's standards compliant, it's open, it's stable, it's ubiquitous. It works on iPads and mobile phones. It's not going away for a long time.

## Way 4. It's Way Popular

Like the nice kid at school, with great dress sense and superior social skills, jQuery is popular. It's very good at what it does. It's nice to talk to. People enjoy it's company, and if you really take the time to get to know it, it doesn't disappoint. Yes, jQuery is Dawson from Dawson's Creek.

jQuery is **IN DEMAND**, and if you learn it well, you will be **IN DEMAND** too.

## Way 5. Plugins

JQuery doesn't just stick to the basics, it has plugins. It learns new tricks at the drop of a hat.

For many people, plugins are their first exposure to JavaScript. Many people don't realize though quite how easy it is to write one. We'll cover plugin authorship later in this book.

## Way 6. JQuery UI

JQuery UI is a library of free to use widgets that you can integrate into your website. There are dozens of highly configurable, beautiful widgets to choose from. Sliders, Accordions, Draggable Elements and Date Pickers, Progress Bars and Animations.

## Way 7. It's very, very well thought through

A very large number of extremely clever people have donated countless precious hours of their lives to making it the best it can be.

## Way 8. It leads on to Backbone, Angular and other frameworks

Web application frameworks like Angular make use of JQuery. JQuery is a prerequisite for more advanced topics.

## Way 9. It has a sense of humour

From jQuery.fn (pronounced 'effin), to the ongoing unicorns vs narwhales debate, the jQuery community is a little bit sparkly and a little bit precious.

There's support aplenty in the #jquery irc channel on irc.freenode.net, and more on jquery.com.
#bullets

# So how does jQuery work in Three Easy Bullet Points

At a very, very high level, like several thousand kilometres, jQuery has a very clever central concept: method chaining. I'll explain this quickly here in bullet points, but if it doesn't make sense straight away don't worry, we'll come back to it many times later.

## Point One - a jQuery object has an array of DOM nodes and functions which can modify them

JQuery works by creating and operating on jQuery objects. A jQuery object has an array of DOM nodes and a bunch of functions that can act upon those nodes.

When you call functions on a jQuery object, you generally affect, report upon, or change the nodes which that jQuery object is storing.

## Point Two - Functions affect all the stored DOM nodes, all at once

Most of the jQuery methods on the jQuery object operate on all the DOM nodes held by the jQuery object at the same time.

If your jQuery object knows about all the paragraphs on a page for example, you can affect every single one of them with a single function call. You can do a lot at once.

## Point Three - JQuery functions usually return the jQuery object itself

The return value of most jQuery functions is the jQuery object itself. This means that we can chain functions together, and do lots of things on a single line.

## For example ##

This means you can do a lot of things all on one line, like so:

```js
  $('p.example').hide().addClass('hello').fadeIn('slow');
```





__This will:__

1. Find all paragraphs which have a class attribute of 'example' and construct a jQuery object to contain them.
2. Take those paragraphs however many there are, one by one, and hide them all immediately.
3. Add a class of "hello" to each of them.
4. Perform a short animation which reveals all the paragraphs slowly.

This is a contrived example, but it shows that you can do an awful lot with just one line of code. We've found a set of nodes, changed attributes and styling on each of them, and triggered an animation without you even having to really THINK about it. Yes, with jQuery, you can rule the DOM without breaking a sweat.

We can accomplish a lot very, very quickly with very little code. Things that used to take 500 lines of code can now be done in just one. This makes you as a developer surprisingly productive and helps you show off at work. You can charge more, and spend more time on the beach, or playing Xbox...

#diving_in


# Diving In to jQuery

In this section we're going to write some actual jQuery, then you can have a go. Are you excited? If you're excited, punch the air and say HUH!

There are 3 steps to get started:

1. Download jQuery
2. Write some HTML
3. Write some jQuery

Sounds easy? Lets go!

## Download jQuery

Ready to have a go? First we need to download a copy of jQuery, so visit <http://www.jquery.com> and click the big download button.

%aside.box

## Production or Development?

You'll notice you have two choices here, production or development.

* The production version has been compressed so you can't read it.
* The development version is nicely formatted, but larger.

I'd suggest using the development version while you're learning so you can poke around inside it, then using the production version when you're ready to make something real.



Save the jQuery code into a file called jquery.js

## Write HTML

Create the following HTML:


```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Our First Script</title>
      <script src="jquery.js"></script>
      <script src="hello.js"></script>
    </head>
    <body>
      <p></p>
      <p></p>
      <p></p>
    </body>
  </html>
```





Notice we have included jQuery, a file called hello.js, which we will write, and three empty paragraphs in the body.

## The JavaScript

Now for the JavaScript. In the hello.js file enter the following:


```js
  $(function() {
    $('p').html('Hello from jQuery!');
  });
```





## What does it do? ##

If we run this code in a web browser, we get the following modified DOM:


```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Our First Script</title>
      <script src="jquery.js"></script>
      <script src="hello.js"></script>
    </head>
    <body>
      <p>Hello from jQuery!</p>
      <p>Hello from jQuery!</p>
      <p>Hello from jQuery!</p>
    </body>
  </html>
```





## Let's break it down

First we call the jQuery $ function:

```js
  $();
```





Let's just re-iterate that, $ is a function. We call it like this $(). People coming from other languages sometimes get confused and think that $ is some kind of exotic syntax or variable declaration. $ is just a function.

In JavaScript, functions are objects and we can pass them around. Here's the function that we are going to pass to $:


```js
  function() {
    $('p').html('Hello from jQuery!');
  }
```





Put them together and we get this:

```js
  $(function() {
    $('p').html('Hello from jQuery!');
  });
```





The $ function is receiving another function that can do the DOM manipulation.

%aside.box

## Passing a function to $

What does jQuery do when you pass it a function? Well it stores it and waits for a very special event: onDOMready. The onDOMready event is fired when the web browser is ready to display the page. It has downloaded and parsed all the HTML and understood all the CSS.

When the DOM is ready, jQuery takes all the functions it has saved up and executes them in order one after another, changing the DOM in any way that's needed.



## The Function literal

Now let's break down the function literal. It looks like this:

```js
  $('p').html('Hello from jQuery!');
```





Here we see a little method chaining. The first part:


```js
  $('p')
```





...is a selector. It selects all the paragraphs and constructs a jQuery object to contain them. The second part:


```js
  .html('Hello from jQuery!');
```





...is a function call on that object. Remember that calling functions on a jQuery object usually affects all the elements held by the jQuery object in question. Here we have a jQuery object that contains all the paragraphs on the page. The .html function sets the HTML content of each DOM object in the jQuery object. This puts the words: "Hello from jQuery!" into every paragraph on the page.

It's worth noting that this string can itself contain HTML, so we could have done this:

```js
  $('p').html('<strong>Hello from <em>jQuery!</em></strong>');
```





...which would have added a little bit of HTML to the page rather than just the text. This is a very easy way to add to the DOM, and is surprisingly efficient.

## Review

Now lets review the whole function:


```js
  $(function() {
    $('p').html('Hello from jQuery!');
  });
```





We're doing a lot here. We're storing up a function to be executed when the page has loaded, then when it has loaded we're finding all of the paragraph elements and setting their inner HTML.


#css

# Manipulating CSS - A.K.A. Doing pretty things #

Most of the things we'll want to do with jQuery will involve manipulating the page in some way. One of the main things we will want to do is swap styles around. JQuery with CSS is powerful mojo. We can make things visible or invisible, highlighted or dimmed, tall or tiny just by adding styles.

There are various ways we can do this in jQuery

## Adding CSS styles directly ##

We can style any DOM element directly by manipulating CSS properties should we choose to. Observe:

First we must write some HTML to work with:


```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Soup?</title>
      <script src="jquery.js"></script>
      <script src="red.js"></script>
    </head>
    <body>
      <p>Would you like any Soup?</p>
    </body>
  </html>
```






Next we'll need a JavaScript file. I'm calling this one red.js, can you guess why?


```js
  $(function() {
    $('p').css('color', 'red');
  });
```





This adds a style attribute to the paragraph making it red. If you view the code in your DOM inspector you'll see the paragraph has been transformed into this:

```js
  <p style="color:red;">Would you like any Soup?</p>
```





## Changing multiple styles

We can also pass in a JSON object to set more than one property at once:

```js
  $(function() {
    $('p').css({
      color: 'red',
      'font-size': '2em',
      'font-weight': 'bold'
    });
  });
```





This function will make our paragraph big red and bold. Note that "font-size" and "font-weight" have to be quoted because the minus sign is a mathematical operator in JavaScript.

## Exercises: setting style attributes

1. Using the HTML above, highlight the paragraph with a pale yellow background. This is often useful for highlighting sections of text.
2. Using the HTML above, try to make the paragraph go to the bottom right of the page using position:fixed; bottom:0px; right:0px;. It's often useful to chuck things around the page like this.
3. Using the HTML above, hide the paragraph completely using display:none.

#classes

# Setting Class Attributes #

We can also add classes to parts of the page for styling with CSS. we do this using addClass like so:

$('p').addClass('highlighted');

We also have a corresponding removeClass function at our command:

$('p').removeClass('highlighted');

We can use this like so:


```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Our First Script</title>
      <script src="jquery-1.5.js"></script>
      <script src="hider.js"></script>
      <link rel="stylesheet" href="hider.css" media="screen">
    </head>
    <body>
      <p>I <span>just don't</span> know what I'm doing</p>
    </body>
  </html>
```





Notice that we have imported a stylesheet.


```js
  $(function() {
    $('span').addClass('hidden');
  });
```





This script simply adds a class of hidden to every span on the page. That's all it does, then it's over to the CSS.

```js
  span.hidden {
    display:none;
  }
```





The CSS file completes the picture, and the span is hidden using display:none;

## Styling with CSS is often preferable to using style attributes

It's generally good to apply styles in this way, using classes and CSS, because it keeps our styling separate from our JavaScript. This can make our site more maintainable, and keep our JavaScript more readable. Using CSS means we keep our styles organised and together.

In general, we should keep our styles in our CSS as much as possible. There are some cases where this is not practical, for example when we want to do animations, but in many cases this is the best way.

## Exercise - Styling with CSS

Using the HTML document above, use CSS and addClass to highlight the span in a nice pale yellow colour.

#selectors


# Selectors

Remember in the previous chapter we wrote this:

$('p')

This is an example of a selector. In this case it returns a jQuery object containing a list of every paragraph on the page. This is a super simple way to instantiate a jQuery object containing the set of DOM nodes we're interested in working with.

## CSS Syntax ##

jQuery is cool because it implements most of the CSS3 syntax for use in selectors, plus a bunch of handy extras. Like a pair of surgical tweezers you can pull pretty much anything out of the DOM you need to. If you can write CSS you can write jQuery selectors.

## Selecting by id & class attributes ##

You use the CSS dot syntax to pull any element by class. Observe:

$('h1.header');

...will select the h1 of class header.

$('div#sidebar');

...will select the div of id sidebar.

## Selecting nested elements ##

Just as in CSS, you can select elements nested inside one another. Observe:

$('.sidebar ul');

...will select any ul element inside an element of class sidebar.

$('.header .topnav li');

...will select all the list items inside the element with class 'topnav' inside the header.

## CSS3 pseudoclass syntax. ##

As well as the full range of CSS, we also have a whole bunch of CSS3 enhancements to choose from.

## Middle Child Syndrome ##

You can select the first child of a particular DOM element using the first-child pseudoclass. see:

$("div :first-child")

...will select the first element inside any div. It will only select the first one. similarly last-child selects the last matching element. You can also select a middle child:

$('ul li:nth-child(2)');

...will select the second li in any unordered list. You can select any element like this.

## Alternate Rows ##

You can select alternate rows using the :odd and :even pseudoclasses:

$('tr:odd')

...will select every odd numbered row in a table.

$('tr:even')

Note that JavaScript array lists are zero indexed, so the first element is actually even. This can trip you up if you don't know it.

## CSS Attribute Selectors ##

We can also select elements which posses other attributes. For example:

$('a[rel=external]').css('background-image', 'url(external_link.gif)');

will select all links which have a rel attribute with a value of 'external' You could use this to highlight external links.

# Pass Me the Tweezers Exercise #

In these exercise we will be practicing our accuracy by pulling out tiny parts of an HTML page.

## Pulling Hairs ##

Use the following HTML


```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>selectors</title>
    </head>
    <body>
      <div class="one">
        <h1>incondite</h1>
        <p>putative</p>
      </div>
      <div class="two">
        <h1>
          lacuna
          <span>opprobrium</span>
          <span id="three">paronomasia</span>
        </h1>
        <p>sobriquet</p>
      </div>
      <ul>
        <li>tumid</li>
        <li>
          anomie
          <ul>
            <li>lascivious</li>
          </ul>
        </li>
      </ul>
    </body>
  </html>
```





Using the above HTML, only JavaScript, and the shortest most accurate selectors, attempt the following:

1. Highlight just the word putative in green.
2. Highlight just the word incondite in red.
3. Highlight just the word paronomasia in pink.
4. Highlight just the word sobriquet in purple.
5. Highlight just the word lascivious, but not the word anomie in grey.
6. Highlight just the word opprobrium in orange.

## Answers ##

### Pulling Hairs ###

1. Highlight just the word putative in green.

$('.one p').css('color', 'green');

2. Highlight just the word incondite in red.

$('.one h1').css('color', 'red');

3. Highlight just the word paronomasia in pink.

$('.two #three').css('color', 'pink');

4. Highlight just the word sobriquet in purple.

$('.two p').css('color', 'purple');

5. Highlight just the word lascivious, but not the word anomie in grey.

$('ul ul li').css('color', 'grey');

6. Highlight just the word opprobrium in orange.

There are two ways to tackle this. The first and simplest would be to change the order of the questions, so by tackling question 4 first we get:

$('.two span').css('color', 'orange');
$('.two #three').css('color', 'pink');

Well done if you hit on this solution. Simple is good.

The second would be to use a :not pseudoclass:

$('.two span:not(#three)').css('color', 'orange');

Here we have found the span who's id attribute does not equal three



#DOM


# Modifying the DOM

Lets look at how to put things on to the page.

## .html()

The html method lets us replace the contents of an element with our own code. For example:

$('p').html('I ate all your paragraphs');

...will replace the contents of every paragraph tag with the string 'I ate all your paragraphs'.

## .append()

The Append Method appends code to the end of an element:

$('p').append('...');

## .prepend()

The prepend method is similar to the append method, but adds the code at the start:

$('p').prepend('here it comes: ');

## .before() and .after()

We also have before and after. These add your code outside the element, before and after respectively.

#events

# Events

Events are the basis of interactivity. Every time something happens on the page, from a page scroll, to a mouse movement, to a keystroke, to an image load, an event is fired by the browser. JavaScript can detect these events and perform functions in response to them.

## Handlers ##

A function that is called in response to an event is called an event handler, or sometimes just a handler. we tell the browser which handlers should respond to which events by binding them. We say that the handler is bound to the event.

## Binding Events to Handlers ##

JQuery offers a very easy way to bind common handlers to browser events. Observe:

### HTML ###

<!DOCTYPE html>
<html>
<head>
<title>Event Binding</title>
<script src="jquery-1.5.js"></script>
<script src="binding.js"></script>
</head>
<body>
<p class="clickable">Don't Click Me</p>
</body>
</html>

### JavaScript - binding.js ###

$(function() {
$(".clickable").click(function() {
alert("you clicked it");
});
});

Looks tricky? It isn't. We've simply passed the click function a handler. The first part is as we've seen so far:

$(function() {
$(".clickable").click();
});

We're detecting the click event on any paragraph, but there wouldn't be much point in doing this if we didn't pass the click event a function to execute when the click event occurs:

function() {
alert("you clicked it");
});

The paragraph click was the event. This is the handler.

## Getting information about the event. ##

Sometimes we need to know a little more about the event. If this is the case, we can tell our event handler to receive an event object, which we can query. We do this like so:

$(function() {
$(".clickable").click(function(e) {
alert("mouse position: " + e.screenX + " : " + e.screenY);
});
})

Here the handler has received an object called e, which is an event object. We can query the event object in a number of ways. Here we are outputting the x and y position of the mouse at the time when the click took place.

## Getting information about the DOM node the event happened to

We can also get access to the object (usually a DOM node) that the event happened to.  This DOM node is bound to the "this" variable. Let's say that we bind an handler to more than one DOM node like so:

### HTML ###

<!DOCTYPE html>
<html>
<head>
<title>Event Binding</title>
<script src="jquery-1.5.js"></script>
<script src="binding.js"></script>
</head>
<body>
<p class="clickable">Don't Click Me</p>
<p class="clickable">Do Click Me</p>
</body>
</html>

Here we have two paragraphs with the same class "clickable" Now let's do some binding:

### JavaScript - binding.js: ###

$(function() {
$(".clickable").click(function(e) {
alert($(this).html());
});
})

This time we are alerting:

$(this).html()

Within handlers, "this" refers to the DOM node that the event happened to. Here we call .html() on it, which returns the element's inner html.

If we click on the first paragraph, "Don't Click Me" appears in an alert box. If we click the second "Do Click Me" appears in the alert box.

There are many different events that we can bind. Some of the more useful ones are:

dblclick: Fires when a double click event occurs.
keyup : Fires when a key is released. Use this in forms to validate input.
focus: Fires when a form element gains focus. You could use this to show context sensitive help.

## Adding Click Handlers Exercise ##

Create a web page containing a paragraph in which several words have been emphasised. Make it so that whenever one of the emphasised words is clicked, the emphasised word is alerted. For bonus points, make it so that whenever the emphasised text is clicked, the word that was clicked appears in large text at the top of the page.


#each


# Each Peach

JQuery selectors return an array of DOM nodes. This means that with a single selector, you can pull out all the paragraphs on the page, or all the hyperlinks with a particular class. When we apply methods to a jQuery object, we are generally working on all of the DOM nodes at the same time. This is part of the power of jQuery. For example.

$('p').hide();

....will hide every single paragraph on the page without exception. It applies hide to all paragraphs. The selector returns all the paragraphs as an array of DOM nodes, then the hide method iterates over all of the paragraphs, hiding them.

A selector may return just one DOM node, and this is fine, but it will still return it in an array with just one item:

$('.page_header h1')

...will likely only match one item on the page, but it is still returned in an array. This common interface makes things very simple for us, provided we want to do exactly the same thing to every matched DOM node, but what if things aren't so simple.

## Iterating with Each ##

What if we want to treat each element as a special case. What if we want to do a different thing to each element.

Fortunately, jQuery gives a really simple way to iterate over our elements one at a time using the .each function. .each accepts a function, and then applies the function to the nodes one at a time, passing in the node itself as "this".

Here we use each to create the beginnings of an image gallery:

__HTML__

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

This HTML file contains three images, each of which has an alt attribute. For each image, we're going to pull out the alt attribute, pop it in a span, and put that after the image.

__JavaScript - each.js__

$(function() {
$("img").each(function() {
var img = $(this);
var alt_text = img.attr('alt');
img.after("<span>" + alt_text + "</span>");
});
});

Here we select every image on the page, then iterate over the resulting array using each. Each receives a function, and the function has access to the DOM node via the "this" variable. We convert "this" into a jQuery object, pull out the alt text, then append the alt text after the image.

# Each Peach Exercises #

We use the each to iterate over a jQuery object, performing an action on each one in turn. Lets try that now

## A big mess ##

You can generate a random integer between 0 and 500 using the following code:

```js
  Math.random() * 500
```





You can generate a jQuery object that contains everything on the page inside the body element like so:

```js
  $('body *');
```





Write a jQuery function that iterates over everything on the page using each, makes them all position:absolute, and assigns random top and left values. You need to use each here to give them all different random values.



-#  #ajax
-#    
-#
-#      # Welcome to AJAX #
-#
-#      AJAX is the amazing technology that allows you to transfer data to and from your server direct from a webpage, updating it in real time without any need for a page refresh.
-#
-#      This is enormously cool.
-#
-#      With such power though comes great responsibility. You must be careful not to destroy any buildings for example, or knock over a bridge.
-#
-#      ## A Misnomer ##
-#
-#      AJAX stands for Asynchronous JavaScript And Xml, but it's actually something of a misnomer, since we seldom use XML any more. More commonly we will find ourselves using JSON,   -#which is similar to XML but shorter, or HTML fragments.
-#
-#      Unfortunately, AJAJ is not a great acronym, and AJAH sounds like a door, so we're stuck with AJAX for now (which has the nice side effect of making us sound cool and awesome).
-#
-#    %aside.box
-#      
-#        ## Working over http ##
-#
-#        We can't do AJAX on or local file system, that would be a security risk. In order to do AJAX, you need to work on a server. You can use IIS, Apache, or anything else you   -#fancy.
-#
-#      -# TODO Write this section
-#
-#    
-#
-#      # Talking to the server using jQuery #
-#
-#      In this exercise, we will use jQuery as a wrapper around the XMLHttpRequest object. We will get greater cross browser compatibility, and a nice syntax which hides the rough   -#edges.
-#
-#      When performing an AJAX request using jQuery, we have a number of wrapper functions to call on.
-#
-#      ## $.ajax ##
-#
-#      $.ajax is the most flexible. It allows us to perform an XMLHttpRequest with a nice syntax. We can easily assign callbacks to each stage of the process, and can perform any   -#type of request.
-#
-#      ## $.getJSON ##
-#
-#      $.getJSON is less flexible. It allows us to pull a json object, which is automatically converted to a JavaScript object which we have access to. Powerful in it's simplicity.
-#
-#      ## $.getScript ##
-#
-#      $.getScript allows us to pull a script from the server and execute it. This is a tremendously powerful technique if we are implementing an MVC pattern. We can ship out   -#JavaScript to affect out page in any way we like. The requests are slowed down somewhat because of the extra payload information, but it means we can compose the JavaScript   -#serverside to perform exactly the task the user requested.
-#
-#      ## Documentation ##
-#
-#      The jQuery AJAX api is available here:
-#
-#      http://api.jquery.com/category/ajax/
-#
-#      # Easy In AJAX Exercise #
-#
-#      Let's start slow...
-#
-#      ...
-#
-#      This exercise is in four parts. See if you can follow along.
-#
-#      ## Make the HTML ##
-#
-#      First create a little html file containing a little bit of text and upload it to the server. Verify that you can indeed see the file by viewing it in a web browser.
-#
-#      ## Do the AJAX ##
-#
-#      Now write a Javascript file that hits that URL (note, the url will need to be local to the file, so no http:// at the start):
-#
-#          var url = "myfile.html"
-#          $.ajax(url);
-#
-#      Use the Firebug console to verify that the file is being downloaded. Brilliant, you're doing AJAX!
-#
-#      ## Listen for the result ##
-#
-#      Next add a lister. We're going to listen for 'done', so...
-#
-#          $.ajax(url).done(function(data) {
-#            alert(data);
-#          });
-#
-#      This function is called when the ajax request completes successfully. Wow, you have AJAX.
-#
-#
-#      ## Do something with the result ##
-#
-#      Finally we want to do something with the result. Lets just append it to the body.
-#
-#          $.ajax(url).done(function(data) {
-#            $('body').append(data);
-#          });
-#
-#      Et voila. We have called the ajax, listened for the result, and finally added the result to our page. Note that we don't need to just add the result to the page, we could do   -#something else with it instead. For example we could put it into a particular div, make it pop up, or just use it for something else.
-#
-#      Jolly well done.
-#
-#      # HIJAX jQuery exercise #
-#
-#      Overriding the function of hyperlinks is a particularly useful thing to be able to do. The hyperlink will work normally in the absence of JavaScript but will AJAX in the   -#content if it is able. This technique is sometimes rather cleverly called HIJAX.
-#
-#      ## Questions ##
-#
-#      1. Add a list of hyperlinks to a page. When a hyperlink is clicked, detect that event, and call a function that retrieves the content via AJAX and inserts it into an element   -#on the page.
-#
-#      __Extension__
-#
-#      2. Add a data attribute to some of your links data-remote="true" now add the event only to hyperlinks with this data-attribute, so only links with data-remote set will use   -#AJAX.
-#
-#      3. Add a spinner. link is clicked, display a little spinner next to the link to show something is happening. the complete event occurs, remove the spinner.
-#
-#      3. Add caching. Add a data-section-id attribute to your hyperlinks. When you click a link, first check for the presence of a div with that id. If it is present, reveal it. If   -#not, create it, ajax the content into it, hide any other divs that may be on the page, and reveal the div that you just created. Fun!
-#
-#
-#      ## Facebooktastic ##
-#
-#      You can find information about the facebook graph api here:
-#
-#      http://developers.facebook.com/docs/reference/api/
-#
-#      1. Work out the URL you need to pull publicly accessible information from the Coca-Cola page.
-#      2. Output a list of all the publicly accessible information about Coca Cola.
-#      3. Extend your script so that you can type the name of a Facebook page into a text field.
-#
-#      ## Answers ##
-#
-#      There are lots of good ways to
-#
-#      ### Twitterific ###
-#
-#      A typical answer might look like this:
-#
-#          $(function() {
-#            var url = "/mirror.php?url=http://api.twitter.com/1/statuses/public_timeline.json"
-#            $.getJSON(url, function(data) {
-#              $.each(data, function(i,el) {
-#                $('body').append('<p>' + el.text + '</p>');
-#              });
-#            });
-#          })
-#
-#      For part two, you'll need to pull out a little more from the JSON, something like this:
-#
-#          $(function() {
-#            var url = "/mirror.php?url=http://api.twitter.com/1/statuses/public_timeline.json"
-#            $.getJSON(url, function(data) {
-#              $.each(data, function(i,el) {
-#                var tweet = $('<div class="tweet"></div>');
-#                tweet.append('<h2>' + el.user.name + '</h2>');
-#                var img = $('<img />')
-#                    .attr('src', el.user.profile_image_url)
-#                    .attr('title', el.user.description);
-#                tweet.append(img);
-#                tweet.append('<p>' + el.text + '</p>');
-#                $('body').append(tweet);
-#              });
-#            });
-#          })

#jquery-ui


# JQuery UI #

The jQuery UI library is a customisable, themable series of extensions to jQuery that allow you to implement complex user interface features remarkably quickly. There are interactions, such as drag and drop, useful widgets that decorate your existing markup providing new features, and commonly used effects that go beyond the basic jQuery effects.

## Getting jQuery UI ##

jQuery UI comes in a big, custom made bundle which is tailored to your specific project. You decide which parts of the library you'd like to use, and it constructs a bundle for you containing minified JavaScript code, CSS and image files. You might find this loss of control disconcerting at first, as it does so much for you, but don't worry, it works well and in general does things reasonably sensibly.

To download a copy visit http://jqueryui.com/ and click on "download". You'll be prompted to choose a subset of the library to get, the version of jQuery you're using, and a theme.

## Choosing a theme. ##

If you'd like to see which themes are available, click "themes" and browse down the left hand side. You can choose a prebuilt theme, or roll your own. If you're using the jQuery UI library, I'd advise you, at least at first, to use the theme builder interface, rather than trying to write your own CSS. The generated markup is complex, and the theme builder saves some time. The generated CSS is very well commented so you can make changes to it later.

## What's in the package? ##

Inside the package are three folders and an index file.

__index.html__

This file is a demo file. Open it to see examples of many of the widgets in action.

__CSS__

This folder contains your CSS theme file and any required images. You'll need to import this CSS file in your HTML when you start to code.

__development-bundle__

This folder contains the complete source code plus documentation. It's interesting to look at, but we won't be using it in our code

__js__

This folder contains minified copies of jQuery and jQuery UI. These are the JavaScript files you'll need to use. Import them in your header.

# JQuery UI Exercises #

In these exercises we will have a play with some front end development using the jQuery UI library.

## Draggable Elements ##

It this exercise we will see how easy it is to make a div draggable.

1. Read the short instructions at: http://jqueryui.com/demos/draggable/
2. Create HTML, CSS and JS files.
3. Attempt to make a div in your HTML draggable. You should be able to drag it round the screen.
4. Make the DIV change colour during drag.
5. Add a drag handle across the top, creating something that looks a little like a draggable desktop window.
6. Constrain your drag so that you can only drag horizontally
7. Constrain your drag so that your draggable object snaps to a grid.

## Sortable Lists ##

It this exercise we will convert an ordinary list into a sortable list.

1. Read the short instructions at: http://jqueryui.com/demos/sortable/
2. Create HTML, CSS and JS files.
3. Create an unordered list.
4. Make the list into a draggable list.
5. Add styling so the list looks pretty.

## Accordion Widget ##

It this exercise we will play with an accordion widget. This handy widget folds and unfolds, displaying different content, while maintaining the same height. It has become a bit of a front end staple.

1. Read the short instructions at: http://jqueryui.com/demos/ accordion/
2. Create HTML, CSS and JS files.
3. Make several alternate h3 and div elements. Place these elements inside a wrapper div.
4. Make the page display as an accordion
5. Experiment with the collapse content option. What happens when you click an open element?
6. Experiment with the sortable option. Try to make the elements sortable.

## Custom Theme ##

It this exercise we will create a custom theme. A jQuery UI custom theme consists of CSS and images. There is a handy theme builder on the jQuery website. You can use it to create a base theme for later customisation.

Once we create our theme we can apply this to our earlier exercises.

1. Read the short instructions at: http://jqueryui.com/themeroller/
2. Create a theme to your satisfaction and download it.
3. Inspect the theme directory, what is included?
4. Using the exercises you have completed already, replace the default theme with the one you have created.

## Dialog Boxes ##

It this exercise we will play with dialog boxes.

1. Read the short instructions at: http://jqueryui.com/demos/dialog/
2. Create HTML, CSS and JS files to hold your code.
3. Attempt to create a dialog box from a div.
4. Try out the modal dialog option. This disables all other page content (by placing a full size div over it.
5. Try out the modal message option.
6. Try out the modal confirm option.
7. Try to animate the opening and closing of a dialog.

#json


# Object Orientation with JSON and Mario Exercise #

There are several different syntaxes for declaring objects in JavaScript. Of these, the cleanest and most commonly used is JavaScript Object Notation (JSON), pronounced Jason.

## Welcome to JSON ##

Packaging our code up into JSON gives us several significant advantages:

1. It looks pretty.
2. It reduces the number of objects in the global namespace.
3. It's great for AJAX, smaller than XML and readily parsable both client and server side.

In this series of exercises we'll write some JSON, create an API and finally add a thin layer of listeners to hook it up to a jQuery User Interface.

JSON looks like this:

```js
  var mario = {
    description:"Small and jumpy. Likes princesses.",
    height: 10,
    weight: 3,
    speed: 12
  }

  var bowser = {
    description: "Big and green, Hates princesses.",
    height: 16,
    weight: 6,
    speed: 4
  }
```





Here we have defined two objects, one called mario and on called bowser. As you can see, they consist of a series of name value pairs. We can access the values like so:

```js
  alert(mario.description);
```





We can modify values like so:

```js
  mario.description = "Big and smashy, having eaten a mushroom"
```





We can even add new attributes like so:

```js
  mario.can_fly = true;
```





Objects are useful for keeping things neat and tidy. We have encapsulated all the information about Mario in a single place so it's easy to get at and understand.

__Questions__

1. Enter the above code
2. Alert the values of mario.description and bowser.description
3. Use Firebug to add a breakpoint. Check the values of the JSON objects in the debugger.
4. Add a can_fly attribute to Mario using the dot syntax. Again, check the debugger.
5. Create an entry for Luigi. He's a bit thinner that Mario, but slightly taller, and he wears a green outfit.


## A Rather Dull Mario Game ##

If we wanted we could write a little Mario game using these objects. Lets create a little function to see who wins in a boss battle:

```js
  var boss_battle = function() {
    if (mario.speed > bowser.speed) {
      alert("Mario has escaped and saved Peach");
    } else {
      alert("Bowser has stomped all over Mario. Mario is dead.");
    }
  }

  boss_battle();
```





As we can see, Mario wins. Let's swing the odds a little in Bowser's favour. Bowser can go into a powered up mode where he swoops from side to side on the screen. We'll call this Bowser Boost.

Let's extend our game a little to add Bowser Boost:

```js
  var mario = {
    description:"Small and jumpy. Likes princesses.",
    height: 10,
    weight:3,
    speed:12
  }

  var bowser = {
    description:"Big and green, Hates princesses.",
    height: 16,
    weight: 6,
    speed: 4,
    boost: 0
  }

  var boss_battle = function() {
    if (mario.speed > bowser.speed + bowser.boost) {
      alert("Mario has escaped")
    } else {
      alert("Bowser has stomped all over Mario")
    }
  }

  boss_battle();

  bowser.boost = 20

  boss_battle();
```





### Questions

1. Enter the above code and get it to run. Who wins?
2. Give Mario an invincibility attribute. If invincibility is true, Mario always wins. Unfair I know.

Don't worry, we are going somewhere with this. Next!

## Lets clean this code up a little ##

1. Add two more attributes to each character: attack_power and name.
2. Extend the boss battle function so it receives two parameters, contestant_1 and contestant_2.
3. Rewrite it so that instead of running the conditional, it simply prints out the name of the contestant with the highest attack_power. This renders all the other attributes irrelevant, it only checks the attack_power.

## Functions within JSON ##

This is all very well. We have Mario and Bowser objects and a function to compare them, but it seems a little artificial having all our functions scattered all over the place like this. Also, the more functions we have in our global namespace, the more likely it is that they will conflict, and we'll accidentally overwrite something important.

Let's see if we can improve things.

```js
  var mario_world = {
    mario: {
      name:"Mario",
      description:"Small and jumpy. Likes princesses.",
      celebration: "Mario wins and does a little dance",
      height: 10,
      weight:3,
      speed:12,
      attack_power: function() {
        return this.weight * this.speed;
      }
    },
    bowser: {
      name:"Bowser",
      description:"Big and green, Hates princesses.",
      celebration: "Bowser wins and does a big roar",
      height: 16,
      weight: 6,
      speed: 4,
      boost: 0,
      attack_power: function() {
        return this.weight * (this.speed + this.boost);
      }
    },

    boss_battle: function(contestant_1, contestant_2) {
      alert(contestant_1.name + " vs " + contestant_2.name);
      if (contestant_1.attack_power() > contestant_2.attack_power()) {
        alert(contestant_1.celebration);
      } else {
        alert(contestant_2.celebration);
      }
    }
  }

  mario_world.boss_battle(mario_world.mario, mario_world.bowser);
```





Ah, that's better. As you can see, this entire program is encapsulated within a single object called mario_world. The mario_world object is the only object in the global namespace. the boss_battle function is now an attribute of mario_world, and each contestant has an attack_power function that works out his strength in a battle. The boss_battle function is parameterised, so you can battle any contestant against any other.

We have also written an attack_power function which is implemented by bowser and mario. This calculates the attack power from a series of other parameters.

Because functions are objects, we can assign them as attributes of objects. They're key value pairs, but if you've programmed before, you'll notice they work like methods. We can now call methods on our JSON objects.

__What is this?__

You might have noticed also that in the attack_power function we use the "this" keyword. We say this.speed and this.boost.

This is a troublesome keyword that trips up even quite advanced JavaScript developers all the time. "this" refers to the context in which the code is currently operating in. In this case, the context is mario (or bowser) and so this refers to these variables. That's because the attack_power function is an attribute of mario. This points to the object the current object is a member of. Your knowledge of JavaScript will be measured by your understanding of scope, and the "this" keyword, so we'll come back to this, but for now, let's make a real game...

__Questions__

1. Enter the above code and make it work.
2. Add Princess Peach. The princess is smaller and lighter but compensates for this by being quicker and having a dash mode. Battle Peach vs Bowser and Peach vs Mario.
3. Add an activate_boost function to Bowser that adds 5 to his boost. You should be able to call mario_world.bowser.activate_boost.
4. Add a toggle_dash function to peach. Calling it should activate or deactivate her dash attribute.
5. Just for kicks, change the boss battle function so instead of outputting alerts, it returns a string. Now we have an API.

## But what about the jQuery? ##

Having defined our API, it's now time to hook it up to a user interface. This is where jQuery comes into it's own.

1. Extend your HTML page. Create a form. Add two dropdowns, containing the names of the available characters. Ideally populate these dropdowns by querying the API. You may need to adjust your JSON to do this.
2. Add a "Fight" button that will make those two characters battle.

## Further Challenge ##

Now lets take things a little further. I'll leave this up to you.

1. Add a button for Bowser Boost. When you click it, his boost is increased.
2. Add a Peach Dash button. Every time you click it, Peach's dash mode is toggled on and off.
3. Make it so that when the dash and boost buttons are only visible when Peach or Bowser are selected.
4. Handle the case where the battle is a draw.
5. Grab images for each character. Store the URL of the image in the JSON. Draw an arena and put the characters in it when they are selected.
6. Destroy the losing character with an appropriate animation.
7. When the fight button is clicked, animate a fight briefly before destroying the loser.

## Answers ##

The following are sample answers only, and you may be able to come up with a better way.

### Welcome to JSON ###

```js
  var mario = {
    description:"Small and jumpy. Likes princesses.",
    height: 10,
    weight: 3,
    speed: 12
  }

  var bowser = {
    description: "Big and green, Hates princesses.",
    height: 16,
    weight: 6,
    speed: 4
  }

  var luigi = {
    description: "Best Friend of Mario, fond of green",
    height: 18,
    weight: 5,
    speed: 4
  }

  alert(mario.description);
  alert(bowser.description);
  mario.can_fly = true;
  alert(mario.can_fly);
```





Note that we can add the can_fly attribute without declaring it first. Our JSON object is simply extended.

### A Rather Dull Mario Game ###

The first part is a simple extension to our previous JSON exercise. We add an invincible attribute and set it to false. We don't need to initialise this attribute, since undefined is falsey, but it feels neater to give it a starting value. Then we simply extend the check in the boss battle function to look for the invincible attribute.

```js
  var mario = {
    description: "Small and jumpy. Likes princesses.",
    height: 10,
    weight: 3,
    speed: 12,
    invincible: false
  }

  var bowser = {
    description: "Big and green, Hates princesses.",
    height: 16,
    weight: 6,
    speed: 4,
    boost: 0
  }


  var boss_battle = function() {
    if ((mario.speed > bowser.speed + bowser.boost) || (mario.invincible)) {
      alert("Mario has escaped")
    } else {
      alert("Bowser has stomped all over Mario")
    }
  }

  boss_battle();

  bowser.boost = 20

  boss_battle();

  mario.invincible = true;

  boss_battle();
```





**More Answers**

The second part of this exercise involves

### Lets clean this code up a little ###

A simple solution to this problem might look something like this:

```js
  var mario = {
    name: "mario",
    attack_power:8
  }

  var bowser = {
    name: "bowser",
    attack_power:10
  }

  var boss_battle = function(contestant_1, contestant_2) {
    if (contestant_1.attack_power > contestant_2.attack_power ) {
      alert(contestant_1.name + " has won")
    } else {
      alert(contestant_2.name + " has won")
    }
  }

  boss_battle(mario,bowser);
```





We have used a simple conditional. Note the duplication of the alert.

An improved version might look something like this:

```js
  var mario = {
    name: "mario",
    attack_power:8
  }

  var bowser = {
    name: "bowser",
    attack_power:10
  }

  var boss_battle = function(contestant_1, contestant_2) {
    winner = (contestant_1.attack_power > contestant_2.attack_power ) ? contestant_1 : contestant_2
    alert(winner.name + " has won")
  }

  boss_battle(mario,bowser);
```





Here we have assigned the winner to a variable using the ternary operator. We can then just call winner.name.

### Functions within JSON ###

Your solution to this task might look something like the following:

```js
  var mario_world = {
    mario: {
      name: "Mario",
      description: "Small and jumpy. Likes princesses.",
      celebration: "Mario wins and does a little dance",
      height: 10,
      weight: 3,
      speed: 12,
      attack_power: function() {
        return this.weight * this.speed;
      }
    },
    bowser: {
      name: "Bowser",
      description: "Big and green, Hates princesses.",
      celebration: "Bowser wins and does a big roar",
      height: 16,
      weight: 6,
      speed: 4,
      boost: 0,
      activate_boost: function() {
        this.boost += 5;
      },
      attack_power: function() {
        return this.weight * (this.speed + this.boost);
      }
    },
    peach: {
      name:"Peach",
      description:"Beloved of Mario.",
      celebration: "Peach wins and jumps in the air",
      height: 8,
      weight:2,
      speed:15,
      dash_mode: false,
      toggle_dash: function() {
        this.dash_mode = !this.dash_mode;
      },
      attack_power: function() {
        p = this.weight * this.speed;
        if (this.dash_mode) {
          p *= 2;
        }
        return p;
      }
    },
    boss_battle: function(contestant_1, contestant_2) {
      return (contestant_1.attack_power() > contestant_2.attack_power() ) ? contestant_1 : contestant_2
    }
  }

  var winner = mario_world.boss_battle(mario_world.mario, mario_world.bowser);
  alert(winner.celebration);

  mario_world.bowser.activate_boost();
  winner = mario_world.boss_battle(mario_world.peach, mario_world.bowser);
  alert(winner.celebration);

  mario_world.peach.toggle_dash();
  winner = mario_world.boss_battle(mario_world.bowser, mario_world.peach);
  alert(winner.celebration);
```






### But what about the JQuery ###

Here's an example of one way you could tackle this exercise. If you have taken a different approach, that's fine.

First we define some html. This is just a skeleton, it will be populated by the JavaScript:

```html
  <!DOCTYPE html>
  <html>
  <head>
  <title>Super Mario World 9</title>
  <script src="jquery.js"></script>
  <script src="script.js"></script>
  </head>
  <body>
    <form>
      <select class="character_box" id="char_1"></select>
      vs.
      <select class="character_box" id="char_2"></select>
      <input type="submit" value="Fight!" />
    </form>
    <p class="victor"></p>
  </body>
  </html>
```





Now the JavaScript, Note how the interface code is separated from the code that does the actual work. This is good practice. Notice how we append the characters to the dropdowns, and how we retrieve the characters by using the string values in the option field.

```js
  // User Interface
  $(function() {

    // populate the dropdowns
    $.each(mario_world.characters, function(i,el) {
      $(".character_box").append("<option value='" + i + "'>" + el.name + "</option>");
    });

    // add the submit handler
    $('form').submit(function() {
      char_1 = $('#char_1').val();
      char_2 = $('#char_2').val();
      winner = mario_world.boss_battle(mario_world.characters[char_1],mario_world.characters[char_2]);
      $('.victor').html(winner.celebration)
      return false;
    })

  })

  var mario_world = {
    characters: {
      mario: {
        name: "Mario",
        description: "Small and jumpy. Likes princesses.",
        celebration: "Mario wins and does a little dance",
        height: 10,
        weight: 3,
        speed: 12,
        attack_power: function() {
          return this.weight * this.speed;
        }
      },
      bowser: {
        name: "Bowser",
        description: "Big and green, Hates princesses.",
        celebration: "Bowser wins and does a big roar",
        height: 16,
        weight: 6,
        speed: 4,
        boost: 0,
        activate_boost: function() {
          this.boost += 5;
        },
        attack_power: function() {
          return this.weight * (this.speed + this.boost);
        }
      },
      peach: {
        name:"Peach",
        description:"Beloved of Mario.",
        celebration: "Peach wins and jumps in the air",
        height: 8,
        weight:2,
        speed:15,
        dash_mode: false,
        toggle_dash: function() {
          this.dash_mode = !this.dash_mode;
        },
        attack_power: function() {
          p = this.weight * this.speed;
          if (this.dash_mode) {
            p *= 2;
          }
          return p;
        }
      }
    },
    boss_battle: function(contestant_1, contestant_2) {
      return (contestant_1.attack_power() > contestant_2.attack_power() ) ? contestant_1 : contestant_2
    }
  }
```





#closure

# Privacy with the Module Pattern #

## Closure ##

Closure can be a tricky concept to get one's head around. It works like this:

1. Functions are objects and can be declared anywhere.
2. If I declare a function within another function, the inner function has access to the local variables of the outer function.
3. Normally when a function exits, all it's local variables are destroyed, but...
4. If I hang on to the inner function in some way, the local variables of the outer function are still needed by the inner function.
5. They are still in scope, so they are not garbage collected.

This is closure in a nutshell. Here's an example:

```js
  var outer = function() {
    var a = "A Local variable"
    var inner = function() {
      alert(a)
    }
    window.fnc = inner
  }
  outer();
  fnc();
```





When we call outer, we define inner and assign it as an attribute of window (in other words, a global variable) inner persists after outer has excited, so the local variable a is still in scope, and still accessible to inner.

__Questions__

1. Enter the above code and verify it works.

## Self Executing Functions ##

It seems a bit superfluous to have to call outer to create inner. Outer only exists here to define inner, there's no need for it once inner has been made.

If only there was a way to avoid referencing outer. Thankfully there is.

Here we have a self executing function. The function is in braces,  and there are braces at the end. We are declaring an unnamed function, then running it straight away, dispensing with the need for outer.

```js
  (function() {
    var a = "A Local variable"
    var inner = function() {
      alert(a)
    }
    window.fnc = inner
  })()

  fnc();
```





## The Module Pattern ##

We can use the closure created by a self executing function to wrap our code, giving us the option to expose whichever parts of the API we want to, and to keep other parts private. Here we declare mario world within a self executing function.

```js
  (function() {}
    var mario_world = {
      mario: {
        name:"Mario",
        description:"Small and jumpy. Likes princesses.",
        celebration: "Mario wins and does a little dance",
        height: 10,
        weight:3,
        speed:12,
        attack_power: function() {
          return this.weight * this.speed;
        }
      },
      bowser: {
        name:"Bowser",
        description:"Big and green, Hates princesses.",
        celebration: "Bowser wins and does a big roar",
        height: 16,
        weight: 6,
        speed: 4,
        boost: 0,
        attack_power: function() {
          return this.weight * (this.speed + this.boost);
        }
      },

      boss_battle: function(contestant_1, contestant_2) {
        alert(contestant_1.name + " vs " + contestant_2.name);
        if (contestant_1.attack_power() > contestant_2.attack_power()) {
          alert(contestant_1.celebration);
        } else {
          alert(contestant_2.celebration);
        }
      }
    }
    window.mario_world = mario_world
  })()
```






#plugins

# Writing Plugins #

One of the huge strengths of jQuery is it's comfy support for plugins. You can write a plugin in moments to do pretty much anything you like. Plugins range from very complex image galleries, to tiny little scripts that do one thing.

Read more about plugins here:

http://docs.jquery.com/Plugins/Authoring

A typical plugin framework looks like this:

```js
  (function( $ ){
    $.fn.myPlugin = function() {

      // Do your awesome plugin stuff here

    };
  })( jQuery );
```





This is a closure in which we can operate without worrying about the global scope. We add the plugin function to $.fn (pronounced effin'). $.fn is an alias for the jQuery prototype, so any functions we add become accessible to any jQuery object.

The plugin receives a jQuery object in the 'this' variable. You can iterate over this variable using this.each(), making any changes you like to the DOM nodes therein.

In most cases, the plugin should return a jQuery object, usually 'this'. This allows us to chain plugins together with other methods.

Given access to the jQuery element in the this variable, you can in theory do anything you like. Add event handlers to it, make changes, trigger animations, anything you can do in jQuery can be rolled up into a plugin.

## Rudify Plugin Exercise ##

1. Create a plugin insult that replaces all the html content of an element, and replaces it with a rude comment.

Use it like this:

$('h1').insult();

2. Ensure your plugin is chainable. You should also be able to do this:

$('h1').insult().css({:color:red});

3. For bonus points, make your plugin insert a random insult. You can use Math.floor(Math.random() * i) to generate a random integer between 0 and i - 1.


## Answers

A typical answer to this problem might look like this:

(function( $ ){
var insults = [
'you have large elbows',
'your ears smell of chips',
'your hat is too big'
]
$.fn.insult = function() {
this.each(function(i, el) {
$(el).html(insults[Math.floor(Math.random()*insults.length)])
})
return this;
};
})( jQuery );

Here we have defined the plugin. Note the insults array is defined as a local variable within the closure. It is defined once, when the plugin is declared, so we avoid computational overhead, and it is private, so no-one else can read it.

Now lets use our plugin:

$(function() {
$('h1').insult();
})


#async

# Asynchronous Programming #

Human time, network time, and CPU time are very different. Most of the time, our scripts do nothing, but they're not sitting around scratching themselves, they are busy listening.

JavaScript is inherently asynchronous. It has to be because networks connections and human beings are so slow. If our scripts stopped and waited every time an ajax request was made, we would soon get fed up.

Instead, JavaScript allows us to fire, and listen out for events.

We have seen how easy it is to listen for events in jQuery. We can register a click handler for example, simply by calling

$('a').click(function() {
alert('clicked');
}

Here we have registered a hyperlink click handler. It listens to the hyperlinks, and if one fires a 'click' event, the function is called.

But jQuery goes much further than this...

## Triggering Events ##

Events can be triggered in response to user actions, network events, and many other things. Here we hook an event to a timer, allowing us to submit a form at regular intervals. Let's autosave:

$(function() {

$('form.autosave').submit(function() {
// do cool ajax here
$('body').append('<p>saving</p>');
return false;
})

setInterval(function() {$('form').trigger('submit');}, 5000)
})

Here we add a submit listener to the form. This takes over the submission of the form, and instead submits an ajax request, alerting the user.

We can trigger the submit event any time we like using the trigger method:

$('form').trigger('submit');

In the example above we attach the trigger to a timeout, submitting the form every 5 seconds.

__Exercise__

1. Enter the above code and get it to run.


## Custom Events ##

Events are identified by a string. Classic ones include "submit", "click", or "mousemove". These events are triggered by the browser.

There is nothing to stop us from using our own string to trigger custom events.

We trigger using .trigger, and we listen out using .bind

```html
  <!DOCTYPE html>
  <html>
    <head>
      <script src="jquery.js"></script>
      <script src="hello.js"></script>
    </head>
    <body>
      <form>
        <input id="number_1" type="text" disabled="true" />
        <input id="number_2" type="text" disabled="true" />
        <input type="submit" value="Roll!" />
      </form>
    </body>
  </html>
```




```js
  $(function() {
    $('form').submit(function() {
      number_1 = Math.floor(Math.random() * 5);
      number_2 = Math.floor(Math.random() * 5);
      $("#number_1").val(number_1);
      $("#number_2").val(number_2);
      if (number_1 === number_2) {
        $(this).trigger('equal', {val:number_1})
      };
      return false;
    });

    $('form').bind('equal', function(e, params) {
      alert("score: " + params.val)
    });
  })
```



