---
title: "Debugging Rails"
description: ""
section: "ruby"
course: "rails-course"
exercise: "debugging"
layout: "exercise"
---

%article



# Debugging Rails

Rails comes with a couple of fully featured debugging systems.

### The Console ###

The rails console lets you fire up an instance of your rails server on the command line. You have full access to Active Record and all of your models. It's terribly good.

Fire it up with:

rails console

or just

rails c

You can create models, define methods, and do anything you can do in a regular rails instance.

If you make changes to your code, you can load them in to your console by typing:

reload!

### The Debugger ###

If you need to poke around inside a running Rails instance to see what's going on, you can use the debugger. To use it you must start your Rails instance in debug mode like so:

rails server --debugger

or just

rails s --debugger

Then insert breakpoints into your code by typing:

debugger

You can put breakpoints in your models, views or controllers. Within the debugger you have access to all of the variables defined at or before the breakpoint. You can change variables, execute code, write ruby, etc, etc.

To exit the debugger, continue with

c

Tip: Pressing enter will repeat the last console command. If you have multiple debug statements, you can just hold down enter to skip through them.



## Exercise - Debugging  ##

In this exercise we'll have a go at using the debugging tools.

Let's use the debugger to debug our Hello World server. Fire up your hello world instance in debug mode. Now insert a breakpoint in the hello controller (or goodbye controller), right after you define the @text instance variable.

Hit the URL, and the app will freeze. Go to your terminal, and you'll find it's waiting for input. You can view the contents of the @text variable, and even change it's value.
