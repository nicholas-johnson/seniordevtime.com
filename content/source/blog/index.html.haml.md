---
  pageable: true
  per_page: 40
  comments: false
  ---
  -#%aside
  -#  %nav
  -#    %h2 Tags
  -#    %ul
  -#      -blog.tags.each do |tag, articles|
  -#        %li
  -#          =tag
  
  .content
  
  
    - if paginate && num_pages > 1
      %p
        Page #{page_number} of #{num_pages}
      - if prev_page
        %p= link_to 'Previous page', prev_page
    - page_articles.each_with_index do |article, i|
      %article
        %h1
          = link_to article.title, article
        %span.date= article.date.strftime('%b %e %Y')
        /
          use article.summary(250) if you have Nokogiri available to show just
          the first 250 characters
        = article.summary(500)
  
        %p= link_to "read more...", article
  
        -# =partial "/layouts/partials/facebook_comments", locals: {url: article.slug}
  
    - if paginate
      - if next_page
        %p= link_to 'Next page', next_page
  