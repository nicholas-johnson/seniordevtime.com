---
  title: "Ruby Monkey Patching"
  description: ""
  section: "ruby"
  course: "ruby-course"
  exercise: "monkey-patching"
  layout: "exercise"
  ---
  
  %article
    %section
      :markdown
  
        # Monkey Patching for Great Justice
  
  
        Because Ruby is an interpreted language objects are open and can be modified at runtime. Classes can be reopened at any time.
  
        We can give mopsy new methods, even after she has already been created. Observe:
  
      :ruby
        code = <<-CODE
  
        class Pet
          def play_chess
            puts "now playing chess"
          end
        end
  
        class Pet
          def shoot_fire
            puts "activating primary weapon"
          end
        end
  
        mospy.shoot_fire
          => activating primary weapon
        CODE
      =code(code, :ruby)
  
      :markdown
  
        Mopsy can still play chess. The Pet class was added to, not overwritten
  
      :ruby
        code = <<-CODE
        mopsy.play_chess
          => Now playing chess
        CODE
      =code(code, :ruby)
  
      :markdown
  
  
  
  
        ## Modifying an Existing Class ##
  
        As we've mentioned before existing classes can be extended. This includes built in Ruby classes. This is a feature that can be used both for good, and for evil:
  
        **For good**
  
      :ruby
        code = <<-CODE
        class String
          def put_times(n)
            for i in (1..n)
              puts self
            end
          end
        end
  
        "Marmalade Toast".put_times 5
        CODE
      =code(code, :ruby)
  
      :markdown
  
  
        **For Evil**
  
      :ruby
        code = <<-CODE
        class Fixnum
          def *(num)
            self + num
          end
        end
  
        puts 5*4
          => 9
        CODE
      =code(code, :ruby)
  
      :markdown
  
        Yes, Ruby lets you do this. Be careful and do things and your code will read like liquid sunlight.
  
        ### Monkey Patching ###
  
        Reopening code in this way is often known as monkey patching. We can modify or extend any existing class at runtime, even built in classes like strings and arrays. This can be used to great effect, for example Rails Fixnum date extensions, which allow you to type things like:
  
      :ruby
        code = <<-CODE
        Date.today + 5.days
        CODE
      =code(code, :ruby)
  
      :markdown
  
        Here Fixnum has been monkey patched with an function that allows it to work with dates and times. This is a nice syntax, although it makes some people cross as it appears to break encapsulation.
  
        Monkey patching is fun, but use it with care, otherwise you'll end up with a twisted mess on the floor.
  
        ## Metaprogramming
  
        Monkey patching is the first step towards meta-programming - writing code which writes code. More on this soon.
  
    %section.exercise
      :markdown
  
        ## Exercise - Seconds
  
        Extend Fixnum with a method .seconds which returns the number * 1000
  
        You can now call Time.now + 60.seconds to get the time in one minute.
  
        For bonus points, also create minutes, hours, days and weeks methods. You can now call Time.now + 1.week.
  
    %section.exercise
      :markdown
        ## Exercise - Green Bottles
  
        Extend the FixNum class with a green_bottles method that returns the lyrics for the popular song.
  
        I want to be able to say:
  
        5.green_bottles
  
        and get back:
  
      :ruby
        code = <<-CODE
        "5 green bottles sitting on the wall\n
        4 green bottles ..."
        CODE
      =code(code, :ruby)
  
      :markdown
  
        If you are running a Macintosh, turn the sound up and try this. Note the backticks which you can find above the alt key:
  
      :ruby
        code = <<-CODE
        `say #\{5.green_bottles}`
        CODE
      =code(code, :ruby)
  
  
      :markdown
  
        ## Bonus
  
        For bonus points, make it accept a block that receives the song line by line. I want to be able to call:
  
      :ruby
        code = <<-CODE
        5.green_bottles {|song_line| puts song_line}
        CODE
      =code(code, :ruby)
  
      :markdown
  
    %section.exercise
      :markdown
        ## Exercise - Every Other ()
  
        Extend the Array class with a method that iterates over every other element. Call it like this:
  
      :ruby
        code = <<-CODE
        names.every_other {|name| puts name}
        CODE
      =code(code, :ruby)
  
      :markdown
  
        You will need to explicitly receive the block, filter the array, then pass it to the each method.
  