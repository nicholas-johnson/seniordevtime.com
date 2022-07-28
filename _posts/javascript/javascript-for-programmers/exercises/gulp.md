---
title: "Grunt"
section: "javascript"
course: "javascript-for-programmers"
exercise: "gulp"
layout: "exercise"
---

%article


# Linting with Gulp

Gulp is an essential part of the modern JavaScript toolchain. It handles compilation, linting, concatenation, minification, all as you save.

Here we will use it to automatically lint our files. Any mistakes we make will pop up as we save.




## Exercise 1 - Install Gulp

Gulp is built on top of NodeJS, so first install NodeJS from <http://nodejs.org>. It's a double click install, or you can use your favourite dependency management tool.

Test your installation by typing node at a command line.

```js
  node
```

=code(code, :bash)





## Exercise 2 - Set up npm

Visit your command line (cmd.exe, terminal or bash). Navigate to the directory where you want to work.

Now initialize npm:

```js
  npm init
```

=code(code, :bash)



## Exercise 3 - Install gulp and the linter

```js
  npm install gulp --save-dev
  npm install gulp-cli -g
```

=code(code, :bash)



You may need to restart your console having installed gulp-cli.

Test your installation at a command line by typing gulp.

```js
  gulp
```

=code(code, :bash)



Now install the linter

```js
  npm install gulp-jshint --save-dev
```

=code(code, :bash)




## Exercise 4 - Make a gulpfile

We wire these together using a gulpfile. Create a file called gulpfile.js in the directory where you want to work.

A simple gulpfile.js looks like this:

```js
  'use strict';
  var gulp = require('gulp');
  var jshint = require('gulp-jshint');

  // Lint Configuration
  var lintConfig = {
    "strict": false,
    "quotmark": false,
    "browser": true,
    "devel": true,
    "globals": {
      "$": true,
    }
  };

  // Files to lint
  var files = [
    '**/*.js',
    '!node_modules/**'
  ];

  // The hint task
  gulp.task('js:hint', function() {
    return gulp.src(files)
      .pipe(jshint(lintConfig))
      .pipe(jshint.reporter('default'));
  });

  // Watch files for changes
  gulp.task('watch', function() {
    gulp.watch(files, ['js:hint']);
  });

  // Sets a default task
  gulp.task('default', ['watch']);
```




Have a read through and try to understand the settings. Now go to a command line and type gulp. Any JavaScript files in the directory of subdirectories will be linted.





## Exercise 5 - Fix your code

Use the linter to fix all the errors in the intro exercises.
