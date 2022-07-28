;;;
"title": "Inserting, Updating & Deleting - CRUD",
"description": "CRUD is a basic function of any database. Let's do it with Mongo.",
"section": "mongo",
"exercise": "crud",
"layout": "exercise"
;;;

%article


# Inserting, Updating & Deleting

CRUD is a basic function of any database. Crud stands for:

* Create
* Read
* Update
* Delete

The four basic things that any data store needs to give us.




## Creating

We create using the insert command, like this:

```js
  db.people.insert({name: "Tony Stark", occupation: "Billionaire, playboy, philantropist..."})
```




The JSON object will be created and saved.




## Exercise - Create a document

Refresh your muscle memory. Create a new person now. Ensure that person has a shark.




## Reading

We have many options for finding. We have already seen db.collection.find(). We can also use db.collection.findOne() which will return at most one result.

As we shall see soon, we also have the aggregate framework, and if we need maximum flexibility at the expense of a good deal of speed, we can also use map-reduce.





## Exercise - Find the shark

* Refresh your muscle memory. Find the person who has a shark.
* Use findOne instead of find. This will return only one document.





## Updating

We save using the db.collection.save function. We pass the function a JSON object that contains the modified object to save, including the _id. The item will be found and updated.

```js
  var p = db.people.findOne()
  p.age = 999
  db.people.save(p)
```





We can also find and update in a single step using the update function:


```js
  db.people.update({name: 'dave'}, {name:'brunhilde'})
```





## Exercise - Make everyone older

* A year has gone by. Write a loop that iterates over a cursor and makes everyone one year older.
* Remember to make the cats older too. See if you can do both in the same loop.



## Exercise - Pirates

* Find everyone who has the word 'Pirate' in their name. You will need to use a regular expression to do this. {name: /Pirate/}
* Iterate over the cursor and award each of them a parrot.




## Deleting

We can remove people en-mass.

```js
  people = db.people.remove({name:'Dave'})
```







## Exercise - remove all the people.

* It's time for a cull. Delete all the 50 year olds.
* We also heard there was some guy running round with a shark. That's a dangerous animal. Take him out, in fact take out anyone with a shark.





## Larger Exercise - Enron fraud search

In 2001, the American energy firm Enron was taken down by accounting fraud. During the investigation, the Federal Energy Regulatory Commission made their [entire email database public](https://www.cs.cmu.edu/~./enron/) This is now the largest public domain email corpus available.

We'll use this dataset more as we go on, but for now we want to get it into shape.

Download the email corpus here:

<http://nicholasjohnson.com/mongo/datasets/enron.json>

Import it into Mongo using mongoimport, something like this:

```js
  mongoimport --db enron --collection emails --file enron.json
```

=code(code, :bash)



Have a look at the data. You'll notice the email format we are provided with here is a string. We could really do with changing this field into a Date object.

We can create a Date from a string like this:

```js
  new Date("2000-08-23 02:16:00-07:00")
```




Iterate over the dataset, converting all the strings into dates and saving them back into the database. You will need to use the save command for this.

Just for fun, find every email that contains the word 'fraud'.
