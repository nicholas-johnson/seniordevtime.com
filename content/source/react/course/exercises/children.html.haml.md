---
  title: "Children - React Exercise"
  section: "react"
  exercise: "children"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        # Children
  
        We can compose a DOM node
  
      :ruby
        code = <<-CODE
        const p1 = React.DOM.p(null, 'first p');
        const p2 = React.DOM.p(null, 'second p');
        const div = React.DOM.div(null, p1, p2);
  
        const el = document.getElementById('example');
        React.render(div, el);
        CODE
      =code(code)
  
      :markdown
  
        I've written this in longhand and created a fair few unnecessary variables here. Let's simplify this a little.
  
      :ruby
        code = <<-CODE
        const node = React.DOM.div(null,
          React.DOM.p(null, 'first p'),
          React.DOM.p(null, 'second p')
        );
  
        const el = document.getElementById('example');
        React.render(node, el);
        CODE
      =code(code)
  
      :markdown
  