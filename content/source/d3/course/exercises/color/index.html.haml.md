%article
    %section
      :markdown
        # Colour Scales
  
        We can also create a scale which will automatically generate a colour based on our data value.
  
        The colour scales are:
  
        * category10
        * category20
        * category20b
        * category20c
  
        category 10 contains 10 colours, the rest contain 20 colours. These colours have been specially designed to be harmonious and attractive.
  
        ## Generating a colour scale
  
        We can make a colour scale by calling one of the category functions:
  
      :ruby
        code = <<-CODE
        var colour = d3.scale
          .category20();
        CODE
      =code(code)
  
      :markdown
  
        We can now make a colour simply by calling the colour function:
  
      :ruby
        code = <<-CODE
        var bars = d3.selectAll('rect');
  
        bars
          .attr('color', function(d,i) {
            return colour(i);
          });
        CODE
      =code(code)
  
      :markdown
  
    %section.exercise
      :markdown
        ## Exercise - assign colours to your chart
  
        Use the colours function to automatically assign colours to one of your charts.
  