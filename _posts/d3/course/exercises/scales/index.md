%article


# Scales

Up till now we have been munging our data into shape manually. If we have data in the range 0 to 10, we have simply multiplied the value by 10 to get a percentage.

Instead it would be better if we could fit our data into a range. We can achieve this with a d3 scale function to normalise our data within a range.


## The d3.scale object

d3.scale is an object full of scale function generators. Open it up in a console and you can see all the scales available to you. These are:

* identity
* linear
* log
* ordinal
* pow
* quantile
* quantize
* sqrt
* threshold


## Linear scale

We can create a simple linear scale using the linear function:

var scale = d3.scale.linear();

Once made we can pass values to it:

```js
  scale(5); // returns 5
  scale(99); // returns 99
```





## Domain

We can make this more useful by setting a domain. A domain is the minimum and maximum values the data can have.

```js
  var scale = d3.scale
    .linear()
    .domain([ 0, 10 ]);
```





This will now normalise data between 0 and 1:

```js
  scale(0); // returns 0
  scale(5); // returns 0.5
  scale(10); // returns 1
```





## Setting the domain automatically with min and max

We can set the domain automatically with min and max. Min will give us the lowest value in a data set. Max will give us the highest:

```js
  var data = [5,7,6,3,6]

  var min = d3.min(data); // returns 3
  var max = d3.max(data); // returns 7

  var scale = d3.scale
    .linear()
    .domain([ min, max ]);
```





Now when we call this function, 3 will be the lowest value, and 7 will be the highest:

```js
  scale(3) // returns 0
  scale(7) // returns 1
  scale(6) // returns 0.75
```





## Setting a range

Our data so far has been normalised between 0 and 1. We can normalise to a different range that corresponds to the size of our graph:

Say we make an svg element like this:

```js
  var width = 300,
    height = 200;

  d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);
```





We can modify our scale function to normalise our data to fit in this graph using the range function:

```js
  var scale = d3.scale
    .linear()
    .domain([ min, max ])
    .range([ 0, width ]);

  scale(3); // returns 0
  scale(5); // returns 150
  scale(7); // returns 300
```





## Padding with scales

We can use scales to add padding to our SVG element so the data points are not hard against the edge. Create a padding variable and then use it to adjust your range:

```js
  var padding = 50;

  var scale = d3.scale
    .linear()
    .domain([ min, max ])
    .range([ padding, width - padding ]);
```





## Inverting your chart

You can also invert a chart using scales, just swap the range values over:

```js
  var scale = d3.scale
    .linear()
    .domain([ min, max ])
    .range([ width, 0 ]);
```







## Exercise - Add a scale to your graph

Choose your favourite graph and modify it to work with a scale. Add a little padding using a padding variable so your elements don't press against the edge.



## Exercise - Invert your graph

Use a scale to invert your graph. Notice how this simplifies quite a lot of the maths to do with positioning elements.



## Exercise - Log Scale

Modify your graph to use a log scale. This involves changing a single word in your code. Nice eh?
