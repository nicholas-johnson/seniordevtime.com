---
  title: "Filters - AngularJS Exercise"
  section: "angular"
  exercise: "custom-filters"
  layout: "exercise"
  ---
  
  %section
    :markdown
  
      # Filter Exercises
  
      ## Upshot
  
      * Filters are provided for us by little factory functions which we define.
      * Define a filter using myApp.filter('filterName', function() {});
      * the function is a factory which should return another function which acts as the filter.
  
      ## For example
  
    :ruby
      code = <<-CODE
      myApp.filter('filterName', function() {
        return function(str) {
          return "hello there " + str + "!";
        }
      });
      CODE
    =code(code)
  
  %section.exercise
    :markdown
  
      ## Exercise - Reverse Filter
  
      You can reverse a string using something like:
  
    :ruby
      code = <<-CODE
      "abc".split('').reverse().join('');
      CODE
    =code(code)
  
    :markdown
  
      You might like to try this out in a console.
  
      Create a reverse filter that reverses a string.
  
  
  %section.exercise
    :markdown
  
      ## Exercise - Filtering the first element from an array
  
      We can filter an array in a similar way. The filter returns a function which receives an array, and returns a modified array.
  
      Create a filter that returns only the first element in the array.
  
  %section.exercise
    :markdown
  
      ## Exercise - Pagination
  
      Create a filter that returns the first n elements from an array.
  
  
  %section.exercise
    :markdown
  
      ## Exercise - Tweets
  
  
  
      Tweets often contain #hashtags and @mentions. Write a a filter that takes a raw tweet and hyperlinks the mentions and hashtags.
  
      Something like this:
  
    :ruby
      code = <<-CODE
      I'm sorry @dave, #icantdothat
      CODE
    =code(code, :html)
  
    :markdown
  
      becomes
  
    :ruby
      code = <<-CODE
      I'm sorry
      <a href="http://twitter.com/@dave">
        @dave
      </a>,
      <a href="http://twitter.com/search?query=#icantdothat">
        #icantdothat
      </a>
      CODE
    =code(code, :html)
  
    :markdown
  
      ## Karma
  
      We can get hold of a filter using the $filter injectable service. Make use of this service to write a Karma test for your filter.
  
  %section.exercise
    :markdown
  
      ## Exercise - Redit style vote filtering
  
      Given an array of comments and votes like this:
  
    :ruby
      code = <<-CODE
      [
        {
          comment: "I really like cheese",
          votes: 10
        },
        {
          comment: "I'm not so sure about edam though",
          votes: -2
        },
        {
          comment: "Gouda properly rocks!",
          votes: 4
        },
        {
          comment: "I quite like a bit of mild cheddar",
          votes: -19
        },
        {
          comment: "Cheese is just old milk",
          votes: -8
        }
      ]
      CODE
    =code(code)
  
    :markdown
  
      Create a vote filter that only shows comments which scored over a certain amount.
  
      Hint - use the Array filter method: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter>
  
      Now add a number field and bind it to a value. When you change the value, only comments with a higher value will be shown.
  
      for bonus points, use a range slider like so:
  
    :ruby
      code = <<-CODE
      <input type="range" min="-100" max="100" />
      CODE
    =code(code)
  
    :markdown
  