# Everybody at Codebar -- whether they are attending workshops or teaching them -- is a Member.  For parent do not put ()
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
# => I've been coding in Python for 5 years and want to share the love!
print(eunice.reason)

# Each instructor a bio (e.g., "I've been coding in Python for 5 years and want to share the love!").
# An instructor can gain a new skill using add_skill.
class Instructor(Member):
  def __init__(self, full_name, bio):
    # inherit from parent
    Member.__init__(self, full_name)
    # initializing array for skills to add
    self.skills = []
    self.bio = bio

# Each instructor also has a set of skills (e.g., ["Python", "Javascript", "C++"]).
  def add_skill(self, new_skill):
    self.skills.append(new_skill)

isha = Instructor("isha", "isha bio is nice")
isha.introduce()
print(isha.bio)
isha.add_skill("fishing")
isha.add_skill("skiing")
print(f'Hi, my name is {isha.full_name}! and my skill is {isha.skills}')



