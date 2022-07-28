---
  title: "Props - React Exercise"
  section: "react"
  exercise: "props"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        # Props
  
        We can pass a set of properties to our new React virtual DOM node. These are referred to as props.
  
        When we create an element using react, these properties will be available in added as an attribute of that element called .props. We can then use props to compose children for the element.
  
        Anything we pass to the element will be appended as a child node. This can be just a simple string.
  
      :ruby
        code = <<-CODE
        const props = {
          salutation: 'Hello',
          recipient: 'World'
        }
  
        const node = React.DOM.div(
          props,
          node.props.salutation,
          ' ',
          node.props.recipient,
          '!!!'
        );
  
        const el = document.getElementById('example');
        React.render(node, el);
        CODE
      =code(code)
  
      :markdown
  
        This gives us the following:
  
        <div id="example">
          <div data-reactid=".0">
            Hello World!!!
          </div>
        </div>
  
        ## Passing props down the tree
  
        We can of course pass props down the DOM tree:
  
        TODO: The value of this is window! Error!
  
      :ruby
        code = <<-CODE
        const props = {
          salutation: 'Hello',
          recipient: 'World'
        }
  
        const node = React.DOM.div(
          props,
          React.DOM.p(
            node.props,
            node.props.salutation
          ),
          React.DOM.p(
            node.props,
            node.props.recipient,
            '!!!'
          )
        );
  
        const el = document.getElementById('example');
        React.render(node, el);
        CODE
      =code(code)
  
      :markdown
  
        This will produce something like the following DOM
  
        <div id="example">
          <div data-reactid=".0">
            <p data-reactid=".0.0">
              Hello
            </p>
            <p data-reactid=".0.1">
              World!!!
            </p>
          </div>
        </div>
  
  
        ## Props as attributes
  
        Any props which have the same name as legal html attributes will be mapped as attributes in the generated HTML5 output. Examples of legal attributes would be:
  
        * title (for any element)
        * src (for images, and other elements which accept a src)
        * alt (for images)
  
        We can also make up out own attributes by prepending data- to any string, for example:
  
        * data-count
        * data-abc
        * data-fleurgle-muhurgle
  
        Only legal html5 attributes will be mapped to attributes in the generated HTML. For example:
  
        React.render(
          React.DOM.h1(
            { title: "Stilton", "data-rating": "4.5", abc: '123' },
            "Cheese",
            this.props.title
          ),
          document.getElementById('example')
        );
  
  