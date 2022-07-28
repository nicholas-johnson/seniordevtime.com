%article
    %section
      :markdown
        # SVG Scatterplot
  
        There's no rule which says the data you graph has to be one dimensional. Very often you will find yourself working with two dimensional data sets.
  
        ## Two dimensional data
  
        This might take the form of an array of arrays like this:
  
      :ruby
        code = <<-CODE
        var data = [
          [1, 2, 3],
          [3, 2, 1]
        ];
        CODE
      =code(code)
  
      :markdown
  
        It might take the form of an array of objects, like this:
  
      :ruby
        code = <<-CODE
        var data = [
          {a:1, b:2, c:3},
          {a:3, b:2, c:1},
        ];
        CODE
      =code(code)
  
      :markdown
  
        You can work with two dimensional data just as easily as with one dimensional data.
  
        ## Binding two dimensional data
  
        We bind our data in the usual way.
  
      :ruby
        code = <<-CODE
        var bars = d3.select('.graph')
          .selectAll('rect')
          .data(data)
        CODE
      =code(code)
  
      :markdown
  
        Each div now has a __data__ attribute that contains the array or the object. We can access it in the usual way, with the caveat that the data is an object so we use the dot notation:
  
      :ruby
        code = <<-CODE
        bars.attr('width', function(data, i){
          return data.a * 10;
        })
        CODE
      =code(code)
  
  
    %section.exercise
      :markdown
  
        ## Exercise - A Scatterplot
  
        Use the following data set:
  
      :ruby
        code = <<-CODE
        var data = [
          {
            dynamism: 8,
            synergy: 6,
            confluence: 42
          },
          {
            dynamism: 4,
            synergy: 8,
            confluence: 13
          },
          {
            dynamism: 10,
            synergy: 9.5,
            confluence: 56
          }
        ];
        CODE
      =code(code)
  
      :markdown
  
        We are going to create a scatterplot. A scatterplot has circles arranged along the x,y axis. In addition the circles can be differnt sizes to indicate importance.
  
        You might like to graph dynamism and synergy on the x,y axis, then use confluence to control the spot size. See if you can see any patterns.
  
        ## Extension
  
        Add more data to the dataset. The plot can handle it.
  
  
    %section.exercise
      :markdown
        ## Massive Bonus Exercise
  
        Attempt to swap the axes. The simplest way to do this will be to create another drawing function that simply redraws the graph using a different set of axes.
  
        Call this function from the JavaScript console.
  