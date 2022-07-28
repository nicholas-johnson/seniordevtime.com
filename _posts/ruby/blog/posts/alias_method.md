%article

# Using alias_method to preserve compatibility

The alias_method method allows us to alias call a method by a different name. If we change our API, we can still allow access using the old methods. This can save us a heavy refactoring job.

```ruby
class Condiment
  attr_accessor :level

  def initialize
    self.level = 12
    super
  end

  def dispense
    self.level -= 1
  end
end

class Mayo < Condiment
  alias_method :splurge, :dispense
end

mayo = Mayo.new
mayo.splurge
# => 11
```





<http://ruby-doc.org/core-2.0.0/Module.html#method-i-alias_method>
