---
  title: "Organising your AngularJS code with Browserify"
  tags: angular, javascript, browserify
  layout: 'blog'
  description: ""
  published: true
  course_sidebar: :angular
  ---
  
  
  :markdown
  
    **TL;DR: Browserify automatically works out what code depends on what. It will bundle our code into a single file, and make sure that everything is run only once and in the correct order. We specify an order of execution in Browserify using require statements. If A requires B, B will be executed first, and the result will be passed into A.**
  
    Organising JavaScript in a larger app becomes quite painful quite quickly. The issue is that **order of inclusion matters**. If I write a service that belongs to a module, I'd better make sure I have created my module before I try to append the service to it or my code will collapse in a messy heap. As we get more and more modules and more and more files, this becomes progressively harder.
  
    In a mature app, we might have 5000 files. Manually ordering 5000 files is not a good option. It will hurt your feelings and make you cry inside.
  
    Other languages get around this problem using a module system. We can require code from one module into another module. When we require it, the code we required is instantiated. This code may, in turn, require other modules, and so on down the tree.
  
    NodeJS has had a robust and sensible module system for some time. **Browserify gives us the NodeJS module system inside our browser.**
  
    Browserify bundles our files into modules, then uses these modules to build an app.js file which contains all our code. It will automatically ensure that the code is executed in the correct order.
  
    ## Let's Make A Cat and Dog App
  
    We're going to use a fictional cat and dog app. Here's my fictional (but realistic) file structure.
  
    I like to use the dot style notation for file naming. It makes it tremendously easy to know where things are because an alphabetical sort just puts things that go together next to one another.
  
    * *src (folder)*
      * app.js
      * app.module.js
      * *cats (folder)*
        * cat.module.js
        * cat.component.js
        * cat.service.js
        * cat.stats.component.js
        * cat.admin.component.js
      * *dogs (folder)*
        * dog.module.js
        * dog.component.js
        * dog.service.js
        * dog.stats.component.js
        * dog.admin.component.js
  
    ## How To Get All These Files Into a Browser?
  
    Now I have a problem. We have a lot of files here, and I need all of them make my app work. Crucially, **order of inclusion matters**. I can't jut include them in alphabetical order. I must declare my cat module in `cat.module.js` before I try to add a component to it in `cat.component.js` for example.
  
    *At this point we have three options:*
  
    ### Option 1. Manually include all the files using lots of `<script>` tags.
  
    This is lame because it means I have to manually write and maintain potentially hundreds of script tags. My app will be slow because it will have to download all the source files one by one.
  
    ### Option 2. Use a concatenator such as gulp-concat.
  
    This is better, but we still have the problem of ordering the files. We can potentially get around this by using a clever glob, but why bother, when we have a tool that is actually designed for just this purpose.
  
    ### Option 3. Use Browserify...
  
    ...and let our code tell us which code requires which other code.
  
  
    ## Browserify
  
    If you haven't used Browserify, I highly recommend you check it out. It's a command line utility that converts a stack of JavaScript files into modules which can be included into each other.
  
    If you've used NodeJS, you'll be familiar with the concept of modules.
  
    ## Module Exports
  
    Every file that you write becomes a module. Whatever you export from that module can be required in any other module.
  
  :ruby
    code = <<-CODE
    const cats = {
      harry: "wizard cat",
      hermionie: "clever cat"
    }
    module.exports = cats
    CODE
  =code(code)
  
  :markdown
  
    ## Requiring Modules
  
     You can `require()` a module anywhere you need it like so:
  
  :ruby
    code = <<-CODE
    const cats = require('./cats');
    CODE
  =code(code)
  
  :markdown
  
    When you require a module, Browserify runs the code in that module to get the exports. This ensures that the required code is always run before code which requires it.
  
    As a bonus, Browserify wraps each module (file) in an IIFE, so you get module level variable scope. No more leaky globals.
  
    ## So to Recap
  
    * JavaScript files are converted to modules.
    * Modules can export objects.
    * Modules can require other modules.
    * Requiring a module initialises that module, so dependencies are initialised before the things that depend on them.
    * Variables are scoped to module (file) level.
  
    Very nice.
  
    ## Order of inclusion is not synonymous with order of execution
  
    In JavaScript, order of inclusion (i.e. order of code and script tags on the page) is normally the same as order of execution. If do this:
  
  :ruby
    code = <<-CODE
    console.log('cats');
    console.log('hats');
    CODE
  =code(code)
  
  :markdown
  
    in my console I will see:
  
  :ruby
    code = <<-CODE
    cats
    hats
    CODE
  =code(code)
  
  :markdown
  
    If instead I have this:
  
  
  :ruby
    code = <<-CODE
    modules = {}
    modules.cats = function() {
      console.log('cats');
    }
    modules.hats = function() {
      console.log('hats');
    }
    module.hats();
    module.cats();
    CODE
  =code(code)
  
  :markdown
  
    in my console I will see:
  
  :ruby
    code = <<-CODE
    hats
    cats
    CODE
  =code(code)
  
  :markdown
  
    This is essentially, in a highly simplified manner, what Browserify does. It wraps our files up in functions, then takes care of running them later to get the stuff we need.
  
    ## Your App is a Tree
  
    The key thing with Browserify, is that you define your app as a tree. You can have cycles and cross members in there, and Browserify will sort it out, but ultimately your app is a tree. This is awesome sauce for Angular because **Angular is all about the trees**. We have the $scope tree, the module tree, etc.
  
    With Browserify, dependencies live further down the tree, closer to the leaves. The things that depend on them live further up the tree, near the root. Dependencies are typically functions that can become services, controllers, directives, etc. The root and branches are typically module definitions.
  
    **The imports are the leaves; the modules are the branches and trunk.**
  
    ## Without Browserify
  
    This requires a little bit of mental gymnastics from you. With Angular, we are used to declaring the module first, then declaring all the things that will go in the module. here is `cats.module.js`:
  
  :ruby
    code = <<-CODE
    angular.module('cats', []);
    CODE
  =code(code)
  
  :markdown
  
    And now `cat.component.js`. Notice that I'm reopening the module for editing here, not redeclaring it, because I don't pass an array of dependencies to `angular.module`:
  
  :ruby
    code = <<-CODE
    angular.module('cats')
      .directive('cat', function() {
        return {
          //cats go here}
        }
      );
    CODE
  =code(code)
  
  :markdown
  
    ## With Browserify
  
    With Browserify, we flip this and put the dependency first. Here's the `cat.component.js`. Notice that it just declares a function and exports it:
  
  :ruby
    code = <<-CODE
    const directive = function() {
      return {
        //cats go here}
      }
    };
    module.exports = directive;
    CODE
  =code(code)
  
  :markdown
  
    Now here is `cat.module.js`. Notice that we are requiring the component. Browserify will use the require function to ensure that the component function has been declared:
  
  :ruby
    code = <<-CODE
    const catComponent = require("./cat.component");
    const catAdminComponent = require("./cat.admin.component");
    const catService = require("./cat.service");
  
    module.exports = angular.module('cats', [])
      .directive('cat', catComponent);
      .directive('catAdmin', catAdminComponent);
      .service('cats', catService);
    CODE
  =code(code)
  
  :markdown
  
    ## Requiring modules into each other
  
    Notice also that we have exported our cats module. This lets us require it in our `app.module.js`, like so :
  
  :ruby
    code = <<-CODE
    const catsModule = require('./cats/cat.module');
    const dogsModule = require('./dogs/cat.module');
  
    module.exports = angular.module('app', [
      catsModule.name,
      dogsModule.name,
    ]);
    CODE
  =code(code)
  
  :markdown
  
    (note: module.name gives you the string name of the module, because Angular 1 uses strings for module dependencies)
  
    ## `app.js`
  
    As a final layer, I like to include an `app.js`, like so:
  
  :ruby
    code = <<-CODE
    require('./app.module');
    CODE
  =code(code)
  
  :markdown
  
    This is not strictly necessary, but I rather like the cleanliness of it.
  
    ## Now to build it
  
    To build your app, you need to install browserify. This is just an npm install, like so:
  
  :ruby
    code = <<-CODE
    npm install browserify -g
    CODE
  =code(code)
  
  :markdown
  
    At time of writing, the global flag is required.
  
    We can then run Browserify, giving it a starting file, and an output file:
  
  :ruby
    code = <<-CODE
    browserify src/app.js -o js/app.js -d
    CODE
  =code(code)
  
  :markdown
  
    The -d flag tells Browserify to generate a sourcemap, so we can easily debug the generated file as though we were debugging our source files directly. This really does work rather well. It's pretty much transparent.
  
    ## Watchifying.
  
    We can watch all our files for changes and automatically rebuild our code. Because browserify uses `require()` functions to build its dependency tree, we don't need to specify it all the files to watch, just watchifying `app.js` is sufficient.
  
    Install with:
  
  
  :ruby
    code = <<-CODE
    npm install watchify -g
    CODE
  =code(code)
  
  :markdown
    Now set it running with:
  
  :ruby
    code = <<-CODE
    watchify src/app.js -o js/app.js -d
    CODE
  =code(code)
  
  :markdown
  
    ## Summing up
  
    Browserify fixes order of inclusion issues by giving us NodeJS style modules. This allows us to split out code into individual files, and wire them together again into our Angular modules.
  
    Because Browserify converts our files into modules, we get module level variable scope. This can help prevent accidental globals.
  
    Do you have a preferred way to organise your code? Drop a comment below.
  