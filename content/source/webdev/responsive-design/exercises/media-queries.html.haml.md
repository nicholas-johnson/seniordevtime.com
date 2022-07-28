---
  title: "Attributes Exercise"
  section: "webdev"
  exercise: "media-queries"
  course: "responsive-design"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        # Responding to Page Width with Media Queries
  
        Media queries allow us to apply specific style rules only when certain criteria are met. For example, we can detect to width of the browser window and change the layout.
  
        Here is a rule which will make the page background red, but only when the browser is viewed at iPhone width.
  
      :ruby
        code = <<-CODE
        @media screen and (max-width: 640px) {
          body {
            background: red;
          }
        }
        CODE
      =code(code, :css)
  
      :markdown
  
    %section
      :markdown
        ## Linearising a layout
  
        We can use media queries to linearise a design when the page width drops below a threshold. Take the following simple HTML page:
  
      :ruby
        code = <<-CODE
        <!DOCTYPE html>
        <html>
          <head>
            <link rel="stylesheet" type="text/css" href="style.css">
          </head>
          <body>
  
            <article></article>
            <aside></aside>
  
          </body>
        </html>
        CODE
      =code(code, :html)
  
      :markdown
  
        We can create a simple two column float layout like this:
  
      :ruby
        code = <<-CODE
        article {
          float:left;
          width:60%;
        }
  
        aside {
          float:right;
          width:30%;
        }
        CODE
      =code(code, :css)
  
      :markdown
  
        Now we add a media query which simply unsets the float and width, like so:
  
      :ruby
        code = <<-CODE
        @media screen and (max-width: 640px) {
          article,aside {
            float:none;
            width:auto;
          }
        }
        CODE
      =code(code, :css)
  
      :markdown
  
        ## Where to break
  
        The choice of breakpoint will depend on your content. Trying to optimise for particular devices is a losing battle. Here are some breaks you might want to consider:
  
        * widescreen: 1500px;
        * desktop: 960px;
        * ipad: 768px;
        * iphone portrait: 480px;
  
        ## Meta Viewport
  
  
        Now we have a problem. Mobile browsers have pinch to zoom, and so the actual size of a pixel is not the same as a physical pixel. An iPhone will report twice as many pixels as it actually has, which will make a web page initially appear zoomed out.
  
        To turn on our responsive design, you must include a metatag in your header to tell the browser to render the CSS using the device's actual width.
  
        The Meta Viewport tag looks like this:
  
      :ruby
        code = <<-CODE
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        CODE
      =code(code, :html)
  
      :markdown
  
        Pop this in your header to see the responsive design.
  
  
    %section.exercise
      :markdown
        ## Exercise - Unset a float
  
        1. Create a simple two column float layout with an article and an aside.
        2. Now insert a media query into your page which unfloats the article and the aside, and sets width auto at width 640 (iPhone).
        2. Resize your browser. Wow, you have a responsive design!
  
    %section.exercise
      :markdown
        ## Further Exercise - Two Breaks
  
        1. Add a third column.
        2. Add another media query that responds at 1000px. The aim is to convert the 3 column layout into a 2 column layout at 1000px, then convert it into a one column layout at 640px.
  
    %section.exercise
      :markdown
        ## Exercise - Preview on a device
  
        To view your site on a device you need to make it publicly accessible in some way.
  
        ## Windows IIS
  
        1. Enable IIS - <http://msdn.microsoft.com/en-us/library/ms181052%28v=vs.80%29.aspx>
        2. Disable Windows Firewall
        3. Use ipconfig Get the IP address
        4. Connect to the IP address on you device
  
        ## Node
  
        1. Install Node: <https://nodejs.org/en/>
        2. Now go and grab http-server <https://www.npmjs.com/package/http-server>
  
        Start the server and open on your mobile device.
  
        ## Meta Viewport
  
        To trigger your responsive design, you must include a meta viewport tag in your header.
  
      :ruby
        code = <<-CODE
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        CODE
      =code(code, :html)
  
      :markdown
        Pop one in and see the responsive break.
  
  
  