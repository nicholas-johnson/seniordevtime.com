---
title: "CSS3 Animation"
section: "webdev"
exercise: "animation"
course: "css3"
layout: "exercise"
---
%article



# Animation

Animation goes further than simple transitions by adding full keyframe based animation to CSS. This has several advantages, particularly in terms of performance. Because the browser is in charge of the animation it can optimise performance in a variety of ways, taking full advantage of the hardware.

## Examples

Check out some examples here:

* <http://www.webkit.org/blog-files/leaves/>
* <http://www.paulrhayes.com/experiments/clock/>

## Declaring Keyframes

To make this work, we must first declare the keyframes we want to use, like so:

```js
  @-webkit-keyframes  pop {
    from {
      font-size:100%
    }
    to {
      font-size:500%
    }
  }
```





## Adding our Animation

Once we have declared our animation, we can add it to the page like so:

```js
  h1 {
    -webkit-animation-duration: 3s;
    -webkit-animation-name: pop;
  }
```




Here we say that we want our element to pop for 3 seconds, back and forth and carry on forever. Nice.

We can add this as a hover effect if we wish.

## Making it loop

We can pop our animation on an infinite loop using the iteration-count property. Here we set it to infinite:

```js
  h1 {
    -webkit-animation-duration: 3s;
    -webkit-animation-name: pop;
    -webkit-animation-iteration-count: infinite;
  }
```





## Making it reverse

We can also make it swing both ways using the animation direction property:

```js
  -webkit-animation-direction: alternate;
```





## Declaring more keyframes

We can add in additional keyframes using percentages:

```js
  @-webkit-keyframes pop {
    from {
      font-size:100%;
    }
    50% {
      font-size:1000%;
    }
    to {
      font-size:500%;
    }
  }
```





Here, we have added another keyframe at 50% of the way through the animation.



## Exercise - Basic Animation

1.  Create a div containing some text
2.  Animate its position from left to right. The easiest way to do this is by animating the margin.
3.  Add a keyframe for the animation to move through.
Check out the link to the list of animatable properties given in the previous section.
The full documentation is here:
https://developer.mozilla.org/en/CSS/CSS_animations



## Exercise - Cartoon

1.  Find several pictures of kittens. Animate their rotation back and forth.
2.  Use border-radius to add speech bubbles that move with the kittens.
