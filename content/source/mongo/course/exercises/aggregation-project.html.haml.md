;;;
  "title": "Modifying a stream with $project",
  "description": "We can modify the documents in the pipe, adding new fields and removing others",
  "section": "mongo",
  "exercise": "aggregation-project",
  "layout": "exercise"
  ;;;
  
  %article
    %section
      :markdown
  
        # Modifying a stream with $project
  
        The find function allowed us to do simple whitelist projection. The aggregate pipeline gives us many more options.
  
        We can use $project to modify all the documents in the pipeline. We can remove elements, allow elements through, rename elements, and even create brand new elements based on expressions.
  
        Say we have a set of voucher codes, like this:
  
  
      :ruby
        code = <<-CODE
        {
          "firstName" : "Dave",
          "lastName" : "Jones",
          "code" : "74wy zphz",
          "usedAt" : ISODate("2015-06-13T17:47:20.423Z"),
          "email" : "123@gmail.com"
        },
        {
          "firstName" : "Stuart",
          "lastName" : "Hat",
          "code" : "7uwz e3cw",
          "usedAt" : ISODate("2015-06-13T17:47:50.489Z"),
          "email" : "456@gmail.com"
        }
        ...
        CODE
      =code(code)
  
      :markdown
  
        We can use project to restrict the fields that are passed through. We pick the fields we like and set true to pass them through unchanged.
  
  
      :ruby
        code = <<-CODE
        db.entrycodes.aggregate(
          {
            '$project' : {
              email: true,
              code: true
            }
          }
        )
        CODE
      =code(code)
  
  
    %section
      :markdown
  
        ## Removing the id
  
        Remove the id field bay passing _id: false.
  
        This will yield a set something like the following:
  
  
      :ruby
        code = <<-CODE
        [
          {
            "code" : "7uwy zphz",
            "email" : "123@gmail.com"
          },
          {
            "code" : "7uwz eccw",
            "email" : "123@gmail.com"
          }
        ]
        CODE
      =code(code)
  
      :markdown
  
    %section
      :markdown
  
        ## Renaming Fields
  
        We can use project to rename fields if we want to. We use an expression: $lastName to pull out the value from the lastName field, and project it forward into the surname field.
  
      :ruby
        code = <<-CODE
        db.entrycodes.aggregate(
          {
            '$project' : {
              surname: "$lastName"
            }
          }
        )
        CODE
      =code(code)
  
      :markdown
  
        This will yield something like the following:
  
      :ruby
        code = <<-CODE
        [
          {
            surname : "Jones"
          },
          {
            surname : "Hat"
          }
          ...
        ]
        CODE
      =code(code)
  
  
    %section
      :markdown
  
        ## Chaining $match and $project
  
        We can chain $match and $project together. Say we have a list of codes, and some have not yet been used. We want to pull out the names and emails, but only from the codes which have been used.
  
      :ruby
        code = <<-CODE
        [,
          {
            "code" : "7uwz eccw"
          }
          {
            "firstName" : "Dave",
            "lastName" : "Jones",
            "code" : "7uwy zphz",
            "usedAt" : ISODate("2015-06-13T17:47:20.423Z"),
            "email" : "123@gmail.com",
            "winner": true
          },
          {
            "firstName" : "Stuart",
            "lastName" : "Hat",
            "code" : "7uwz eccw",
            "usedAt" : ISODate("2015-06-13T17:47:50.489Z"),
            "email" : "123@gmail.com"
          },
          {
            "code" : "7uwz eccw"
          }
          ...
        ]
        CODE
      =code(code)
  
      :markdown
  
        We might first $match the codes which have a usedAt field, and then use $project to pull out the names and emails from the remainder.
  
      :ruby
        code = <<-CODE
        db.entrycodes.aggregate(
          {
            $match: {
              usedAt: {
                $exists: true
              }
            }
          },
          {
            $project: {
              firstName: true,
              lastName: true,
              email: true,
              _id: false
            }
          }
        )
        CODE
      =code(code)
  
    %section.exercise
      :markdown
        ## Exercise
  
        * Make a list of cat names.
        * First $match people with cats, or the output will be a bit sparse.
        * Now use $project to pull out only the cat names. You will need to use the dot syntax: '$cat.name'.
  
    %section.exercise
      :markdown
        ## Exercise - Stocks
  
        * Use the stocks JSON file.
        * rename "Profit Margin" to simply "Profit". Surpress all other output including the id. I only want to see profit, the company name and the ticker.
  