---
title: "Counting with Group"
description: "Using Group and count to count distinct"
section: "mongo"
exercise: "aggregation-count"
layout: "exercise"
---

%article


# Counting with Group

Group has the ability to count. You can count the entries in a group. By chaining $group commands together you could count the number of groups.

For example, say you have a set of customer records which may contain duplicate emails. You could group by email and find out who is using your service most often. You might count the groups, to get the number of distinct emails, you might group by count, to find how many people used your site once, twice, five times, etc.

We use $group to count, because generally we want to count groups.

## Counting everything

We could count the entire collection by grouping everything, then adding a count field. This is the same as db.collection.find().count()

```js
  db.hamsters.aggregate(
    {
      $group: {
        _id: 1,
        count: {
          $sum: 1
        }
      }
    }
  )
```





## Exercise - Count everything

* Count all the people. How many are there?

## Count with $match

* Add a $match step to the start of your pipeline. Count all the people with cats using the aggregate pipeline. How many do you have?

## Harder - Count with $project and $cond

* Use project to create a 'hasCat' field. You will need to use $cond to do this: <http://docs.mongodb.org/manual/reference/operator/aggregation/cond/>. Check that your pipeline now contains the hasCat field.
* Now group by hasCat and count.
* Finally use $project to clean up your stats. You now have a JSON API call for finding the cat status in your application.


-# cond
-# db.people.aggregate({$group: {_id: {$cond: [{'$cat'}, true, false]}}})




## Counting Name Popularity

Let's group on name, then count how many people have each name:

```js
  db.people.aggregate(
    {
      $group: {
        _id: {
          name: '$name'
        },
        count: {
          $sum: 1
        }
      }
    }
  )
```





# Sorting with Aggregation

We can sort records in the aggregation pipeline just as we can with find. Choose the fields to sort on and pass 1 or -1 to sort or reverse the sort.

```js
  db.people.aggregate(
    {
      $sort: {
        age: 1,
        name: 1
      }
    }
  )
```






## Exercise - Stocks

* group the stocks data by sector.
* Use $sum to discover the most profitable sector
* Sort by profitability
* $project the results





## Count distinct

Another challenge is to count the number of groups. For example, say you have a dataset containing duplicate emails, you might want to generate a list of distinct emails and then count that list.

You have two ways to do this:

### The wrong way

Now say we want to pick out all the unique emails, we might use distinct, like so:


```js
  db.entrycodes.distinct('email')
```






This will pop a list out into memory, like this:


```js
  [
    "123@gmail.com",
    "456@gmail.com",
    "567@gmail.com",
    "890@aol.com"
  ]
```






We could get the length of the collection just by querying the array, like so:


```js
  db.entrycodes.distinct('email').length
```






**However, this is bad**. Imagine now that we have 15,000,000 records. We now have to create a massive array just for the purpose of getting a single number.

### The right way

Instead we can do this entirely in the aggregation framework using two group commands. First we group by emails and throw away the rest of the data. We now have a list of all the unique emails.

We now want to find out how big this set is, so we create a big group that holds everything (using _id: 1) and count that.

```js
  db.people.aggregate(
    {
      $group: {
        _id: '$email'
      }
    },
    {
      $group: {
        _id: 1,
        count: {
          $sum: 1
        }
      }
    }
  )
```








## Exercise - Enron

* The Enron dataset is a publically available database of emails sent during the Enron scandal.

<http://nicholasjohnson.com/mongo/datasets/enron.json>

* Import it into Mongo using mongoimport, something like this:

```js
  mongoimport --db enron --collection emails --file enron.json
```

=code(code, :bash)



* List all the unique senders.
* Count all the unique senders.
* group by sender and count to find out which email address sent the most emails.
* Rank the senders in order or emails sent.

## Harder

* Rank the senders in order or emails sent + emails received. You will need to use a project stage to do this.

.downloads

[Code from the board](https://www.dropbox.com/sh/js08yz9vhsb47w7/AABv4Z5wD5wXtkqKULKAQwjLa?dl=1)


