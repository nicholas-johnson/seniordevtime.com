---
  title: "CSS Classes Exercise"
  section: "webdev"
  exercise: "positioning-with-margins"
  course: "course"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        # Positioning with margins or padding
  
        We often forget that one easy way to move elements around the page is by using margins and padding. For example, if we want to move an element away from the top of the page, we can use margin-top to achieve this very simply. If we want to move two elements apart, we can add margins to force them away from each other.
  
    %section.exercise
      :markdown
        ## Exercise - Margins
  
        1. Create an html file and linked stylesheet.
        2. Add a div to the page. Give it a class of header.
        3. Add another div inside the header. Give it a class of logo.
        4. Fix the height and width of the header div and the logo div.
        5. Put a border round both divs so you can see where they are.
        6. Position the logo div inside the header div using margins, e.g. margin-top:20px;
  
  
      %img{ src: "/images/webdev/margins.jpg" }
  
      :markdown
  
        Often margins and padding are sufficient to achieve the effect we need. When playing with padding, do keep in mind the issues with IEs box model. Don’t set padding on an element with a fixed width or height or you’ll run into cross browser issues.
  
  
    %section
      :markdown
  
        ## Negative Margins
  
        A positive margin moves an element away from other elements. A negative margin does the opposite. Negative margins are occasionally very useful for certain special effects. You can make two elements overlap a little, or a lot.
    %section.exercise
      :markdown
        ## Exercise - Negative Margins
  
        1. Create an html file and linked stylesheet.
        2. Create an h1 and put a page title in it.
        3. Create a paragraph and put a subtitle in it.
        4. Set the margins of the h1 and paragraph to 0 so they sit underneath each other
        5. Set the top margin of the paragraph to a negative value and watch how the subtitle moves up tight to the h1.
  
      %img{ src: "/images/webdev/negative-margins.jpg" }
  
      :markdown
  
  
    %section
      :markdown
  
        ## A word of warning
  
        Negative margins are both useful and dangerous. Beware of using them to "fix up" a layout that logically should work. They can hide a layout bug, but bugs have a tendency to pop up unexpectedly. Use them with care and awareness, not to fix a layout issue that you don’t understand.
  
  
        ## Centering on the page using margin:auto
  
        Margin:auto simply means take all the available space and distribute it evenly. An element can be centred on a page by using margins. If you declare it to be fixed width, then setting margin:0 auto; (top and bottom 0, left and right auto) will make the left and right margins automatically share the remaining space on the page.
  
    %section.exercise
      :markdown
        ## Exercise - Margin Auto
  
        1. Create an html file and linked stylesheet.
        2. Create a div and add quite a lot of text to it. Cut and paste from a web page of your choice.
        3. Fix the with of the div to 800px;
        4. Add a border to the div.
        5. Set margin: 0 auto; on the div. It should now be centered horizontally on the page. You can stretch and grow your browser and it will remain centered.
  
  
  