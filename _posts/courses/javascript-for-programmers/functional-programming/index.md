%article


# Closure

Closure can be a tricky concept to get one's head around. It works like this:

1. Functions are objects and can be declared anywhere.
2. If I declare a function within another function, the inner function has access to the local variables of the outer function.
3. Normally when a function exits, all it's local variables are destroyed, but...
4. If I hang on to the inner function in some way, the local variables of the outer function are still needed by the inner function.
5. They are still in scope, so they are not garbage collected.

This is closure in a nutshell. Here's an example:

```js
  var outer = function() {
    var a = "A Local variable"
    var inner = function() {
      alert(a)
    }
    window.fnc = inner
  }
  outer();
  fnc();
```





When we call outer, we define inner and assign it as an attribute of window (in other words, a global variable) inner persists after outer has excited, so the local variable a is still in scope, and still accessible to inner.

__Questions__

1. Enter the above code and verify it works.

## Self Executing Functions ##

It seems a bit superfluous to have to call outer to create inner. Outer only exists here to define inner, there's no need for it once inner has been made.

If only there was a way to avoid referencing outer. Thankfully there is.

Here we have a self executing function. The function is in braces,  and there are braces at the end. We are declaring an unnamed function, then running it straight away, dispensing with the need for outer.

```js
  (function() {
    var a = "A Local variable"
    var inner = function() {
      alert(a)
    }
    window.fnc = inner
  })()

  fnc();
```


