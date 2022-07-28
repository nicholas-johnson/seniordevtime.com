---
  title: "Ruby Method Missing"
  description: ""
  section: "ruby"
  course: "ruby-course"
  exercise: "method-missing"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
  
        # Method Missing
  
        Trying to call a method that doesn't exist in Ruby is an exception rather than a language error. We can catch it, or we can simply implement a method_missing function which will be called when no matching method is found.
  
      :ruby
        code = <<-CODE
        class A
  
          def ary
            [:a,:b,:c]
          end
  
          def method_missing(method, *args)
            puts ary.include?(method)
          end
        end
  
        a = A.new
  
        a.b
        a.d
        CODE
      =code(code)
  
      :markdown
  
    %section.exercise
      :markdown
  
        ## Exercise - Create a Spaceship.
  
        Assuming you have built a mighty warship, give your class an array of abilities like this: [:warp, :photon_torpedos, :holodeck] etc.
  
        Now we're going to use method_missing to allow us to query our space ship. We will be able to call methods like enterprise.has_holodeck?, and voyager.can_warp? and get back a true or a false value.
  
        Here's a regex that should help
  
      :ruby
        code = <<-CODE
        FEATURE_REGEX = /^(?:has|can)_(\w*)\?$/
        if find = method.to_s.match(FEATURE_REGEX)
          feature = find[1]
        end
        CODE
      =code(code)
  
      :markdown
  
  
        ## Real world example
  
        For a real world example, read and understand the string_enquirer codebase here:
  
        <https://github.com/rails/rails/blob/d71d5ba71fadf4219c466c0332f78f6e325bcc6c/activesupport/lib/active_support/string_inquirer.rb>
  