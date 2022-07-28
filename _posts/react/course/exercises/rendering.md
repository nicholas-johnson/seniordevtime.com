---
title: "Rendering - React Exercise"
section: "react"
exercise: "rendering"
layout: "exercise"
---

%article



# Rendering

Compose a react DOM node like so:

```js
  var p = React.createElement('p', null, 'Hey there React!');
```





We can do the same using the DOM helper methods, like so:

```js
  var p = React.DOM.p(null, 'Hello React!');
```





We can select a DOM node using regular DOM scripting, like so:

```js
  var el =document.getElementById('example');
```





We can then append it to the DOM like so:

```js
  React.render(p, el);
```




