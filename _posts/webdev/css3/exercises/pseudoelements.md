---
title: "Pseudoelements"
section: "webdev"
exercise: "pseudoelements"
course: "css3"
layout: "exercise"
---
%article



## CSS Art with PseudoElements

Not strictly part of CSS3, the before and after pseudoelements allow you to add up to two additional elements to each normal element.
Pseudoelements are not part of the DOM, and are not visible in the DOM inspector.

## Before and After

Sounds like an interior decoration program. These add up to 2 styleable elements to the page.

```js
  div:before {
    border:1px solid red;
  }
  div:after {
    border:1px solid red;
  }
```






## Browser Support
Browser support for pseudoelements is great, It works in IE8.




## Triangles Exercise

We can construct a triangle using a little piece of border.
1.  Create a div with a width and height of 0px
2.  Now set the border width to be 100px
3.  Now set the colour of the top, right and bottom sides to transparent. See, we are left with a triangle!



## Speech Bubbles
We already know how to make rounded rectangles. Given that we have a triangle, it follows that we can construct a speech bubble.
1.  Create a div, give it a width and height, and position relative.
2.  Use :after to add another element. Style it as a triangle, and position it absolutely to the top left of it’s parent.

Wow, a speech bubble!



## Further work

Use your knowledge so far to create a heart, a flower, a cloud, a beetle. Whatever you like. Use transitions to animate your creation. Oooh.
