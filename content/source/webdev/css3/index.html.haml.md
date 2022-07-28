---
  title: "CSS3 Courses close to London UK"
  description: "Learn CSS3 and modern styling techniques."
  section_slug: "webdev"
  layout: "section_index"
  ---
  
  -section = data.send(current_page.data.section_slug)
  
  %article
    %section
      %h1 The CSS3 Course
  
      %p.subtitle
        CSS3 lets you create beauty in your editor.
  
      %img.sectionLogo{ src: '/images/sections/html5.svg' }
  
    %section
  
      -course = section.courses.send("css3")
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
  
      .action_button_row
        %a.button.action{ href: '/contact' } Get in touch
  