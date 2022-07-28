---
  title: "Hex Exercise"
  section: "webdev"
  exercise: "hex"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
  
        # Using hexadecimal color references
  
        Generally speaking, the built in color names like red, green, puce and teal are not up to scratch in a real web situation. For a start, there’s no universally defined standard of what colour puce actually is. Is it a reddish brown, or more of a browny red? For most circumstances we need to define our colours more accurately using Hexadecimal colour notation, commonly called Hex codes.
  
        Hexadecimal is base 16. Our everyday decimal notation uses base 10, so we count from 0 to 9, then start again at 10. There’s nothing special about base 10, We just happen to have 10 fingers so it makes finger counting easier.
  
        The ancient Egyptians counted finger joints, so used base 12. To this very day, we still use their 12 hour clock.
  
  
        ## Hexadecimal Decimal Equivalent
  
        In Hex, we count from 0 to 15, then start again at 10. To represent the numbers from 10 to 15 we use the first six letters of the alphabet like so:
  
        Decimal | Hexadecimal
        ---     | ---
        1       | 1
        2       | 2
        3       | 3
        4       | 4
        5       | 5
        6       | 6
        7       | 7
        8       | 8
        9       | 9
        10      | a
        11      | b
        12      | c
        13      | d
        14      | e
        15      | f
        16      | 10
        17      | 11
        18      | 12
        19      | 13
        20      | 14
        21      | 15
        22      | 16
        23      | 17
        24      | 18
        25      | 19
        26      | 1a
        27      | 1b
        28      | 1c
        29      | 1d
        30      | 1e
        31      | 1f
        32      | 20
  
        The reason we do it like this is because of the way information is stored in a computer. Basically, 16 is 2 to the power 4. This means that the numbers 0 to 15 can be represented completely by 4 binary digits with no wasted memory.
  
        Computers use binary digits, and wasted memory is bad. That memory aint free ya know.
  
        Colour values are always expressed using 3 hex numbers jammed together, one number for each primary colour: Red Green and Blue.
  
        For example, if we wrote #f00 that would be red full, green off and blue off, making a nice fire engine red colour.
  
        There are two ways to write a hex code, long form and short form. Long form is more accurate, short form is quicker to type.  Short form uses a single hex digit for each colour component. Long form uses two, making it more accurate.
  
        ## Some example Colours
  
        Red Component | Green component | Blue Component | Colour
        ------------- | --------------- | -------------- | --------
        0             | 0               | 0              | Black
        f             | f               | f              | White
        8             | 8               | 8              | Mid grey
        0             | f               | 0              | Full green
        f             | f               | 0              | Full Yellow
  
        To make an item full green, we might type:
  
      :ruby
        code = <<-CODE
        <p style="color:#0f0">Some green text</style>
        CODE
      =code(code, :html)
  
      :markdown
  
        To make it pale blue we might add a little more red and yellow making it lighter like this:
  
      :ruby
        code = <<-CODE
        <p style=”color:#99f”>This text is pale blue</p>
        CODE
      =code(code, :html)
  
      :markdown
  
        The same colour expressed in long notation would look like this:
  
      :ruby
        code = <<-CODE
        <p style=”color:#9999ff”>This text is also pale blue</p>
        CODE
      =code(code, :html)
  
    %section.exercise
      :markdown
  
        ## Exercise - Pick some colours
  
        1. Enter the following document and wrap each line in p tags
        2. For each line, add styling to make it the correct colour.
  
        **Use this document:**
  
  
      :ruby
        code = <<-CODE
        This line is dark grey
        This line is full red
        This line is rosy pink
        This line is dark blue
        This line is mid green
        This line is purple
        This line is the colour of a brown paper bag.
        This line is the colour of a stormy sea
        This line is the colour of a streetlamp in the early evening.
  
        CODE
      =code(code, :html)
  
      :markdown
  