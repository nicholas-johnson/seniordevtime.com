---
title: "AdWordsApp"
section: "javascript"
course: "adwords-script-course"
exercise: "adwordsapp"
layout: "exercise"
---

%article



# AdWordsApp

Adwords Scripts give us a handy top level object called AdWordsApp.

We can use this script to access any part of our AdWords account. We can run queries, we can get account data. We can pull out anything we need from the core AdWords system.

Check out the documentation here:

<https://developers.google.com/adwords/scripts/docs/reference/adwordsapp>

Let's access our account data:

```js
  function main() {
    getAverageCpc();
  }

  function getAverageCpc() {
    const currentAccount = AdWordsApp.currentAccount();
    const stats = currentAccount.getStatsFor('LAST_MONTH');
    Logger.log(stats.getAverageCpc())
  }
```







## Exercise

Modify the above script to get the average click through rate for the account.

Try and output a nice report for the account.
