---
title: "Count, Limit, Skip & Sort"
description: "We can chain additional functions onto our find queries to modify the results"
section: "mongo"
exercise: "count-and-limit"
layout: "exercise"
---

%article



# Count, Limit, Skip & Sort

We can chain some additional functions onto our find query to modify the output.

## Count

Count will convert our result set into a number. We can use it in two ways. We can either chain it:

```js
  db.people.find({sharks: 3}).count()
```





or we can use it in place of find:

```js
  db.people.count({sharks: 3})
```





To count the people who have exactly three sharks.

Don't confuse it with length(). Length will convert to an array, then count the length of that array. This is inefficient.



## Exercise - count the people

* Find out how many people there are in total.
* Using your collection of people, and $exists, tell me how many people have cats.
* Use $where to count how many people have cats which are older than them.

## Optional exercise - Further reading

Count can be a slow operation on large data sets. For more on optimising count, you might like to read the following: <https://www.compose.io/articles/counting-and-not-counting-with-mongodb/>



## Limit and Skip

Limit will allow us to limit the results in the output set. Skip will allow us to to offset the start. Between them they give us pagination.

For example

```js
  db.biscuits.find().limit(5)
```





will give us the first 5 biscuits. If we want the next 5 we can skip the first 5.

```js
  db.biscuits.find().limit(5).skip(5)
```






## Exercise - Limit the people

* Give me the first 5 people
* Give me the next 5 people
* Give me the names and ages of the oldest 5 pensioners with piranhas
* Give me the names and ages of the youngest 5 teenagers with cats, where the cats have the word "Yolanda" in their name.



## Sort

We can sort the results using the sort operator, like so:

```js
  db.spiders.find().sort({hairiness: 1})
```





This will sort the spiders in ascending order of hairiness. You can reverse the sort by passing -1.

```js
  db.spiders.find().sort({hairiness: -1})
```





This will get the most hairy spiders first.

We can sort by more than one field:

```js
  db.spiders.find().sort({
    hairiness: -1,
    scariness: -1
  })
```





We might also sort by nested fields:

```js
  db.spiders.find().sort({
    'web.size': -1
  })
```





will give the spiders with the largest webs.



## Exercise - Order the people

* Find the youngest 1 person with a cat and a piranha.
* Give me just the name of the youngest 1 person with a cat and a piranha.
* Give me the 5 oldest cats
* Give me the next 5 oldest cats



## Exercise - Stocks

Use the stocks data from here:

<http://nicholasjohnson.com/mongo/datasets/stocks.json>

* Import it into Mongo using mongoimport, something like this:

```js
  mongoimport --db stocks --collection stocks --file stocks.json
```

=code(code, :bash)



* Find me the top 10 most profitable stocks
* Add a projection, tell me which sector the most profitable stocks are in.
* Which is the least profitable sector.
* Have a look at the data. Spend a few minutes deciding which stocks you would most like to invest in.

