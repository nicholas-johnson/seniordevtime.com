;;;
"title": "Aggregate grouping",
"description": "We can group based on criteria",
"section": "mongo",
"exercise": "aggregation-group",
"layout": "exercise"
;;;

%article



# Grouping with $group

$group allows us to group a collection according to criteria. We can group by fields that exist in the data, or we can group by expressions that create new fields.

Group will operate on a set of documents in the pipeline, and output a new set of documents out the bottom.

We group using the _id field. This will create a new _id for each group that will be an object containing the grouping criteria.

The simplest group would look like this:

```js
  db.people.aggregate(
    {
      $group: {
        _id: 1
      }
    }
  )
```





The id field is empty, so the group contains the whole collection, but we haven't output anything, so each output document is empty.

## Grouping by id

If we just want to group by a single field we can do this easily. The id of each output document will be the value of the expression, in this case '$name'.

```js
  db.people.aggregate(
    {
      $group: {
        _id: '$name'
      }
    }
  )
```







## Exercise

* Try this out on your people data set. You should get a list of distinct names.
* The output is untidy, each name output in the id field. Add a $project step to the popeline to rename the '_id' field to 'name'.

You just wrote a function for getting distinct emails.




## Grouping by multiple fields

You can group on more than one field by passing an object to _id:

```js
  db.people.aggregate(
    {
      $group: {
        _id: {
          name: '$name',
          age: '$age'
        }
      }
    }
  )
```






## Exercise - Grouping by object

Try out the above. Notice that the _id field is now an object.
Use $project to reformat the data. You now have distinct names and ages.

-# ## Extension

-# Try to group by whether or not the user has a cat. - harder than it sounds




## $pushing data into the result


When grouping we use the _id field to hold the common values that we are grouping our documents on. This means that the output of a group aggregation only holds the data that is common to all documents in that group.

What happens though if we want to preserve a value that we are not grouping on. For this we use $push.

## $push

$push will create an array and store part or all of the grouped source documents in it.

```js
  db.entrycodes.aggregate([
    {
      $group: {
        _id: "$email",
        count: {$sum: 1},
        entry: {
          $push: {
            firstName: "$firstName",
            lastName: "$lastName"
          }
        }
      }
    }
  ])
```





# $$ROOT

%p The $$ROOT variable contains the source documents for the group. If you'd like to just pass them through unmodified, you can do this by $pushing $$ROOT into the output from the group.

```js
  db.entrycodes.aggregate([
    {
      $group: {
        _id: "$email",
        name: "$firstName"
        count: {$sum: 1},
        entries: { $push: "$$ROOT" }
      }
    }
  ])
```







## Exercise - Group and push

* Use $match to select only people with cats
* Now group by name, and for each person.
* Push the cats into the result.

We can now see a list of all the cats owned by people with a particular name.




## Exercise - Enron

* Take the Enron dataset and group by sender.
* Push $$ROOT into the group. You now have the emails handily grouped by sender.

.downloads

[Code from the board](https://www.dropbox.com/sh/j483hc4w3vp9rcb/AACdibGp3ebk5kHTfgIWfm30a?dl=1)
