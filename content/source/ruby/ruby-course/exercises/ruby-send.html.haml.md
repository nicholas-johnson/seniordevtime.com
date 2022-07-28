---
  title: "Ruby Send"
  description: ""
  section: "ruby"
  course: "ruby-course"
  exercise: "ruby-send"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
  
        # Send
  
        Send allows you to call a method identified by a symbol.
  
        My app has classes for people and events. Each class has different attributes.
  
      :ruby
        code = <<-CODE
        class Person
          attr_accessor :name
        end
  
        class Event
          attr_accessor :title
        end
        CODE
      =code(code)
  
      :markdown
  
        I also have a module which sets up the objects.
  
      :ruby
        code = <<-CODE
        module Setup
          def init(name_or_title)
  
          end
        end
        CODE
      =code(code)
  
      :markdown
  
    %section.exercise
      :markdown
  
        ## Exercise - Send a little love
  
        Include the Setup module in the Person and Item classes. Now write the init method. use respond_to? and send to initialise either the name or title.
  
        Start with an array [:name, :title], then iterate over it, checking if the object responds to the methods, then call the method when you get a result.
  