---
  title: "MongoDB"
  description: "Learn Mongo from an someone who actually uses it. Live coding, Q&A, practical workshops, deep theory and lots of real world exercises."
  section_slug: "mongo"
  layout: "section_index"
  ---
  
  %article
    %section
  
      %h1 MongoDB
  
      %p.subtitle
        The scalable JSON based document storage engine.
  
      %img.sectionLogo{ src: '/images/sections/mongo.svg' }
  
      :markdown
        Mongo DB is a highly scalable, NoSQL, JSON based, schema free data store. It's designed to readily scale from small to medium, to very large. It's also jolly nice to work with.
  
        The aggregate pipeline allows you to compose complex queries which execute across large data sets surprisingly quickly, even without indexes. You can pull out portions of the data set, or you can manipulate the data set and represent it in any number of ways using expressions.
  
        Built in Map Reduce allows you to drop right into code should you come across a problem that the aggregate pipeline can't handle.
  
  
      %h1 Mongo Courses
  
      %nav.courses
        %ul
          %li
            %h2
              %a{ href: '/mongo/course' }
                The Mongo Couse
  
            %p
              The full Mongo course. Compose advanced queries using the aggregate pipeline, Drop into Map Reduce. Optionally build a RESTful CRUD API with Mongoose.
              %a{ href: '/mongo/course' }
                Read More
                %i.fa.fa-chevron-circle-right
  
  
          %li
            %h2
              %a{ href: '/mongo/intro-course' }
                Intro to Mongo Couse
            %p
              Learn how to query Mongo. Philosophy, find, the aggregate pipeline and Map Reduce.
              %a{ href: '/mongo/intro-course' }
                Read More
                %i.fa.fa-chevron-circle-right
  
  
  -# .blog_posts
  -#   %h1 Mongo Articles
  -#   - blog.tags.each do |tag, articles|
  -#     -if tag == 'mongo' 
  -#       -articles.sort_by(&:date).reverse.each do |article|
  -#         %article
  -#           %h2
  -#             = link_to article.title, article
  -#           %span.date
  -#             Posted
  -#             = article.date.strftime('%b %e %Y')
  -#           = article.summary(500)
  
  -#           %p.read_more= link_to "read more...", article
  
  