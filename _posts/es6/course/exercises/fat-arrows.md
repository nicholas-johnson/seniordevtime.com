%article


# All about ES6 fat arrows (=>)

ES6 contains many nice little features. Fat arrows are perhaps one of the most surprising, and once you understand them, one of the most enjoyable.

Fat arrows give us a new, shorthand syntax for defining functions, and also a new way to initialise the `this` variable that comes into existence whenever a function is called.

## Definition

We define a JavaScript function like this:

```js
  function() {}
```





An equivalent fat arrow function looks like this:

```js
  () => {}
```





A real example might look like this:

```js
  function (a,b) {
    console.log(a+b);
  };
```





which would become

```js
  (a,b) => {console.log(a+b)};
```







## Exercise - Fat Fingers

Have a play with the above example at the <a href='https://babeljs.io/repl/#?experimental=false&evaluate=true&loose=false&spec=false&code=var%20a%20%3D%20function()%20%7B%7D%3B%0A%0Avar%20b%20%3D%20()%20%3D%3E%20%7B%7D%3B%0A%0Avar%20c%20%3D%20function%20(a%2Cb)%20%7B%0A%20%20console.log(a%2Bb)%3B%0A%7D%3B%0A%0Avar%20d%20%3D%20(a%2Cb)%20%3D%3E%20%7Bconsole.log(a%2Bb)%7D%3B' target='_blank'>babel repl here.</a>

Convert the following into fat arrow format:

```js
    var sayHello = function() {
      console.log('hello')
    }
    sayHello();
```





Do the same with this self executing function:

```js
    (function() {
      var greeting = 'hello';
      console.log(greeting);
    })();
```







## Exactly one parameter

If our function has exactly one parameter, we can skip the braces on the left hand side. Our function then looks like this:

```js
  a => {return a + 1}
```





This is equivalent to:

```js
  function(a) {
    return a + 1;
  }
```








## Exercise - One Parameter

Have a play with the above example at the <a href='https://babeljs.io/repl/#?experimental=false&evaluate=true&loose=false&spec=false&code=a%20%3D%3E%20%7Breturn%20a%20%2B%201%7D' target='_blank'>babel repl here.</a>

Convert the following into fat arrow format:

```js
    var sayHello = function(name) {
      return "Hello " + name;
    }
```







## Concise syntax

As if this wasn't short enough, We have a concise syntax. If our fuction contains exactly one line, we can also omit the curly braces and return statement, like so:

```js
  a => a + 1
```





which again is equivalent to:

```js
  function(a) {
    return a + 1;
  }
```





The evaluated value of the function expression is returned automatically. we don't need the return statement.

These sorts of functions are perfect for passing around, and this makes functional programming incredibly easy.

```js
  var i = 0;
  setInterval( () => {i++}, 500 )
```








%a{ href: 'https://babeljs.io/repl/#?experimental=false&evaluate=true&loose=false&spec=false&code=a%20%3D%3E%20a%20%2B%201%0A%0Avar%20i%20%3D%200%3B%0AsetInterval(%20()%20%3D%3E%20%7Bconsole.log(i%2B%2B)%20%7D%2C%20500%20)', target: '_blank' } Try it here: babeljs.io



## Further Reading

<a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions' target='_blank'>MDN - Arrow functions</a>
