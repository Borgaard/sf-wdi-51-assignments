# Everybody at Codebar -- whether they are attending workshops or teaching them -- is a Member.
class Member: 
  # fill in info here full_name
  # self only exist inside of class!!
  def __init__(self, full_name):
    self.full_name = full_name
  
  # method that introduce themselves
  def introduce(self):
    print(f'Hi, my name is {self.full_name}!')

# instantiate class heggy using Member class
heggy = Member('heggy')
# call method introduce()
heggy.introduce() # => Hi, my name is heggy!

# Each Member is also either a Student or an Instructor.
# [X] create 2 classes inherit from Member
# Each student has a reason for attending Codebar (e.g., "I've always wanted to make websites!").
class Student(Member):
  def __init__(self, full_name, reason):
    Member.__init__(self, full_name)
    self.reason = reason

eunice = Student('eunice', "I've been coding in Python for 5 years and want to share the love!")
eunice.introduce()

# Each instructor a bio (e.g., "I've been coding in Python for 5 years and want to share the love!").
# Each instructor also has a set of skills (e.g., ["Python", "Javascript", "C++"]).
# An instructor can gain a new skill using add_skill.

# class Instructor(Member):
#   def __init__(self, )
