;;;
"title": "The Mongo Aggregation Framework plus $match",
"description": "In which we introduce the aggregation framework, and learn how to chain operations to generate more complex queries",
"section": "mongo",
"exercise": "aggregation",
"layout": "exercise"
;;;

%article



# The Mongo Aggregation Framework

The Mongo Aggregation framework gives you a document query pipeline. You can pipe a collection into the top and transform it though a series of operations, eventually popping a result out the bottom (snigger).

For example, you might take a result set, filter it, group by a particular field, then sum values in a particular group. You could find the total population of Iowa given an array of postcodes. You could find all the coupons that were used on Monday, and then count them.

We can compose a pipeline as a set of JSON objects, then run the pipeline on a collection.


## Empty pipeline

If you provide an empty pipeline, Mongo will return all the results in the collection:

```js
  db.entrycodes.aggregate()
```








## Exercise - Create an Empty pipeline

Try out the aggregate pipeline now. Call aggregate on your people collection. You'll see the result is the same as if you called find.





# Filtering the pipeline with $match

We can use the aggregation pipeline to filter a result set. This is more or less analogous to find, and is probably the most common thing we want to do.

Say we want to list only people who have cats (where cat is a sub-document), we would probably do something like this this:

```js
  db.people.find({
    cat:{
      $exists: true
    }
  })
```





We can get the same result in the aggregation framework using $match, like so:

```js
  db.people.aggregate({
    '$match' : {
      cat:{
        $exists: true
      }
    }
  })
```





So why use aggregation over find? In this example they are the same, but the power comes when we start to chain additional functions as we shall soon see.



## Exercise - $match

* Use the people dataset. Match all the people who are 10 years old who have ten year old cats.
* Match all the people who are over 80 years old, and who's cats are over 15 years old.




## When to use match

Matching is quick but not smart. It's designed to limit the result set, so that the rest of the pipeline can run more quickly. When used with project we can match against fields that don't exist in our result set. This is a powerful and useful feature.




## Larger Exercise - Zips

Download the zips file here. This contains a list of all the zip codes in the US:

<http://nicholasjohnson.com/mongo/datasets/zips.json>

Import it into Mongo using mongoimport, something like this:

```js
  mongoimport --db zips --collection zips --file zips.json
```

=code(code, :bash)


* Find all the zip codes in Massachusetts (state:'MA").
* Find all the zip codes with a population less than 1000.
