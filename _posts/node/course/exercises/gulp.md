%article


# Gulp

Gulp is a development automation tool. It's the successor to Grunt.

## Gulp streams

Gulp has a concept of streams. A stream is a set of files that can be transformed.

We create a stream using gulp.src, then pipe it through different functions which can transform the stream in a variety of ways. We can optionally pipe our stream back out onto the filesystem at any point using gulp.dest.

We use gulp for:

* Validation
* Compilation
* Concatenation
* Reformatting
* Renaming
* Wrapping content



## Gulp modules

We extend the capabilities of Gulp using modules, which are installed using npm. Here are some useful ones:

* jshint - JavaScript validation
* sass - CSS precompilation
* Uglify - JavaScript minification
* Autoprefixer - Automatically add vendor prefixes to CSS
* Header - Adds a header to the file
* Size - Outputs the size of a minified file

## Validating code

A common requirement is to validate our JavaScript. We can do this with a simple Gulp task:

```js
  var gulp = require('gulp'),
    jshint = require('gulp-jshint');

  gulp.task('assets:js', function () {
    return gulp.src(components.js)
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
  }
```





We execute this task with:

```js
  gulp assets:js
```

=code(code, :bash)



## Automatic execution

We can tell gulp to watch our filesystem for changes, and execute a task whenever a file is modified.


```js
  gulp.task('watch', function() {
    gulp.watch(components.js, ['assets:js']);
```





Now we might create a default gulp task:

```js
  gulp.task('default', [
    'watch'
  ]);
```





We can now set our gulp task running simply by typing gulp at a command line.

```js
  gulp
```

=code(code, :bash)





## Exercise - Validate your code

Set up Gulp to automatically validate the code in your node server. When you save the file, it should give you an error if you have made a mistake.




## Exercise - Validate your gulpfile

Slightly meta this one. Use the gulp-jsonlint package to automatically validate your gulpfile.





-# 

-#   Concatenating JavaScript



-# var gulp = require('gulp'),
-#   nodemon = require('gulp-nodemon'),
-#   livereload = require('gulp-livereload'),
-#   sass = require('gulp-ruby-sass'),
-#   jshint = require('gulp-jshint'),
-#   concat = require('gulp-concat'),
-#   uglify = require('gulp-uglify'),
-#   rename = require('gulp-rename'),
-#   gutil = require('gulp-util'),
-#   jade = require('gulp-jade'),
-#   ngAnnotate = require('gulp-ng-annotate'),
-#   minifycss = require('gulp-minify-css'),
-#   autoprefixer = require('gulp-autoprefixer'),
-#   beep = require('beepbeep'),
-#   wrap = require('gulp-wrap'),
-#   header = require('gulp-header'),
-#   insert = require('gulp-insert'),
-#   indent = require('gulp-indent'),
-#   del = require('del'),
-#   jsonlint = require("gulp-jsonlint"),
-#   size = require('gulp-size'),
-#   components = require('./source/components');
