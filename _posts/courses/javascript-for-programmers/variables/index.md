%article


# Variables

Variables in JavaScript are global by default. This is because JavaScript is designed to be easy for non-programmers to use, and non-programmers might not understand about variable scope.

As a real programmer though you should always initialize your variables correctly using the var keyword:

```js
  var a; // creates the variable in the current scope
  a = 12; // stores a value in the variable
```





You can create and assign a variable in the same line:

```js
  var a = 12;
```





## Single Global Scope

JavaScript has a single global scope which any script can write to. You should avoid creating global variables wherever possible, or sooner or later you will get a conflict.

You may have multiple scripts on the page. Some of these might be advertiser scripts which you don't control. Avoid putting variables in this messy space wherever possible.

The var keyword creates a local variable, local to the current function. **Always remember your var keyword.** We will look later at additional ways to keep variables private with functions, closure and objects.

## Variables a fully Polymorphic

Variables are fully polymorphic, you can store anything you like in any variable, there is no type checking. JavaScript is weekly typed.

```js
  var a;

  a = 12;
  a = "Hello JavaScript!";
```





This is different to a language like Java where variables can only store one type of thing.

Having weekly typed variables is appropriate for JavaScript. It allows our scripts to be much shorter as we don't have to write any code to get around the type system. Shorter scripts means faster downloads.

However weak typing makes it harder for large teams to work together, and it makes it hard for an IDE to do code completion. It's a trade off.
