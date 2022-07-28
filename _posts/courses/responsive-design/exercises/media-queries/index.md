;;;
"title": "Nicholas Johnson - Media Queries",
"description": "Responsive Design course Notes and Exercises"
;;;

%article


# Media Queries

Media Queries look like this:

```css
  @media screen and (max-width: 640px) {
    // Insert your specific overrides in here.
  }
```





You can check multiple parameters at once:


```css
  @media screen and (min-width: 480px) and (max-width: 640px) {
    // Insert your specific overrides in here.
  }
```





You can also check for a min and max height. This is useful for reducing tall elements on short screens. For example a large header or map.


```css
  @media screen and (max-height: 800px) {
    // Insert your specific overrides in here.
  }
```





## Exercise

Start with a two or three column float layout.

1. Insert a media query into your page which unfloats the floated elements, and sets width auto.
2. Resize your browser. Wow, you just built a responsive design!

## Further Exercise

Well that was pretty easy.

1. If you have a three column layout, add another media query that responds at 1000px. The aim is to convert the 3 column layout into a 2 column layout at 1000px, then convert it into a one column layout at 640px.

