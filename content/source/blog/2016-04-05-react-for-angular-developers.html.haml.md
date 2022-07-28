---
  title: "React Fundamentals For AngularJS Developers"
  tags: angular, javascript, browserify
  layout: 'blog'
  description: ""
  published: true
  course_sidebar: :react
  ---
  
  :markdown
  
    **TL;DR: AngularJS is a complex, monolithic framework that makes lots of choices for you. React is a DOM manipulation library that fits into a dynamic evolving ecosystem. Both are actually rather good.**
  
  
    ## React vs. AngularJS. Fight!
  
    React is often compared to AngularJS. We commonly hear shouty, unpleasant arguments such as:
  
    *"React is better than AngularJS because it's faster and has one-way binding!"*
  
    And the answering call:
  
    *"No, you're comparing Apples with Oranges!"*
  
    We hear that React is a library and that AngularJS is a framework. We variously hear that two-way databinding is amazing, or worse than Hitler.
  
    We learn how AngularJS doesn't scale, and then we see that, with a bit of work, it does.
  
    The issue is that we are often talking from a position of ignorance. In this post I aim to show you the fundamentals of React so you can make your own decision based on *data*.
  
    ## First Up - React is a DOM Manipulation Tool
  
    React is only a DOM manipulation tool, like jQuery, but rather more modern and edgy.
  
    React itself gives you two things:
  
    1. A component tree. Components work like custom DOM nodes. We build our app out of a tree of components nested inside one another.
    2. A diffing engine to make DOM updates zip along really quickly.
  
    *What that's it?* Yes, that is all. React lets you build and modify a DOM. If you want more, you'll need to add other libraries to your stack.
  
    ## Components are Like Directives with Isolate `$scope` and Templates
  
    When we build a React app, we declare components (which are essentially custom DOM nodes) and nest them inside each other to form a tree. Components are very like directives with their own templates and isolate `$scopes`.
  
    AngularJS 1.5 has components (which are simplified directives with a template and isolate `$scope`). Angular 2+ has components through and through. If you've written a directive with a template, you can probably work out how to write a React component.
  
    ## React has a DOM Diffing Engine
  
    When we `render` a React component. React updates its component tree. React then uses clever logic to diff this against the real DOM and work out the smallest possible actual DOM change that will bring the real DOM into line with the component tree.
  
    In theory, this makes React very fast.
  
    Note this doesn't happen automatically. With AngularJS, when the data in `$scope` changes, your template is automatically updated to match. This just happens in the `$digest` cycle.
  
    With React, you have to explicitly call `render` if you want to make a change. Consistency with your application state is not guaranteed.
  
    ## React has an Ecosystem
  
    AngularJS comes complete with everything you need. React doesn't, you'll need some other stuff to make a complete stack.
  
    Though this might sound like a step into the Wild West, actually it's a big advantage. AngularJS is a monolith. The AngularJS core team can't easily update a single component without breaking a lot of people's apps. This is why things like routing were broken out into separate projects, allowing UIRouter to take over.
  
    By being more modular, React can move forward with the times. AngularJS is still stuck with the same treeless module system and global, String based DI mechanism it had when it was new. React developers on the other hand are free to use Browserify, WebPack, SystemJS, whatever they like.
  
    Of course you can use Browserify in an AngularJS build, but you're still going to need to write `angular.module` all over the place to register your includes with the AngularJS injector.
  
    This is the direction that the AngularJS core team have taken with Angular 2. One size does not fit all when it comes to web architecture.
  
    ## The React Stack
  
    React doesn't exist in isolation. It's just a view tier. In this sense, it's a little like jQuery. You can build a little app from jQuery perfectly well, but your wouldn't want to use it to build a big app (trust me, I've tried, it's not fun).
  
    To build a larger React app, you'll want to match it up with some other technology and tooling to manage events, data flow, that sort of thing.
  
    The exact stuff you'll want to use changes over time, but at the moment (April 2016) you'll probably want at a minimum:
  
    * **JSX**: A build tool that converts embedded template strings into JavaScript (rather like Babel or Traceur).
    * **Redux**: A JavaScript library for managing data flow through the app (rather like $scope in AngularJS)
  
    ## What React doesn't do
  
    Most of the things that we are used to in AngularJS aren't present in React out of the box.
  
    React doesn't give you:
  
    * `$digest` - so the DOM is always consistent with the data.
    * `$scope` - a handy place to store data.
    * `$watch` and expression parsing.
    * DI - for modularity and enforced singletons.
    * Modules
    * Routing
    * etc...
  
    If you want those sorts of things, you'll need to add more code to your stack.
  
    But that's enough of what React doesn't do. Let's look at what it excels at. DOM manipulation.
  
    ## Creating DOM nodes
  
    DOM manipulation works by creating nodes in the React component tree. React then does the grunt work of making the actual DOM consistent with the component tree you have built.
  
    We can create a new React node like so:
  
  :ruby
    code = <<-CODE
    React.DOM.h1(null, "Hello, world!");
    CODE
  =code(code)
  
  :markdown
  
    Here's the same thing with a title attribute:
  
  :ruby
    code = <<-CODE
    React.DOM.h1({title:'hello'}, "Hello, world!");
    CODE
  =code(code)
  
  :markdown
  
    We can also do this in a more generic way using `createElement`:
  
  :ruby
    code = <<-CODE
    React.createElement('h1', {title:'hello'}, "Hello, world!");
    CODE
  =code(code)
  
  :markdown
  
    Note that these are not real DOM nodes, they are instructions to React, and we must use React to render them.
  
    ## Rendering DOM nodes
  
    To render these on the screen, we use `ReactDOM.render`, passing it a DOM node, and an insertion point, like so:
  
  :ruby
    code = <<-CODE
    const h1 = React.DOM.h1(null, "Hello, world!");
    const root = document.getElementById('app');
    ReactDOM.render(h1, root);
    CODE
  =code(code)
  
  :markdown
  
    Well golly gosh, that was easy. This is roughly equivalent to manually bootstrapping an Angular app.
  
    <a href="http://codepen.io/superluminary/pen/oxoGyK?editors=1011" target="_blank">http://codepen.io/superluminary/pen/oxoGyK?editors=1011</a>
  
    <p data-height="268" data-theme-id="0" data-slug-hash="oxoGyK" data-default-tab="result" data-user="superluminary" class="codepen">See the Pen <a href="http://codepen.io/superluminary/pen/oxoGyK/">React Hello World</a> by Nicholas Johnson (<a href="http://codepen.io/superluminary">@superluminary</a>) on <a href="http://codepen.io">CodePen</a>.</p>
    <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
  
  %aside.box
    :markdown
      ## What is ReactDOM?
  
      Did you notice in the previous section that we used ReactDOM to do the root render call. This is because React works in a range of environments. We can do server side rendering on a server. We have React Native for building mobile applications. The DOM is not guaranteed.
  
      To make this more explicit, the core team split the DOM renderer into its own project called ReactDOM which you need to include as a separate dependency.
  
  :markdown
  
    ## Angular is HTML driven; React is JavaScript driven
  
    You might be noticing one of the big differences between Angular and React already. In Angular, a similar Hello World might look like this:
  
  :ruby
    code = <<-CODE
    <div ng-app>
      <h1>
        {{"Hello" + "World"}}
      </h1>
    </div>
    CODE
  =code(code, :html)
  
  :markdown
  
    This is because in Angular the HTML drives the app. It's your wires. Angular is like this because it was originally designed as a tool to allow designers to add interactivity to their pages without coding. Designers speak HTML, so Angular made HTML a first class citizen.
  
    React doesn't have this heritage. It's coming from the jQuery direction. In React, your components are entirely composed of JavaScript. Your HTML is just a dumb container.
  
  
    ## Nesting Elements
  
    To build a tree, we need to put elements inside one another. The third and subsequent parameters of `React.createElement` can be more React elements, or optionally an array or React elements:
  
  :ruby
    code = <<-CODE
    const app = React.DOM.h1({},
      React.DOM.div({},
        React.DOM.em({}, "Hello Em")
      ),
      React.DOM.div({},
        React.DOM.strong({}, "Hello Bold")
      )
    );
  
    const root = document.getElementById('app');
  
    ReactDOM.render(
      app,
      root
    );
    CODE
  =code(code)
  
  :markdown
  
    Here we have generated the following DOM:
  
  :ruby
    code = <<-CODE
    <div>
      <div>
        <em>Hello EM</em>
      </div>
      <div>
        <strong>Hello Bold</strong>
      </div>
    </div>
    CODE
  =code(code, :html)
  
  :markdown
    <a href="http://codepen.io/superluminary/pen/bpYvGY?editors=1011" target="_blank">http://codepen.io/superluminary/pen/bpYvGY?editors=1011</a>
  
    <p data-height="268" data-theme-id="0" data-slug-hash="bpYvGY" data-default-tab="result" data-user="superluminary" class="codepen">See the Pen <a href="http://codepen.io/superluminary/pen/bpYvGY/">React Nested Hello World</a> by Nicholas Johnson (<a href="http://codepen.io/superluminary">@superluminary</a>) on <a href="http://codepen.io">CodePen</a>.</p>
    <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
  
  :markdown
  
    ## We Use JavaScript to Manipulate the Template
  
    Because the template is built from JavaScript, we can use regular JavaScript to manipulate it.
  
    Say we have a list of people:
  
  :ruby
    code = <<-CODE
    const people = ['Davey', 'Mikey', 'Stuey'];
    CODE
  =code(code)
  
  :markdown
  
    We could use this to create an array of React elements:
  
  :ruby
    code = <<-CODE
    const list = people.map(
      (person) => React.DOM.li({}, person)
    );
    CODE
  =code(code)
  
  :markdown
  
    *Note: I'm using a fat arrow function here. This is an ES6 feature, it's just a function shorthand.*
  
    Then we can pass that array in to another DOM node, like so:
  
  :ruby
    code = <<-CODE
    const app = React.DOM.h1({},
      React.DOM.ul({},
        list
      )
    );
    CODE
  =code(code)
  
  :markdown
  
    In Angular we might use ng-repeat or ng-for to achieve this. In React we can just use Native JavaScript, which is actualy a pretty cool thing.
  
    <a href="http://codepen.io/superluminary/pen/oxoqGz?editors=1011" target="_blank">http://codepen.io/superluminary/pen/oxoqGz?editors=1011</a>
    <p data-height="268" data-theme-id="0" data-slug-hash="oxoqGz" data-default-tab="result" data-user="superluminary" class="codepen">See the Pen <a href="http://codepen.io/superluminary/pen/oxoqGz/">React Array Hello World</a> by Nicholas Johnson (<a href="http://codepen.io/superluminary">@superluminary</a>) on <a href="http://codepen.io">CodePen</a>.</p>
    <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
  
  
    ## Defining Components
  
    This is all very nice, but so far, all we have done is re-engineer perfectly good HTML as slightly less nice JavaScript. OK in it's way, but not exactly ground breaking.
  
    React starts to get good once we realise that we can create our own components. Components are analogous to directives with templates.
  
    Here is a helloWorld component. It defines one function: `render`. React will use the `render` method to create React Elements that can be appended to the element tree.
  
  :ruby
    code = <<-CODE
    const HelloComponent = React.createClass({
      render: function() {
        return React.DOM.h1(null, "Hello, world!");
      }
    });
  
    const root = document.getElementById('app');
    const helloComponent = new React.createElement(HelloComponent);
    ReactDOM.render(helloComponent, root);
    CODE
  =code(code)
  
  :markdown
  
  
    <a href="http://codepen.io/superluminary/pen/vGWRwp?editors=1011" target="_blank">http://codepen.io/superluminary/pen/vGWRwp?editors=1011</a>
  
    <p data-height="268" data-theme-id="0" data-slug-hash="vGWRwp" data-default-tab="result" data-user="superluminary" class="codepen">See the Pen <a href="http://codepen.io/superluminary/pen/vGWRwp/">React Component Hello World</a> by Nicholas Johnson (<a href="http://codepen.io/superluminary">@superluminary</a>) on <a href="http://codepen.io">CodePen</a>.</p>
    <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
  
    ## Props (Passing data into a component)
  
    Components are like functions. Just like functions, we can pass parameters into them.
  
    We can pass data into a component via the props object. Props are equivalent to HTML properties. When we write JSX, we will use actual HTML properties to initialise props.
  
  :ruby
    code = <<-CODE
    const HelloComponent = React.createClass({
      render: function() {
        return React.DOM.h1(null, "Hello "+ this.props.name);
      }
    });
  
    const root = document.getElementById('app');
    const props = {name: "Stuart Little"};
  
    const helloComponent = new React.createElement(HelloComponent, props);
    ReactDOM.render(helloComponent, root);
    CODE
  =code(code)
  
  :markdown
  
    The equivalent Angular would look something like this:
  
  :ruby
    code = <<-CODE
  
    app.directive('hello', function() {
      return {
        scope: {
          name: '=',
          template: "hello {{hello}}"
        }
      }
    })
    CODE
  =code(code)
  
  :markdown
  
    And the parent template:
  
  :ruby
    code = <<-CODE
    <body ng-app="app">
      <hello name="'Stuart Little'"></hello>
    </body>
    CODE
  =code(code, :html)
  
  :markdown
  
    <a href="http://codepen.io/superluminary/pen/RajyaJ?editors=1011" target="_blank">http://codepen.io/superluminary/pen/RajyaJ?editors=1011</a>
  
    <p data-height="268" data-theme-id="0" data-slug-hash="RajyaJ" data-default-tab="result" data-user="superluminary" class="codepen">See the Pen <a href="http://codepen.io/superluminary/pen/RajyaJ/">React Component Props</a> by Nicholas Johnson (<a href="http://codepen.io/superluminary">@superluminary</a>) on <a href="http://codepen.io">CodePen</a>.</p>
    <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
  
  
    ## Finally, JSX
  
    JSX lets you embed templates into your JavaScript.
  
    Given that React is JavaScript driven, it would be nice if we might have some pretty tooling based syntax for dealing with all these embedded templates. This is exactly what JSX gives us.
  
    JSX lets us write code like this:
  
  :ruby
    code = <<-CODE
    const HelloComponent = React.createClass({
      render: function() {
        return <h1>Hello {this.props.name}</h1>
      }
    });
    CODE
  =code(code)
  
  :markdown
  
    Notice the HTML embedded right there in the JavaScript. We use Babel to compile JSX into regular JavaScript. The generated code looks like this:
  
  :ruby
    code = <<-CODE
    const HelloComponent = React.createClass({
      displayName: "HelloComponent",
  
      render: function render() {
        return React.createElement(
          "h1",
          null,
          "Hello ",
          this.props.name
        );
      }
    });
    CODE
  =code(code)
  
  :markdown
  
    If you haven't got into Babel yet, now might be a jolly good time to start. You'll find it worth your while.
  
    You don't need to use JSX though. You don't need anything special to use React. As we've seen, it's entirely possible to write perfectly good React in plain old ES5 JavaScript.
  
    <a href="http://codepen.io/superluminary/pen/NNwzyp?editors=1011" target="_blank">http://codepen.io/superluminary/pen/NNwzyp?editors=1011</a>
  
    <p data-height="268" data-theme-id="0" data-slug-hash="NNwzyp" data-default-tab="result" data-user="superluminary" class="codepen">See the Pen <a href="http://codepen.io/superluminary/pen/NNwzyp/">JSX Hello World</a> by Nicholas Johnson (<a href="http://codepen.io/superluminary">@superluminary</a>) on <a href="http://codepen.io">CodePen</a>.</p>
    <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
  
    ## To Sum Up
  
    React is undoubtedly a cool thing, and it has many very strong parallels with Angular 2. Angular, on the other hand does much more for you right out of the box and is arguably more "friendly".
  
    Which do you prefer? Might you be tempted to the darkside that is React? Drop a comment in the box below.
  