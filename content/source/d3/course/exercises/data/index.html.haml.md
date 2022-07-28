%article
    %section
  
      :markdown
        # Data
  
        D3 gives us a function called data. The data function operates on a selection and receives an array of information. It then maps each element in the array to the elements in the selection array.
  
        Each element in the selection gains a new attribute called __data__. This attribute is added directly to the DOM node, not as an HTML5 data attribute.
  
      %aside.box
        :markdown
          ## Data is stored on the DOM node
  
          The data is stored as an attribute of the DOM node object, not as a data attribute in the html. You will need to use the inspector to see it.
  
      :markdown
  
        Given html like this:
  
      :ruby
        code = <<-CODE
        <div class="graph">
          <div></div>
          <div></div>
          <div></div>
        </div>
        CODE
      =code(code, :html)
  
      :markdown
  
        The following JavaScript will add a an attribute called data to each div node. This will not be visible on the page, you'll need to use your inspector to inspect the DOM node itself.
  
      :ruby
        code = <<-CODE
        d3.select('.graph')
          .selectAll('div')
          .data([1,2,3]);
        CODE
      =code(code)
  
      :markdown
  
        Note that there are three divs and three elements in the data array. The first div gets data:1, the second data:2 and the third data:3.
  
        'Aha' I can hear you asking, 'What happens if there are more divs than data, or vice versa?'. All in good time.
  
  
  
  
        ## Attributes from data
  
        After we have bound data to a node we can access it in various ways. Let's set an attribute.
  
        We can receive this in a function, and use the return value of the function as the value of the attribute.
  
        Here we use the style function to set a style attribute. Notice that we have passed a function as the second parameter to the .style() function. This function receives the bound data, and also i, which is an iterator.
  
      :ruby
        code = <<-CODE
        d3.select('.graph')
          .selectAll('div')
          .data([1,2,3])
          .style('width', function(data, i) {
              return data*100 + "px;"
          })
        CODE
      =code(code)
  
      :markdown
  
        This will give us a page like this:
  
      :ruby
        code = <<-CODE
        <div class="graph">
          <div style="width:100px"></div>
          <div style="width:200px"></div>
          <div style="width:300px"></div>
        </div>
        CODE
      =code(code, :html)
  
    %section
      :markdown
        ## Text
  
        We can also create text elements from data, again by receiving a function. This function can receive data, and also i which is the current iterator.
  
  
      :ruby
        code = <<-CODE
        d3.select('.graph')
          .selectAll('div')
          .data([4,5,6])
          .text(function(data, i) {
            return i + " : " + data;
          })
        CODE
      =code(code)
  
      :markdown
  
        This will give us a page like this:
  
      :ruby
        code = <<-CODE
        <div class="graph">
          <div>1: 4</div>
          <div>2: 5</div>
          <div>3: 6</div>
        </div>
        CODE
      =code(code, :html)
  
    %section.exercise
      :markdown
        ## Exercise
  
        Start with html like this:
  
      :ruby
        code = <<-CODE
        <div class="graph">
          <div></div>
          <div></div>
          <div></div>
        </div>
        CODE
      =code(code, :html)
  
      :markdown
  
        use data like this:
  
      :ruby
        code = <<-CODE
        var data = [10, 60, 25];
        CODE
      =code(code)
  
      :markdown
  
        1. Select the divs using selectAll().
        2. Bind the data to the selection using data().
        3. Check in your inspector, see if you can find the data on the element.
        4. Use the style() function to set a width on the elements based on the bound data. You will not need to do any work to make this happen, just pass a function to the style function, have it receive data, and return a width.
        5. Use the text() function to set text.
  
  
        Your final chart should look something like this:
  
      %div{ style: 'padding:10px; width:10%; margin:1px 0; color:white; background:red'} 10%
      %div{ style: 'padding:10px; width:60%; margin:1px 0; color:white; background:red'} 60%
      %div{ style: 'padding:10px; width:35%; margin:1px 0; color:white; background:red'} 35%
  
    %section.exercise
  
      :markdown
        ## Further Exercise - Sorting
  
        Your data will look nice if it is sorted. Read up on Array sorting here:
  
        <https://github.com/mbostock/d3/wiki/Arrays>
  
        Create a larger data set by typing random numbers, now use the array sort method to sort the data prior to display
  
        Very cool.
  