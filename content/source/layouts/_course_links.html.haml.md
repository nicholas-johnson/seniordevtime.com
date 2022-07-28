-if current_page.data[:course_sidebar]
    %nav.course_links
      %ul
        -sidebar = current_page.data[:course_sidebar]
        -unless sidebar.is_a?(Array)
          -sidebar = [sidebar]
        -if sidebar.include?(:angular)
          -#%li
          -#  %a{href: ""}
          -#    Take an Angular video course online
          %li
            %a{href: "http://forwardadvance.com/course-builder/#ng1,ng2,js2,ng3,ng4"}
              Find out about in-house Angular training for your business
          -#%li
          -#  %a{href: ""}
          -#    Attend a public Angular course in a city near you
  
        -if sidebar.include?(:mongo)
          -#%li
          -#  %a{href: ""}
          -#    Take an Angular video course online
          %li
            %a{href: "http://forwardadvance.com/course-builder/#mongo"}
              Book an in house MongoDB course for your business
          %li
            %a{href: "http://forwardadvance.com/course-builder/#ng1,mongo,nodejs,ng2,ng3"}
              Book an in house MEAN stack (Mongo, Express, Angular, Node) course for your business
          -#%li
          -#  %a{href: ""}
          -#    Attend a public Angular course in a city near you
  
        -if sidebar.include?(:js2)
          -#%li
          -#  %a{href: ""}
          -#    Take an Angular video course online
          %li
            %a{href: "http://forwardadvance.com/course-builder/#js2"}
              Book an in house Advanced JavaScript course for your business
  
        -if sidebar.include?(:angular2)
          -#%li
          -#  %a{href: ""}
          -#    Take an Angular video course online
          %li
            %a{href: "http://forwardadvance.com/course-builder/#ng2-1,tsc-1,js2"}
              Book an in house Angular 2 course for your business
  