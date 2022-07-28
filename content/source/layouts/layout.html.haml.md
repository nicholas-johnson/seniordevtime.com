!!!5
  %html
    %head
      = partial :"/layouts/meta"
      = partial :"/layouts/css"
  
    %body{ class: "#{current_page.data.classes} #{current_page.metadata[:options][:layout] ? current_page.metadata[:options][:layout] + '_page' : "plain_page"} #{page_classes}", 'ng-app' => "app" }
      = partial :"/layouts/header"
      %div.eu-cookie-consent
      .wrap
        = yield
        = partial :"/layouts/sharing"
        -# %article.email_signup
        -#   %h2 Do you like Email? Do You Like JavaScript?
        -#   %p Sign up for occasional emails covering modern Web Development topics such as Angular 2 and React. You can unsubscribe at any time.
        -#   = partial :"/layouts/aweber"
        = partial :"/layouts/disqus"
      = partial :"/layouts/footer"
      = partial :"/layouts/javascript"
      = partial :"/layouts/analytics"
  