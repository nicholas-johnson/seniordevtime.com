-page_title = current_page.data.title || "nicholasjohnson.com"
-url = "http://nicholasjohnson.com#{current_page.url}"

%nav.sharing
%ul
%li
%a{ href: "https://plus.google.com/share?url=#{url}", target:"_blank" }
%img{ src: '/images/share_links/google.svg', alt: "Share on Google+"}

%li
%a{ href: "https://twitter.com/intent/tweet?url=#{url}&text=#{page_title}&via=superluminary", target:"_blank" }
%img{ src: '/images/share_links/twitter.svg', alt: "Tweet on Twitter"}

%li
%a{ href: "https://facebook.com/sharer.php?u=#{url}", target:"_blank" }
%img{ src: '/images/share_links/facebook.svg', alt: "Post on Facebook"}

%li
%a{ href: "http://www.reddit.com/submit?url=#{url}&title=#{page_title}", target:"_blank" }
%img{ src: '/images/share_links/reddit.svg', alt: "Share on Reddit"}

%li
%a{ href: "https://www.linkedin.com/shareArticle?mini=true&url=#{url}&title=#{page_title}&source=www.nicholasjohnson.com", target:"_blank" }
%img{ src: '/images/share_links/linkedin.svg', alt: "Share on LinkedIn"}
