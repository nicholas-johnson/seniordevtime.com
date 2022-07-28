---
title: "Ruby Instance Eval"
description: ""
section: "ruby"
course: "ruby-course"
exercise: "instance-eval"
layout: "exercise"
---

%article



# Instance_Eval

We use instance eval to evaluate a block in the context of a Ruby object.

```js
  class A
    def initialize
      @b = 123
    end
  end
  puts A.new.instance_eval { puts @b }
```





We can use this to construct a DSL (Domain specific language, like this:)

```js
  class Review
    attr_accessor :stars, :title, :content
    def initialize &block
      self.stars = 0
      instance_eval &block
    end

    def set_title t
      self.title = t
    end
  end

  r = Review.new do |review|
    set_title "new Macbook"
  end
```








## Exercise - Instance Eval

Use instance_eval to define a DSL for creating web pages.

```js
  Page.new do
    set_title "My page"
    set_content "Page Content"
  end
```





## Extension

Extend your DSL so you can also create sub-pages, like so:

```js
  Page.new do
    set_title "My homepage"
    set_content "Page Content"
    sub_page do
      set_title "My sub page"
      set_content "Page Content"
    end
  end
```



