%article




# Much Harder Exercise - a Calculator

Traversal allows us to access a part of a page relative to another part of the page. This is particularly useful if you have say a form, which can appear several times on a single page.

We are going to create a calculator form. As you type, it will fill in the result for us in an output div. The HTML will look like this:

```html
  <form action="#" class="calculator">
    <input name="first", class="first" />
    +
    <input name="second", class="second" />
    <div class="output"></div>
  </form>
```





We are going to bring this to life with a plugin, which we will call like this:

```js
  $(function() {
    $('.calculator').calc()
  });
```





the plugin will assign keyup events to the inputs which generate the output and put it in the output div.

## Traversal

We will find the output div using traversal, pick the method that suits you. It should be possible to have 2 or more calculator divs on the page, and have them work independently.

## Optional Really Hard Extension

If you'd like to take this further, add a dropdown which lets you swap between addition and subtraction.
