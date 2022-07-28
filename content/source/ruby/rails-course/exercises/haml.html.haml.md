---
  title: "Alternatives to ERB - Haml and Markdown (also Slim)"
  description: ""
  section: "ruby"
  course: "rails-course"
  exercise: "haml"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        # Alternatives to ERB - Haml and Markdown (also Slim)
  
        We are going to try out Haml as an alternative templating engine. Haml is a beautiful, simple HTML preprocessor. Haml compiles directly to HTML, there's a one to one mapping.
  
        ## Haml has:
  
        1. Semantic indentation. Close tags are not necessary.
        2. Ruby style hashes for attributes.
  
        ## Exercise
  
        1. We are going to convert one of our views into Haml. Pick one at random from your blog, you could also choose a partial.
        2. Add gem 'haml' to your Gemfile. bundle and restart your server.
        3. Now check out the Haml documentation here: <http://haml.info/>
        4. Manually convert your view to basic Haml
  
        ## Exercise - Filters
  
        We are going to use a markdown filter to write text in Markdown. Markdown is a simple text preprocessing language.
  
        1. Check out filters in the Haml docs: <http://haml.info/docs/yardoc/file.REFERENCE.html#filters>
        2. Add a markdown filter to your template
        3. Now add a block of text. 2 newlines makea paragraph. A # makes an h1. ## makes an h2.
  
        Writing text blocks in markdown can really save you time and make your ideas flow more clearly.
  