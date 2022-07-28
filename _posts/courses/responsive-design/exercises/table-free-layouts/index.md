;;;
"title": "Nicholas Johnson - Table Free Layouts",
"description": "Responsive Design course Notes and Exercises"
;;;

%article



# Table Free Layouts

In this section, we're going to use floats to create a liquid float layout that will expand to fill the space available.

In the next exercise we will make this respond by linearising the layout. We'll use this page as the basis for a responsive site which we'll continue to develop all through the day.

## Exercise

1. Download the [HTML and CSS exercise files from the dropbox](https://www.dropbox.com/sh/ngxlgypx6irjq9h/AAAkLGayiIhKLCnfsk-Hv8uYa?dl=1).
2. Float the two columns left and right and give them percentage widths to create a two column layout.
3. Tell the footer to clear:both.

You should now have a nice two column layout.

## Further Exercise

If you have time and skill, extend your layout like so:

1. Add a third column
2. Add a header
3. Use your CSS3 skills to nice it up a little.

## Exercise - Optional Box model fix

If you'd like to use the border-box model fix, and you probably should, you can insert the following code somewhere at the top of your CSS.

Note that this is not compatible with IE7. You will have to decide if this is a problem for you or not.

```css
  *, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    word-wrap:break-word;
  }
```




