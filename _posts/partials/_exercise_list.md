-section = data.send(section_slug)
-course_slug = course_slug || "course"
-course = section.courses.send(course_slug)

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

