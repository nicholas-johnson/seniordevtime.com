;;;
  "title": "More uses of $project",
  "description": "Project allows us to compose new fields based on expressions. Here we see how.",
  "section": "mongo",
  "exercise": "aggregation-dynamic-project",
  "layout": "exercise"
  ;;;
  
  %article
    %section
      :markdown
  
        # Creating new fields with $project
  
        We can use project to add new fields to our documents based on expressions.
  
        Say we had a list of people, like so:
  
      :ruby
        code = <<-CODE
        {firstName: "Chinstrap", surname: "McGee"}
        {firstName: "Bootle", surname: "Cheeserafter"}
        {firstName: "Mangstrang", surname: "Fringlehoffen"}
        CODE
      =code(code)
  
      :markdown
  
        We can use project to compose a name field, like so:
  
      :ruby
        code = <<-CODE
        db.entrycodes.aggregate(
          {
            $project: {
              name: {$concat: ['$firstName', ' ', '$surname']}
            }
          }
        )
        CODE
      =code(code)
  
      :markdown
        This will give us results like this:
  
  
      :ruby
        code = <<-CODE
        { "name" : "Dave Smith" },
        { "name" : "Mike Moo" }
        CODE
      =code(code)
  
  
  
  
    %section.exercise
      :markdown
  
        ## Exercise - String aggregation operators
  
        We saw here how to use $concat to make a new attribute containing a concatenated string. Have a look at the other String aggregation operators here:
  
        <http://docs.mongodb.org/manual/reference/operator/aggregation-string/>
  
        Attempt to capitalize all the names. This is useful because Mongo grouping and matching is case sensitive.
  
    %section
      :markdown
        ## Conditional fields with $cond
  
        We can set the value of a field using a boolean expression using $cond. There are a couple of ways to use $cond. You may wish to review the documentation here: <http://docs.mongodb.org/manual/reference/operator/aggregation/cond/>
  
        Say we have a set of customers, and some of them have complaints. We might set a flag on all of the unhappy customers like so:
  
      :ruby
        code = <<-CODE
        db.customers.aggregate(
          {
            $project:{
              unhappy: {
                $cond: { if: '$complaints', then: true, else: false }
              },
              complaints: '$complaints'
            }
          }
        )
        CODE
      =code(code)
  
      :markdown
  
        Unhappy will either be true or false.
  
    %section.exercise
      :markdown
        ## Exercise - Add a hasCat field
  
        * Use projection to add a hasCat field. This might form the basis for a future grouping or counting.
  
  
    %section.exercise
      :markdown
        ## Exercise - Project the stocks
  
        * Modify your stocks. Project the profit as a profit field.
        * Add a isProfitable field to show if the profit is greater than 0.
        * Add a buyNow field to show if the profit is greater than 0.5
  
    -# Answers
    -# db.people.aggregate(
    -#   {
    -#     $project:{
    -#       hasCat: {
    -#         $cond: { if: '$cat', then: true, else: false }
    -#       },
    -#       cat: '$cat'
    -#     }
    -#   }
    -# )
  
  
  