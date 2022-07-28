---
title: "Aggregate unwind"
description: "Unwinding arrays"
section: "mongo"
exercise: "aggregation-unwind"
layout: "exercise"
---

%article


# Unwind arrays and manipulate the contents

We use unwind when we have data that contains arrays, for example

```js
  {name: 'dave', pets: ['cat', 'dog']}
  {name: 'mike', pets: ['naked mole rat', 'dog', 'hat']}
```





We can unwind this data to get a unique entry for each element in the array:

```js
  db.people.aggregate(
    { $unwind : "$pets" }
  )
```





This will yield something like this:


```js
  {name: 'dave', pets: 'cat'}
  {name: 'dave', pets: 'dog'}
  {name: 'mike', pets: 'naked mole rat'}
  {name: 'mike', pets: 'dog'}
  {name: 'mike', pets: 'hat'}
```





## Why is this useful?

Say you needed to get hold of the number of dogs, you can't easily group and count on an entry in an array. If you unwind first you can easily group on the pets field.




-# TODO Preprep this data. This exercise is too hard

## Exercise - tag list

Download the company startup dataset here:

<http://nicholasjohnson.com/mongo/datasets/startups.json.zip>

Now load it into a database collection.

### Prep the data

First up we have to prep the data. We are going to be filtering by tags. Notice that the tag_list is a comma separated string. Ideally this would be an array.

Use a cursor to iterate over the array and convert the comma separated string into an array, then save this array back into your collection. use split() to convert a string into an array, like so:

```js
  "a,b".split(",")
```





### unwind the data

* Now each company has a tag array, $unwind the tags, then write a $group aggregation to generate a complete list of all available tags without duplicates.
* Add in a count to find the most popular tags.
* Run the output through $project to generate a nice JSON tag feed.

## Extension

Tell me the total number of tags.




## Unwind can be the opposite of push

Say we have previously $group-ed our data, and $push-ed to generate an array. we can use $unwind to restore the values with the count attached.

Say we have a list of customer interactions. For each interaction we want to add an 'engagement' field which lists out the number of times the customer appears in the list.

We might:

* $group by email and $count interactions
* $push the $$ROOT into a 'customer' field
* $unwind the customer field
* $project to tidy up the data

We now have the original time series data, but with the addition of an engagement field.




## Exercise - Enron

* Use the Enron dataset.

<http://nicholasjohnson.com/mongo/datasets/enron.json>



First we have to prep the data. Unless you've already converted it, The date will be stored as a string. We would ideally like to convert it to an actual date.

We can split the data using a script like this one. See if you can see what it is doing:

```js
  db.startups.find({}).forEach(function(startup) {
    if (startup.tag_list && startup.tag_list.split) {
      startup.tag_list = startup.tag_list.split(',').map(function(a){return a.trim()});
    } else {
      startup.tag_list = [];
    }
    print(startup.tag_list);
    db.startups.save(startup)
  })
```



-# TODO: test this script!



### Split by day

* Create a timeline that shows the number of emails by day.
* Create a filter that shows the number of emails by day, sent by people who had sent 10 or more emails.



.downloads

[download code from board](https://www.dropbox.com/sh/qmzwsj4qs6f4e0e/AABDUeAQhBBW9cThR595Fz62a?dl=1)
