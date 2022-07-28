---
  title: "Ruby Define Method"
  description: ""
  section: "ruby"
  course: "ruby-course"
  exercise: "define-method"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
        # Define Method
  
        We use define method to create a method on the fly given a string as a name.
  
  
      :ruby
        code = <<-CODE
        class A
          define_method :c do
            puts "Hey!"
          end
        end
  
        A.new.b
  
        A.new.c(1,2)
        CODE
      =code(code)
  
      :markdown
  
  
    %section.exercise
      :markdown
        ## Exercise - Green Hamsters
  
        Hamsters come in red, green, blue and orange.
  
        A hamster class looks like this:
  
      :ruby
        code = <<-CODE
        class Hamster
          attr_accessor :colour
        end
        CODE
      =code(code)
  
      :markdown
  
        for now we'll just assume that only these colours are allowed.
  
        Given an instance of hamster, I would like to be able to call something like:
  
      :ruby
        code = <<-CODE
        hammy = Hamster.new
        hammy.colour = :red
        hammy.is_red?
        CODE
      =code(code)
  
      :markdown
  
        and have it return true or false
  
  
  
        ## Bonus marks
  
        Rather than defining a limited set of methods in advance, use method_missing to catch when a method is not defined, then define it on the fly. If I call is_taupe? method_missing should catch that, define a Hanster#is_taupe? method, then call it.
  
  
    %section.exercise
      :markdown
        ## Exercise - drying up code
  
        The following real code is full of duplication. How might you use define_method to dry it up?
  
      :ruby
        code = <<-CODE
        class Widget
          def product
            product = Product.find_by_slug(object_slug)
            if !product
              product = Product.first
            end
            product
          end
  
          def poem
            poem = Poem.find_by_slug(object_slug)
            if !poem
              poem = Poem.first
            end
            poem
          end
        end
        CODE
      =code(code)
  
      :markdown
  
        If you don't want to create a whole Rails instance, you can use a simple scaffold like this:
  
      :ruby
        code = <<-CODE
        class Product
          class << self
            def find_by_slug
              return "success"
            end
          end
        end
        class Poem < Product; end
        CODE
      =code(code)
  
      :markdown
  
  
  