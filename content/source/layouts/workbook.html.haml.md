-section_slug = current_page.data.section
  -section = data.send(section_slug)
  -course_slug = current_page.data.course || "course"
  -course = section.courses.send(course_slug)
  
  =wrap_layout :layout do
  
    = yield
  
    %article
      - course.exercises.each do |exercise|
        - exercise_slug = exercise[0]
        - exercise = exercise[1]
        =partial "/#{section_slug}/#{course_slug}/exercises/#{exercise_slug}"
  