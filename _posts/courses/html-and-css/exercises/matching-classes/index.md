%article



# Matching Classes

We can write CSS rules to match and style elements on the page. What if we want to style just a single paragraph on the page. We do this with classes.


## Exercise - the HTML

Create a new folder and enter the following simple index.html file.

```html
  <html>
    <head>
      <title>The use of classes</title>
    </head>
    <body>
      <p class="first_paragraph">Here is the first paragraph</p>
      <p class="second_paragraph">Here is the second paragraph</p>
      <p class="final_paragraph">Here is the final paragraph</p>
    </body>
  </html>
```





Notice the new class attribute that I’ve added to the paragraphs. We say that "we have given the paragraphs class names". We can reuse the same class name on as many elements as we like.


## Exercise - the CSS

We can now identify the paragraphs uniquely using these class names and the dot operator.

Create a CSS file and save it as styles.css. Use the <link> tag to link the stylesheet to the html document.

3. Enter the following into your CSS document:

```css
  .first_paragraph {
    color:red;
  }
```





Now test in your browser. What has changed? As always, if nothing has changed, call me over and we’ll sort it out together. The dot operator has selected an element based on its class attribute, rather than it’s tag name.

# Exercise 3

1. Make paragraph 2 go blue
2. Make the final paragraph smaller and grey.
3. Write a single rule that puts a cute little one pixel dotted grey border round all the paragraphs.

Styles are commonly used in conjunction with divs and spans to demarcate special areas of the document, headers, footers and suchlike. Now we’re really coding. Isn’t this great?

Note that "first_paragraph", "second_paragraph" and "final_paragraph" are just words that I made up. You could just as well use "header", "main_text" and "footer", or "flange", "doodad" and "thingummy". It’s best if your class names make sense in context though so "thingummy" would not be a great class name, unless you have written a paragraph about thingummies.


%aside

## Downloads

* [Code from the board](https://www.dropbox.com/sh/am2vvp02cnb34kh/AACLWO_8XVvtPJVQKxh-uhmEa?dl=1)
