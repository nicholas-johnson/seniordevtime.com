%article
    %section
      :markdown
        # Parsing Data
  
        D3 comes with built in parsers for most well formed text based data formats. You will get back a JSON object.
  
        ## CSV
  
        We can parse CSV using the csv.parse function:
  
      :ruby
        code = <<-CODE
        d3.csv.parse("'a', 'b', 'c'\\n 1, 2, 3");
        CODE
      =code(code)
  
      :markdown
  
        We will get back an object containing strings like this:
  
      :ruby
        code = <<-CODE
        {
          'a': '1',
          'b': '2',
          'c': '3'
        }
        CODE
      =code(code)
  
      :markdown
  
        Notice how all the values are strings.
  
      %section.exercise
        :markdown
          ## Exercise - parsing
  
          Take an Excel spreadsheet and export it as a CSV file. Now host this locally and use AJAX to load it.
  
          You can use the d3.csv function to load CSV.
  
          Parse it and plot the result in a format that makes sense to you.
  