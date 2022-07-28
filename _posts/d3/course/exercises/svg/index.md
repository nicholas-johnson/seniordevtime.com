%article


# SVG (Scalable Vector Graphics)

SVG is a format that has been around for quite a long time, but which was only rolled into Internet Explorer in version 9.

At time of writing, approximately 95% of the UK population can view SVG data.

Check out current browser support at caniuse.com: <http://caniuse.com/#feat=svg>

## Embedding of SVG

SVG data can be embedded. If you have an SVG file, you can embed it in your page using a regular img tag:

```html
  <img src="hello.svg" />
```





## Inline SVG

You can also include SVG right in your page with the rest of your markup.

The following will draw a black circle with a radius of 90 units.

```html
  <svg width="200" height="200">
    <circle cx="100" cy="100" r="90" />
  </svg>
```




%svg{width: "200", height: "200"}
%circle{ cx:"100", cy:"100", r:"90" }



## Squares

You can draw squares and rectangles too:


```html
  <svg width= "200" height= "200">
    <rect x='10' y='10'
      width='180' height='180'
      fill='red' stroke='black' />
  </svg>
```



%svg{width: "200", height: "200"}
%rect{ x:'10', y:'10', width:'180', height:'180', fill:'red', stroke: 'black' }



## Text

You can use SVG to write text directly to the screen.

```html
  <text x='20' y='50'> Hello SVG!</text>
```



%svg{width: "200", height: "100"}
%rect{ x:'10', y:'10', width:'180', height:'80', fill:'red', stroke: 'black' }
%text{ x:'20', y:'50' } Hello SVG!



## CSS

If your SVG is on the page you can style it directly with ordinary CSS.

Note. I'm inlining the CSS here for brevity. CSS should go in it's own file.


```html
  <style>
    rect.my_rectangle {
      fill: green;
      transition:1s;
    }
    rect.my_rectangle:hover {
      fill: red;
    }
  </style>

  <svg width= "200" height= "200">
    <rect class="my_rectangle" x='10' y='10'
      width='180' height='180' />
  </svg>
```




%style
rect.my_rectangle {
fill: green;
transition:1s;
}
rect.my_rectangle:hover {
fill: red;
}

%svg{ width:'200', height:"200" }
%rect.my_rectangle{ x:'10', y:'10', width:'180', height:'180' }




## Exercise - A hand drawn SVG histogram

Use simple SVG to hand draw a nice bar chart on the page. You can do this vertically or horizontally. Position text elements to show the values.

We will use this markup in the next section.




## A hand drawn SVG scatterplot

Use circles to mock up a simple scatterplot. A scatterplot can show up to four data values. Each circle should have an x and a y position, a radius and a colour.

We will use this markup in the scatterplot section.
