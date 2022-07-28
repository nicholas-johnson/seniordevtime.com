;;;
  "title": "Binding with bind_to - Firebase Exercise",
  "description": "Firebase training course in London or Brighton UK"
  ;;;
  %article
    :markdown
      # Firebase bind_to
  
      ## Upshot
  
      * bind_to allows us to synchronise an attribute of scope with an object in FireBase.
  
      ## Sample code
  
    :ruby
      code = <<-CODE
      const ref = new Firebase(FIREBASE_URL).child('cat');
      const catObject = $firebase(ref).$asObject();
  
      profileObject.$bindTo($scope, 'cat')
      CODE
    =code(code)
  
    :markdown
  
      ## Exercise
  
      Your challenge is to create a very simple collaborative document editing app. Use an input for the title and a textfield for the content. Deploy to Firebase and open the same app on two separate machines. You should be able to both modify the document.
  