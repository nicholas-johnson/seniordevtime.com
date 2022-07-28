---
  title: "Transitions"
  section: "webdev"
  exercise: "transitions"
  course: "css3"
  layout: "exercise"
  ---
  %article
    %section
      :markdown
  
        #Transitions
  
        Transitions provide a way to move smoothly from one state to another. For example, a hover effect could be applied slowly giving a pleasing fade.
  
        Transitions are cut down animations. You can't loop them, or set keyframes. They are simple, easy to apply, and work work nicely.
  
        To make an attribute transition smoothly from one state to another, use the transition property:
  
      :ruby
        code = <<-CODE
        a:hover {
          -moz-transition:top 2s;
        }
        CODE
      =code(code)
  
      :markdown
        To make it transition smoothly back again you'll need another transition rule:
  
      :ruby
        code = <<-CODE
        a {
          -moz-transition:top 2s;
        }
        CODE
      =code(code)
  
      :markdown
        Transitions don't work with all properties, but do with most of the ones you would care about. A full list of animatable properties (for Firefox) can be found here:
  
        <http://www.oli.jp/2010/css-animatable-properties/>
  
        ## Timing Functions
  
        Specify easing using the transition-timing-function attribute.
  
        For example:
  
      :ruby
        code = <<-CODE
        transition-timing-function: linear;
        CODE
      =code(code)
  
      :markdown
  
        We have the following built in timing functions available to us:
  
        * ease
        * linear
        * ease-in
        * ease-out
        * ease-in-out
  
        ## Triggering Transitions
  
        The simplest, and most common way to trigger a transition is using a hover. You can also trigger one programatically, by adding a class in JavaScript for example.
  
        ## Polyfills
  
        Transitions are a nice touch, rather than a must have feature. A hover effect will work whether or not it is smoothly animated, so I tend not to bother polyfilling transitions.
        If you must though, JQuery includes a pretty good animation library which can be used in place of CSS3 transitions if required. The downside of JavaScript animations is that they are much more processor intensive. Smoothly animating a single div in JavaScript can easily send the processor to 100%.
  
    %section.exercise
      :markdown
        ## Exercise - Transitions
  
        1.  Create a div. Create transitions on hover.
        2.  Modify the text size
        3.  Add a delay, so the transition doesn't start immediately
        4.  Try out some timing functions. Refer to the Mozilla documentation for more info
        5.  Animate a transition, try a rotation and a scale. Subtle
        6.  Animate border-radius.
  
    %section.exercise
      :markdown
        ## Exercise - An Animated Kaleidoscope
  
        Use your kaleidoscope from the previous exercise, and add a hover and transition.
  
        Points for the best effect.
  