%article
  
    %section
      :markdown
  
        # Plugins
  
        ## Exercise: Pulse
  
        Write a plugin called pulse which animates an element's opacity down to 0 and back to 1, making it flash. You should be able to call something like:
  
      :ruby
        code = <<-CODE
        $('a').pulse();
        CODE
      =code(code)
  
      :markdown
  
        Bonus points if you can make it receive a number of pulses, like so:
  
      :ruby
        code = <<-CODE
        $('a').pulse(5);
        CODE
      =code(code)
  
      :markdown
  
        Bonus bonus points if you can make it fit into the chain like so:
  
      :ruby
        code = <<-CODE
        $('a').pulse(5).css('color', 'red');
        CODE
      =code(code)
  
      :markdown
  
        ## Exercise Rollover
  
        Create a rollover plugin which will change an image's src attribute when you roll over it.
  
        You should be able to initialise it something like this:
  
      :ruby
        code = <<-CODE
        $('img.rollover').rollover();
        CODE
      =code(code)
  
      :markdown
  