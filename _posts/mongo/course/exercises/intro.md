;;;
"title": "Welcome to MongoDB",
"description": "In which we meet MongoDB, connect to a terminal and say hello.",
"section": "mongo",
"exercise": "intro",
"layout": "exercise"
;;;

%article


# Welcome to MongoDB

Mongo DB is a highly scalable, NoSQL, schema free data store.

## Here's why it's great

* It stores data as JSON so you can use the same data clientside and serverside. This means you write almost no wiring code, everything just works.
* Flexible Schema. If your requirements change, you can adapt.
* Unstructured data - you can store and retrieve unstructured data easily. It's just JSON. Not every document in a collection needs the same fields.
* Denormalised data - Group related content in a single document.
* Clean and simple API - Mongo is nice to talk to.


## Here's why you might not like it

* Denormalised data means no joins. If your data is highly relational, Mongo is not your baby. Your data is organised into collections. If you need data from more than collection, you need to hit the database more than once.
* Flexible schema means no built in data validation. Your data is validated at the application tier. The database is dumb and will store whatever your application gives it, even junk and typos.
* Bugs - Mongo is new and there are still issues in the tracker. Not bad bugs, but occasionally things don't work as you might expect.
* No transactions - A SQL database allows you to bundle multiple writes into a transaction. If one write fails the whole transaction is rolled back. Mongo lacks this feature, writes are small and atomic. If you need a transaction you must build it yourself.
* Theoretical data loss - Mongo scales using a technique called sharding. It creates slaves that mirror data written to the master. If the master goes down before data is mirrored you may lose recent commits depending on your settings.


## When you should use it

Mongo represents data as a tree. If your data is tree shaped, or can be made tree shaped, Mongo is great. If your data is a web or a network which can't be flattened out, you likely have relational data, and Mongo is perhaps not for you this time.

If you have unstructured data to store which can be represented as a series of nested lists Mongo will make your life more enjoyable.

Say you have a webpage full of widgets, and each of those widgets can contain arbitrary information. This is a semi-structured tree and Mongo might be a very good choice.

If you have big customer data to store, and each customer record contains lists of communications, subscriptions, etc, the data is tree shaped, and Mongo would again be a good chice.

If you have big data and you want to query it in interesting and complex ways, pulling useful aggregated data out the other side in suprisingly short timeframes, Mongo is perfect.

On the other hand, if your data looks like a web: comments, purchases, kittens, customers, sharks, exploding hats, etc, all linking to each other in a web, then you have relational data, and you may wish to stick with a relational database like Postgres, MySQL or MS SQL Server.


## Why is it fast?

Mongo manages to be so fast because it does less. There's no magical difference in the architecture that makes it fast, it just has a simplified streamlined query language that is easier to optimise.


## Connecting to the terminal

We connect to the Mongo terminal using the mongo command

```js
  mongo
```





By default Mongo will connect to localhost.

We can connect to a remote server by passing arguments, like so:

```js
  mongo connection.mongolab.com:45352 -u username -p passw0rd
```





Once we connect to a Mongo instance we can type JavaScript directly into the console. We can create variables, do maths, write JSON.



## Exercise - connect to a console

Connect to the console at localhost. Try typing some JavaScript expressions.

* Tell me how many seconds there are in a week
* Tell me how many weeks there are in a human lifetime of 80 years.






## Creating a database

We can switch to a database in Mongo with the use command.

```js
  use petshop
```




This will switch to writing to the petshop database. It doesn't matter if the database doesn't exist yet. It will be brought into existence when you first write a document to it.

You can find which database you are using simply by typing db. You can drop the current database and everything in it using db.dropDatabase.

```js
  db
  > petshop
  db.dropDatabase()
```





## Exercise - Create a database

* Use the use command to connect to a new database (If it doesn't exist, Mongo will create it when you write to it).

That was easy wasn't it. Don't worry, it gets a bit harder.






## Collections

Collections are sets of (usually) related documents. Your database can have as many collections as you like.

Because Mongo has no joins, a Mongo query can pull data from only one collection at a time. You will need to take this into account when deciding how to arrange your data.

You can create a collection using the createCollection command.

```js
  use petshop
  db.createCollection('mammals')
```





Collections will also be created automatically. If you write a document to a collection that doesn't exist that collection will be brought into being for you.

View your databases and collections using the show command, like this:

```js
  show dbs
  show collections
```







## Exercise - Create a collection

* Use db.createCollection to create a collection. I'll leave the subject up to you.
* Run show dbs and show collections to view your database and collections.





## Documents

Documents are JSON objects that live inside a collection. They can be any valid JSON format, with the caveat that they can't contain functions.

The size limit for a document is 16Mb which is more than ample for most use cases.


### Creating a document

You can create a document by inserting it into a collection


```js
  db.mammals.insert({name: "Polar Bear"})
  db.mammals.insert({name: "Star Nosed Mole"})
```





## Exercise - Create some documents

* Insert a couple of documents into your collection. I'll leave the subject matter up to you, perhaps cars or hats.






### Finding a document

You can find a document or documents matching a particular pattern using the find function.

If you want to find all the mammals in the mammals collection, you can do this easily.


```js
  db.mammals.find()
```







## Exercise - documents

* Use find() to list them out.


