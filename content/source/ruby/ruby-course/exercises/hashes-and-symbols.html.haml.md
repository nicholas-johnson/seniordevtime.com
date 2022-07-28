---
  title: "Ruby Symbols and Hashes"
  description: ""
  section: "ruby"
  course: "ruby-course"
  exercise: "hashes-and-symbols"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        # Hashes and Symbols
  
        Hashes are a big deal in Ruby. We use them a lot, particularly when passing bits of data around. Symbols are tiny lightweight Ruby placeholder objects. They are often used in conjunction with hashes. In this section we will look at hashes, symbols, and some of their common uses.
  
        ## Symbols are not magic runes
  
        Symbols often seem like magic runes to Ruby newcomers. In fact they’re just little objects that have some special features and syntax surrounding them to make them a little easier to use and a little lighter on the computers memory.
  
        ## Symbol syntax
  
        Symbols are defined using the colon operator or the to_sym method:
  
      :ruby
        code = <<-CODE
        :price
        :length
        :outrageousness
        "My Price".to_sym
        CODE
      =code(code)
  
      :markdown
  
        ## Features of Symbols
  
        * Symbols are tiny little objects
        * Symbols don’t have a value, they are placeholders, not variables.
        * There can only ever be one symbol with a particular name, this is managed by Ruby. Because of this they are not processor or memory intensive.
        * Symbols can potentially represent a memory leak if you create a lot of them.
  
        ## There can only be one
  
        A symbol will only exist once in memory, no matter how many times it is used. If for example, you create two symbols in different places both called :name for example, only one object would be created. This object would persist for as long as the Ruby interpreter was running.
  
        ## Uses of Symbols
  
        Symbols are most commonly used as placeholders in Hashes. We have used symbols already in Rails, for example the Rails params hash associates any the values of any parameters passed in by the user (from a form or in the url) with a symbol representing the name of that value.
  
    %section
      :markdown
  
        # Hashes
  
        Hashes are objects that associate lists of arbitrary objects with each other. For example:
  
      :ruby
        code = <<-CODE
        animals = Hash.new
        animals[:tall] = "giraffe"
        animals[:minute] = "kitten"
        puts animals.inspect
        CODE
      =code(code)
  
      :markdown
  
        ## Hash Assignment Shorthand
  
      :ruby
        code = <<-CODE
        animals = {:tall => "giraffe", :minute => "kitten"}
        puts animals[: minute]
        => kitten
        CODE
      =code(code)
  
      :markdown
  
        ## Setting Default Values in a Hash
  
        A hash will return nil if it can't find any matching keys. You can set a default value that a hash will return in this instance should you so desire.
  
      :ruby
        code = <<-CODE
        animals = Hash.new("monkey")
        puts animals[:funny]
        => "monkey"
        CODE
      =code(code)
  
      :markdown
  
        You can also set this value using the Hash.default method
  
      :ruby
        code = <<-CODE
        animals.default = "star mole"
        puts animals[:odd]=> star mole
        CODE
      =code(code)
  
      :markdown
  
        ## Any Objects can be used as a key
  
        Any Object can be used as a key. Here we use the number 45 as a key, and store the root directory of the local file system as a value:
  
      :ruby
        code = <<-CODE
        animals[45] = Dir.new '/'
        puts animals.inspect # {45 => #<Dir:0x284a394>
        CODE
      =code(code)
  
      :markdown
  
    %aside.box
      :markdown
        It’s all allowed.
  
        One caveat to bear in mind, if you are using Ruby 1.8.6 or less, you can't use a hash as a key in another hash. This is an issue that was addressed in Ruby 1.8.7 and up.
  
  
    %section.exercise
      :markdown
        ## Exercise - Hashes and Symbols
  
        Create a hash to hold a list of feelings and foods. It should look like something like this, only longer:
  
      :ruby
        code = <<-CODE
        food_hash = {
          :happy => "ice cream",
          :pensive => "witchetty grub"
        }
        CODE
      =code(code)
  
      :markdown
  
        Write a function that allows a user to type in a feeling and have it return the corresponding food (Tip: use to_sym to convert the user's input into a symbol)
  
  
    %section
      :markdown
  
  
        ## Functions that receive a Hash
  
        A function can receive a hash of values. This is tremendously useful, and we do this all the time.
  
      :ruby
        code = <<-CODE
        def get_greeting_for(args={})
          name = args[:name] || "anonymous"
          return "hello #\{name}"
        end
  
        puts get_greeting_for :name => "Fat Tony"
        => "hello Fat Tony"
  
        puts get_greeting_for
        => "hello anonymous"
        CODE
      =code(code)
  
      :markdown
  
        Here our function receives a parameter we've called args. The default value of the args parameter is an empty hash. Any key value pairs we pass will go into args, and can be pulled out.
  
        On the second line we do this:
  
      :ruby
        code = <<-CODE
        name = args[:name] || "anonymous"
        CODE
      =code(code)
  
      :markdown
  
        Here we set the value of name to be either the value stored in args under the :name key, or if this evaluates to nil (and therefore false) we set it to anonymous. This is tremendously useful, since we can create functions that accept multiple arguments, in any order, with any defaults that make sense.
  
        You should get used to writing configurable, extensible methods that receive a hash. This is a real rubyism.
  
    %section.exercise
      :markdown
        ## Exercise - receive a hash
  
        Extend your food finder function so it can receive a hash. You should be able to call it like this:
  
      :ruby
        code = <<-CODE
        food mood: :pensive
        CODE
      =code(code)
  
      :markdown
  
        ## Write RSpec
  
        Write RSpec to verify it does in fact work.
  
  
    %section
      :markdown
  
        ## Review
  
        * Symbols are singleton strings. They are very lightweight, and can be used anywhere you need a unique object, such as in a hash.
        * Hashes are dictionary objects, sometimes called hash tables. They associate keys with values.
        * You can use any object as a key, and store any object as a value.
        * We commonly use symbols as keys in hashes
        * A special syntax exists which lets us pass a hash to a function.
  
  
  
    %section.exercise
      :markdown
  
        ## Hard exercise - A substitution cypher
  
        A substitution cypher is one in which each letter is changed for another, so 'a' might map to 'z' and 'b' might map to 'y'.
  
        Here we will create a substitution cypher in a very few words.
  
        We can use zip to combine two arrays
  
      :ruby
        code = <<-CODE
        [1,2,3].zip [4,5,6]
          => [[1,4],[2,5],[3,6]]
        CODE
      =code(code)
  
      :markdown
  
        we can compose an array of characters from a range like this:
  
        ('a'..'z').to_a
  
        We can create a Hash from arrays of arrays, like so:
  
      :ruby
        code = <<-CODE
        Hash[[[1,4],[2,5],[3,6]]]
          => {1 => 4, 2 => 5, 3 => 6}
        CODE
      =code(code)
  
      :markdown
  
        You can rotate an array using rotate, like this
  
      :ruby
        code = <<-CODE
        [1,2,3].rotate 1
          => [2,3,1]
        CODE
      =code(code)
  
      :markdown
  
  
        Use these techniques to create a substitution cypher hash, something like this:
  
      :ruby
        code = <<-CODE
        {'a' => 'b', 'b' => 'c', c => 'd' ...}
        CODE
      =code(code)
  
      :markdown
  
        1. Now write a function that can accept a string.
        2. Use split to break the string into an array.
        3. Use map with a block to rewrite each element, so a becomes z, etc...
        4. Now use join to turn the array back into a string.
  
        If you have get everything right you should be able to pass the string back though, and it will go back to how it was.
  
        For bonus points, write the function body in two lines of code.
  
  
  
    %section.exercise
      :markdown
  
        ## Exercise - Receiving a hash
  
        Modify your substitution cypher so it can receive a hash of values.
  
        I want to be able to call it like this
  
      :ruby
        code = <<-CODE
        substitution_cypher "Hello Ruby", rotate: 3
        CODE
      =code(code)
  