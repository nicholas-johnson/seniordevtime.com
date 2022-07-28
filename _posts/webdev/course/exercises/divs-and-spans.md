---
title: "Divs and Spans Exercise"
section: "webdev"
exercise: "divs-and-spans"
layout: "exercise"
---

%article




# Divisions and Spans

Sometimes we want to add styling to an arbitrary region of a document. A portion of a document might be a header or a sidebar. A region of text might just be special somehow. Perhaps it’s an address that we want to highlight in a particular way, or a date that needs special formatting.

For these purposes we have divs and spans.

A document division is intended to demarcate a largish region of text like a header, sidebar or footer. It groups a number of related items. It’s defined using the \<div> and </div> opening and closing tags.

A span is designed to demarcate a small region of text, maybe just a word, not more than a line or two. Span’s are defined using the \<span> and </span> opening and closing tags.





## Exercise - Make some divs

Here is the document to use. Copy and paste this to give yourself a start:

```html
  This is a title. Wrap this in an h1 tag

  This is a strapline. Wrap this in a paragraph tag

  This is body text. Wrap this in a paragraph tag.

  This is more body text. Wrap this in a paragraph tag.

  This is a line of text containing some words that might want to be styled appropriately. Red, green, blue, big, small

  This is footer text, perhaps a copyright notice
```





1. Wrap the title in an h1 tag and the strapline in a p tag.
2. Wrap the strapline in a p tag.
3. Wrap each of the three lines of body text in p tags
4. Wrap line of footer text in a p tag
5. Wrap the h1 and strapline together in a div tag. This groups them. They are now grouped. Add a style attribute to the div tag like so:

```html
  <div style=”border:2px solid grey”></div>
```





As always, remember to close your div tag using a matching </div> tag so the web browser knows where the div finishes.



## Further Exercise - more divs

1. Wrap the three body text paragraphs in a div tag. This is your main div. Put a border around the main div.
2. Wrap the footer paragraph in a div tag. Put a border around the footer div.
3. Wrap span tags around the words: red, green, blue, big and small. Give each element its correct style, so the word blue should be blue.
4. Add a background color to the header div. use your CSS cheat sheet to find out the correct rule to apply.

