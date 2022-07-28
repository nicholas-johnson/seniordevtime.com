---
  title: "Rendering - React Exercise"
  section: "react"
  exercise: "rendering"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        # Rendering
  
        Compose a react DOM node like so:
  
      :ruby
        code = <<-CODE
        var p = React.createElement('p', null, 'Hey there React!');
        CODE
      =code(code)
  
      :markdown
  
        We can do the same using the DOM helper methods, like so:
  
      :ruby
        code = <<-CODE
        var p = React.DOM.p(null, 'Hello React!');
        CODE
      =code(code)
  
      :markdown
  
        We can select a DOM node using regular DOM scripting, like so:
  
      :ruby
        code = <<-CODE
        var el =document.getElementById('example');
        CODE
      =code(code)
  
      :markdown
  
        We can then append it to the DOM like so:
  
      :ruby
        code = <<-CODE
        React.render(p, el);
        CODE
      =code(code)
  
      :markdown
  