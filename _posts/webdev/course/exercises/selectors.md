---
title: "CSS Selectors Exercise"
section: "webdev"
exercise: "selectors"
course: "course"
layout: "exercise"
---

%article


# Selectors

HTML is a tree. We nest elements inside and underneath each other.

We can pull off parts of this tree for styling using CSS selectors.

## Style tags

We can put CSS onto our page using a style tag. Later we'll see how we can extract our styles into a separate document.

```html
  <style>
    /* Styles go here */
  </style>
```





We then write selectors to trim parts of the tree, and add rules, like this:


```html
  <style>
    h1 {
      color: red;
      font-size: 30px;
    }
    p {
      color: blue;
    }
  </style>
```





We can put the style tag in the head of our page like so:

```html
  <!DOCTYPE html>
  <html>
  <head>
    <title></title>
    <style>
      /* Styles go here */
    </style>
  </head>
  <body>
    <h1>
      CSS Selectors are better
    </h1>
    <p>
      Because they apply
      <strong>
        to the whole page!
      </strong>
    </p>
  </body>
  </html>
```







## Exercise - Style the page

Use a style tag and selectors to solve the following:

1. Make the h1 font-weight: normal
2. Style the body using a sans-serif font.
3. Add a couple of dozen lines of text to the paragraph. Now set line-height:2em for double spacing.
4. Add a couple ore paragraphs. Set top and bottom margins to add spacing between the paragraphs.
5. Use letter-spacing:0.1em on the paragraphs to open the text out a little.


