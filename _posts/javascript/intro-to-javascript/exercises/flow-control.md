---
title: "Flow Control"
section: "javascript"
course: "intro-to-javascript"
exercise: "flow-control"
layout: "exercise"
---

%article


# Flow Control - Do this, or else... #

Our programs so far have been very nice, but quite linear. We can make sandwiches, but we can't decide whether or not we should be making sandwiches. Sometimes in our code we need to be able to be respond to things. We need to be able to say "what if?"

## Day into Night - Flow Control Exercise ##

We do this using the if statement:


```js
  var daytime = true;
  if (daytime) {
    alert("Nice day!");
  }
```





In this example, daytime is a variable that contains a special value. The value is true. True means yes, absolutely, do it. The opposite of true is false. False means no, never, don't do it. The code between the curly braces will only run if daytime is true. It will not run if daytime is false.




## Exercise - Night time

1. Create an HTML file and linked Javascript file.
2. Enter the code above and run it.
3. Set the daytime to false and see what happens. Is that what you expected?




## Do this, or else ##

Sometimes we want to do a different thing if we didn't do the first thing. We need an else statement. Thankfully, this is easy.


```js
  var daytime = false;
  if (daytime) {
    alert("Nice day!");
  } else {
    alert("Nice night!");
  }
```





Here the first block of code is run if daytime is true and the second block is run if daytime is false.




## Exercise - if else

1. Create an HTML file and linked JavaScript file.
2. Enter the code above and run it.
3. Set the daytime variable to true and see what happens. Is that what you expected?




## Do this, or else do this, or else do this or else ##

Sometimes we need more than 2 options. What if we wanted to say good evening and good morning too. We're going to need a little more information than just our true/false daytime variable. Let's create an hour variable to hold the hour of the day.


```js
  var morning = true;
  var daytime = false;
  var nightime = false;

  if (morning) {
    alert("Good Morning!");
  } else if (daytime) {
    alert("Nice day!");
  } else if (nighttime){
    alert("Nice night!");
  } else {
    alert("I just don't know what time it is!");
  }
```





Wow, that was a little longer, but it does seem to make sense. If morning is true it does the first bit of code, else if daytime is true it does the second bit of code, else if nighttime is true it does the third bit. If none of the above are true it does the last bit of code.




## Exercise - Free choice

1. Create an HTML file and linked Javascript file.
2. Enter the code above and run it.
3. Set the nighttime variable to true and the daytime variable to false. What happens?
4. Set all the variables to false, what happens?
5. Set all the variables to true. What happens? Why?
6. Add evening and midnight.
