---
title: "Why you should (sometimes) use MongoDB"
tags: javascript, mongodb
layout: 'blog'
course_sidebar: :mongo
---



I should start out by saying that I have no axe to grind here. I'm just a guy who enjoys learning things and using new technology.

Mongo as a technology has taken some <a href="https://www.youtube.com/watch?v=b2F-DItXtZs" target="_blank">heavy flak, particularly from the SQL crowd</a>. It's missing a few features, has bugs, and does things in an unfamiliar way. This has made a lot of people rather cross which has lead to a surprising outpouring of hate for a technology that is actually rather good.

I have very much enjoyed my Mongo journey. Perhaps you will too.

## Is your data tree shaped?

Or can it be made to be tree shaped?

Mongo stores your data as a tree. Documents are nested inside other documents, which are nested inside collections. Your data is JSON.

Most data sets I have come across are ultimately trees. Your customer has many orders, each of which have many products for example.

If your document is (or can be made) tree shaped, Mongo is a good idea. If it is web shaped with lots of relations going off all over the place, Mongo is probably not the best thing for you.

*Consider first of all if your data can be represented as a tree.*

## Can you do without validation?

Mongo will take what you give it and eat it up, typos and all. Data validation comes from the application tier. If you mistype the name of a databse or collection, Mongo will happily make a new collection for you. This is wonderfully agile, but requires you to be a smart, responsible, wide-awake developer.

*Edit. Mongo 3.2 now has document validation*

## Can you live without transactions?

Mongo has no transactions, so you have no way to gather a bunch of statements together such that if one fails, the whole lot is rolled back.

Writes are atomic. We have operations like findAndUpdate to make simple tasks atomic, but if you are doing multiple writes you may run into concurrency issues which are not dealt with by the database.

## Can you live with change and bugs

Mongo has bugs. Fewer and fewer as time goes by, but it is still potentially tricky.

## Do you like JavaScript?

Because Mongo had JavaScript right thorough it. The Mongo console is a full JavaScript shell. You can talk to Mongo using JavaScript. You wire up the aggregate framework by composing JSON objects. You set up map reduce by writing map and reduce functions.

Of course, there are wrappers for other languages out there. Pretty much any language you want to use will probably have a Mongo package, but Mongo with JavaScript is a special combination.

If you're already invested in JavaScript - perhaps you have Node and Express as your server, perhaps your build tooling is NPM, Gulp or Grunt, perhaps you have Angular or React managing your front end - Mongo might be the thing you need to complete the set.


## Are you making an API?

Because Mongo is absolutely tailor made for APIs. It outputs JSON natively, and you can push JSON right back into it. Your server becomes a very thin security and validation tier sitting in front of your database. It is a tremendously light and agile way to code.

## Might your data become too large to fit on a single machine?

Mongo is *web scale* (Yes, I know it's a cliche, but it's true). Mongo scales horizontally by splitting the database into smaller pieces or *shards*. These can be queried using map-reduce, which is Mongo's default way of searching. This is the same algorithm Google used to use to generate its search results so quickly.

## Is Mongo for you?

If all of these are true, and you fancy a challenge, you might have a try with Mongo.

Now let the flaming begin.
