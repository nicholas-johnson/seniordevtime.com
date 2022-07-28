;;;
  "title": "Installation - Firebase Exercise",
  "description": "Firebase training course in London or Brighton UK"
  ;;;
  %article
    :markdown
      # Firebase Installation
  
      ## Upshot
  
      In this section we are going to:
  
      1. Sign up for Firebase.
      2. Install the command line tools.
      3. Initialize an app
      4. Initialize the app
  
      ## Sign up for Firebase
  
      This is the easy part. Visit <https://www.firebase.com/signup/> and sign up for a free account. A firebase will automatically be created for you.
  
      ## Install the Firebase command line tools
  
    :ruby
      code = <<-CODE
      npm install -g firebase-tools
      CODE
    =code(code, :bash)
  
    :markdown
  
      <https://www.firebase.com/docs/hosting/guide/command-line-tool.html>
  
      ## Initialize an app
  
      initialize an app with:
  
    :ruby
      code = <<-CODE
      firebase init
      CODE
    =code(code, :bash)
  
    :markdown
  
      Follow the prompts to create your app.
  
      You now have a firebase.json file which Firebase will use to deploy your app to production.
  
      ## Finally, deploy the app.
  
      Create a simple index file, something like this:
  
    :ruby
      code = <<-CODE
      <!DOCTYPE html>
      <html>
        <head>
          <title>Firebase</title>
        </head>
        <body>
          <h1>Yo Firebase!</h1>
        </body>
      </html>
      CODE
    =code(code)
  
    :markdown
  
      Now deploy to production with:
  
      firebase deploy
  
      Simple as that. View on the live server with.
  
      firebase open
  
  
  