%article
  
    %section
      :markdown
        # Centering and max width
  
        Often we don’t want out page to stretch and grow. In these cases the width of an element can be constrained using the width property. Elements nested inside this element will be constrained by the width of their container. This is tremendously useful as we can set the width of one wrapper element and let the elements inside find their own width.
  
        ## Exercise
  
        We're going to create the following useful layout. This might represent a header, article and footer, or perhaps a series of articles or sections stacked above each other.
  
  
      %svg{:version => "1.1", :viewbox => "0 0 200 110", :xmlns => "http://www.w3.org/2000/svg"}
        %rect{fill: "#888888", :height => "20", :width => "100", :x => "50", :y => "0"}
        %rect{fill: "#888888", :height => "50", :width => "100", :x => "50", :y => "30"}
        %rect{fill: "#888888", :height => "20", :width => "100", :x => "50", :y => "90"}
  
      :markdown
  
        1. Create an html file and linked stylesheet.
        2. Create a wrapper div, give it a class or wrapper and set it’s width to 800px in the stylesheet.
        3. Nest 3 divs inside the wrapper div, give each a class.
        4. Put text inside each of the three inner divs to make it more realistic. You can cut and paste this text from any source.
        5. Give the wrapper div and each of the three inner divs a border. Notice how the inner divs expand to fill the wrapper div.
  
        This is a useful simple layout. We sometimes see this with a dropshadow added to the wrapper div, and a background image on the body, making the content appear to float over a textured background, clean, and simple.
  
  
      %aside
        :markdown
          ## Downloads
  
          * [Code from the board](https://www.dropbox.com/sh/fc8o992iub6g1d1/AACzH5YaHb73fIBmGzjYtmH3a?dl=1)
  