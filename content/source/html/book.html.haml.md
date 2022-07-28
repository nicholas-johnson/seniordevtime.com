%article
    %section
  
      -# TODO: This is a fragment
      :markdown
  
  
  
          # Welcome to Introduction to HTML - part 1
  
          Hi there! Welcome! This document that you have in your hand is your key to becoming a new web developer. It’ll be tough, but you’ll pick it up no problem if you keep at it. This course is practical, we will learn by doing, so there are a lot of exercises for you to work through. I’ll be around helping out. Sometimes we’ll work together on the projector, sometimes you’ll walk alone. Welcome to the secret ways of the internet!
  
          As a very wise old web developer once said,
  
          "How awesome is working on the web? This Awesome!"
  
          TODO: Link Image
  
  
  
          # HTML
  
          HTML is the language of the Internet, a universal set of standards that every web enabled computer in the world can understand. It works rather like a sharp tool that lets you cut up a document into meaningful pieces that make sense to a computer. Thankfully, it's very easy to learn, in fact, using this tutorial you can be writing your own web pages in html in just a few hours.
  
          In order to complete this tutorial you will need a text editor to let you enter the html. There are many of these to choose from with varying levels of support for HTML. You might like to consider using Sublime Text.
  
          So without further ado let's dive right in.
  
          # Tags
  
          The following is a complete HTML document. If you have your editor ready please cut and paste it in.
  
          :ruby
            code = <<-CODE
            <html>
              <head>
                <title>Maria's document</title>
              </head>
              <body>
                <p>
                  How do you solve a problem like Maria? How do you catch a cloud and pin it down?
                </p>
              </body>
            </html>
            CODE
          =code(code, :html)
  
          :markdown
  
          The important thing to notice about this document is the little pieces of text between the angled brackets. These are called tags. Tags are the instructions that split your document up into parts. The text inside the tags tell your web browser what to do with the text that follows them, for example, the <p> tag means start a new paragraph.
  
          Tags almost always come in pairs. Every tag on this document has it's partner. The partner tags start with a forward slash (/) which simply means end, so </p> means end a paragraph. In order to keep track of which tags have been opened we use indentation. For every opening tag we indent by one step and for every closing tag we unindent by one step so we can always see how many tags we have open. You don't need to do this but it is a very good habit to get in to. When you start working with larger documents it will help you see what's going on.
  
          ## Tag Exercise
  
          Now enter this document. You can cut and paste it into your text editor if you like, or if you want to get the full learning experience type it in yourself and change the text. See our html editor roundup if you need help choosing an editor. Don't use Microsoft word or similar or you will get some very strange results. When you've got it entered, save it with a filename that ends with .html for example maria.html. Then open it in a web browser, for example with Internet Explorer go to the file menu and select open. See how the title has gone into the title bar of the window and the text has gone into the browser page itself.
  
          ## More about tags
  
          Tags are what we use to control the browser, Think of them as little people shouting instructions. One of them shouts “start a paragraph!” and so the browser does, then another shouts “start making the text bold” and so the browser does this to. After a while another one shouts “OK Stop making the text bold!” so the browser stops. Browsers are very obedient. Tags always shout the same thing and there are not very many different ones to learn, in fact you will only ever really use about 15 of them. This is why it's possible to learn HTML so quickly.
  
          Lets look at another document
  
          :ruby
            code = <<-CODE
            <html>
              <head>
                <title>My Favourite Things</title>
              </head>
              <body>
                <p>
                  Here are a few of my <strong>favourite things</strong>. Raindrops on roses and whiskers on kittens.
                </p>
                <p>
                  Bright copper kettles and warm woollen mittens.
                </p>
              </body>
            </html>
            CODE
          =code(code)
  
          :markdown
  
          ## Another Tag Exercise
  
          Enter this document using a text editor and view it in a browser. Try changing the text. Notice how "favourite things" is bolded.
  
          This document is slightly more complex. Lets go through the tags one at a time
  
          ## The <html> tag
  
          This tags tells the browser to start an html document. It sits there shouting to the browser "Everything after me is HTML so you can read it as such!"
  
          ## The <head> tag
  
          The page head contains information about the page that isn't on the page. We sometimes call this metadata. In this document the head contains a title tag.
  
          ## The <title> tag
  
          This handy tag allows you to set the title for the page. This title doesn't go on the page, but is displayed at the top of the browser, either in the title bar or the page tab depending on your browser.
  
          ## The <body> tag
  
          The page body contains all of the page content. Everything that we see on the page is between the body tags.
  