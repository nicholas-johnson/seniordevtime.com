---
  title: "Ruby Arrays"
  description: ""
  section: "ruby"
  course: "ruby-course"
  exercise: "arrays"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        # Arrays
  
        Like most languages Ruby allows you to create Arrays to hold multiple values. Arrays in Ruby are one dimensional, though you can declare an array of arrays if you feel the need.
  
        ## Creating Arrays ##
  
        Create an array using square brackets like so:
  
      :ruby
        code = <<-CODE
        cakes = ["florentine", "lemon drizzle", "jaffa"]
        CODE
      =code(code, :ruby)
  
      :markdown
  
        Access an array using square brackets:
  
      :ruby
        code = <<-CODE
        cakes[0]
          => "florentine"
        CODE
      =code(code, :ruby)
  
      :markdown
  
        ## Zero Indexed ##
  
        Arrays are zero indexed, so 0 is the first element.
  
        ## Polymorphic ##
  
        As you might expect from Ruby, arrays can hold any type of element. This is allowed:
  
      :ruby
        code = <<-CODE
        ["hello", 1, 0.5, false]
        CODE
      =code(code, :ruby)
  
      :markdown
  
        ## Manipulating arrays ##
  
        Arrays can be manipulated in a huge variety of ways For example:
  
        ### Adding
  
      :ruby
        code = <<-CODE
        [1,2,3] + [4,5,6]
          => [1, 2, 3, 4, 5, 6]
        CODE
      =code(code, :ruby)
  
      :markdown
  
        ### Subtracting
  
      :ruby
        code = <<-CODE
        [1,2,3] - [1,3]
          => [2]
        CODE
      =code(code, :ruby)
  
      :markdown
  
        ### Appending
  
      :ruby
        code = <<-CODE
        [1,2,3] << 4
          => [1, 2, 3, 4]
        CODE
      =code(code, :ruby)
  
      :markdown
  
        ### Multiplication
  
      :ruby
        code = <<-CODE
        [1,2,3] * 2
          => [1, 2, 3, 1, 2, 3]
        CODE
      =code(code, :ruby)
  
      :markdown
  
  
        ## Handy dandy array API
  
        There are also a raft of array methods we can use, such as:
  
      :ruby
        code = <<-CODE
        [1,2,3].reverse
          => [3, 2, 1]
  
        [1,2,3].include? 2
          => true
        CODE
      =code(code, :ruby)
  
      :markdown
  
        You might notice here that this method name has a question mark in it? This is a Ruby convention. Methods with a question mark return true or false.
  
      :ruby
        code = <<-CODE
        [4,9,1].sort
          => [1, 4, 9]
        CODE
      =code(code, :ruby)
  
      :markdown
  
        ## Array splitting
  
        Parallel assignment works when pulling values out of a array.
  
      :ruby
        code = <<-CODE
        array_of_numbers = [1,2,3,4]
        a,b = array_of_numbers
        a
          => 1
        b
          => 2
        CODE
      =code(code, :ruby)
  
      :markdown
  
        We can also pull the first element, and return the rest of the array should we wish to:
  
      :ruby
        code = <<-CODE
        arr = [1,2,3]
        a,*arr = arr
        a
          => 1
        arr
          => [2, 3]
        CODE
      =code(code, :ruby)
  
      :markdown
  
        This is a clever trick to know as it impresses people and make you look brainy.
  
        ## Creating an array using the to_a method
  
        The to_a method allows many objects to be converted to arrays. For example an array can be created from a range as follows
  
      :ruby
        code = <<-CODE
        (1..10).to_a
          => [1,2,3,4,5,6,7,8,9,10]
        CODE
      =code(code, :ruby)
  
      :markdown
  
        ## Ranges
  
        Ranges are useful objects that can be used to represent a sequence. Ranges are defined using the .. or ... syntax. For example:
  
      :ruby
        code = <<-CODE
        1..10
        CODE
      =code(code, :ruby)
  
      :markdown
  
        represents the sequence of numbers between 1 and 10.
  
      :ruby
        code = <<-CODE
        1...10
        CODE
      =code(code, :ruby)
  
      :markdown
  
        represents a range that excludes the high value. In this case the numbers 1 to 9
  
  
        ### Ranges in Memory ###
  
        Ranges are compact. Every value in the range is not held in memory, so for example the range:
  
      :ruby
        code = <<-CODE
        1..100000000
        CODE
      =code(code, :ruby)
  
      :markdown
  
        ...takes up the same amount of memory as the range:
  
      :ruby
        code = <<-CODE
        1..2
        CODE
      =code(code, :ruby)
  
      :markdown
  
  
        ### Conversion to arrays ###
  
        Ranges can be converted to arrays using to_a like so
  
      :ruby
        code = <<-CODE
        (1..10).to_a
          => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        CODE
      =code(code, :ruby)
  
      :markdown
  
        Note we need to put braces around the range here to disambiguate the dots.
  
  
        ### Character Arrays ###
  
        We can also declare arrays of characters like this:
  
      :ruby
        code = <<-CODE
        'a'..'f'
        CODE
      =code(code, :ruby)
  
      :markdown
  
  
        ### Testing if a range contains a value. ###
  
        We can use the equality === operator to test if a range contains a value. For example:
  
      :ruby
        code = <<-CODE
        ('a'..'f') === 'e'
          => true
  
        ('a'..'f') === 'z'
          => false
        CODE
      =code(code, :ruby)
  
      :markdown
  
  
  
  
    %section.exercise
      :markdown
  
        ## Exercise -  Iterating over an array
  
        We can pass a block to an array to be executed on each item in that array. For example:
  
      :ruby
        code = <<-CODE
        ['fork','knife','spoon'].each {|table_item| puts table_item}
        CODE
      =code(code, :ruby)
  
      :markdown
  
        Our code doesn't need to know the internal details of the array, it just passes a block, and lets the array sort itself out.
  
        1. here is an array of strings. Pass a block to Array.each printing them out one by one.
  
      :ruby
        code = <<-CODE
        ['cats','hats','mats','caveats']
        CODE
      =code(code, :ruby)
  
      :markdown
  
        2. The each_with_index method accepts a block with two parameters, the value, and the index. Use it to print out the strings in the array preceded by their index in the array like this:
  
      :ruby
        code = <<-CODE
        1. cats
        2. hats
        3. mats
        4. caveats
        CODE
      =code(code, :ruby)
  
      :markdown
  
        3. Repeat the exercise above, but now only print out every string with an odd number index.
  
        4. Investigate the remove method. Modify your code to only print out only strings which contain the letter 'c'
  
        5. Functions which return nothing are hard to test. Modify your code so that instead of putting to the screen it returns a string. Use RSpec to test it.
  
    %section.exercise
      :markdown
        ## Exercise - Join
  
        Use the join method to join the array together with commas, you should get something like this:
  
      :ruby
        code = <<-CODE
        Fluffy, Hammy, Petunia
        CODE
      =code(code, :ruby)
  
      :markdown
  
        ## Array manipulation
  
        Reverse the order of the array, output something like this:
  
      :ruby
        code = <<-CODE
        Petunia, Hammy, Fluffy
        CODE
      =code(code, :ruby)
  
      :markdown
  
        ## Append two arrays to each other
  
        Create an array of dogs. append it to the first. using the plus operator, then output both arrays together, like this:
  
      :ruby
        code = <<-CODE
        Fluffy
        Hammy
        Petunia
        CODE
      =code(code, :ruby)
  
    %section.exercise
      :markdown
  
        ## Exercise - Map
  
        Use Map to capitalise each element in the array prior to output, like so:
  
      :ruby
        code = <<-CODE
        FLUFFY
        HAMMY
        PETUNIA
        CODE
      =code(code, :ruby)
  
      :markdown
  
        Now capitalise and reverse each element in the array.
  
      :ruby
        code = <<-CODE
        PETUNIA
        HAMMY
        FLUFFY
        CODE
      =code(code, :ruby)
  
  
  
    %section.exercise
      :markdown
  
        ## Exercise - Sort and reverse
  
        Use sort to sort the array alphabetically like so:
  
      :ruby
        code = <<-CODE
        BARKY
        FLUFFY
        GOMEZ
        HAMMY
        PETUNIA
        WOOFY
        CODE
      =code(code, :ruby)
  
      :markdown
  
        And sort the array in reverse order:
  
      :ruby
        code = <<-CODE
        WOOFY
        PETUNIA
        HAMMY
        GOMEZ
        FLUFFY
        BARKY
        CODE
      =code(code, :ruby)
  
  
  
    %section
      :markdown
  
        ### Sorting an Array Using a Block ###
  
        By default array.sort will sort any array of values using the <=> spaceship method of the value. This method as we have seen returns -1, 0 or 1 depending on whether the value is lower, equivalent or greater than another value. The String class implements the <=> method by comparing the two values alphabetically, so by default array.sort sorts an array of strings alphabetically like so:
  
      :ruby
        code = <<-CODE
        array = ["James", "Derek", "Stuart", "Thomas"]
        puts array.sort
          => Derek
          James
          Stuart
          Thomas
        CODE
      =code(code, :ruby)
  
      :markdown
  
        If we want to override this, there are two easy ways to do it. First we can override the spaceship operator (coming soon). Alternately, we can pass Array.sort a block which can be used instead. For example the following code sorts an array in order of the second letter:
  
      :ruby
        code = <<-CODE
        array = ["James", "Derek", "Stuart", "Thomas"]
        puts array.sort {|a,b| a[1] <=> b[1]}
          => James
          Derek
          Thomas
          Stuart
        CODE
      =code(code, :ruby)
  
      :markdown
  
        Nice and Simple.
  
  
    %section.exercise
      :markdown
  
        ## Exercise - Sort according to the length of the string.
  
        You can get the length of the string using "string".length.
  
      :ruby
        code = <<-CODE
        BARKY
        WOOFY
        HAMMY
        GOMEZ
        FLUFFY
        PETUNIA
        CODE
      =code(code, :ruby)
  
      :markdown
  
    %section
      :markdown
  
  
        ## Modifying each element of an array with map
  
        Map is an insanely useful array function that lets you modify each element of an array using a block.
  
        Say you have an array of strings:
  
      :ruby
        code = <<-CODE
        ['kittens', 'puppies', 'hamsters']
        CODE
      =code(code, :ruby)
  
      :markdown
  
        Lets say you want to convert this to an array of symbols, you could do something like
  
      :ruby
        code = <<-CODE
        ['kittens', 'puppies', 'hamsters'].map {|i| i.to_sym}
        CODE
      =code(code, :ruby)
  
      :markdown
  
  
    %section.exercise
      :markdown
        ## Exercise - Random Alphanumeric with Map
  
        Use the Array#map method to generate a random string. You can generate a random letter by making an array of acceptable characters like so:
  
      :ruby
        code = <<-CODE
        n = (0..9).to_a + ('a'..'z').to_a + ('A'..'Z').to_a + %w(_ -)
        CODE
      =code(code, :ruby)
  
      :markdown
  
        You can then pull a random one out like so:
  
      :ruby
        code = <<-CODE
        n.sample
        CODE
      =code(code, :ruby)
  
      :markdown
  
        Now use map to generate a 128 character random string.
  