%article
  
    %section
      :markdown
  
        # Each Peach
  
        * Review the each function on page 23 of the JQuery book
        * Attempt the each peach exercise on page 23, [also found here](/jquery-book/#each-peach)
  
        ## Further Exercise
  
        Assume you want to put email addresses on the Internet, but you want to keep them hidden from automated spam bots.
  
        Rather than write your email as a link like this:
  
      :ruby
        code = <<-CODE
        <a href="mailto:hello@example.com">hello@example.com</a>
        CODE
      =code(code, :html)
  
      :markdown
        You instead choose to obfuscate it like this:
  
      :ruby
        code = <<-CODE
        <span class="email">hello at example dot com</span>
        CODE
      =code(code, :html)
  
      :markdown
  
        Use your knowledge of JQuery to rewrite the span as a clickable mailto hyperlink.
  
        Put multiple different emails addresses on the page. Use the each method to ensure the code works for every email address on the page.
  
        ### Manipulating the string
  
        Note that you can use "string".replace('val', 'replacement') to replace values in a string.
  
        <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace>
  