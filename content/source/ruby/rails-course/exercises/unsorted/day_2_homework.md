# Homework

Your homework this week is to continue with the events app we created.

## Fix the root URL

1. Check out your routes file and read the comments, they're useful.
2. Now see if you can work out how to set the root url to go to events#index.

## Add news

1. Create a news scaffold.
2. News should belong an author which should be a User.
3. Put the name of the author and a link to their user@show page on the news#show page.
4. News should optionally belong to an event.
5. On the Event#show page list the news items associated with the event (@event.news)

## Create a user profile page

1. Style up the user#show page into a nice profile page.
2. On the user#show page list all the events the user is organising, and all the news items they have written.

## Optional

1. Style all pages so they look nice.
2. Investigate the Rails Admin gem, read the documentation on GitHub and see if you can get it working.
3. Deploy it all to heroku with 'git push heroku master'. Remember to run any new migations with 'heroku run rake db:migrate'

Good luck, and do email me at hello@nicholasjohnson.com if you get stuck..!

