---
  title: "Lists Exercise"
  section: "webdev"
  exercise: "lists"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        #Lists
  
        Lists are used a lot in HTML, most commonly to make menus and navigation. They come in two types. Ordered lists have bullet points, and Unordered lists have numbers. For this exercise, we will mark up a list of cat types as a bulleted list.
  
        Why cats? I like cats. Use dogs if you're some sort of cat hater, I don't mind.
  
    %section.exercise
      :markdown
  
        ## Exercise - Mark up the cats
  
        Use a list like the following:
  
      :ruby
        code = <<-CODE
        Persian
        Siamese
        Ragdoll
        Pixie-Bob
        Devon Rex
        CODE
      =code(code, :html)
  
      :markdown
  
        1. Wrap the whole list in opening and closing unordered list tags \<ul></ul>. Doing this tells the web browser that all the elements belong to the same list.
        2. Wrap each individual item on the list in list item tags <li> </li>. Doing this separates each list item, one from the other. When you've done this, view in your browser.
        3. For extra credit, create a numbered list using the same data. Do this by changing the unordered list tag into an ordered list tag <ol>
  
  
        Your final document should look like this:
  
        * Persian
        * Siamese
        * Ragdoll
        * Pixie-Bob
        * Devon Rex
  
  
    %section
      :markdown
  
        ## Nested Lists
  
        Lists can go inside other lists. We use this a lot for hierarchical navigation, or just for presenting information clearly.
  
        1. First enter and mark up the following list as an unordered list.
  
      :ruby
        code = <<-CODE
        Dogs
        Cats
        Hamsters
        CODE
      =code(code, :html)
  
      :markdown
  
        1. Now add the following sublist of types of dogs. Do this by creating a new ordered list and inserting it into the dogs list item, just before the closing </li> tag.
  
      :ruby
        code = <<-CODE
        Afghan Hound
        Beagle
        Norfolk Terrier
        CODE
      =code(code, :html)
  
      :markdown
  
        Now create similar lists for cats and hamsters.
  
        Your final document should look something like this:
  
        * Dogs
          * Afghan Hound
          * Beagle
          * Norfolk Terrier
        * Cats
          * Persian
          * Siamese
          * Ragdoll
          * Hamsters
          * Asyrian
          * Black Russian
  
  
    %section.downloads
      :markdown
  
        ## Downloads
  
        Download the exercise document here:
  
        <https://www.dropbox.com/sh/efzdwejrtgydybo/AABcXrypvcuwtrBabuHe8vuea?dl=1>
  
  