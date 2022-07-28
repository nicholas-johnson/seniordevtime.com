%article
    %section
      :markdown
  
        # Creating a Gem
  
        A gem is a zip file containing code, typically, though not always Ruby code, plus a little metadata to help RubyGems and Bundler to manage it nicely. Gems contain a gemspec manifest file, which contains metadata, and usually a lib directory containing the code itself.
  
        Because a gem contains Ruby code, it can do whatever you like. It can monkeypatch Rails. It can delare new modules and classes. It can extend existing objects, etc.
  
        A gem can be stored locally, or on a gem host like rubygems.org. If you publish your gem to rubygems it will be available for anyone to download and use. If you keep it in your project, you can still use bundler, you just provide a path.
  
        <http://asciicasts.com/episodes/245-new-gem-with-bundler>
  
  
        In this section we're going to create a simple gem using Bundler.
  
        ## Creating a gem using Bundler
  
        We are going to create a summarise gem which will extend the string class with methods to create a summary, and to check whether the string can be summarised, like so:
  
      :ruby
        code = <<-CODE
        class String
          def summarise(l=200)
            i = 0
            self.split.map{ |word| word if (i += word.length) < l}.compact.join(' ')
          end
  
          def summarisable?(length=200)
            return self.summarise(length) != self
          end
        end
        CODE
      =code(code)
  
      :markdown
  
        first of all create the gem:
  
      :ruby
        code = <<-CODE
        bundle gem summarise
        CODE
      =code(code)
  
      :markdown
  
        We now have a new summarize directory containing a lib directory for code, a gemspec file for metadata, and a few other files.
  
        We also have an empty git repository initialised for us.
  
        ## Gemspec
  
        The gemspec file is the heart of your gem, it contains all the metadata about your gem. Your generated gemspec will look something like this:
  
      :ruby
        code = <<-CODE
        # coding: utf-8
        lib = File.expand_path('../lib', __FILE__)
        $LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
        require 'summarise/version'
  
        Gem::Specification.new do |spec|
          spec.name          = "summarise"
          spec.version       = Summarise::VERSION
          spec.authors       = ["Nicholas Johnson"]
          spec.email         = ["email@domain.com"]
          spec.description   = %q{TODO: Write a gem description}
          spec.summary       = %q{TODO: Write a gem summary}
          spec.homepage      = ""
          spec.license       = "MIT"
  
          spec.files         = `git ls-files`.split($/)
          spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
          spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
          spec.require_paths = ["lib"]
  
          spec.add_development_dependency "bundler", "~> 1.3"
          spec.add_development_dependency "rake"
        end
        CODE
      =code(code)
  
      :markdown
  
  
        Notice how spec.files is set by getting the files currently included in git.
  
        Also notice how the version is taken from the Summarize::VERSION constant. This is defined in lib/summarise/version.rb. The version can be updated by editing this file.
  
        ## Gem Contents
  
        We now define the gem in the lib directory.
  
        **lib/sumarise.rb**
  
        This file simply imports the rest of the code.
  
      :ruby
        code = <<-CODE
        require "summarise/version"
        require "summarise/string_extensions"
        require "summarise/string"
  
        module Summarise
        end
        CODE
      =code(code)
  
      :markdown
  
        **lib/summarise/string_extensions.rb**
  
        This declares the methods we want to add.
  
      :ruby
        code = <<-CODE
        module Summarise
          module StringExtensions
            def summarise(l=200)
              i = 0
              self.split.map{ |word| word if (i += word.length) < l}.compact.join(' ')
            end
  
            def summarisable?(length=200)
              return self.summarise(length) != self
            end
          end
        end
        CODE
      =code(code)
  
      :markdown
  
        **lib/summarise/string.rb**
  
        This extends the String class.
  
      :ruby
        code = <<-CODE
        class String
          include Summarise::StringExtensions
        end
        CODE
      =code(code)
  
      :markdown
  
  
  
        ## Building the gem
  
        Because the gemspec uses Git to discover which files to include, we must first commit your updated files.
  
      :ruby
        code = <<-CODE
        git add .
        git commit -a -m "first commit"
        CODE
      =code(code)
  
      :markdown
  
        Build the gem using the gem build command:
  
      :ruby
        code = <<-CODE
        gem build summarise.gemspec
        CODE
      =code(code)
  
      :markdown
  
        You will create a file called something like: summarise-0.0.1.gem
  
        ## Local Private Gems
  
        If you want to keep your gem private, you can deploy it directly into your vendor/gems directory, like so:
  
        First unpack it into vendor/gems:
  
      :ruby
        code = <<-CODE
        gem unpack summarise-0.0.1.gem --target /path_to_rails_app/vendor/gems/.
        CODE
      =code(code)
  
      :markdown
  
        Now declare it in your Gemfile:
  
      :ruby
        code = <<-CODE
        gem 'summarise', :path => "#\{File.expand_path(__FILE__)}/../vendor/gems/summarise-0.0.1"
        CODE
      =code(code)
  
      :markdown
  
        Finally install it into Gemfile.lock
  
      :ruby
        code = <<-CODE
        bundle install
        CODE
      =code(code)
  
      :markdown
  
        This is a good way to develop a gem, as you can deploy it locally and work on it in situ.
  
        ## Uploading your gem to RubyGems.org
  
        If you'd like to share your gem with the community, you can also push it to RubyGems.org
  
        You'll need a RubyGems account:
  
        <https://rubygems.org/users/new>
  
        Now simply push the packaged gem:
  
      :ruby
        code = <<-CODE
        gem push summarise-0.0.1.gem
        CODE
      =code(code)
  
  
  
    %section.exercise
      :markdown
        ## Exercise - creating a gem
  
        Create a random string gem. I want to be able to call something like:
  
        String.random(6)
  
        to get back a random alphanumeric string.
  