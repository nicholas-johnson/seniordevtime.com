%article
  
    %section
      :markdown
  
        # Styling Lists
  
        The elements in a list can all be changed an positioned using CSS. We have full control over how they display.
  
        One of the most common things you will want to do with a list is to remove the bullet points. We do this with CSS like so:
  
      :ruby
        code = <<-CODE
        ul {
          list-style:none;
        }
        CODE
      =code(code, :css)
  
      :markdown
  
  
        ## Horizontal Navigation
  
        When you think about it, a navigation is essentially a list of links. In this section we will create a horizontal navigation.
  
      :ruby
        code = <<-CODE
        <nav>
          <ul>
            <li>
              <a href="http://www.google.com">
                Google
              </a>
            </li>
            <li>
              <a href="http://www.yahoo.com">
                Yahoo
              </a>
            </li>
            <li>
              <a href="http://www.bing.com">
                Bing
              </a>
            </li>
          </ul>
        </nav>
        CODE
      =code(code, :html)
  
      :markdown
  
        With a little CSS we can style this as a horizontal nav
  
      :ruby
        code = <<-CODE
        nav ul, nav li {
          list-style:none;
          margin:0;
          padding:0;
        }
        nav li {
          display:inline-block;
          padding:0 10px;
        }
        CODE
      =code(code, :css)
  
      :markdown
        This looks something a little like this:
  
      %style
        nav.horizontal_demo {
        border:1px solid black;
        padding:10px;
        }
        nav.horizontal_demo ul, nav.horizontal_demo li {
        list-style:none;
        margin:0;
        padding:0;
        }
        nav.horizontal_demo li {
        display:inline-block;
        padding:0 10px;
        }
      %nav.horizontal_demo
        %ul
          %li
            %a{:href => "http://www.google.com"}
              Google
          %li
            %a{:href => "http://www.yahoo.com"}
              Yahoo
          %li
            %a{:href => "http://www.bing.com"}
              Bing
  
      :markdown
  
        ## Vertical Navigation Exercise
  
        We can create vertical navigation from an unordered list
  
        1. Create a nav element and put an unordered list in it.
        2. Remove the margins and padding from the ul and li, and set list-style:none.
        3. Set the width of the nav.
        4. Set the anchors to be display:block. Add padding and a background. You now have some big clickable buttons.
        5. Add a rollover to the anchors, something like this: a:hover { background:red; }
  
        A vertical navigation!
  
        ## Bonus Exercise
  
        Add a sublist and style the elements in it a little bit smaller without a background.
  
  
        ## Horizontal Navigation Exercise
  
        We're going to create a horizontal navigation of your own with a few enhancements.
  
        1. Create a nav and add an unordered list of links.
        2. Remove the margins and padding on the ul and li. Remove the bullet points.
        3. Use CSS to display the list items inline-block.
        4. Use border-left to put a vertical line between each list item.
        5. Use li:first-child to remove the left border from the first list item.
  
        ## Bonus exercise
  
        Either recreate a horizontal navigation something like this one:
  
      %img{ src: '/images/smashing_nav.png', style: 'width:100%' }
  
      :markdown
        or create tabs something like these:
  
      %img{ src: '/images/streetbank_nav_narrow.png', style: 'width:100%' }
  
  
      %aside
        :markdown
          ## Downloads
  
          * [Code from the board](https://www.dropbox.com/sh/5408555gzscrgs4/AABoartsbDraXy-BCL7BUyPva?dl=1)
  