---
  title: "Associations Between Models"
  description: ""
  section: "ruby"
  course: "rails-course"
  exercise: "associations"
  layout: "exercise"
  ---
  
  
  %article
    %section
      :markdown
  
        # Associations Between Models
  
        We're going to add Comments to our blog. Comments belong to BlogPosts and blog_posts have many comments.
  
        ## Scaffolding
  
        First of all, scaffold the Comment model. Refer to the last exercise if you can't remember how to do this.
  
        Comments will need several fields, I'll leave this part up to you, but **crucially, comments will need a blog_post_id: integer** field. Notice how I highlighted that part.
  
        ## Now set up the relationships
  
        You'll need to extend your models something like the following:
  
      :ruby
        code = <<-CODE
        class BlogPost
          has_many :comments
        end
  
        class Comment
          belongs_to :blog_post
        end
        CODE
      =code(code, :ruby)
  
      :markdown
  
        ## Test the association
  
        Drop into the console and check your association. You should be able to call something like:
  
      :ruby
        code = <<-CODE
        post = BlogPost.first
        post.comments
        CODE
      =code(code, :ruby)
  
      :markdown
  
        ## Validation
  
        Add validation to your comment. A comment needs a bog_post_id to be valid, plus a couple of other fields. Enforce this.
  
  
        ## Listing comments
  
        On your blog_post show page, list all the comments for a particular blog post. Remember you can use @blog_post.comments to get an array of the comments.
  
        Great. You can now create comments from the comments form, and see them when you view a blog but you will need to manually enter the blog_post_id when creating the comment. Let's fix that.
  
        ## Extension: Nested Routes
  
        Use a nested route to nest your comment inside a BlogPost. Modify your routes.rb file like so:
  
      :ruby
        code = <<-CODE
        resources :blog_posts do
          resources :comments
        end
        CODE
      =code(code, :ruby)
  
      :markdown
  
        Use rake routes to check the routes you have made.
  
      :ruby
        code = <<-CODE
        rake routes
        CODE
      =code(code, :bash)
  
      :markdown
  
        Now you can visit a URL like
  
        <http://localhost:3000/blog_post/1/comments/new> to create a comment. Remove the blog_post_id field from the comment form view. Instead, in your controller set it using the params hash. You may need to drop into the debugger to check the params hash here.
  
        ## Optional finishing up
  
        Pick from the following:
  
        * See if you can integrate your comment form right into your blog_post_show page. (tip, in the blog_post_show controller execute:
  
      :ruby
        code = <<-CODE
        @comment = Comment.new.
        CODE
      =code(code, :ruby)
  
      :markdown
        This will let the comment form just work without modifications.)
  