-section_slug = current_page.data.section
  -section = data.send(section_slug)
  -course_slug = current_page.data.course || "course"
  -course = section.courses.send(course_slug)
  -exercise_slug = current_page.data.exercise
  -exercise_slugs = course.exercises.keys
  -exercise_index = exercise_slugs.index(exercise_slug)
  -next_exercise_slug = exercise_index ? exercise_slugs[exercise_index + 1] : exercise_slugs[0]
  
  -exercise = course.exercises.send(exercise_slug)
  -next_exercise = next_exercise_slug ? course.exercises.send(next_exercise_slug) : nil
  -next_exercise_path = exercise_index && next_exercise_slug ? current_page.url.reverse.sub(exercise_slug.reverse, next_exercise_slug.reverse).reverse : nil
  -source = current_page.data.source
  
  =wrap_layout :layout do
    = partial :"/layouts/course_sidebar", locals: { section: section, course: course, exercise: exercise, section_slug: section_slug, course_slug: course_slug }
  
    - if source
      =partial source
    = yield
  
    -if next_exercise_slug
      %article
        %a{class: "next_exercise", href:next_exercise_path} 
          Next Exercise: 
          = next_exercise.title
          >>>