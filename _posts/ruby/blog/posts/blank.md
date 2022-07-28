-# Using Object#blank? to check for whitespace

%p The blank? method is defined on object, and is not Rails specific. An object is blank if it is false, empty or a whitespace string.

```js
"".blank?
# => true
" ".blank?
# => true
"\n".blank?
# => true
"\n\r".blank?
# => true
[].blank?
# => true
{}.blank?
# => true
"\n \n\n".blank?
# => true
nil.blank?
# => true
false.blank?
# => true

```




%p When writing a CMS, you're users may enter all kinds of unintentional whitespace into your fields. Object#blank? will catch all of these cases.

%p We might use blank? in our templates to provide fallbacks, for example:

```js
<% unless @article.summary.blank? %>
<%= @article.summary %>
<% else %>
<%= @article.full_text %>
<% end %>
```



