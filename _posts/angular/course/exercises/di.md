---
title: "Dependency Injection - AngularJS Exercise"
section: "angular"
exercise: "di"
layout: "exercise"
---



# Dependency Injection

We can inject a dependency into a controller by simply receiving it.

```js
angular.module('demoModule', [])
  .controller('demoController', function($log) {
    $log.log('Hi!');
  }
```





## Modules

We can include a module into another module by placing it's name between the square braces:

```js
angular.module('app', ['demoModule']);
```






## Exercise - NgDialog

We are going to inject the ngDialog service into a controller. This will allow our controller to create popup dialog boxes.

First go here and grab the ng-dialog.js. Link it in the header of your document in the usual way with a script tag.

Now download the CSS files: ng-dialog.css and ng-dialog-theme-plain.css. Link them using link tags.

<http://ngmodules.org/modules/ngDialog>

## Include it in your app.

We need to include ngDialog as a dependency of the app, like this:

```js
angular.module('app', ['ngDialog'])
```





## Inject into your controller.

Create a little controller and use the ng-controller directive to hook it to the DOM.

```js
<div ng-controller="myController">
```





Inject the ngDialog service into your controller.

```js
.controller('myController', function($scope, ngDialog) {

})
```





You now have access to ngDialog.open. Call this according to the documentation to create a dialog box when the page loads: <https://github.com/likeastore/ngDialog#api>

e.g.

```js
ngDialog.open({
  template: '<p>my template</p>',
  className: 'ngdialog-theme-plain',
  plain: true
});
```






## Exercise - Extension

Create a form. Create a method on scope that opens the dialog. Call the method when the button is pressed.

Have a go at the minification safe DI syntax.

## Further extension

If you finish first, have a read through the DI documentation here:

<https://docs.angularjs.org/guide/di>
