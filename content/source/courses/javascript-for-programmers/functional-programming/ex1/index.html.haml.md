%article
  
    %section
      :markdown
  
        # Guess the output
  
        For each of the following, try to work out what the output will be. Run the code to check your answer.
  
        ## 1.
  
      :ruby
        code = <<-CODE
        var a = 12;
        (function() {
          alert(a);
        })();
        CODE
      =code(code)
  
      :markdown
  
        ## 2.
  
      :ruby
        code = <<-CODE
        var a = 5;
        (function() {
          var a = 12;
          alert(a);
        })();
        CODE
      =code(code)
  
      :markdown
  
        ## 3.
  
      :ruby
        code = <<-CODE
        var a = 10;
        var x = (function() {
          var a = 12;
          return (function() {
            alert(a);
          });
        })();
  
        x();
        CODE
      =code(code)
  
      :markdown
  
        ## 4.
  
      :ruby
        code = <<-CODE
        var a = 10;
        var x = (function() {
          var y = function() {
            var a = 12;
          };
          return function() {
            alert(a);
          }
        })();
  
        x();
        CODE
      =code(code)
  
      :markdown
  
  
        ## 5.
  
      :ruby
        code = <<-CODE
        var a = 10;
        var x = (function() {
          (function() {
            a = 12; // <<< look carefully at this line.
          })();
          return (function() {
            alert(a);
          });
        })();
  
        x();
        CODE
      =code(code)
  
      :markdown
  
        ## 6.
  
      :ruby
        code = <<-CODE
        var a = 10;
        (function() {
          var a = 15;
          window.x = function() {
            alert(a);
          }
        })();
  
        x();
        CODE
      =code(code)
  
      :markdown
  
        ## Further Reading
  
        [Read my post on "What is a closure" on Stack Overflow](http://stackoverflow.com/a/7464475/687677)
  