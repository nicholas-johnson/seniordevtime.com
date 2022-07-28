---
title: "CSS Classes Exercise"
section: "webdev"
exercise: "css-classes"
course: "course"
layout: "exercise"
---

%article





# Classes of things

So this is all very nice. We can apply a rule to all paragraphs on a page, but what if we want to apply a rule to only one specific paragraph, what then? Thankfully this has been thought of.

Use the following simple html file. Save it as index.html

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





Notice the new class attribute that I've added to the paragraphs. We say that "we have given the paragraphs class names". We can now identify the paragraphs uniquely using these class names and the dot operator.




1. Create a CSS file and save it as exercise_4.css. Use the <link> tag to link the stylesheet to the html document.
2. Enter the following into your CSS document:
```css
  .first_paragraph {
    color:red;
  }
```





Now test in your browser. What has changed? As always, if nothing has changed, call me over and we'll sort it out together. The dot operator has selected an element based on its class attribute, rather than it's tag name.




## Exercise - Colours

1. Make paragraph 2 go blue
2. Make the final paragraph smaller and grey.
3. Write a single rule that puts a cute little one pixel dotted grey border round all the paragraphs.




Styles are commonly used in conjunction with divs and spans to demarcate special areas of the document, headers, footers and suchlike. Now we're really coding. Isn't this great?

Note that "first_paragraph", "second_paragraph" and "final_paragraph" are just words that I made up. You could just as well use "header", "main_text" and "footer", or "flange", "doodad" and "thingummy". It's best if your class names make sense in context though so "thingummy" would not be a great class name, unless you have written a paragraph about thingummies.
