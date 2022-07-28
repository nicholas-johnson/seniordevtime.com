%article.book_cover


# NodeJS for Righteous Universal Domination!

## Complete your awesomeness upgrade. Read this book now!

**By Nicholas Johnson**

*version 0.1.3*

%img{src: '/images/station.jpeg'}


*Image credit: [NASA Ames Research Center](http://settlement.arc.nasa.gov/70sArt/art.html)*

%article



# Why Node Rocks

Node is a clean, logical, unmagical platform for executing JavaScript outside of a web browser.

You can use it to create a website, to automate a build process, to control a quadcopter, pretty much anything you like.

Node makes you fiercely productive. It trusts you. You can wire it together as you see fit and build anything you like. The only limit is your skill and imagination.

Add in Mongo and you can compose a complete web application in end to end JavaScript. This means you will write almost no wiring code. All your data is JSON, all your code, front end and back end is JavaScript. Everything talks to everything else. I cannot overstate how pleasant this is.


## Node has philosophy

Node is all about bolting together smaller pieces of code to get a job done. We call them modules. These modules are typically fairly low level and do one or two things very well. You simply choose the modules you want to use, and then wire them together.

Rather than having a single unified way to do things, you are encouraged to wire your app together in the way that makes sense to you. This gives you as a developer great power for good or evil. You can compose a masterpiece or drown in a swamp, it's up to you.

## Node is brattish

The sort of people who like Node tend to like new and interesting technology. Want to control a drone, or a 3D printer, or a smart watch? You can be fairly sure there's a Node module for that.

## Node embraces automation

Code generation is everywhere in Node. We write code which writes code. We write code which writes code which writes code.

We use Yeoman to generate scaffold projects, or to help us build components more quickly.

We use Grunt or Gulp to transform our code as we type. Save a SASS file and it's automatically compiled into CSS, validated, prefixed, minified, and injected right into your running browser, usually in less than a second.

This enables some excellent productivity gains and ensures our code is always valid and our specs are always green.

## What can you do with Node?

With Node you can:

* Create a web server and serve a website (in about 8 lines of code)
* Automate large parts of your workflow, making you faster and more productive (with Grunt or Gulp)
* Create scripts (that you can run from your console to do things like organise your photo library or clean up your desktop)
* Write code to integrate with hardware, external APIs or robotics using Node's callback architecture.

And a whole lot more.




## Why you might be interested

See that blue line zipping up and getting ready to eat your lunch? That's Node. It's time to get on board now.

%script{ type: "text/javascript", src: "//www.google.co.uk/trends/embed.js?hl=en-US&tz&q=/m/0bbxf89,+/m/026mhl,+/m/02bcj2,+/m/0505cl&cmpt=q&content=1&cid=TIMESERIES_GRAPH_0&export=5&w=500&h=330" }


- content = %w(node-console node-server file-system modules npm jade gulp sass process express yeoman  socket-io)

- content.each do |c|
= partial :"/node/course/exercises/#{c}"

