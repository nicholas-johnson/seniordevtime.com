---
  title: "JavaScript for Programmers"
  description: "Learn real JavaScript from an someone who actually uses it. Live coding, Q&A, practical workshops, deep theory and lots of real world exercises."
  section_slug: "javascript"
  layout: "section_index"
  course_slug: "javascript-for-programmers"
  ---
  
  -section = data.send(current_page.data.section_slug)
  
  %article
  
    %section
  
      %h1 JavaScript for Programmers Course
  
      %p.subtitle
        JavaScript for smart people.
  
      %img.sectionLogo{ src: '/images/sections/javascript.svg' }
  
      :markdown
  
        If you already know how to program, this two day conversion course is for you. Learn what makes JavaScript unique.
  
        Learn about closure, object orientation and, prototypical inheritance. Talk to the DOM. Talk to the server via AJAX.
  
        This course is JavaScript for smart people.
  
  
    %section
  
      -course = section.courses.send("javascript-for-programmers")
      %h1
        Course Content
  
      %ol
        - course.exercises.each do |exercise|
          - exercise_slug = exercise[0]
          - exercise = exercise[1]
          %li
            %h2
              %a{ href: "/#{current_page.data.section_slug}/#{current_page.data.course_slug}/exercises/#{exercise_slug}" }
                = exercise.title
            %p
              = exercise.description
  
  
      -# .action_button_row
      -#   %a.button.action{ href: '/contact' } Get in touch
  