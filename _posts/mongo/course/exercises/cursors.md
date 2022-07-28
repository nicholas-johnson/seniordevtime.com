;;;
"title": "Interacting with cursors",
"description": "Most find operations in Mongo return a cursor object which allows us to get the results.",
"section": "mongo",
"exercise": "cursors",
"layout": "exercise"
;;;

%article


# Interacting with cursors

When we compose a query, Mongo gives us back a cursor object from which we can get the values.

When we called limit and sort in the last section, we were actually calling methods on the cursor that was returned by find.

If we save the cursor in a variable we can call more methods on it.

```js
  var people = db.people.find( );
```





We can iterate over the the cursor using a simple while loop. We can check if the cursor has a next value, and can call cursor.next to get the value out.

```js
  var people = db.people.find();
  while (people.hasNext()) {
     print(tojson(people.next()));
  }
```







## Functional Loops - forEach and map

We can simplify the code above using functional style loops.

```js
  db.people.find().forEach(function(person) {
    print(person.name);
  });
```




We also have access to map, which will return an array of values.


```js
  var array = db.people.find().map(function(person) {
    return person.name;
  });
```



%aside.box

## Cursor persistence

Cursors last for 10 minutes and are then garbage collected. This should be sufficient for most tasks. If you need a longer lasting cursor for some reason, you can create a long lasting cursor, however you should be aware that it will eventually go out of sync with the database.

If you want to know how to prevent this behaviour, see here: <http://docs.mongodb.org/manual/core/cursors/#closure-of-inactive-cursors>





## Exercise - Cursor methods

You can read all the cursor methods here:

<http://docs.mongodb.org/manual/reference/method/js-cursor/>

* Iterate over each of the people and output them.
* change the find function to find only the people with cats.
* Iterate over each of the people, outputting just the cat name and age each time.
* Use Map to generate an array containing all of the cat names.





## Exercise - Stock ticker

* Sort the stocks by profit
* Now iterate over the cursor and output all of the stocks names and tickers in order of profit.
