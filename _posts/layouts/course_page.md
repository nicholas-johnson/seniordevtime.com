-section_slug = current_page.data.section
-section = data.send(section_slug)
-course_slug = current_page.data.course || "course"
-course = section.courses.send(course_slug)

=wrap_layout :layout do
= yield


%h1
%a{ href: "/#{section_slug}/#{course_slug}/" }
=course.title
-if course.img
%img.sectionLogo{ :src => course.img }
-elsif section.img
%img.sectionLogo{ :src => section.img }

=partial("/#{section_slug}/#{course_slug}/partials/intro")
=partial "/#{section_slug}/#{course_slug}/partials/outline"
=partial "/#{section_slug}/#{course_slug}/partials/duration"
=partial "/#{section_slug}/#{course_slug}/partials/prices"