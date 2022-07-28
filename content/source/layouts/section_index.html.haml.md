=wrap_layout :layout do
    = yield
  
    -if current_page.data.course
  
      -course_slug = current_page.data.course || "course"
      -course = section.courses.send(course_slug)
      %article
        %h1 Course Content
  
        %ol
          - course.exercises.each do |exercise|
            - exercise_slug = exercise[0]
            - exercise = exercise[1]
            %li
              %h2
                %a{ href: "/#{section_slug}/#{course_slug}/exercises/#{exercise_slug}" }
                  = exercise.title
              %p
                = exercise.description
  
  
    %article
      %section
        :markdown
          # Contact
  
          If you'd like to book a course, or just have a chat about modern webstack technology, please send an email to [hello@nicholasjohnson.com](mailto:hello@nicholasjohnson.com). We can set up a simple, no pressure Skype chat to discuss your requirements.
  