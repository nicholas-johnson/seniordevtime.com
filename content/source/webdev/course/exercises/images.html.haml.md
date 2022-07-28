---
  title: "Attributes Exercise"
  section: "webdev"
  exercise: "images"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
  
        # Images
  
        What would a web page be without images? To add an image to a web page we use the img tag like so:
  
      :ruby
        code = <<-CODE
        <img src="kitten.jpg" alt="kitten" />
        CODE
      =code(code, :html)
  
      :markdown
  
        ## Two attributes to notice here:
  
        * The src attribute is a url where the image can be located.
        * The alt attribute will be displayed if the image cannot be downloaded, and will be read out in a screen reader. It is alternative text.
  
        ## img is  a self closing tag
  
        Note the trailing slash. This is there because the image element doesn’t wrap any text so it has to self close. It is a self closing tag.
  
        Other examples of self closing tags are the \<br /> line break tag and the \<hr /> horizontal rule tag. They don’t wrap any text so the open and close tags are rolled into one.
  
        Self closing tags are not needed in html4. They are needed in xhtml. They are optional in HTML5, but nice to use anyway.
  
    %section.exercise
      :markdown
  
        ## Exercise - Everyone loves kittens
  
        1. Go to Google and do an image search for kittens. Pick a kitten, right click and download the image into a folder.
        2. In the same folder, create an html page. Add an img tag. Give the html tag a src attribute, such that it shows the kitten.
  
    %section.exercise
      :markdown
  
        ## Exercise - title and alt
  
        The alt attribute is alternative text for the image. This is useful for Google, and also for screen readers. It's important for accessibility.
  
        The title attribute can be added to any attribute. Add a title attribute, then mouse over the image. You should see the title pop up under your mouse.
  
        1. Add an alt attribute. (Sometimes called alt text)
        2. Add a title attribute.
  
    %section
      :markdown
  
        # A final note on URLs
  
        The src attribute stands for source. It’s a URL - a web address. It tells the web browser where to look for the image. In this instance it’s pretty simple. It just points to an image called kitten.jpg in the same directory as the html file. It’s a relative URL because it’s relative to the location of the html file.
  
        URLs can also be absolute. An example of an absolute URL would be:
  
      :ruby
        code = <<-CODE
        http://www.google.co.uk/images/logos/ps_logo2.png
        CODE
      =code(code, :html)
  
      :markdown
  
        This URL is absolute because it contains a complete web reference to the image, including the domain where the image can be found.
  
        If you leave off the first part of the URL, but keep the leading slash, the web browser assumes that you’re talking your own domain, so if you had a URL like:
  
      :ruby
        code = <<-CODE
        /images/kitten.jpg
        CODE
      =code(code, :html)
  
      :markdown
  
        and you were serving a website like from a domain like
  
      :ruby
        code = <<-CODE
        http://www.mysite.com
        CODE
      =code(code, :html)
  
      :markdown
  
        The web browser would look for the image at:
  
      :ruby
        code = <<-CODE
        http://www.mysite.com/images/kitten.jpg
        CODE
      =code(code, :html)
  
      :markdown
  