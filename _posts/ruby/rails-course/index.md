---
title: "Ruby and optional Rails"
description: "Learn Ruby, Ruby on Rails and associated frameworks like Sinatra and Middleman from an someone who actually uses them. Live coding, Q&A,practical workshops, deep theory and lots of real world exercises."
section_slug: "ruby"
layout: "section_index"
---

-section = data.send(current_page.data.section_slug)

%article

%h1 The Rails Course

%p.subtitle
Rails is the highly productive rapid prototyping framework used by startups the world over.

%img.sectionLogo{ src: '/images/sections/ruby.png' }



Get your work done in double quick time. Publish websites, APIs, web applications and mobile applications using an agile, friendly framework.

Involve yourself in one of the friendliest communities on the Internet. Use MVC to keep everything where it should be, a place for everything and everything in it's place.





# Course Notes

* [The Ruby Book - step by logical step](/ruby-book/)
* [The Rails Book - step by logical step](/rails-book/)



-course = section.courses.send("rails-course")
%h1 Course Content

%ol
- course.exercises.each do |exercise|
- exercise = exercise[1]
%li
%h2
%a{ href: "/#{section.slug}/#{course.slug}/exercises/#{exercise.slug}" }
= exercise.title
%p
= exercise.description


.action_button_row
%a.button.action{ href: '/contact' } Get in touch
