%article


# Colour Scales

We can also create a scale which will automatically generate a colour based on our data value.

The colour scales are:

* category10
* category20
* category20b
* category20c

category 10 contains 10 colours, the rest contain 20 colours. These colours have been specially designed to be harmonious and attractive.

## Generating a colour scale

We can make a colour scale by calling one of the category functions:

```js
  var colour = d3.scale
    .category20();
```





We can now make a colour simply by calling the colour function:

```js
  var bars = d3.selectAll('rect');

  bars
    .attr('color', function(d,i) {
      return colour(i);
    });
```







## Exercise - assign colours to your chart

Use the colours function to automatically assign colours to one of your charts.
