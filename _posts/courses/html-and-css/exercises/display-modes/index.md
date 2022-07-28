%article



# Display Modes

We can control the way an element is positioned on the screen by changing it's display mode. (We talk about changing the rendering strategy)

## display:block

The element lives inside a rectangle. By default it starts on a new line, fills all the horizontal space available to it.

headers, footers, articles, paragraphs and divs are all display:block by default. You can of course change the display mode.

%p
Here is an example of
%p{ style: 'background:yellow; padding:10px; border:1px solid black;'} some block content
Notice how it clears elements above and below it.


## display:inline

The element sits inline with the rest of the text.

a, span, strong, em and img are inline by default.

%p
Here is an example of
%span{ style: 'background:yellow; padding:10px; border:1px solid black;'}  some inline content
mixed in with some other text. Notice how it sits inline with the rest of the text. Any padding you add doesn't separate the lines. You can only really have horizontal padding.


## display:inline-block

Inline-block elements take the best features of inline and block. They can have margins and padding, but they sit next to each other

There are no elements in HTML that are inline block by default.

Inline block is particularly useful when styling buttons and the like. You can take an anchor, make it inline block and add padding to it.


%p

%span{ style: 'display:inline-block; padding:10px; background:yellow; border:1px solid black;'} Here are some examples of
%span{ style: 'display:inline-block; padding:10px; background:yellow; border:1px solid black;'}  some inline-block elements.
%span{ style: 'display:inline-block; padding:10px; background:yellow; border:1px solid black;'} Notice how each block
%span{ style: 'display:inline-block; padding:10px; background:yellow; border:1px solid black;'} can have margins and padding.



## Exercise

We are going to restyle a form.

Use the following HTML:

```html
  <form>
    <label form="email">email</label>
    <input id="email" />
    <label form="password">password</label>
    <input id="password" />
    <button>Sign in</button>
  </form>
```





### Let's display:block

1. View the file in a web browser. You have a nice horizontal form.
2. Write CSS which styles the label and input display:block. You now have a vertical form.

### Let's display:inline-block

1. Constrain the width of the form using width.
2. Set the label and input to be inline-block.
3. Set a width of 40% on the input and label.

You now have a layout with the labels next to the input elements.


%aside

## Downloads

* [Code from the board](https://www.dropbox.com/sh/8oz34d9fh5olphx/AAAehbCegeLdEJ4yiVEE-1HIa?dl=1)
