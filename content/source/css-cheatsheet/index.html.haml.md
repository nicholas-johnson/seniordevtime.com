%article
    %section
      :markdown
        # CSS Cheatsheet
  
        ## Setting Colours
  
      :ruby
        code = <<-CODE
        color: <colour name>        eg. color: red;
        color: <hex code>           eg. color: #ff0000;
        color: <short hex code>     eg. color: #f00;
        CODE
      =code(code, :css)
  
      :markdown
  
        ## Setting Background Colors
  
      :ruby
        code = <<-CODE
        background-color: <colour name>       eg. background-color: red;
        background-color: <hex code>          eg. background-color: #ff0000;
        background-color: <short hex code>    eg. background-color: #f00;
        transparency                          background: transparent;
        CODE
      =code(code, :css)
  
      :markdown
  
        ## Setting Background Images
  
      :ruby
        code = <<-CODE
        background: <color> url(<image url>) <horizontal> <vertical> <repeat>
            eg. background: red url(/image.png) top left no-repeat;
            eg. background: #f00 url(/image.png) bottom right repeat-x;
        CODE
      =code(code, :css)
  
      :markdown
  
        ## Adding Borders
  
      :ruby
        code = <<-CODE
        border: <width> <style> <colour>    eg. border:1px solid red;
                        eg. border:2px dotted #ff0000;
        CODE
      =code(code, :css)
  
      :markdown
  
        ## Choosing Fonts
  
      :ruby
        code = <<-CODE
        font-family:  <first choice>, <second choice>, <third choice>, <etc>
              eg. font-family: helvetica, verdana, sans-serif;
              eg. font-family: georgia, times, serif;
        CODE
      =code(code, :css)
  
      :markdown
  
        ## Font Styles and Sizes.
  
      :ruby
        code = <<-CODE
        font-weight: <weight>       eg. font-weight: bold;
                      eg. font-weight: normal;
                      eg. font-weight: light;
  
        font-style: <style>       eg. font-style:italic;
                      eg. font-style:normal;
  
        text-size: <size>       eg. font-size: 1em;
                      eg. font-size: 12px;
                      eg. font-size: 80%;
        CODE
      =code(code, :css)
  
      :markdown
  
        ## Margins and Padding
  
      :ruby
        code = <<-CODE
        margin-<side>: <width>    eg. margin-top:10px;
                                eg. margin-left:2em;
  
        margin: <top> <right> <bottom> <left>   eg. margin:10px 10px 12px 40px;
        margin <top & bottom> <left & right>  eg. margin:5px 10px;
  
        padding: <top> <right> <bottom> <left>  eg. padding:0 10px 10px 40px;
        CODE
      =code(code, :css)
  
      :markdown
  
        ## Alignment
  
      :ruby
        code = <<-CODE
        text-align: <value>  eg. text-align:right;
                             eg. text-align:justify;
                             eg. text-align:center;
        CODE
      =code(code, :css)
  
      :markdown
  
        ## Lists
  
      :ruby
        code = <<-CODE
        list-style: <style>  eg. list-style:none;
                             eg. list-style:disc;
        CODE
      =code(code, :css)
  
      :markdown
  
        ## Width and Height
  
      :ruby
        code = <<-CODE
        width: <width>            eg. width:100px;
        height: <height>          eg. height:10em;
        CODE
      =code(code, :css)
  
      :markdown
  
        ## Display modes
  
      :ruby
        code = <<-CODE
        display:block   Element is rectangular and has it’s own line, eg a header
        display:inline    Element sites inline with other text., eg. a <strong>
        display:none    Elements is hidden
        CODE
      =code(code, :css)
  
      :markdown
  
        ## Positioning
  
      :ruby
        code = <<-CODE
        position:relative;  Other items are relative to this
        position:absolute;  Item is positioned absolutely using the position of it’s nearest relative ancestor as it’s origin.
        float: left;      Item is floated to the left of the screen;
        float: right;   Item is floated to the right of the screen;
        clear: both;    Item clears all floated elements
        CODE
      =code(code, :css)
  
      :markdown
  