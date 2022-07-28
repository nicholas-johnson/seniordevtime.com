# Video

There are two ways to embed responsive video

1. Using a video tag, the video tag works the same as an image, just set the width.
2. Using the aspect ratio hack



## Exercise 1

The Video tag can be styled in a similar way to an image tag. Set the width, and the height is changed to preserve the aspect ratio.

1. Set the width of the image to 100%, it now scales.
2. Embed the video in your responsive web page. View on your phone.



## Exercise 2

You can embed an image from Vimeo using a clever hack. When you set bottom percentage padding on an element, the percentage is calculated as a percentage not of the height, but of the width.

We can use this to make an element taller as it becomes wider.

Vimeo embedding works using an iframe. We can scale the height of the iframe to fit the image.
