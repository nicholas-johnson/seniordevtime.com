%article


# Parsing Data

D3 comes with built in parsers for most well formed text based data formats. You will get back a JSON object.

## CSV

We can parse CSV using the csv.parse function:

```js
  d3.csv.parse("'a', 'b', 'c'\\n 1, 2, 3");
```





We will get back an object containing strings like this:

```js
  {
    'a': '1',
    'b': '2',
    'c': '3'
  }
```





Notice how all the values are strings.



## Exercise - parsing

Take an Excel spreadsheet and export it as a CSV file. Now host this locally and use AJAX to load it.

You can use the d3.csv function to load CSV.

Parse it and plot the result in a format that makes sense to you.
