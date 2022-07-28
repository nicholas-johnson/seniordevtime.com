%nav.sidebar
%ul
%li.section
%a{ href: "/#{section_slug}/" }
=section.title
%li.course
%a{ href: "/#{section_slug}/#{course_slug}/" }
=course.title
-course.exercises.each do |mexercise|
- mexercise_slug = mexercise[0]
- mexercise = mexercise[1]
%li
-if mexercise == exercise
%span
=mexercise.title

-else mexercise == exercise
%a{ href: "/#{section_slug}/#{course_slug}/exercises/#{mexercise_slug}"}
=mexercise.title
