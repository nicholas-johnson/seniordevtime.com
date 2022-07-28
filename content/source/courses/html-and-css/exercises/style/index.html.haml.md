%article
  
    %section
      :markdown
        # Style attributes
  
        Style attributes allow us to apply CSS style rules to any element on our page.
  
        Later we will see how we can extract common rules into a separate file called a stylesheet.
  
        ## Making it red
  
      :ruby
        code = <<-CODE
        <p style='color:red'>
          Some red text
        </p>
        CODE
      =code(code, :html)
  
  
      %p{ style: 'color:red'} Some red text
  
      :markdown
  
        ## Making it bold
  
      :ruby
        code = <<-CODE
        <p style='font-weight:bold'>
          Some bold text
        </p>
        CODE
      =code(code, :html)
  
      %p{ style: 'font-weight:bold'} Some bold text
  
      :markdown
  
        ## Making it bold and red
  
      :ruby
        code = <<-CODE
        <p style='font-weight:bold; color:red'>
          Some bold red text
        </p>
        CODE
      =code(code, :html)
  
      %p{ style: 'font-weight:bold; color:red'} Some bold red text
  
      :markdown
  
        ## Exercise
  
        Using your previous page.
  
        1. Put a border around the image.
        2. Put some margins around the table to space the page out a little.
        3. Align the th left.
        4. Make the h1 big and red.
        5. Make the h1 italic.
  
  
      %aside
        :markdown
          ## Downloads
  
          * [Code from the board](https://www.dropbox.com/sh/740jen0017i6w5u/AADX018nwwuVidskY1mqwDNBa?dl=1)
          * [CSS cheat sheet](/css-cheatsheet)
  