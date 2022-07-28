---
title: "CSS Stylesheets Exercise"
section: "webdev"
exercise: "stylesheets"
course: "course"
layout: "exercise"
---

%article


# Stylesheets

Embedding our CSS right on the page is OK for simple tasks, but we lose the ability to easily share styles between documents. Better to extract our styles into a separate document called a stylesheet.

We hook up a stylesheet using a link tag, like so:

```js
  <link rel="stylesheet" type="text/css" href="styles.css">
```





We then extract our rules into a file called styles.css which contains all our rules. Note that we can link as many stylesheets as we like, though more stylesheets does mean more HTTP requests.

```js
  h1 {
    color:red;
  }
```







## Exercise - extract a stylesheet.

Refactor your last exercise to use a stylesheet.
