---
  title: "Responsive Images"
  section: "webdev"
  exercise: "responsive-images"
  course: "responsive-design"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        # Responsive Images
  
        The trick with images is to take an oversized image, then scale it down to fit the space. This slows the site down a little, as the images are larger, but at this time is the best way to implement responsive images.
  
        In the future we will have image tags with multiple sources. The browser will choose which image to download based on network speed. At this point in time though, we are stuck using big images.
  
  
    %section.exercise
      :markdown
        ## Exercise 1
  
        Create an html page something like the following:
  
        <article>
          <figure>
            <img src="kitten.jpg" alt="Lovely Kitten" />
            <figcaption>A Beautiful Kitten</figcaption>
          </figure>
        </article>
  
        You will need to go and grab a picture of a kitten from the real Internet.
  
        Now use the width: 100% trick to take the kitten image and fill the entire screen with it.
        2. Take the kitten image and embed it into your responsive layout. Preview on a mobile browser.
  
    %section
      :markdown
  
        ## Addendum - This material is no longer current
  
        We now have a srcset and size attribute for images. Read more about it here:
  
        <http://alistapart.com/article/responsive-images-in-practice>
  
  