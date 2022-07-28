%article
{ 'ng-controller' => 'feedbackController' }

#Feedback

**Well done, you made it. The course is at an end!**

Thank you so much for coming. It would help me hugely if you would take a few minutes to provide some feedback, and perhaps a review, the more *detailed* the better.

Feedback and reviews are invaluable. They help me improve, and they help me sell more courses.

%form.feedback_form
%fieldset
.form_row
%label{ for: 'name' } Your name:
%input.name{ 'ng-model' => 'feedback.name', placeholder: 'James Bond', name: 'name' }
.form_row
%label{ for: 'email' } Email
%input.email{ type: 'email', 'ng-model' => 'feedback.email', placeholder: 'james@mi5.gov.uk', name: 'email' }
.form_row
%label{ for: 'company' } Company
%input.company{ 'ng-model' => 'feedback.company', placeholder: 'British Secret Service', name: 'Awesome and Amazing Ltd.' }
.form_row
%label{ for: 'twitter' } Twitter Handle
%input.company{ 'ng-model' => 'feedback.twitter', placeholder: '@dinosaur_dreams', name: 'twitter' }
.form_row
%label{ for: 'course' } Course
%input.course{ 'ng-model' => 'feedback.course', placeholder: 'Espionage for Beginners', name: 'course' }
.form_row
%label{ for: 'date' } Date
%input.date{ type: 'date', 'ng-model' => 'feedback.date', placeholder: 'Date', name: 'date' }

%fieldset
.form_block
%label{ for: 'bestBit' } What was the best bit?
%textarea.bestBit{ 'ng-model' => 'feedback.bestBit' }

.form_block
%label{ for: 'worstBit' } Was there anything you'd change? (be honest)
%textarea.worstBit{ 'ng-model' => 'feedback.worstBit' }

.form_block
%label{ for: 'comparison' } How did this course compare to other courses you've been on?
%textarea.comparison{ 'ng-model' => 'feedback.comparison' }

.form_block
%label{ for: 'otherCourses' } Are there any other courses you would like to go on?
%textarea.otherCourses{ 'ng-model' => 'feedback.otherCourses' }

%fieldset
%p
It would help me enormously if you wrote a couple of sentences I could put on my website. This will help me sell more courses.

.form_block
%label{ for: 'testimonial' } You might say what you learned, what you liked best about the course, and if it was a useful experience.
%textarea.testimonial{ 'ng-model' => 'feedback.testimonial' }

.form_block
%label{ for: 'picture' } Can I use a picture of you?
%input.picture{ 'ng-model' => 'feedback.picture', placeholder: 'url where I can find a nice picture' }

%fieldset



## How to say thanks

If you've enjoyed this course (and I sincerely hope you have) you can say thanks in a number of ways:

%ul
%li
Leave a review on
%a{ href: 'https://plus.google.com/+Forwardadvance/about', target: '_blank' } Google+.
If you have a Google plus account and you leave a review, this will show up on my Google search listing. It helps the company get noticed, and it directly helps me sell more courses.
%li
Connect or leave a review on
%a{ href: 'https://uk.linkedin.com/in/nicholashowardjohnson', target: '_blank' } LinkedIn.
3. Leave a testimonial in the box above.

**Thanks for coming!**