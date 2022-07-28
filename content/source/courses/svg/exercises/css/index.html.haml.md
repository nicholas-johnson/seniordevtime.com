%article
    %section
  
      :markdown
        # Styling SVG with CSS
  
        It's possible to style your SVG elements using plain CSS, like so:
  
  
      :ruby
        code = <<-CODE
        <!DOCTYPE html>
        <html>
          <head>
            <title></title>
            <link rel="stylesheet" type="text/css" href="style.css">
          </head>
          <body>
            <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" class="red" />
            </svg>
          </body>
        </html>
        CODE
      =code(code, :html)
  
      :ruby
        code = <<-CODE
        circle.red {
          stroke: #000;
          fill  : #f00;
        }
        CODE
      =code(code, :css)
  
      :markdown
  
        CSS in SVG is limited to setting colours and gradients. You can also set the size of the SVG image like any other image.
  
        You can't create new elements or manipulate the position of elements just using CSS.
  
        ## Exercise
  
        Use CSS to restyle your self portrait from the last exercise.
  
  