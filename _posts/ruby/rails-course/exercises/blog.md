---
title: "Social Media Exercise"
description: ""
section: "ruby"
course: "rails-course"
exercise: "associations"
layout: "exercise"
---

%article



# Social Media Integration

## Person

* Create a person using the scaffold generator
* Show rake:db:migrate
* Set the root URL to people#index
* Show the resources routes
* Show the person_params method
* Show validation

## Profile

* Create a profile object using the scaffold generator with name and description fields
* Talk about bloated user models
* Create a belongs_to relationship by adding the foreign key
* Show rake db:migrate:reset
* Show an after hook to create and destroy the profile
* Talk about REST
* Create profile controller with edit (GET) and update (POST) methods

## Update Person Show

* Add the profile to the person show
* Talk about partials - extract into a partial
* Talk about layouts - demonstrate a layout
* Talk about assets - demonstrate an SCSS asset

## Exercise

* Adjust your person/show.html.erb to show all the fields of the profile.
* Improve the output of the person/show.html.erb page a little.
* Improve the output of the person/index.html.erb page. Remove the html table.
* Create a header for your site in application.html.erb.
* Extract your header into a partial.
* Extend your profile with a field of your choice. Display it on the person/show.html.erb page. Modify the profile migration and use rake db:migrate:redo to load it in.


## Login

* Create a session controller with new, create and destroy methods
* Add the user id to the session on create
* Get the current_user in a before_filter on application_controller
* Create a helper to check login and redraw the top bar and admin links
* Create a not_authorised method in application_controller to redirect to login if the user clicks person#show
* Create a filter on the Person method

## Exercise

* Attempt to implement the session#destroy method (it should remove the user ID from the session)
* Add a top nav bar to your site. It should have a link to your profile, and a link to the index of people.
* Add a link to edit your profile to the header.
* Why do you think storing the User ID in the session might be problematic? Can you think of a better approach?

## Further Exercise

* Have a look at the Rails Authentication Guide: http://guides.rubyonrails.org/security.html
* Implement login properly using has_secure_password

## Further Further Exercise

* Create a Status object, so the user can set their current status.
* The person has_many :statuses
* The status belongs_to :person
* Show a has_many method
