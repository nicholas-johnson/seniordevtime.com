%article
    %section
      :markdown
        # Select
  
        D3 gives you a selection library, a lot like jQuery. We can call:
  
      :ruby
        code = <<-CODE
        d3.select('div');
        CODE
      =code(code)
  
      :markdown
  
        This will return a selection containing the first div on the page by CSS. Typically you want something a little more unique though, such as:
  
      :ruby
        code = <<-CODE
        d3.select('.graph')
        CODE
      =code(code)
  
      :markdown
  
        This gives you an array containing a single element. If nothing matches, you get back a selection containing a null value.
  
        ## selectAll()
  
        We can also select multiple elements at once. We can call:
  
      :ruby
        code = <<-CODE
        d3.selectAll('.graph div');
        CODE
      =code(code)
  
      :markdown
  
        This will select every div inside every element with a class of 'graph'. Just like jQuery, we get back an array containing all of the matching DOM nodes.
  
        If nothing matches you get back an empty selection.
  
      %aside
        :markdown
          ## Null elements
  
          select() will return a match containing null if no element matches. selectAll() will return an empty selection. D3 will generally ignore empty values when applying attributes or appending children.
  
      :markdown
  
        ## Selection chaining
  
        We can of course also chain selections together. Say we wanted to match the divs within a .graph:
  
      :ruby
        code = <<-CODE
        d3.select('.graph').selectAll('div');
        CODE
      =code(code)
  
      :markdown
  
        We might also break this chain down into parts like this:
  
      :ruby
        code = <<-CODE
        var graph = d3.select('.graph')
        graph.selectAll('div');
        CODE
      =code(code)
  
      :markdown
  
        Thus far D3 is quite similar to jQuery.
  
    %section.exercise
      :markdown
        ## Exercise - selections
  
        Given the following HTML:
  
      :ruby
        code = <<-CODE
        <!DOCTYPE html>
        <html>
          <head>
            <title></title>
          </head>
          <body>
            <h1>Title</h1>
            <div class="graph">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </body>
        </html>
        CODE
      =code(code, :html)
  
      :markdown
  
        1. Select the h1.
        2. Select the graph element.
        3. Select all the divs inside the graph, there should be 3.
  