class Person

  def initialize(name)
    @name = name
  end

  attr_reader :name
  # def name
  #   @name
  # end

  attr_writer :name
  # def name=(name)
  #   @name = name
  # end

end

p = Person.new('L. Ron')
puts p.name

p.name = "New Name"
puts p.name