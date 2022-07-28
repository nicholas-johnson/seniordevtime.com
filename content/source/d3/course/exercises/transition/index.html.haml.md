%article
    %section
      :markdown
        # Transitions
  
        We can tell the DOM nodes in a selection to transition gradually from one state to another using the transition function.
  
        ## Transition()
  
        Adding the transition function to your chain simply tells the chart to animate all of its attributes.
  
      :ruby
        code = <<-CODE
        var bars = d3.select('svg')
          .selectAll('rect')
          .data(data);
  
        bars
          .transition()
          .attr('width', function(d) {
            return d*10 + "%"
          });
        CODE
      =code(code)
  
      :markdown
  
        It's a simple and lightweight solution.
  
        ## Duration()
  
        We can change the length of our transition using the duration function. Set the duration in milliseconds.
  
      :ruby
        code = <<-CODE
        bars
          .transition()
          .duration(1000)
          .attr('width', '100');
        CODE
      =code(code)
  
      :markdown
  
        ## Ease()
  
        You can specify an easing function. The default is ease-in-out.
  
        You might like to try:
  
        * linear
        * elastic
  
      :ruby
        code = <<-CODE
        bars
          .transition()
          .ease('linear')
          .attr('width', '100');
        CODE
      =code(code)
  
      :markdown
  
        ## Delay()
  
        You can make your transitions happen one by one using the delay function. You can pass this function a function, allowing you to stagger the transition start times:
  
  
      :ruby
        code = <<-CODE
        bars
          .transition()
          .delay(function(d,i) {
            return i*100;
          })
          .attr('width', '100');
        CODE
      =code(code)
  
  
    %section.exercise
      :markdown
        ## Exercise
  
        Revisit your bar chart and apply a transition to it so the bars warp in slowly one by one.
  
  
    %section.exercise
      :markdown
        ## Exercise - Scatter plot
  
        Revisit your scatter plot and apply an animation here too. Have the dots pop in dramatically. A little delay will make things look extra interesting.
  
        Experiment with linear and elastic easing functions.
  
        For a further challenge, try to sort the data from left to right so the dots pop in in order.
  
  
    %section.exercise
      :markdown
        ## Optional Exercise Extension
  
        Use the on() function to hook up a pair of buttons button that will swap the data set. You'll need to extract your drawing code into a function that receives data. Then hook the buttons up to the drawing fuction and pass in data.
  
        Read about the on function here:
  
        <https://github.com/mbostock/d3/wiki/Selections#on>
  
        If you've covered closure in the JavaScript course, bonus points for wrapping your mini-app in a self executing function.
  