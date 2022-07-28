---
  title: "Adwords Intro"
  section: "javascript"
  course: "adwords-script-course"
  exercise: "intro"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
        # Google Adwords scripting for Tomorrow
  
        Adwords comes with a scripting language. You can use it to control your ads, to set bids, to respond to events and to generate reports.
  
  
        ## Hello World
  
        Your scripts all start with a main function. Google will run this function for you.
  
        We get access to a logger object from which we can output strings and objects.
  
      :ruby
        code = <<-CODE
        function main() {
          Logger.log('Hey there adwords!')
        }
        CODE
      =code(code)
  
      :markdown
  
    %section.exercise
      :markdown
        ## Exercise - Hello World
  
        Let's create the simples possible script now.
  
        1. Create a script that just outputs "Hello Adwords".
        2. Write a script that calculates the number of weeks in 80 years.
  
  
    %section
      :markdown
        ## Functions
  
        We can of course split out script out into functions and variables, just like regular JavaScript.
  
      :ruby
        code = <<-CODE
        function main() {
          sayHello()
        };
  
        function sayHello() {
          const greeting = 'Hey there adwords!';
          Logger.log(greeting);
        };
        CODE
      =code(code)
  
      :markdown
  
  
  