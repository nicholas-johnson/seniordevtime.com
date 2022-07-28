---
  title: "How to do transclusion in Angular (ES5)"
  tags: angular, angular2, javascript
  layout: 'blog'
  description: ""
  published: true
  course_sidebar: :angular2
  ---
  
  
  :markdown
  
    **TL;DR: AngularJS had transclusion which allowed us to access the content inside a directive's tag. Angular has contentChildren which does the same thing. contentChildren are bound to their own component, not to the component they are included in.**
  
    ## Transclusion in AngularJS
  
    AngularJS gaves us the concept of transclusion. Transclusion is made of 2 words:
  
    * trans- from cross
    * -clusion  from inclusion
  
    It is the ability to bring in content from somewhere else, specifically the parent template.
  
    In AngularJS we might write something like this:
  
  :ruby
    code = <<-CODE
    <popup>
      <h1>Popup content</h1>
      <p>Hey there!</p>
    </popup>
    CODE
  =code(code, :html)
  
  :markdown
  
    We might them write a popup directive to turn our box into a popup box:
  
  :ruby
    code = <<-CODE
    angular.module('app', [])
      .directive('popup', function() {
        const directive = {
          transclude:true;
          template:
          `
            <div class="popup">
              Additional popup matériel...
              <ng-transclude></ng-transclude>
            </div>
  
          `
        };
        return directive;
      })
    CODE
  =code(code)
  
  :markdown
  
    The key thing here is the `<ng-transclude>` directive which allowed us to bring in content from the parent template. This gave us a much more natural and flexible way to write our popup.
  
    This will generate a DOM something like the following:
  
  :ruby
    code = <<-CODE
    <popup>
      <div class="popup">
        Additional popup matériel...
        <h1>Popup content</h1>
        <p>Hey there!</p>
      </div>
    </popup>
    CODE
  =code(code, :html)
  
  :markdown
  
    Of course, because AngularJS had $scope and two-way binding, there were some fairly significant complexities here to do with the `$scope` of the transcluded content. It was also possible to manually transclude against a `$scope` of your choosing (which is how ng-repeat worked).
  
    This meant that transclusion, neat as it is, unfortunately represented one of the biggest bumps in the AngularJS learning curve.
  
  %aside.questions_answered
    :markdown
      ## Questions Answered:
  
      * How do I do transclusion in Angular?
      * What are contentChildren in Angular?
      * What is the Angular equivalent of `ng-transclude`?
      * What does the `ng-content` directive do?
  
  :markdown
    ## Angular has contentChildren
  
    Angular does away with the word "transclusion" but retains the spirit and significantly builds on the functionality. Specifically it optionally gives us multiple inclusion points.
  
    DOM nodes inside of the parent template are referred to as contentChildren. They can readily be got at using the `<ng-content>` directive like so.
  
    Say we build a little menu for our restaurant which looks like this like this:
  
  :ruby
    code = <<-CODE
    const AppComponent = ng.core
      .Component({
        selector: "app",
        directives: [MenuComponent],
        template:
        `
          <menu>
            <ul>
              <li>Cats</li>
              <li>Spicy worms</li>
            </ul>
          </menu>
        `
      })
      .Class({
        constructor: function() {}
      })
    CODE
  =code(code)
  
  :markdown
  
    I want that ul to be passed to the menu component. It effectively works as an input to the menu component, just like an attribute. It contains the menu component's children.
  
    My Menu component might look now like this:
  
  :ruby
    code = <<-CODE
    const MenuComponent = ng.core
      .Component({
        selector: "menu",
        template:
        `
          <h1>
            This is the menu
          </h1>
          <nav>
            <ng-content></ng-content>
          </nav>
        `
      })
      .Class({
        constructor: function() {}
      })
    CODE
  =code(code)
  
  :markdown
  
    Notice that the `ng-content` directive which is transcluding the content from the parent template.
  
    This gives us a rendered DOM which looks almost exactly like this:
  
  
  :ruby
    code = <<-CODE
    <menu>
      <h1>
        This is the menu
      </h1>
      <nav>
        <ul>
          <li>Cats</li>
          <li>Spicy worms</li>
        </ul>
      </nav>
    </menu>
    CODE
  =code(code, :html)
  
  :markdown
  
    Check this out in this pen: <http://codepen.io/superluminary/pen/zqwmEv?editors=1010>
  
  
    ## Multiple inclusion points
  
    I said earlier that Angular went beyond AngularJS by giving you multiple insertion points. Of course, it was possible in AngularJS to use a link function to create a directive with multiple insertions, but Angular gives us this out of the box.
  
    See that title at the top of the menu? It would be nice to be able to parameterise that. I'd like to be able to write HTML like this:
  
  :ruby
    code = <<-CODE
    <menu>
      <menuTitle>
        This is the lunchtime menu
      </menuTitle>
      <menuContent>
        <ul>
          <li>Boiled Cats</li>
          <li>Spicy worms</li>
        </ul>
      </menuContent>
    </menu>
    CODE
  =code(code, :html)
  
  :markdown
  
    Angular lets us pass a select attribute to `ng-content`, like so:
  
  :ruby
    code = <<-CODE
    const MenuComponent = ng.core
      .Component({
        selector: "menu",
        template:
        `
          <h1>
             <ng-content select="menuTitle"></ng-content>
          </h1>
          <nav>
            <ng-content select="menuContent"></ng-content>
          </nav>
        `
      })
      .Class({
        constructor: function() {}
      })
    CODE
  =code(code)
  
  :markdown
  
    This gives us a DOM like this:
  
  
  :ruby
    code = <<-CODE
    <h1>
       <menuTitle>
        This is the lunchtime menu
      </menuTitle>
    </h1>
    <nav>
      <menuContent>
        <ul>
          <li>Boiled Cats</li>
          <li>Spicy worms</li>
        </ul>
      </menuContent>
    </nav>
    CODE
  =code(code, :html)
  
  :markdown
  
    Presto. Have a play at this pen here: <http://codepen.io/superluminary/pen/qZmJKr?editors=1010>
  
  %aside.box
    :markdown
      ## What's with all the global variables?
  
      Of course, in a real app you would want to use a proper module loader like SystemJS or RequireJS rather than global variables. For demonstration purposes, I'm just doing the simplest thing that can work.
  
  :markdown
  
    ## Transclusion Scope
  
    In AngularJS, the $scope of the transclusion was the same as the parent template. From the perspective of an front end designer writing HTML this was eminently sensible, because it meant that the designer would not suddenly find himself inside an isolate scope.
  
    As a developer though, this is initially very surprising, because it means that all the models in the isolate scope are not available in the transclusion.
  
    ## In Angular, the contentChildren are bound to their own component
  
    In Angular the this behaviour is preserved. The contentChildren are bound to their own component. Like this:
  
  :ruby
    code = <<-CODE
    const MenuComponent = ng.core
      .Component({
        selector: "menu",
        template:
        `
          <nav>
            <ng-content></ng-content>
          </nav>
        `
      })
      .Class({
        constructor: function() {}
      });
  
    const AppComponent = ng.core
      .Component({
        selector: "app",
        directives: [MenuComponent],
        template:
        `
          <menu>
            <ul>
              <li>{{item1}}</li>
              <li>{{item2}}</li>
            </ul>
          </menu>
        `
      })
      .Class({
        constructor: function() {
          this.item1 = "Hat Bread"
          this.item2 = "Buttered Hat Bread"
        }
      });
    CODE
  =code(code)
  
  :markdown
  
    Have a play at this pen here: <http://codepen.io/superluminary/pen/vGmMrL?editors=1010>
  