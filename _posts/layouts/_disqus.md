
-unless current_page.data.comments == false
%article
#disqus_thread
%script
:plain
var disqus_shortname = 'nicholasjohnson';
(function() {
var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
%noscript
Please enable JavaScript to view the
%a{ href: "http://disqus.com/?ref_noscript"}comments powered by Disqus.

%a.dsq-brlink{href: "http://disqus.com"}
comments powered by
%span.logo-disqus Disqus