;;;
  "title": "Nicholas Johnson - Responding Stepwise",
  "description": "Responsive Design course Notes and Exercises"
  ;;;
  
  %article
    %section
      :markdown
        # Stepwise responsive design.
  
        Liquid layouts are tricky to design for and keep looking good. A stepwise responsive design responds one step at a time.
  
        You might create a widescreen layout and a standard desktop layout. Anything less than table width becomes liquid and takes up as much space as is available.
  
        In the past this has been referred to as an adaptive web design, and you might still occasionally hear this term used.
  
        ## Investigation - Bootstrap
  
        Bootstrap responds stepwise, becoming liquid at tablet sizes. Check out the bootstrap design here:
  
        <http://getbootstrap.com/getting-started/>
  
        Resize the browser, notice how the width is fixed, but there are different fixed widths for different screen widths. When you reach mobile width, the whole thing becomes liquid.
  
        ## Investigation - Streetbank
  
        <http://www.streetbank.com>
  
        The same thing happens.
  
        ## Exercise - Build a stepwise responsive design
  
        Make your page respond stepwise. You will need to create several media queries for each successive level.
  
        Create a fixed width widescreen layout and a fixed width desktop layout that's a little narrower.
  
        Anything below an ipad is liquid (767px or less).
  
        Use the following breaks:
  
        * widescreen: 1500px;
        * desktop: 960px;
        * ipad: 768px;
  
  
  