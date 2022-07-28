%article
    %section
      :markdown
  
        # Running Node
  
        We install Node using the double click installer from [nodejs.org](http://nodejs.org), or using a package manager like brew, apt-get or aptitude.
  
        ## Installation
  
        First install Node. If you have node already you can skip this step. Type node --version into a console to find out if you have it.
  
        If not, go on and install it.
  
        ### Option 1 - install from the website
  
        Visit [nodejs.org](http://nodejs.org) and download the installer for your platform.
  
        ### Option 2 - install via brew (OSX only)
  
        If you're on a Macintosh, you can install via brew. Substitute brew for aptitude, or another package manager if you prefer a different flavour of Linux.
  
      :ruby
        code = <<-CODE
        brew install nodejs
        CODE
      =code(code)
  
      :markdown
  
        You may need to restart your console.
  
        Verify node is working by typing node --version into a console. If you see a version number you have succeeded. You can type any JavaScript here.
  
        ## The Node console
  
        You can open up a NodeJS console from the command line with the node command, like so:
  
      :ruby
        code = <<-CODE
        node
        CODE
      =code(code)
  
      :markdown
  
        If all is well you should drop into a console where you can type arbitrary JavaScript commands. You can do maths, create functions, assign variables, everything you can do with JavaScript.
  
  
    %section.exercise
      :markdown
  
        ## Exercise - Node Console
  
        Let's try out the Node console and execute a command. Drop into the node console by typing node. Now try the following:
  
        1. Add 10 + 10.
        2. Use console.log('hello world') to output hello world.
        3. Find out how many seconds there are in a year. How many seconds there are in a century. I don't know the answer to this. See, you're smarter than me already.
  
  
    %section
      :markdown
  
        ## Running a program
  
        You can also run saved programs using the node command. Node files have a .js (JavaScript) suffix, like this: program.js.
  
        We can execute our JavaScript program using node like this:
  
      :ruby
        code = <<-CODE
        node program.js
        CODE
      =code(code)
  
  
    %section.exercise
      :markdown
        ## Exercise - Executing a program
  
        You can make Node output to the terminal using console.log(). Create a file called app.js and add a line that uses console.log() to tell Node write "Hello World" to the console.
  
        Run your program from the console using the node command.
  
        You should see hello world.
  
  
  
  
    %section.exercise
      :markdown
        ## Further exercise
  
        You can find the current time using:
  
      :ruby
        code = <<-CODE
        new Date();
        CODE
      =code(code)
  
      :markdown
  
        Create a node program that tells you the current time and date.
  
        You can get a date object for a specific date using:
  
      :ruby
        code = <<-CODE
        new Date(2022,11,25);
        CODE
      =code(code)
  
      :markdown
  
        You can subtract one date object from another to get the number of milliseconds between them.
  
      :ruby
        code = <<-CODE
        dateOne - dateTwo;
        CODE
      =code(code)
  
      :markdown
  
        Make a timeTillChristmas program that tells you how many seconds there are until Christmas.
  
        Optionally make it tell you how many days there are.
  