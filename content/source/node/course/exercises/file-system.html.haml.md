%article
    %section
      :markdown
  
        # Filing
  
        We can access the file system using the fs module. This gives us methods to read from and write to a file.
  
        IO operations are by their very nature slow and error prone. The fs module allows us to specify a callback function which will have access to our file. The file will be opened for you, then the callback will be invoked and the file passed in to it. You don't need to worry about opening and closing the file, you just need to write code to talk to the file object which you will receive.
  
        Node is not blocked during IO, because your code is not invoked until the file is ready for writing.
  
        ## First require fs
  
        We will need the fs module, so first require it, like this:
  
      :ruby
        code = <<-CODE
        var fs = require('fs');
        CODE
      =code(code)
  
      :markdown
  
        ## __dirname
  
        __dirname is a special variable that always points to the current working directory.
  
        If we console.log __dirname it will give us a string showing us our current directory.
  
  
        ## Read a file with fs.readFile().
  
        We can read the file using fs.readFile():
  
      :ruby
        code = <<-CODE
        fs.readFile(path, function (error,data) {
          // data contains the file contents
          // error is null if no error occurred
        });
        CODE
      =code(code)
  
  
    %section.exercise
      :markdown
  
        ## Exercise - get the current directory
  
        Create a little program that outputs the current working directory.
  
        Extend your Node server so that it can output the value of __dirname.
  
    %section.exercise
      :markdown
        ## Exercise - Read a file
  
        Make a file containing some content. Write a program which can read the file from the current directory and output it to to console.
  
    %section
      :markdown
        ## Node is Asynchronous with Callback Functions
  
        JavaScript has an unusual way of dealing with potentially slow operations such as reading from the file system, using a *callback function*. Say we have code like this.
  
      :ruby
        code = <<-CODE
  
        console.log('Before');
        fs.readFile(path, function (error,data) {
          console.log('** During! **');
        });
        console.log('After');
        CODE
      =code(code)
  
      :markdown
  
        If our code was executed synchronously (i.e. in order), we would expect this little program to output something like this:
  
      :ruby
        code = <<-CODE
        Before
        ** During! **
        After
        CODE
      =code(code, :bash)
  
      :markdown
  
        If we actually run our code, we find instead we most likely see something like this:
  
      :ruby
        code = <<-CODE
        Before
        After
        ** During! **
        CODE
      =code(code, :bash)
  
      :markdown
  
        This is because the callback function is not actually executed until the filesystem has opened the file for reading, which will take more time than it takes to log the word "After". This will be a familiar pattern if you have previously used DOM scripting or JQuery.
  
  
    %section.exercise
      :markdown
        ## Exercise - Extend your node server so that it can serve out a file
  
        Create a folder called views (there's nothing special about this folder name, it's just a common name for one part of a standard MVC pattern). In this folder make a file called about.html. Add some content to it.
  
        Use fs.readFile to get hold of the about.html file. Remember you can use __dirname to get the current directory. In the fs callback use response.write() to write the file contents to the response. Finally call response.end to send the about content to the user.
  
        Remember callbacks are asynchronous, you don't know how long it will take to start reading the file, and Node will not wait. **This means you will need to call response.end in the fs callback or the response will be returned before the file has been read.** Note this.
  
        Now make it so!
  
      %img{ src: '/images/make-it-so-captain.jpg' }
  
    %section.exercise
      :markdown
  
        ## Further Exercise - Re-implement Apache
  
        Use the path portion of the URL to decide which file to show. You can get this by inspecting the request object.
  
        *There are obvious security concerns here. Don't do this on a live server please!!!*
  
    %section.exercise
      :markdown
        ## Farther further exercise - 404
  
        If the file doesn't exist, the error object will be non-null. Detect this case and return a 404.
  
        Congratulations! You've implemented a rudimentary Apache! Of course there are limitations here, there's no mime-type handling and security in non existent. In the next section we'll see how we can use express to create static file serving middleware.
  
    %section
      :markdown
        ## Downloads
  
        [Code Samples (dropbox)](https://www.dropbox.com/sh/daacc6yr3cc9uwv/AABBLOh-UQPUioooykEaE1tga?dl=1)
  