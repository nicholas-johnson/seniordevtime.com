---
  title: "Concerns"
  description: ""
  section: "ruby"
  course: "rails-course"
  exercise: "concerns"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        # Concerns
  
        Concerns are little modules that encapsulate reusable functionality. Rather than adding them to our models and controllers directly, we put them in a module and include them.
  
        An example of a concern might be "Taggable", or "Ratable" or "HasImage"
  
  
    %section.exercise
      :markdown
  
        ## Exercise - HasImage
  
        We are going to create a HasImage concern which will add standard paperclip functionality to our BlogPost. We will be able to use it like this:
  
      :ruby
        code = <<-CODE
        class BlogPost < ActiveRecord::Base
          include HasImage
        end
        CODE
      =code(code)
  
      :markdown
  
        Define your concern in a module in the app/models/concerns directory. To be automatically imported the file must be have the same name as the module, with underscores.
  
        Because Paperclip requires you to work with the class directly we are going to use the included callback to add class methods to our module, like so:
  
      :ruby
        code = <<-CODE
        module HasImage
          def self.included(klass)
            klass.extend ClassMethods
          end
  
          module ClassMethods
          end
        end
        CODE
      =code(code)
  
      :markdown
  
        The Paperclip documentation can be found here:
  
        <https://github.com/thoughtbot/paperclip>
  
        Remember to write specs for your concern.
  
    %section.exercise
      :markdown
        ## Further exercise
  
        Create a Rateable concern to allow users to rate content. The model should gain thumbs_up and thumbs_down methods, and a rating method. Store the data either in a field, or in a separate Rating model which belongs to the User model (if you have one)
  