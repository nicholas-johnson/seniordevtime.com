;;;
  "title": "Nicholas Johnson - Responding Stepwise",
  "description": "Responsive Design course Notes and Exercises"
  ;;;
  
  %article
    %section
      :markdown
        # Viewing on a device
  
        To view your site on a device you need to make it publicly accessible. This means running from localhost.
  
        There are many ways to do this.
  
        ## Windows
  
        1. Enable IIS - [Follow the instructions here](http://msdn.microsoft.com/en-us/library/ms181052%28v=vs.80%29.aspx)
        2. Get your IP address by running ipconfig on the command line.
        3. Disable Windows Firewall.
        4. Connect to the IP address on you device.
  
        ## Mac
  
        1. Enable Apache
        2. Get the IP address using ifconfig.
        3. Connect to the IP address on your device
  
        Your ip address will start with 192.168
  
        ## Meta Viewport
  
        You will find your responsive layout has not been triggered. To turn it on, you must include a meta viewport tag in your header.
  
      :ruby
        code = <<-CODE
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        CODE
      =code(code, :html)
  
      :markdown
  