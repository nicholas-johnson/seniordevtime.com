%meta{:charset => "utf-8"}/
  
  %meta{:content => "IE=edge,chrome=1", "http-equiv" => "X-UA-Compatible"}/
  
  %title= current_page.data.title || "Nicholas Johnson"
  
  %meta{:name => "description", :value => current_page.data.description || "Nicholas Johnson"}/
  
  %meta{:content => "width=device-width, initial-scale=1", :name => "viewport"}/
  
  - if current_page.data.canonical
    %link{:href => current_page.data.canonical, :rel => "canonical"}/
  
  %link{ rel: "alternate", type: "application/rss+xml" , title: "RSS Feed for nicholasjohnson.com", href: "/blog/feed.xml"}
  