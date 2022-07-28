---
title: "Adwords Intro"
section: "javascript"
course: "adwords-script-course"
exercise: "iterators"
layout: "exercise"
---

%article



# Iterators

An iterator is a way to loop over a list of things in order. We can call hasNext() to find out if the iterator is finished. We can call next() to get the next item.

Google uses iterators

```js
  const iterator = AdWordsApp.adGroups().get();
  while (iterator.hasNext()) {
    const adGroup = iterator.next();
    Logger.log(adGroup.getName());
  }
```





We might use this to output all the adgroups in an account like this:

```js
  function main() {
    getAllAdGroups();
  }

  function getAllAdGroups() {
    const adGroupIterator = AdWordsApp.adGroups().get();
    Logger.log('Total adGroups found : ' + adGroupIterator.totalNumEntities());
    while (adGroupIterator.hasNext()) {
      const adGroup = adGroupIterator.next();
      name = adGroup.getName()
      Logger.log(name);
    }
  }
```







## Exercise - Iterator

Modify the above code to get a an iterator for each ad. Output the headline for each ad in the list. Use AdWordsApp.ads().get() to get an ad iterator.

## Extension - Output all the keywords

See if you can output a list of all the keywords in your account. This might be a long list.




## Exercise conditionals

1. Output all of the ads which have a click-through rate above a certain threshold. You will need a loop and a conditional.
2. Output all the ads which have a cpc below a certain threshold.




## Exercise Nesting

Iterate over all the ad groups and output the name.

For each ad group output all the ads plus vital stats for each ad.

You will need to nest iterators for this one.