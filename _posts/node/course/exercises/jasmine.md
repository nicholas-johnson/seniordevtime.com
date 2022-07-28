%article



# Jasmine

Jasmine is a unit testing framework for JavaScript. It was originally developed for the browser, but it works equally well in Node using the jasmine-node module

First we must install it globally:

```js
  npm install jasmine-node -g
```

=code(code, :bash)



We can now run specs using:

```js
  jasmine-node spec
```

=code(code, :bash)



## Creating something to test

Let's return to our daysUntil module. Mine looks something like this:

```js
  const MS_IN_DAY = 24*60*60*1000;

  var day = {
    today: function() {
      return new Date();
    },
    year: function() {
      return this.today().getFullYear();
    },
    christmas: function() {
      return new Date(this.year(), 11, 25);
    },
  };

  // console.log(day.christmas());

  module.exports = {
    christmas: function(date) {
      var today = date || day.today();
      return (day.christmas() - today) / MS_IN_DAY;
    }
  }
```





Notice how my christmas function receives an optional date parameter. Parametrising our functions like this helps a lot with testing.

## Creating a spec

create a folder called specs (nothing special about this name, it's just traditional)

Now create a file called say daysuntil-spec.js.

Now we simply include the module, and describe its features using Jasmine's easy to use

```js
  var daysUntil = require("../days_until");

  describe('daysUntil', function() {
    it('Calculate a non-zero number of days', function() {
      expect(daysUntil.christmas()).toBeGreaterThan(0);
      expect(daysUntil.christmas()).toBeLessThan(366);
    });

    it('Calculates 10 days from December 15th', function() {
      var year = new Date().getFullYear();
      var decFifteenth = new Date(year, 11, 15);
      expect(daysUntil.christmas(decFifteenth)).toBe(10);
    })
  })
```





Read more on Jasmine syntax here: [jasmine.github.io/2.0/introduction.html](http://jasmine.github.io/2.0/introduction.html)


## Integration with Gulp

We can run our Jasmine right from Gulp.

```js
  jasmine = require('gulp-jasmine')

  gulp.task('jasmin', function () {
    return gulp.src('spec/*.js')
      .pipe(jasmine());
    });
```








## Exercise - Test your Days till module

Write a test for each method in your Days till module





## Exercise - Gulp-Jasmine

Extend your Gulpfile to run your tests automatically.

Set a watcher which watches the js files in your project. When they update execute the jasmine task.





## Exercise - Mocha

Mocha is a project very similar to Jasmine, but with better support for asynchronous tasks. Refactor your code to use Mocha
