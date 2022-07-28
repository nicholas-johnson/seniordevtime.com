%article
  
    %section
      :markdown
        # Float layouts
  
        If the position of an element does need to affect the position of other elements on the page then you might want to consider a float layout. Let’s say for example, you have some text columns of uncertain height and you want to put a footer underneath them.
  
        ## Exercise
  
        We're going to create the simplest float layout imaginable, a two column layout.
  
  
      %svg{:version => "1.1", :viewbox => "0 0 230 100", :xmlns => "http://www.w3.org/2000/svg"}
        %rect{fill: "#888888", :height => "100", :width => "100", :x => "10", :y => "10"}
        %rect{fill: "#888888", :height => "100", :width => "100", :x => "120", :y => "10"}
  
      :markdown
  
        1. Create two divs (or an article and an aside).
        2. Give each a width and a border so you can see where they are.
        3. Give each some height, either by setting height, or by pasting in some lorem ipsum.
        4. Float them both left.
        5. If you want them centered, wrap them both in a containing element (or just the body), set a width on the container, and use margin:0 auto to center the container.
  
        ## Common Layout Exercise
  
        We're going to create the following simple layout with a header, footer article and aside. This is one of the most common layouts you will encounter.
  
      %svg{:version => "1.1", :viewbox => "0 0 200 180", :xmlns => "http://www.w3.org/2000/svg"}
        %rect{fill: "#888888", :height => "20", :width => "200", :x => "0", :y => "0"}
  
        %rect{fill: "#888888", :height => "100", :width => "120", :x => "0", :y => "30"}
        %rect{fill: "#888888", :height => "120", :width => "70", :x => "130", :y => "30"}
  
        %rect{fill: "#888888", :height => "20", :width => "200", :x => "0", :y => "160"}
  
      :markdown
  
        1. Create an html file and linked stylesheet.
        2. Add a div to the page. Give it a class of wrapper. Center it and give it a fixed width.
        3. Place a header, article, aside and footer on the page.
        4. The header is full width so needs no special styling. Give it a height and background colour.
        5. Float the aside right (float:right) give it a width, add some content to make it realistic. We have a sidebar.
        6. Float the article left (float:left) give it a width, add some content again to make it realistic.
        7. The footer needs to clear:both to make it drop down beneath the columns, no matter which one is tallest. Add some text to it if you like to make it realistic.
  
        ## Further Exercise
  
        Replace the header with the header you created earlier in the absolute positioning exercise. It's fine to mix and match layout strategies like this. Absolute positioning when you know the height, floats when you don't.
  
  
        ## Grid Layout
  
        We can also use floats to create some very nice grid layouts. If you have multiple divs which all have a fixed width and height, you can float them all left and they will stack up nicely.
  
        We're going to create a layout like this:
  
      %svg{:version => "1.1", :viewbox => "0 0 200 150", :xmlns => "http://www.w3.org/2000/svg"}
        %rect{fill: "#888888", :height => "40", :width => "40", :x => "0", :y => "0"}
        %rect{fill: "#888888", :height => "40", :width => "40", :x => "50", :y => "0"}
        %rect{fill: "#888888", :height => "40", :width => "40", :x => "100", :y => "0"}
        %rect{fill: "#888888", :height => "40", :width => "40", :x => "150", :y => "0"}
        %rect{fill: "#888888", :height => "40", :width => "40", :x => "0", :y => "50"}
        %rect{fill: "#888888", :height => "40", :width => "40", :x => "50", :y => "50"}
        %rect{fill: "#888888", :height => "40", :width => "40", :x => "100", :y => "50"}
        %rect{fill: "#888888", :height => "40", :width => "40", :x => "150", :y => "50"}
        %rect{fill: "#888888", :height => "40", :width => "40", :x => "0", :y => "100"}
        %rect{fill: "#888888", :height => "40", :width => "40", :x => "50", :y => "100"}
        %rect{fill: "#888888", :height => "40", :width => "40", :x => "100", :y => "100"}
        %rect{fill: "#888888", :height => "40", :width => "40", :x => "150", :y => "100"}
  
  
      :markdown
  
        1. Create an html file and linked stylesheet.
        2. Create a number of divs. You might like to use images instead.
        3. Constrain the widths and heights of each of the divs. Make little squares.
        4. Float each of the little square divs left.
        5. Play with the widths, heights and margins of each of the divs to make a nice clean grid.
  
        Resize the browser window. See how the grid reflows.
  
  
        This layout is tremendously useful. It can be an image gallery, a grid of links, a navigation page with links to sections, or numerous other things. Team it up with a big lifestyle image and you have a nice homepage.
  
        ## Horizontal Nav Exercise
  
        Inline block is not supported in IE7, so if we need to support older browsers we need to use a different trick. Floated block elements can give us the same effect.
  
        Reimplement the following without inline-block using a float layout. Each tab is just a list item floated left with an anchor in it.
  
      %img{ src: '/images/streetbank_nav.png', style: 'width:100%' }
  
  
      :markdown
  
  
  
        ## Hard Integration Exercise
  
        Use your HTML/CSS skills to create a layout something like the following:
  
      %figure
        %img{src: '/images/streetbank_splash.png' }
  
  
  
      %aside
        :markdown
          ## Downloads
  
          * [Code from the board](https://www.dropbox.com/sh/yy09voacdonqarf/AACa5eIewcLm8b4PNNU9Ff5Pa?dl=1)
  