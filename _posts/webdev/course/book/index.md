%article.book_cover


# HTML/CSS for Gigapower Tetrablast!

## Complete your awesomeness upgrade. Read this book now!

**By Nicholas Johnson**

*version 0.1.3*

%img{src: '/images/station.jpeg'}


*Image credit: [NASA Ames Research Center](http://settlement.arc.nasa.gov/70sArt/art.html)*

%article



# Welcome to Web Development

Hi there! Welcome! This document that you have in your hand is your key to becoming a new web developer. It’ll be tough, but you’ll pick it up no problem if you keep at it. This course is practical, we will learn by doing, so there are a lot of exercises for you to work through. I’ll be around helping out. Sometimes we’ll work together on the projector, sometimes you’ll walk alone. Welcome to the secret ways of the Internet!

As a very wise old web developer once said,

"How awesome is working on the web? This Awesome!"

%img{ src: "/images/webdev/this_awesome.jpg", alt: "This Awesome!" }


## Types of HTML

HTML has had many incarnations over the years. All of these are similar, but successive refinements have been added over time to cope with our evolving understanding of the best way to make a website. Three types of HTML are in use today.

## HTML4

HTML4 is the oldest type of HTML in use today. Its very popular and still a good choice. HTML4 has a fairly loose syntax. Closing tags are often optional, so paragraphs for instance are automatically ended when a new paragraph is started.

A loose syntax is good for amateur developers but not so great if you want to achieve a specific result across browsers since it makes it harder for browsers to accurately guess at what you mean. To counter this problem, XHTML was introduced

<www.wikipedia.org/wiki/HTML4>

## XHTML

XHTML stands for eXtensible Hypertext Markup Language. It’s actually a specific dialect of XML which is a generalised markup language. The main difference between XHTML and HTML4 is that all tags, once opened, must be closed. There are also some restrictions about what tags can be nested inside each other. These restrictions are sensible and you probably won’t run up against them.

The browser will make no assumptions and will allow you your mistakes. Aside from this, all the tags are the same This is the language used by most professional web developers.

<www.wikipedia.org/wiki/Xhtml>

## HTML5

HTML5 is the current HTML specification. It is still a fairly loose term and refers to a number of related technologies. It takes the best features of HTML4 and adds a number of extra tags, such as the header tag, the section tag and the video tag. Many features of HTML5 can be used today.

<www.wikipedia.org/wiki/Html5>





- content = %w(tags more-tags attributes images lists style-attributes divs-and-spans hex entity-references selectors stylesheets css-classes  nested-selectors  full-width abs-layout float-layout positioning-with-margins)

- content.each do |c|
= partial :"/webdev/course/exercises/#{c}"

