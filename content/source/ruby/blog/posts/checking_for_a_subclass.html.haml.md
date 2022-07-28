%article
    :markdown
      # Checking if an object is a subclass
  
      Short tip today, checking if a class is a subclass of another object.
  
    :ruby
      code = <<-CODE
      class Emotion; end
      class Lassitude < Emotion; end
      CODE
    =code(code)
  
    :markdown
  
      We can use is_a? to test if an instance is an instance of a class or
  
    :ruby
      code = <<-CODE
      feeling_this_morning = Lassitude.new
      feeling_this_morning.is_a? Lassitude
      # => true
      feeling_this_morning.is_a? Emotion
      # => true
      feeling_this_morning.is_a? Object
      # => true
      CODE
    =code(code, :ruby)
  
    :markdown
  
      If we want to test if the class itself is a subclass though, we can't use is_a? because:
  
    :ruby
      code = <<-CODE
      Lassitude.is_a? Class
      # => true
      CODE
    =code(code, :ruby)
  
    :markdown
  
      Instead we use the less than < operator
  
    :ruby
      code = <<-CODE
      Lassitude < Emotion
      # => true
      CODE
    =code(code, :ruby)
  
    :markdown
  
      If we want to include the class itself we can use the <= operator
  
    :ruby
      code = <<-CODE
      Lassitude <= Lassitude
      # => true
  
      Lassitude <= Emotion
      # => true
      CODE
    =code(code, :ruby)
  
  