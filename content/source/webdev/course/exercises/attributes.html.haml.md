---
  title: "Attributes Exercise"
  section: "webdev"
  exercise: "attributes"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        # Attributes
  
        We can change the behaviour of our elements using HTML attributes. These go inside the first angled braces.
  
        For example, here is a hyperlink (a stands for anchor, which was the old name for a hyperlink):
  
      :ruby
        code = <<-CODE
        <a href="http://www.google.com">Link to Google</a>
        CODE
      =code(code, :html)
  
      :markdown
  
  
        Whoa there mister, that’s a funny looking opening \<a> tag. Yes, it has extra text inside it to say where the link should point to. We call this an Attribute. The \<a> tag has always has an href attribute to say where it should point to.
  
        We’ve put the place we want the link to link to right there inside the \<a> tag. It’s an href attribute that tells the \<a> tag how to work.
  
        Lots of tags have attributes you can use to change their behavior or appearance. We’ll find out more about this later.
  
    %section.exercise
      :markdown
  
        ## Exercise - Attributes
  
        Extend the previous exercise. There were links to wikipedia. Convert these into actual hyperlinks. Verify they point to the right place.
  
    %section.exercise
      :markdown
  
        ## Further Exercise - a new tab
  
        Add another attribute to your a tags to make them open in a new tab. The attribute is:
  
      :ruby
        code = <<-CODE
        target="_blank"
        CODE
      =code(code, :html)
  
      :markdown
        Try this now. Click the link. Does it work?
  