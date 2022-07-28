%article
  
    %section
      :markdown
  
        # Table Tabs
  
        Start out with a little table of products, like this. It's a shop.
  
      :ruby
        code = <<-CODE
        <table>
          <tr>
            <th></th>
            <th>In Stock</th>
            <th>Unit Price</th>
            <th></th>
          </tr>
          <tr>
            <td>Kittens</td>
            <td>5 in stock</td>
            <td>£25 per each</td>
            <td><a href="#">Buy</a></td>
          </tr>
          <tr>
            <td>Puppies</td>
            <td>1 in stock</td>
            <td>£20 per each</td>
            <td><a href="#">Buy</a></td>
          </tr>
          <tr>
            <td>Ninjas</td>
            <td>1 in stock</td>
            <td>£250 per each</td>
            <td><a href="#">Buy</a></td>
          </tr>
        </table>
        CODE
      =code(code, :html)
  
      :markdown
  
        When I click a buy link, the row should become highlighted. You can use toggleClass to add or remove a class to the tr.
  
        ## How to do it
  
        You're going to need to use traversal to solve this. You'll need to use $(this).closest('tr') to find the closest parent table row, then you can use toggleClass to set the class attribute.
  
        Remember to use your breakpoints to test your click function. and to check you are selecting the correct elements.
  
        ## Plugin Extension
  
        Create this as a plugin, tableHighlighter. You will call it like this:
  
      :ruby
        code = <<-CODE
        $('table').tableHighlighter();
        CODE
      =code(code)
  
  