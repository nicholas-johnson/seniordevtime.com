



# Using is_a? to vet method params

In Today's Rails we're inside the button_to helper once again.

You may remember that this helper will make a whole RESTful form for you containing just one button.

## is_a?

This helper can be called in several different ways, with strings, hashes and an optional block. In this section we'll look how Rails allows us to call a method in so many differnt ways, and specifically at Object#is_a?.

## Here's a reminder of the helper code:

```js
def button_to(name = nil, options = nil, html_options = nil, &block)
  html_options, options = options, name if block_given?
  options      ||= {}
  html_options ||= {}

  html_options = html_options.stringify_keys
  convert_boolean_attributes!(html_options, %w(disabled))

  url    = options.is_a?(String) ? options : url_for(options)
  remote = html_options.delete('remote')

  method     = html_options.delete('method').to_s
  method_tag = BUTTON_TAG_METHOD_VERBS.include?(method) ? method_tag(method) : ''.html_safe

  form_method  = method == 'get' ? 'get' : 'post'
  form_options = html_options.delete('form') || {}
  form_options[:class] ||= html_options.delete('form_class') || 'button_to'
  form_options.merge!(method: form_method, action: url)
  form_options.merge!("data-remote" => "true") if remote

  request_token_tag = form_method == 'post' ? token_tag : ''

  html_options = convert_options_to_data_attributes(options, html_options)
  html_options['type'] = 'submit'

  button = if block_given?
    content_tag('button', html_options, &block)
  else
    html_options['value'] = name || url
    tag('input', html_options)
  end

  inner_tags = method_tag.safe_concat(button).safe_concat(request_token_tag)
  content_tag('form', content_tag('div', inner_tags), form_options)
end
```





%h2 is_a?

%p On line 9 we see a use of is_a? This method of Object handily tells us if a variable is an instance of a particular class.

```js
url = options.is_a?(String) ? options : url_for(options)
```




Much nicer than the alternative:

```js
url = (options.class == String) ? options : url_for(options)
```




%h2 Subclasses

In fact, is_a? goes way beyond this. It also works for subclasses, so for example:


```js
class Mammal
end

class Horse < Mammal
end

Horse.new.is_a? Horse
# => true

Horse.new.is_a? Mammal
# => true

Horse.new.is_a? Object
# => true
```




%h2 Modules

is_a? also applies to included modules, so we can do:

```js
module Mount
end

class Horse
  include Mount
end

Horse.new.is_a? Mount
# => true
```




%h2 Returning to the helper

We can see that we're testing if options is a String. If it is, the helper treats it as a URL. If not, it chucks it up to url_for.
