%article


# Linting with Grunt

Grunt is a versatile build tool made with NodeJS. Here we will use it to automatically lint our files.

We will use Grunt to lint all our future exercises.

## First install node

First install nodeJS from nodejs.org. It's a double click install, or you can use your favourite dependency management tool

<http://nodejs.org/>

## Now set up npm

To install grunt nicely we need npm. Initialize it with.

```js
  npm init
```

=code(code, :bash)



## Install grunt

```js
  npm install grunt --save-dev
  npm install grunt-cli -g
```

=code(code, :bash)



## Install the linter and file watcher.

```js
  npm install grunt-contrib-jshint --save-dev
  npm install grunt-contrib-watch --save-dev
```

=code(code, :bash)




## Make a gruntfile

We wire these together using a Gruntfile. Create a file called Gruntfile.js

A simple gruntfile looks like this:

```js
  module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      jshint: {
        src: {
          src: ['javascript/**/*.js'],

          options: {
            curly: true,
            eqeqeq: true,
            immed: true,
            latedef: 'nofunc',
            newcap: true,
            noarg: true,
            sub: true,
            undef: true,
            unused: true,
            boss: true,
            eqnull: true,
            node: true,
            globals: {}
          },
        }
      },
      watch: {
        js: {
          files: 'javascript/**/*.js',
          tasks: ['jshint']
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

  };
```




This gruntfile contains options for jsHint, an automated linter, and watch, an automatic task runner.




## Exercise - Set up grunt

your linter will look inside a folder called javascript. Create this folder and have lint check a test file.

Lint your code with:

```js
  grunt jshint
```

=code(code, :bash)



You can have grunt watch all changes to your code in real time using:

```js
  grunt watch
```

=code(code, :bash)





## Exercise - Fix your code

Use the linter to fix all the errors in the intro exercises.




## Further Exercise

You will be creating a lot of code during this course. Set up your gruntfile so it monitors all your exercises. You can watch and lint any folder.

Be careful not to watch the node_modules directory. The easiest way to do this is to create a subdirectory in your project and store your code in it.
