%article


# Pie Layout

In order to draw our pie chart, we need to convert our data into a pie friendly format. We can do this using a pie layout.

```js
  var pie = d3.layout.pie()

  pie(data)
```





This will convert our data into an array of objects containing start angles and end angles.





## Exercise - create a simple pie chart

Assume a simple array of data like this:

```js
  data = [
    1,
    2,
    3
  ]
```





Create a pie chart based on this data.

Experiment with converting this into a ring chart.




## Exercise - create a simple pie chart from an array of objects

Assume an array of data like this:

```js
  data = [
    { name: 'cats', quantity:12 },
    { name: 'mice', quantity:19 },
    { name: 'rice', quantity:88 }
  ]
```





Use a pie layout to create a simple pie chart to display that data.

Optionally AJAX in your own data feed.
