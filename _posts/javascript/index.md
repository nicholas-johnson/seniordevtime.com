---
title: "JavaScript"
description: "Learn JavaScript from an someone who actually uses it. Live coding, Q&A,practical workshops, deep theory and lots of real world exercises."
section_slug: "javascript"
layout: "section_index"
---

%article




%h1 JavaScript

%p.subtitle
The most widely deployed programming language on the planet, by an order of magnitude.

%img.sectionLogo{ src: '/images/sections/javascript.svg' }



JavaScript is everywhere, on your phone, in your browser, on your server, in your datastore. It drives mobile apps and desktop apps. It's the force behind front end tools like Grunt, Gulp, and Yeoman. It powers NodeJS, and MongoDB.

If you're a front end developer you need to know JavaScript.

%h1 JavaScript Courses

%nav.courses
%ul

%li
%h2
%a{ href: '/javascript/javascript-for-programmers' }

JavaScript for Programmers course

%p
If you already know how to program, this one day conversion course is for you. Learn what makes JavaScript unique.
%a{ href: '/javascript/javascript-for-programmers' }
Read More
%i.fa.fa-chevron-circle-right

%li
%h2
%a{ href: '/javascript/intro-to-javascript/exercises/intro' }
Learn to Program with JavaScript and JQuery

%p

Aimed at non-coders and web designers who want to complete their skill set. You will learn the practice and principles of code, and you will pick up practical skills with JavaScript. You will understand JavaScript as a functional language. We will cover topics like closure, object orientation and inheritance, and see how they can help you.
%a{ href: '/javascript/intro-to-javascript/exercises/intro' }
Read More
%i.fa.fa-chevron-circle-right

%h2 The JavaScript Book



[JavaScript plus a dash of JQuery. A Sensible Introduction to Coding with JavaScript](/javascript-book)

= partial :"/courses/partials/javascript_pricing"

.blog_posts
%h1 JavaScript Articles
- blog.tags.each do |tag, articles|
-if tag == 'javascript'
-articles.sort_by(&:date).reverse.each do |article|
%article
%h2
= link_to article.title, article
%span.date
Posted
= article.date.strftime('%b %e %Y')
= article.summary(500)

%p.read_more= link_to "read more...", article

