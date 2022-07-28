%article
    %section
      :markdown
        # SASS
  
        SASS is Syntactically Awesome StyleSheets.  It's similar to LESS, and most of what we learn here will also apply to LESS.
  
        Refer to the documentation here: <http://sass-lang.com/documentation/file.SASS_REFERENCE.html>
  
        ## Downloads
  
        [Example - Dropbox](https://www.dropbox.com/sh/ocanl6b1x20u7iy/AAAqouBsGIZ5xUbeM_5WCAFta?dl=1)
  
  
  
  
    %section.exercise
      :markdown
  
        ## Exercise - Nested Sass
  
        Write nested queries to style the header with a horizontal nav bar, nicely positioned h1, and pretty background colour.
  
  
    %section.exercise
      :markdown
  
        ## Exercise - Variables
  
        1. Create a $header_colour variable. Use it to set the background-color of your header.
        2. Create a $font_size variable (12px) and a $font_scale variable (1.5).
        3. Set the font-size to be the $font_size variable.
        4. Set the h2 font-size to be $font_size * $font_scale
        5. Set the h1 font-size to be $font_size * $font_scale ** 2
        6. Adjust the $font_size. See how everything updates. Woot!
  
  
    %section.exercise
      :markdown
  
        ## Exercise - Mixins
  
        1. Create a transition mixin which applies a css-transition with vendor prefixes.
        2. Create a button mixin which sets a width, a height, a background-color, a padding and display:inline-block. Apply it to input type="submit", button, and a class="button"
  