!!!5
%html
%head
%title
Redirects to:
= current_page.data.redirect
%meta{ "http-equiv" => "refresh", content:"0;url=#{current_page.data.redirect}" }
%link{ rel: "canonical", href: current_page.data.redirect }
%body
= yield
