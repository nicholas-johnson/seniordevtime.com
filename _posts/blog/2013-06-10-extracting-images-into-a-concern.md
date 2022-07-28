---
title: Using a Rails concern to dry up Paperclip Attachments
tags: rails
layout: 'blog'
---



Rails concerns have come in for a **bit of a kicking** lately, service objects clearly being a better solution in many instances, but I think there are valid use cases.

Concerns address the **"bloated model"** problem that plagues older Rails instances, where more and more methods are added to your fat models until they become huge and unwieldy. This slows your development as you now need to spend longer reading through code in order to get work done.

A concern is simply a module that you can mix in to your model to add some functionality to it. Your model still bloats, but because it's split over several files it doesn't look so big and ugly in your editor, which is actually a **bigger win than it sounds**.

## Extracting boilerplate Paperclip into a concern

I often find I need to add the same images to a whole bunch of models, and repeating paperclip code all over the shop is not a happy thing to do.

In addition, I want to store production images on S3 and development images in the public directory so I can work on the train.

Concerns come to the rescue! We can easily set things up so simply including the concern (module) adds the attachments to the model.

Something like the following:


```ruby
  module HasImage

extend ActiveSupport::Concern

def self.included(base)
  base.add_attachments
end

module ClassMethods
  def default_image_styles
    {:styles => IMAGE_STYLES}
  end

  def s3_credentials
    return {} if Rails.env.development? || Rails.env.test?
    {
      storage: :s3,
      bucket: ENV['S3_BUCKET_NAME'],
      s3_credentials: {
        access_key_id: ENV['AWS_ACCESS_KEY_ID'],
        secret_access_key: ENV['AWS_SECRET_ACCESS_KEY']
      },
      url: :s3_domain_url
    }
  end

  def add_attachments
    styles = self.respond_to?(:image_styles) ? self.image_styles : self.default_image_styles
    attachment_name = self.respond_to?(:image_name) ? self.image_name : :image
    self.has_attached_file attachment_name, styles
      .merge(default_url: "/assets/missing.png")
      .merge(s3_credentials)
    self.validates_attachment_content_type attachment_name, :content_type => /\Aimage\/.*\Z/
  end
end
  end
```





We can then use this very simply like so:

```ruby
  class Item < ActiveRecord::Base
include HasImage
  end
```





Or for a more complex case requireing some overrides:

```ruby
  class User < ActiveRecord::Base
class << self
  def image_styles
    {:styles => { :medium => "960x500#" }}
  end
  def image_name
    :photo
  end
end
include HasImage
  end
```


