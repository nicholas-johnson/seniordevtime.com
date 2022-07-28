%article


# SVG Histogram

SVG is ideally suited to data visualisation. It is mathematical, and easily constructed with JavaScript. Because the data lives in the DOM we can perform animation by changing attributes.

## Appending SVG

We use the D3 append function to append svg elements to the page.

We define an initially empty set of rects which we bind to the data using the data function.

This allows us to call enter to get a list of all rects that should be created, and exit to get a list of all rects that should be removed.

## For example

The following code generates a simple stacked histogram:


```js

  // First we create an SVG element
  var graph = d3
    .select('body')
    .append('svg')
    .attr('width', 200)
    .attr('height', 200)

  // Now let's define a function to draw the data
  var draw = function(data) {

    // We grab our bars and map to data.
    // No bars exist yet, so this selection
    // defines an enter array which lists
    // the datapoints that need to be mapped.
    var bars = graph.selectAll('rect').data(data);

    // Add any missing bars
    bars
      .enter()
      .append('rect')
      .attr('height', 10)
      .attr('y', function(d,i) {
        return d * 11;
      });

    // Remove any superfluous bars
    bars
      .exit()
      .remove();

    // Style all bars
    bars
      .attr('width', function(d) {
        return d*20;
      });
  }

  // Finally use the function
  draw([1,2,3,4,5,6,7,8,9,10]);
```






## Exercise

1. Enter the above code and try to get it working.
2. Open up a console and call the draw function passing in your own data.

## Adding text

Use text elements to add text to the end of each bar.

Fun with Histograms!




## Further exercise

Try to modify the code to create a histogram with vertical bars next to each other.
