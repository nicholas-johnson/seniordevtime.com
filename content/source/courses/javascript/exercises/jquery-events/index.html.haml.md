%article
    %section
      :markdown
  
        # JQuery Events
  
    %section.exercise
      :markdown
  
        ## Exercise - events
        Attempt the events exercise from the [JavaScript book here](/javascript-book#jquery-events---listen-to-me-and-do-what-i-say)
  
  
    %section.exercise
      :markdown
  
        ## Harder Exercise - Show the text
        Use the HTML from the [exercise folder](https://www.dropbox.com/sh/lndx29t9x79d6tk/AABR2bBPQcdRxFHKzaPiXLcVa?dl=1).
  
        Make it so that when you click the hidden text becomes visible.
  
        You will need to use the [show function](http://api.jquery.com/show/) for this.
  
    %section.exercise
      :markdown
  
        ## Exercise Text Box Keyup
  
        Create a text input field. Listen for the keyup event. Alert the value of the text box whenever keyup occurs.
  
        Get the value of an input field using:
  
      :ruby
        code = <<-CODE
        $('input').val();
        CODE
      =code(code)
  
      :markdown
  
        For bonus points, put the value of the text box into a div.
  