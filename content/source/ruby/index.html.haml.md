---
  title: "Ruby and optional Rails"
  description: "Learn Ruby, Ruby on Rails and associated frameworks like Sinatra and Middleman from an someone who actually uses them. Live coding, Q&A,practical workshops, deep theory and lots of real world exercises."
  section_slug: "ruby"
  layout: "section_index"
  ---
  
  -section = data.send(current_page.data.section_slug)
  
  %article
    %section
  
      %h1 Ruby
  
      %p.subtitle
        The elegant scripting language for high productivity and developer joy. Plus optional Rails or other gems of your choosing.
  
      %img.sectionLogo{ src: '/images/sections/ruby.png' }
  
      :markdown
  
        Ruby is a clean and tidy little scripting language with a sensible and elegant API that reads very like English. Complex programs become simple, legible little one liners.
  
        Startups love Ruby because it allows them to construct minimum viable products in weeks rather than months. Enterprise consumers may prefer JRuby which compiles to Java Bytecode and runs on the JVM, allowing access to the full power of Java, plus the productivity and scripting joy of Ruby.
  
  
  
  
      %h1 Ruby Courses
  
      %nav.courses
        %ul
          %li
            %h2
              %a{ href: '/ruby/ruby-course' }
                The Ruby Course
  
            %p
              Two days of hard core Ruby covering everything you need to know including Blocks, modules, gems and metaprogramming.
              %i duration - 2 days
              %a{ href: '/ruby/ruby-course' }
                Read More
                %i.fa.fa-chevron-circle-right
  
          %li
            %h2
              %a{ href: '/ruby/rails-course' }
                Ruby + Ruby on Rails
  
            %p
              JavaScript is an often misunderstood language. It looks superficially like Java, but is different enough to cause developer confusion and occasional outrage! The Angular course plus JavaScript: function scope, closure, object orientation (which is different in JavaScript), and functional concepts.
              %i duration - 5 days
              %a{ href: '/ruby/rails-course' }
                Read More
                %i.fa.fa-chevron-circle-right
  
  
          %li
            %h2
              %a{ href: '/ruby/ruby-course' }
                The Learn to Program with Ruby Course
  
            %p
              Two days learning how to code with this most excellent of languages. Learn all the fundamentals of programming including variables, strings, loops and object orientation.
              %i duration - 2 days
              %a{ href: '/ruby/ruby-course' }
                Read More
                %i.fa.fa-chevron-circle-right
  
        %h1 The Ruby Book
  
        :markdown
  
          Get a quick overview of what Ruby is and does with the Ruby book:
  
          [Ruby - Step by logical step. A friendly and logical introduction to Ruby](/ruby-book)
  
  
  
    %section
  
      -course = section.courses.send("ruby-course")
      %h1= course.title
  
      %ol
        - course.exercises.each do |exercise|
          - exercise = exercise[1]
          %li
            %h2
              %a{ href: "/#{section.slug}/#{course.slug}/exercises/#{exercise.slug}" }
                = exercise.title
            %p
              = exercise.description
  
  
    %section
  
      -course = section.courses.send("rails-course")
      %h1= course.title
  
      %ol
        - course.exercises.each do |exercise|
          - exercise = exercise[1]
          %li
            %h2
              %a{ href: "/#{section.slug}/#{course.slug}/exercises/#{exercise.slug}" }
                = exercise.title
            %p
              = exercise.description
  