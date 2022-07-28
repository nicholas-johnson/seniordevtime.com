%article
    %section
      :markdown
        # Paths
  
        We can draw arbitrary paths using SVG. The syntax for this is a little obscure, but it merits some understanding.
  
        # Path
  
        We create a path using the <path> element. This has an attribute d which defines the path. D uses a series of letter codes to tell the cursor how to move around.
  
  
        ## Straight lines
  
        The following will draw a 50 px horizontal line.
  
      :ruby
        code = <<-CODE
        <svg width="300" height="300">
          <path d="M 10 10 h 50 " fill="transparent" stroke="black" />
        </svg>
        CODE
      =code(code, :html)
  
      :markdown
  
        * M x y - Move</li>
        * L x y - Line</li>
        * H x - Horizontal line</li>
        * V y - Vertical line</li>
        * Z - Close a path from wherever you are</li>
  
        Here's a square:
  
      :ruby
        code = <<-CODE
        <svg width="300" height="300">
          <path d="M 10 10 h 50 v 50 h-50 z" fill="transparent" stroke="black" />
        </svg>
        CODE
      =code(code, :html)
  
      :markdown
  
        ## Curves
  
        We can also draw bezier curves:
  
  
      :ruby
        code = <<-CODE
        <svg width="300" height="300">
          <path d="M10 10 C 20 20, 50 20, 200 10" stroke="black" fill="transparent"/>
        </svg>
        CODE
      =code(code, :html)
  
      :markdown
  
  
        We specify:
  
        1. Control point one
        2. Control point two
        3. Final point
  
        ## Arcs
  
        Finally we can draw arcs. The key thing to remember with arcs is they have a fixed start and end point. The radius will be adapted to conform to these points.
  
  
      :ruby
        code = <<-CODE
        <svg width="300" height="300">
          <path d="M 30 50 A 40 50 0 0 1 162.55 162.45" stroke="black" fill="transparent"/>
        </svg>
        CODE
      =code(code, :html)
  
      :markdown
  
  
  
    %section.exercise
      :markdown
        ## Exercise - Draw a little house
  
        Let's do something simple. Please draw a little picture of your house. Use lines and arcs as you see fit.
  
  