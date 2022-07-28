%article


# Up and running with Gulp

Gulp is a task runner, similar to Grunt.

## Gulp vs. Grunt

Grunt allows us to compose tasks from other tasks, and gulp has this too.

One of the issues with Grunt is that most build tasks operate on and return a file. This can involve you in a few contortions as you try to organise your build to limit the number of temporary files you must create. If you change the output location of one of your tasks, this can make other tasks fail silently as they look for your code.

Gulp includes the concept of pipes. We can pipe any task through multiple subtasks without saving a file. We can chain tasks together with the output of one task being fed into the input of another.

This vastly reduces the amount of gruntwork involved in setting up task dependencies and compound tasks.


## Defining tasks

We define a gulp task using the task function. Here's a task that outputs hello world.

```js
  gulp.task('yo', function() {
    console.log("Yo World!")
  });
```





As you can see, it's just JavaScript.

## Pipes

Let's make a real task, one that concatenates JavaScript. This task will acquire a list of files, pipe it through concat, and then through dest which will spit it out at a location.


```js
  var concat = require('gulp-concat');

  gulp.task('concat', function() {
    return gulp.src('source/js/**/*.js')
      .pipe(concat('script.js'))
      .pipe(gulp.dest('dist/js'))
  });
```





We can chain additional commands after the dest, so a single gulp task can output multiple files.


## Piping through multiple tasks

In a more realistic scenario we might want to pipe our build through multiple steps. For example, we might:

* Lint all source files with jsHint
* Report the result
* Concatenate all source files
* Save the result
* Minify with uglify
* Save the minified file
* Reload the browser

Let's chain some build steps:

```js
  gulp.task('js', function () {
    return gulp.src('./public/js/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(concat('script.js'))
      .pipe(gulp.dest('./public/js'))
      .pipe(uglify())
      .pipe(gulp.dest('./public/js/'))
      .pipe(livereload());
  });
```





## Error handling

This is great until we encounter an error in a stream. Say our linter fails. Rather than ending the stream, it pushes on throwing stack traces at the concat step.

We catch errors right in the stream using the on function. Here's the same task with error handling:



gulp.task('js', function () {
return gulp.src('./public/js/js/**/*.js')
.pipe(jshint())
.pipe(jshint.reporter('default'))
.on('error', function() {
console.log('error with hint')
})
.pipe(concat('london_shared.js'))
.pipe(gulp.dest('./public/js'))
.pipe(uglify())
.on('error', function() {
console.log('error with uglify')})
.pipe(gulp.dest('./public/js/london-shared.min.js'))
.pipe(livereload());
});
