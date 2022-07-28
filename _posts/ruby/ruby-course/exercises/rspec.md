---
title: "RSpec"
description: ""
section: "ruby"
course: "ruby-course"
exercise: "rspec"
layout: "exercise"
---

%article


# RSpec

There are many test harnesses for Ruby. RSpec is the most popular. It has inspired many imitators such as Jasmine for JavaScript and PHPSpec for PHP.

# Getting RSpec

Install rspec using

```js
  gem install rspec
```





or if you prefer add it to your Gemfile and bundle.

You now have a new terminal command, rspec. Type:

```js
  rspec
```





in a terminal to test your installation.

## Writing a spec

RSpec is very easy to setup. Create a folder called spec in the same directory as your code. This is where your specs will live.

In the spec folder create a file called test_spec.rb. Place the following code in it:

```ruby
  describe "an example spec" do
    it "passes" do
      expect(true).to be(true)
    end
  end
```





run your specs with:

```js
  rspec spec/*
```





You should see a message like this, telling you the specs have passed:

```js
  Finished in 0.00105 seconds (files took 0.11919 seconds to load)
  1 example, 0 failures
```





## Testing some actual code

Let's write an alarm clock function to wake us up in the morning. When we call it it's going to give us a message: "Beep beep beep". This will help us wake up.

```js
  def wake_me_up
    "Beep beep beep"
  end
```





Save this in a file called clock.rb

Now let's write a spec for it. First we need to import our clock, then we call the code, then we say what the result should be:


```ruby
  require_relative '../clock'

  describe "alarm clock" do
    it "beeps" do
      expect(wake_me_up).to eq('Beep beep beep')
    end
  end
```





Run this and verify it works

%aside.box

## be vs eq

Note that we have used to eq above, rather than to be. Be tests for the same object. Eq tests for object equality.

When you make two strings, those strings are not the same object, but they do contain the same characters. Be will fail, eq will pass.





## Test First

This is all well and good, but what about Test Driven Development (TDD). In this methodology we write the test first, watch it fail, then write code to make it pass.

Some-days I feel sleepy and I'd like to be woken with more force. I'd like my alarm clock to accept an optional parameter and wake me up more strongly.

First we write the spec

```ruby
  require_relative '../clock'

  describe "alarm clock" do
    it "beeps" do
      expect(wake_me_up).to eq('Beep beep beep')
    end
    it "beeps louder" do
      expect(wake_me_up(6)).to eq('Beep beep beep beep beep beep')
    end
  end
```





Now we run the spec and we see red:

```js
  1) alarm clock beeps
     Failure/Error: expect(wake_me_up(6)).to eq('Beep beep beep beep beep beep')
     ArgumentError:
       wrong number of arguments (1 for 0)
     # ./clock.rb:5:in `wake_me_up'
     # ./spec/clock_spec.rb:16:in `block (2 levels) in <top (required)>'

  Finished in 0.00161 seconds (files took 0.14819 seconds to load)
  2 examples, 1 failure

  Failed examples:

  rspec ./spec/clock_spec.rb:15 # alarm clock beeps

```





Notice it's telling us exactly what and where the problem is. Let's write code to make our test pass.

```js
  def wake_me_up(i = 3)
    ("beep " * i).strip.capitalize
  end
```





Run the test again and success, we have a passing test.

Many developers say they live for these moments of green. You may or may not love testing as much as this but regardless, a good suite of passing tests can give you piece of mind at the weekend and help you sleep better at night, knowing you have done a good job.






## Exercise - Write some tests

Review the RSpec matcher documentation here:

<https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers>

In the section on blocks you wrote code to reverse the individual words in a string, but not the string itself, such that:

```js
  "Hello World"
```





becomes:

```js
  "olleH dlroW"
```





1. Extract this code into a function and write a spec for it.
2. Do the same for the gsub and inject exercises.
