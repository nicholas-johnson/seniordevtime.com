---
title: "Map Reduce"
description: "Unwinding arrays"
section: "mongo"
exercise: "map-reduce"
layout: "exercise"
---

%article


# Map Reduce

Prior to Mongo 2.6, Map reduce was the only way to run queries on Mongo. The aggregate framework has largely replaced Map reduce, but we can still use it for complex queries.

## Speed

Because Map reduce runs JavaScript functions, it can be slower than the equivalent aggregate pipeline. Favour aggregate operations where possible.

## Map

The Map stage accepts a single document and converts it to a usable form. Say you are summing all the fleas on an elephant, the map stage might output just the fleacount for a single elephant. It emits the value. It can emit many values.


```js
  var map = function() {
    emit('flea_count', this.flea_count)
    emit('tick_count', this.tick_count)
  }
```





## Reduce

The reduce stage accepts multiple mapped inputs and aggregates them in some way, perhaps adding them to an array, or summing them.

```js
  var reduce = function(id, counts) {
    return Array.sum(counts)
  }
```





## Finally we issue the query:

```js
  db.people.mapReduce(
    map,
    reduce,
    {
      out: { inline: 1 }
    }
  )
```





read more about map reduce here: <http://docs.mongodb.org/manual/reference/method/db.collection.mapReduce/>


## Why this is fast

If you have data distributed across a cluster, each machine in the cluster can map a few documents feeding the result forward. Furthermore, each machine can handle a few reduce operations, potentially distributing the workload very widely.

This is the algorithm that Google uses in its search, so as you can imagine it's quite quick.




## Exercise - Map Reduce

* Use Map reduce to take the people data and count the total age of everyone.
* Count the total age of all the cats.
