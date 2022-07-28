---
title: "Intro"
section: "angular"
exercise: "templates"
layout: "exercise"
---




# Welcome Exercises

The goal of this exercise is just to get some Angular running in a browser.


## Getting Angular

We download Angular from [angularjs.org](http://angularjs.org) Alternately we can use a CDN such as the [Google Angular CDN](https://developers.google.com/speed/libraries/devguide#angularjs).

## Activating the compiler

Angular is driven by the template. This is different from other MVC frameworks where the template is driven by the app.

In Angular we modify our app by modifying our template. The JavaScript we write simply supports this process.

We use the ng-app attribute (directive) to tell Angular to begin compiling our DOM. We can attach this attribute to any DOM node, typically the html or body tags:

```html
<body ng-app>
  Hello!
</body>
```





All the HTML5 within this directive is an Angular template and will be compiled as such.


%aside.box


## Linking from a CDN

Delivering common libraries from a shared CDN can be a good idea. It may help our initial pageload as Angular may already be cached in the user's browser. This may also help our SEO as Google cared about initial download times.

However, our project is now tied to Google's uptime, and we can't easily develop on the train.




## Exercise 1 - Hello Universe

Let's start with the simplest thing possible. Hello World.

1. Download Angular latest uncompressed from here: <https://angularjs.org/>
2. Concatenate the strings "Hello" and "World" to make a hello world app.
3. Create an Angular template which tells you how many seconds there are in a day, a year, a century.
4. Find out how many weeks there are in a human lifetime.




## Exercise 2 - Visual Studio Setup (if you are using VS)

If you need to develop in Visual Studio, you may have a bit of a culture shock when you start using Angular. We use static HTML templates and compile in the browser using JavaScript. The role of the server is dramatically reduced.

Visual Studio 2015 has excellent support for Angular. MS TypeScript is the language of Angular 2, and VS 2015 has Gulp and Node built right into it.

You may however have to adjust your thinking just a little bit, and you will have rather more hoops to jump through.

### Creating the Project

1. First create a new project.
2. From Templates, create an ASP.Net Web Application.
3. Choose Empty to create a completely empty application. We won't be using any of the features of .Net in our front end application.

### Create the HTML file

1. Right click your new application, add new item, and create an html file. Call it index.html. This is our template.
2. Insert a little bit of text inside it.
3. Now right click the file and open in browser. See the text?
4. Alt tab back to Visual Studio and make a change to the text.
5. Now alt tab back to your web browser. Press refresh. See the change you made?

### Getting Angular

We can use NuGet to install Angular.

1. Right click the project in the solution explorer and choose manage NuGet packages.
2. Choose Angular Core from the list. It will be installed into your Scripts folder. Have a look there now.

### Linking Angular

Now we need to link Angular. Because this is the front end we do this with a script tag right in the html.

```js
<script src="/Scripts/angular.js"></script>
```





Now Attempt the Hello Universe exercise.





## Optional Extension - if you are first to finish

You've downloaded Angular. Open it in your editor and have a quick browse through the Angular codebase. You'll find it clean, and well commented and easy to scan.
