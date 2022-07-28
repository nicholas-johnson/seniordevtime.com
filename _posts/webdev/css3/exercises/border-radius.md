---
title: "Attributes Exercise"
section: "webdev"
exercise: "border-radius"
course: "css3"
layout: "exercise"
---

%article



# Border Radius

Border Radius allows us to implement rounded corners without using images. It works like this:

border-radius: 15px;

This will add a little rounded corner to each edge of the element.

## Particular Corners

If you'd like to specify the corners separately, you can do so using the longhand syntax:

```js
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
```





You can also use the shorthand version:

```js
  border-radius: 10px 20px 30px 0;
```





These values go round clockwise, starting at the top left. There's no requirement to give each corner the same radius.

## Elliptical Borders

You can also create elliptical borders by providing two parameters like so:

```js
  border-top-left-radius: 20px 40px;
```





The parameters are:

* horizontal radius
* vertical radius

## Elliptical Border Shorthand

You can create elliptical borders using the shorthand syntax. Provide two sets of values separated by a / like so:

```js
  border-radius: 5px 10px 5px 10px / 10px 5px 10px 5px;
```





The first set are the horizontal radii, the second are the vertical radii.

## Browser Support

Browser support is pretty good, It works in Webkit, Opera, Mozilla and IE9.

If you need to display rounded corners in IE8 you will need to load a conditional stylesheet with background images. There are a variety of JavaScript hacks but these work by adding multiple varying width divs to the page, and add quite a lot of rendering overhead, so I would suggest keeping it simple and just using rounded corner images.



## Border Radius Exercise

In these exercises we will experiment with border-radius.

## Simple Radii

Attempt to create the following simple effects.

%img{ src: "/images/css3/radius-1.jpg", alt:""}

%img{ src: "/images/css3/radius-2.jpg", alt:""}

%img{ src: "/images/css3/radius-3.jpg", alt:""}





## Multiple Radii
Now attempt the following:

%img{ src: "/images/css3/radius-5.jpg", alt:""}

%img{ src: "/images/css3/radius-6.jpg", alt:""}

%img{ src: "/images/css3/radius-7.jpg", alt:""}





##BonBon Buttons

Combining Border-radius with box shadow lets us make some very clever effects. Check out BonBon Buttons for an example. We hope for the sake of the internet these do not take off, but the effect is wonderful all the same.
http://lab.simurai.com/css/buttons/


.downloads


## Content from the board

<https://www.dropbox.com/sh/96nomaegviz8azt/AAAA5mET4K60J4j-UHycI32Ba?dl=1>
