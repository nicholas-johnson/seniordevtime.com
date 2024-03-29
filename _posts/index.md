---
title: "Nicholas Johnson - Ruby / Rails / JavaScript / NodeJS / AngularJS / JQuery / Jesus"
description: "Nicholas Johnson is a husband and father, a Christian and a web developer specialising in Ruby / Rails / JavaScript / NodeJS / AngularJS / JQuery"
pageable: true
per_page: 5
comments: false
---
.blog_index
%article

%h1.top Nicholas Johnson

.subtitle
Faith, Fatherhood, Computer Science


Hi There, I'm Nicholas Johnson, I'm a software developer and a corporate trainer, specialising in: [JavaScript](/javascript) / [NodeJS](/node) / [AngularJS](/angular-course) / [MongoDB](/mongo). I've worked with companies all over the world, large and small. You can find my [CV here](/cv/). Do get in touch if you'd like to say hi.

Here are my thoughts on things:

- if paginate && num_pages > 1
%p
Page #{page_number} of #{num_pages}
- if prev_page
%p= link_to 'Previous page', prev_page
- page_articles.each_with_index do |article, i|
%article
%h1
= link_to article.title, article
%span.date
Posted
= article.date.strftime('%b %e %Y')
/
use article.summary(250) if you have Nokogiri available to show just
the first 250 characters
= article.summary(1000)

%p= link_to "read more...", article

-# =partial "/layouts/partials/facebook_comments", locals: {url: article.slug}

- if paginate
- if next_page
%p= link_to 'Next page', next_page

%article
%h1 Writings
%ul
%li
%a{href: "/angular-book/"} AngularJS step by logical step
%li
%a{href: "/javascript-book/"} JavaScript plus a dash of JQuery
\- A sensible introduction to JavaScript
%li
%a{href: "/jquery-book/"} A sensible introduction to JQuery - alpha edition
%li
%a{href: "/backbone-book/"} Backbone - Step by Logical Step

%article
%h1 Projects



## [Streetbank](http://www.streetbank.com)
[Streetbank](http://www.streetbank.com) is a local social media site that helps neighbours to get to know one another. Built in Rails, it went live in 2009, and now has around 60,000 users.

## [Higgidy](http://www.higgidy.co.uk)
[Higgidy](http://www.higgidy.co.uk) is a Rails site built in 2010. I am currently rebuilding it using Mongo and Express.

%article
%h1 Courses



I build products using interesting technologies, then when I have become an expert I build a course and teach other people.

I use no Power Point, the course consists of live coding and exercises. Everything is wildly practical and designed to get as many skills into your head as possible.

Because I know the material, rather than just reading from slides, we can go off piste and explore new ideas as they come up. I will encourage you to try out new things. I will sit with you and guide you through the tricky bits. I will review your code and show you where you can improve it.

* [AngularJS](/angular-course)
* [NodeJS](/node)
* [JavaScript](/javascript/)
* [Responsive design](/courses/responsive-design)
* [Ruby plus Optional Rails](/ruby)
* [JQuery at Silicon Beach](http://www.siliconbeachtraining.co.uk/programming-training/jquery-training)
* [Mobile Web design at Silicon Beach](http://www.siliconbeachtraining.co.uk/mobile-development-training/mobile-web-design-course-package)
* [Rails at JBI](http://www.jbinternational.co.uk/course/399/ruby-rails-training-course-london-uk)

%article
%h1 Stack Overflow

%div{ ng: {controller: 'stackExchangeController'}}


I'm in the top 1% on stack overflow. Here are some of my contributions. You may already have read some of them.

* [How do search engines deal with AngularJS applications?](http://stackoverflow.com/a/23245379/687677)
* ["Thinking in AngularJS" if I have a jQuery background?](http://stackoverflow.com/a/23606512/687677)
* [What is a 'Closure'?](http://stackoverflow.com/a/7464475/687677)
* [My profile on Stack Overflow @superluminary](http://stackoverflow.com/users/687677/superluminary)
* Reputation: {{user.reputation}}
* Reputation change this quarter: +{{user.reputation_change_quarter}}


.action_button_row
%a.button.action{ href: 'http://stackoverflow.com/users/687677/superluminary' } Visit my profile


%article
=partial 'partials/testimonials'

.action_button_row
%a.button.action{ href: '/contact' } Get in touch
