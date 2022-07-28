%article




# Plugins

## Exercise: Pulse

Write a plugin called pulse which animates an element's opacity down to 0 and back to 1, making it flash. You should be able to call something like:

```js
  $('a').pulse();
```





Bonus points if you can make it receive a number of pulses, like so:

```js
  $('a').pulse(5);
```





Bonus bonus points if you can make it fit into the chain like so:

```js
  $('a').pulse(5).css('color', 'red');
```





## Exercise Rollover

Create a rollover plugin which will change an image's src attribute when you roll over it.

You should be able to initialise it something like this:

```js
  $('img.rollover').rollover();
```




