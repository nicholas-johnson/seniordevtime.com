---
title: "Responsive Design Courses close to London UK"
description: "Learn how to make your page respond to different screen widths"
section_slug: "webdev"
layout: "section_index"
---

-section = data.send(current_page.data.section_slug)

%article

%h1 The Responsive Design Course

%p.subtitle
Building sites that work on all devices is easy.

%img.sectionLogo{ src: '/images/sections/html5.svg' }



-course = section.courses.send("responsive-design")

%ol
- course.exercises.each do |exercise|
- exercise_slug = exercise[0]
- exercise = exercise[1]
%li
%h2
%a{ href: "/#{section.slug}/#{course.slug}/exercises/#{exercise_slug}" }
= exercise.title
%p
= exercise.description


.action_button_row
%a.button.action{ href: '/contact' } Get in touch

