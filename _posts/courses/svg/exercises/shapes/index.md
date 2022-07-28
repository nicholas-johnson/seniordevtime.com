%article



# Simple Shapes

We can use SVG to create simple shapes. Here I have made a plain circle.

```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Shapes</title>
    </head>
    <body>
      <h1>A circle</h1>
      <svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="50"/>
      </svg>

    </body>
  </html>
```





## Exercise

You can draw a rectangle like so:

```js
  <rect height="40" width="40" x="0" y="0" />
```

=code(code, :xml)



You can set a fill colour using the fill attribute like so:

```js
  <circle cx="60" cy="60" r="50" fill="#888888" />
```

=code(code, :xml)



Given this information, whip up a quick self portrait in SVG. Prizes for the best one.
