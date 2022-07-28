%article




# A Better Sandwich Calculator

Mrs Potts is tired of all the global sandwich variables getting under her feet and tripping her up all the time. She need help cleaning her kitchen. Will you help her?

She would like it very much if you would build a sandwich machine for her, but wrap it in a closure so as to keep everything neat.

## 1. Create a self executing function

like this:

```js
  (function() {

  })();
```





This will be our closure and will hold the sandwich machine, keeping all it's parts nicely together.

## 2. Create methods

Within the closure, create three little functions to add the bread, spread the soya margarine and add the jam. These little methods should use jQuery to write a string representing their action to the DOM, e.g. "Now spreading the jam!"

Assign these functions to private variables, we don't want any of the children breaking in to the closure and spreading jam all over the place.

Now, also within the closure create a makeSandwich function which calls the three other methods in sequence, writing the sandwich instructions to the DOM.

## 3. Smuggle makeSandwich out of the closure

We want Mrs Potts to be able to call makeSandwich, so we need to make a global variable which she can access from the kitchen, the news agent, a flight to Barbados, anywhere.

Assign makeSandwich to the global window object, thus smuggling it out of the closure. Refer back to the example if you need to remember how to do this.

## 4. Call makeSandwich from outside the closure

You can now call makeSandwich from outside the closure. Because you've used onDomReady, you'll need to call it onDomReady.

If you've succeeded well done! This is super close to #{Time.now.year} best practice JavaScript!

## Exercise Extension

If you'd like to take this a little further, you could make it receive an array of fillings, then output them in the sandwich.
