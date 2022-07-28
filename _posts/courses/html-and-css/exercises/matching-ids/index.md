%article



# Matching IDs

We can also write CSS rules to match against id attributes. We do this using a #

For example:

```html
  <html>
    <head>
      <title>The use of classes</title>
    </head>
    <body>
      <p id="example_id">A paragraph with an id</p>
      <p>Here is the second paragraph</p>
      <p>Here is the final paragraph</p>
    </body>
  </html>
```






We can match this id using a # symbol.

```css
  #example_id {
    color:red;
  }
```




## IDs vs. Classes

Unlike classes, ids have to be unique on the page. you can have as many elements as you like with the same class, but only one element with a particular class.

This is a hang over from the days when computers were slower and the ability to quickly select an element made tha page faster. Nowadays this is not so important. Selecting by class is effectively instant.

Id selectors also have higher specificity. If two conflicting rules apply to an element and one matches an id, the id will win.

## Exercise

Use the following HTML:


```html
  <html>
    <head>
      <title>The use of classes</title>
    </head>
    <body>
      <p id="cats">Cats</p>
      <p class="bats">Bats</p>
      <p id="rats">Rats</p>
    </body>
  </html>
```





1. Tell every paragraph to use a sans-serif font.
2. Make the word cats bold and pink.
3. Make the word bats a bit smaller and blue.
4. Make the word rats as huge as you can.

%aside

## Downloads

* [Code from the board](https://www.dropbox.com/sh/ghehk66txbnhaiz/AAABZ-mBx3cVTLq5o_qmvsnqa?dl=1)
