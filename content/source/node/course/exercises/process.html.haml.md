%article
    %section
      :markdown
        # Process
  
        The process object holds information about the current running process.
  
        If we open up our process object, we will find a slew of useful information in it, notably our environment variables, and passed in parameters.
  
  
  
        ## Creating a config module
  
        Most applications will require configuration options, things like database connection strings and log level. We likely want to change these values depending on whether we are running in a production or development environment.
  
      :ruby
        code = <<-CODE
        env = process.env.NODE_ENV || 'development';
  
        var config = {
          development: {
            port: 3000,
            db: 'mongodb://localhost/mydb',
            prettyHtml: true
          },
  
          production: {
            port: process.env.PORT || 5000,
            db: 'mongodb://mongolab.com/mydb',
            prettyHtml: false
          }
        };
  
        module.exports = config[env];
        CODE
      =code(code)
  
      :markdown
  
        Now we can simply require('config') wherever we need it, and we'll get back a configuration object that's specific to our environment.
  
    %section.exercise
      :markdown
        ## Exercise - Investigate the process object
  
        Open up a node console. Now grab the process object and have a glance through. Useful.
  
    %section
      :markdown
        ## Process.argv
  
        The process.argv object contains the current path of the file, and values passed in from the command line.
  
      :ruby
        code = <<-CODE
        console.log(process.argv)
        CODE
      =code(code)
  
      :markdown
  
        If we call the program like this:
  
      :ruby
        code = <<-CODE
        node demo.js hello goodbye
        CODE
      =code(code, :bash)
  
      :markdown
  
        We will get something like this:
  
      :ruby
        code = <<-CODE
        [
          'node',
          '/path/to/file/process.js',
          'hello',
          'goodbye'
        ]
        CODE
      =code(code)
  
      :markdown
  
  
    %section.exercise
      :markdown
        ## Exercise - Configure your node app
  
        Create a configuration object for your Node server
  
  