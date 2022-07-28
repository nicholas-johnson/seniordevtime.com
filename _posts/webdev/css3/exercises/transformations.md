---
title: "Transformations"
section: "webdev"
exercise: "transformations"
course: "css3"
layout: "exercise"
---

%article



# Transformation

Transform allows us to perform a variety of transformations to an element. We can rotate it, move it, scale it and skew it. At time of writing, transform requires vendor prefixes.

Vendor Prefixes

CSS3 is an evolving spec, and there’s no guarantee that, when a particular new feature is pushed out there, that it will be implemented in the same way cross browser. To counter this we have Vendor prefixes. These are temporary prefixes that namespace particular features.

They are:

* -moz- Mozilla based browsers
* -webkit- Chrome and Safari
* -o- Opera
* -ms- Microsoft Internet Explorer

You’ll often see them prepended to edge CSS attributes. As browsers converge around a single implementation we can start to drop them. Until they have converged, you need to include them.

## Rotation

Rotate elements like this:

```js
  transform: rotate(7deg);
```





If you want to be ceratin of browser compatibility, you'll need the vendor prefixes like this:

```js
  -moz-transform: rotate(7deg);
  -webkit-transform: rotate(7deg);
  -o-transform: rotate(7deg);
  -ms-transform: rotate(7deg);
  transform: rotate(7deg);
```





## Translation

Translate elements like this:

```js
  transform: translate(100px, 50px);
```





The first number is the x value, the second, the y value.

## Scale

Scale elements like this:

```js
  transform: scale(1.5);
```




The value is the amount to scale by, so 1 is no change, 0.5 means half size, and 2 is double size. The whole element and everything inside it is scaled. The scaling starts from the middle, so in this instance we lose quite a lot as the box falls off the edge.

## Skew

Skew objects like so:

```js
  transform: skew(10deg, 2deg);
```




The first number is the horizontal skew, so the amount the bottom will have been skewed relative to the top. The second is the vertical skew, the amount the left will have been skewed relative to the right.

## Combinations

We can of course combine transformations together in a single statement like so:

```js
  transform: scale(2) rotate(30deg) translate(1px, 1px) skew(1deg, 1deg);
```




Here we have doubled the size of the object, rotated it by 30 degrees, moved it by one pixel and skewed it a little.

## Polyfilling for IE

Most of these transformations are beyond the reach of IE8-, with one notable exception, rotation.

IE6 - IE8 include a rotation filter:

```js
  progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
```





Unfortunately, the filter is quite hard to use, it rotates from the corner instead of the center, and behaves unpredictably when nested inside other elements.

The CSS3 Sandpaper polyfill inspects your stylesheet and writes rotation filters into it.



## Transformation Exercise

Let’s start out simple:

1.  Create a little div. Give it a width and a height.
2.  Add a rotation effect
3.  Move it a little to the left
4.  Rotate it 30 degree left
5.  Scale it so we zoom in a little.

## A Kaleidoscope

Transformations are inherited. Let’s make a kaleidoscope:

1.  Create a series of nested divs. Give each a width, height, and RGBA background colour. Now apply a transformation to each div using a rule like this:
2.  div { transform: rotate(7deg); }

## A messed up site

If you have access to a real site design, you might want to try adding something like:

```js
  * {
    transform: rotate(5deg);
  }
```





See what you get.

## Tricks with forms

The filters work on form elements too.
Modify your first exercise so instead of a div, you apply the translations to a text area. You can type right into the transformation.
