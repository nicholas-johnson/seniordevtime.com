%article
    %section
      :markdown
  
        # Enter and exit
  
        In the example above we created a div for each element in the array. our selection was the same length as the array (3).
  
        But what happens if the length of the selection is different to the length of the array? It would be handy to be able to create new DOM nodes automatically, or remove nodes that are not needed.
  
        The data() function returns an object which contains two sub-selections called enter and exit. We can get at these using the enter and exit functions.
  
        The enter function returns a virtual selection containing all of the data that isn't currently on the page.
  
        The exit function gives us a selection containing all of the nodes in the selection that are not needed given the data.
  
        ## Enter()
  
        The enter function gives us access to a list of placeholder nodes that correspond to the data that is not currently bound to the selection.
  
        If we append to the enter() selection, nodes will be created, as many as are needed to satisfy the selection.
  
        Starting with html like this:
  
      :ruby
        code = <<-CODE
        <div class="graph"></div>
        CODE
      =code(code, :html)
  
      :markdown
  
        We can append divs to the enter selection.
  
      :ruby
        code = <<-CODE
        bars = d3.select('.graph')
          .selectAll('div')
            .data([1,2,3,4,5,6]);
  
        bars
          .enter()
            .append('div')
            .style('width', function(data) {
                return data*10 + "%;"
            });
        CODE
      =code(code)
  
      :markdown
  
        We will get a page that looks like this:
  
  
      :ruby
        code = <<-CODE
        <div class="graph">
          <div style="width:10%"></div>
          <div style="width:20%"></div>
          <div style="width:30%"></div>
          <div style="width:40%"></div>
          <div style="width:50%"></div>
          <div style="width:60%"></div>
        </div>
        CODE
      =code(code, :html)
  
      :markdown
  
        We can chain another style function to get the height and background, or just use CSS.
  
        ## Exit()
  
        The exit selection corresponds to nodes that are no longer needed. Say you rebind data to the selection, any nodes that are not needed to represent the data can be removed.
  
        Given the example above, say we bound a shorter array of data, we could remove the superfluous divs using the remove function on the exit selection.
  
      :ruby
        code = <<-CODE
        var bars = d3.select('.graph')
          .selectAll('div')
            .data([1,2,3]);
  
        bars
          .exit()
            .remove()
        CODE
      =code(code)
  
      :markdown
  
    %section.exercise
      :markdown
        ## Exercise - Draw a graph
  
        Basing your answer on the code above, given a data array like this:
  
      :ruby
        code = <<-CODE
        [10,20,50,40,90,75]
        CODE
      =code(code)
  
      :markdown
  
        Use data binding and the enter function to add divs to the page and style them into a nice histogram.
  