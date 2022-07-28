---
  title: "JavaScript Intro"
  section: "javascript"
  course: "intro-to-javascript"
  exercise: "intro"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
        # Welcome to JavaScript
  
        JavaScript is the most widely deployed language in the world by an order of magnitude.
  
        ## JavaScript is everywhere
  
        You will find it:
  
        * In your web browser (in pretty much every laptop, desktop and smartphone in the world, perhaps more than once)
        * In a mobile webview powering the apps on your smartphone - many mobile apps are built using JavaScript
        * On your server - NodeJS provides a complete and powerful web server used by some of the biggest companies in the world, companies like Microsoft.
        * In your front end development environment - JavaScript powers Gulp, Grunt, Yeoman, Sass and many other tools front end developers rely on.
  
        ## JavaScript is rather good (which is lucky really)
  
        JavaScript is often misunderstood. It it different to most other languages out there. This is because JavaScript comes from a different evolutionary branch to most other languages.
  
        Most modern languages descend from C. They have  JavaScript is actually a dialect of LISP.
  
    %section.exercise
      :markdown
  
        ## Exercise: Saying Hello to JavaScript
  
        This is the first exercise. In this exercise, we'll be saying hello to JavaScript. Of course the JavaScript won't actually hear us saying hello, unless we shout really loud...
  
        ### Create some HTML
  
        The easiest way to run JavaScript is in a web browser. You just create a web page, then open it in a web browser. The JavaScript will run automatically.
  
        First of all we'll need to make a web page for our script to live in. Create the following ultra simple html document and save it in a folder. Call it hello.html.
  
  
      :ruby
        code = <<-CODE
        <!DOCTYPE html>
        <html>
          <head>
            <title>Hello JavaScript</title>
          </head>
          <body>
          </body>
        </html>
        CODE
      =code(code, :html)
  
      :markdown
  
        ### Write some Script
  
        Next create a document to contain your javascript. Save it in the same folder as your html and call it hello.js.
  
      :ruby
        code = <<-CODE
        alert("Hello JavaScript, your new best friend!");
        CODE
      =code(code)
  
      :markdown
  
  
        ### Hook them up
  
        Now we need to link the two together. In the head of your html document add a script tag like so:
  
  
      :ruby
        code = <<-CODE
        <script src="hello.js"></script>
        CODE
      =code(code, :html)
  
      :markdown
  
        _(Note that if you're an xhtml type of person, you should note that the script tag cannot be self closing. It will break in IE.)_
  
        ### What do you get?
  
        Now open the page you just created in your web browser of choice. You should see a handy little box pop up welcoming you to JavaScript.
  
        **Tip. To open the file in a web browser, you can double click it in your Explorer or finder window, or you can open Firefox and choose File -> open from the menu**
  
        ## Exercise - more alerts
  
        Extend the code so it pops up two alerts.
  
    %section
      :markdown
  
        ## So what did we do here?
  
        1. We created an HTML and a JavaScript file, and linked them together.
        2. We used the built in alert function to pop up little box containing the text "Hello JavaScript, your new best friend!".
  
        Well done! You just created your first JavaScript program!
  