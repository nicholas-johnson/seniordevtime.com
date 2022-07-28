%article




# Easy In AJAX Exercise

This exercise is in four parts. See if you can follow along.

## Make the HTML

First create a little html file containing a little bit of text and upload it to the server. Verify that you can indeed see the file by viewing it in a web browser.

## Do the AJAX

Now write a Javascript file that hits that URL (note, the url will need to be local to the file, so no http:// at the start):

```js
  var url = "myfile.html"
  $.ajax(url);
```





Use the Firebug console to verify that the file is being downloaded. Brilliant, you’re doing AJAX!

## Listen for the result

Next add a lister. We’re going to listen for ‘done’, so…

```js
  $.ajax(url).done(function(data) {
    alert(data);
  });
```





This function is called when the ajax request completes successfully. Wow, you have AJAX.

## Do something with the result

Finally we want to do something with the result. Lets just append it to the body.

```js
  $.ajax(url).done(function(data) {
    $('body').append(data);
  });
```





Et voila. We have called the ajax, listened for the result, and finally added the result to our page. Note that we don’t need to just add the result to the page, we could do something else with it instead. For example we could put it into a particular div, make it pop up, or just use it for something else.

Jolly well done.
