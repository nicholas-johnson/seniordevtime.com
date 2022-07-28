%article
    %section
      :markdown
        # Jade
  
        Jade is an HTML templating language that's extremely popular in Node circles. You make fewer keystrokes to get the same result, which makes you a more productive coder. This is very Node.
  
        ## First Install with NPM
  
        To use Jade you must install the package. Do this with NPM.
  
      :ruby
        code = <<-CODE
        npm install jade
        CODE
      =code(code)
  
      :markdown
  
        ## Elements
  
        The first word on any line is the html element:
  
      :ruby
        code = <<-CODE
        h1 Hello there
        CODE
      =code(code, :jade)
  
      :markdown
        Compiles to:
  
      :ruby
        code = <<-CODE
        <h1>Hello there</h1>
        CODE
      =code(code, :html)
  
      :markdown
  
        ## Nesting elements
  
        We can nest elements inside each other using indentation:
  
      :ruby
        code = <<-CODE
        article
          h1 Hello
          p Hey!
        CODE
      =code(code, :jade)
  
      :markdown
        Compiles to:
  
      :ruby
        code = <<-CODE
        <article>
          <h1>Hello</h1>
          <p>Hey!</h1>
        </article>
        CODE
      =code(code, :html)
  
      :markdown
  
        ## Attributes
  
        We can create attributes:
  
      :ruby
        code = <<-CODE
        a(href='http://www.lolcats.com/') Lol cats
        CODE
      =code(code, :jade)
  
      :markdown
  
        Compiles to:
  
      :ruby
        code = <<-CODE
        <a href="http://www.lolcats.com/">Lol cats</a>
        CODE
      =code(code, :html)
  
      :markdown
  
        ## Variables
  
        We can include variables in our template using an equals sign like this if we just have one value:
  
      :ruby
        code = <<-CODE
        article
          h1= titleContent
        CODE
      =code(code, :jade)
  
      :markdown
  
        or using curly brace interpolation like this if we want to embed content into text:
  
      :ruby
        code = <<-CODE
        html
          head
            title myWebsite.com - \#{titleContent}
        CODE
      =code(code, :jade)
  
      :markdown
  
        ## Compiling Jade
  
        We compile Jade using the jade package. First we install it with npm:
  
      :ruby
        code = <<-CODE
        npm install jade
        CODE
      =code(code)
  
      :markdown
  
        Now we can compile our template. This gives us a template function:
  
      :ruby
        code = <<-CODE
        var jade = require('jade');
        var template = jade.compile('h1 hello \#{name}');
        CODE
      =code(code)
  
      :markdown
  
        Or from a file:
  
      :ruby
        code = <<-CODE
        var template = jade.compileFile('./path/to/template.jade');
        CODE
      =code(code)
  
      :markdown
  
        Finally we can compile our template into HTML, passing it an object full of include variables, like so:
  
      :ruby
        code = <<-CODE
        template({name: "Davie Skitch Mulldoon"});
        CODE
      =code(code)
  
      :markdown
  
    %section.exercise
      :markdown
        ## Exercise - Using Jade
  
        Modify your Node server to use Jade. Instead of outputting a file directly, use Jade to compile a template and return the result.
  
    %section
      :markdown
        ## Layout files
  
        We can create layout files that will wrap our content in a standard wrapper. This saves typing.
  
        Assume an index.jade file like this. Notice that we are declaring a block called content:
  
      :ruby
        code = <<-CODE
        extends ../layout
  
        block content
          h1= title
          article= content
        CODE
      =code(code, :jade)
  
      :markdown
  
        We can create a layout file like this. Note here that we are including a block called content:
  
      :ruby
        code = <<-CODE
        html(lang='en')
          head
            title= title
          body
            header
              h1 My Cool Site
            block content
        CODE
      =code(code, :jade)
  
      :markdown
  
  
    %section.exercise
      :markdown
        ## Exercise - Layout
  
        Create a layout file for your application. Have all your views use the same layout.
  
    %section
      :markdown
        ## Partials
  
        We can also include partials in our layout, for example we might split our layout into several smaller parts to make it easier to work on. Smaller files are generally easier to work with than large ones.
  
        A layout file might look more like this:
  
  
      :ruby
        code = <<-CODE
        html(lang='en')
          head
            include ./partials/meta
            include ./partials/css
          body
            include ./partials/header
            block content
            include ./partials/footer
            include ./partials/javascripts
        CODE
      =code(code, :jade)
  
      :markdown
        The includes are always relative to the current directory.
  
    %section.exercise
      :markdown
  
        ## Exercise - Create a partial
  
        Split your layout file into partials. Create a header partial and a footer partial.
  
    %section.exercise
      :markdown
  
        ## Further Exercise - Content module (Model?)
  
        Tackle this if you are ahead of the group. We'll look at MVC more later.
  
        It's good practice to separate our content from the code that renders our content. Create a module that holds your content. We should be able to require the module, then get an object containing the content out of it and pass this to the view.
  
        I'll leave the details up to your discretion.
  