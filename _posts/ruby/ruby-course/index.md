---
title: "Ruby and optional Rails"
description: "Learn Ruby, Ruby on Rails and associated frameworks like Sinatra and Middleman from an someone who actually uses them. Live coding, Q&A, practical workshops, deep theory and lots of real world exercises."
section_slug: "ruby"
layout: "section_index"
---

-section = data.send(current_page.data.section_slug)

%article

%h1 The Ruby Course

%p.subtitle
Ruby is a scripting language designed to promote developer joy.

%img.sectionLogo{ src: '/images/sections/ruby.png' }



Ruby is a clean and tidy little scripting language with a sensible and elegant API that reads very like English. Complex programs become simple, legible little one liners.

Startups love Ruby because it allows them to construct minimum viable products in weeks rather than months. Enterprise consumers may prefer JRuby which compiles to Java Bytecode and runs on the JVM, allowing access to the full power of Java, plus the productivity and scripting joy of Ruby.





# Course Notes

* [The Ruby Book - step by logical step](/ruby-book/)



-course = section.courses.send("ruby-course")
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
