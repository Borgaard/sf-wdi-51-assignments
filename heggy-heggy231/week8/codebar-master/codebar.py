# Everybody at Codebar -- whether they are attending workshops or teaching them -- is a Member.  For parent do not put ()
class Member: 
  # fill in info here full_name
  # self only exist inside of class!!
  def __init__(self, full_name):
    self.full_name = full_name
  
  # method that introduce themselves
  def introduce(self):
    print(f'Hi, my name is {self.full_name}!')

# Each Member is also either a Student or an Instructor.
# [X] create 2 classes inherit from Member
# Each student has a reason for attending Codebar (e.g., "I've always wanted to make websites!").
class Student(Member):
  def __init__(self, full_name, reason):
    Member.__init__(self, full_name)
    self.reason = reason

  # def print_student_details(self):
  #   print("###############")
  #   print(f"Student: {self.full_name}, {self.reason}")
  #   print("###############")

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
    # for skill in self.skills:
    #   print("###############")
    #   print(f"instructor {self.full_name} has {skill}")
    #   print("###############")

  def instructor_print_details(self):
    print("###############")
    print(f"instructors skills are: {self.skills}")


# Each workshop has... ************
# [X] create workshop class
class Workshop:
  def __init__(self, date, subject):
    # [X]A date.
    # [x]A subject.
    self.date = date #date format "10/01/2019"
    self.subject = subject #string
    # A group of instructors.
    # A roster of students.
    self.instructors = []
    self.students = []
  #[] An add_participant method that accepts a member as an argument. If the Member is an Instructor, add them to the instructors list. If a Member is a Student, add them to the students list.
  # https://stackoverflow.com/questions/9759930/how-to-check-if-an-element-of-a-list-is-a-list-in-python
  def add_participant(self, participant):
    if isinstance(participant, Instructor):
      # print("participant Instructor? ", participant)
      # print("check if participant instructor: ", isinstance(participant, Instructor))
      self.instructors.append(participant)
    elif isinstance(participant, Student):
      # print("participant Student? ", participant)
      # print("check if participant instructor: ", isinstance(participant, Student))
      self.students.append(participant)

# outputs the details of the workshop.
# Create separate methods to print the workshop details (date and classroom), a method to print out the students and one to print out the coaches. Call these from print_details instead of having all the code there.

# =>
# Workshop - 12/03/2014 - Shutl
#
# Students
# 1. Jane Doe - I am trying to learn programming and need some help
# 2. Lena Smith - I am really excited about learning to program!
#
# Instructors
# 1. Vicky Ruby - HTML, JavaScript
#    I want to help people learn coding.
# 2. Nicole McMillan - Ruby
#    I have been programming for 5 years in Ruby and want to spread the love
  def print_details(self):
    # print("###############")
    print(f"Workshop date: {self.date} - {self.subject}")
    print("Students:")
    print(type(self.instructors))
    print(self.instructors[0].skills)
    # for count, item in enumerate(, start=1):
    # print(count, item)
# data I am iterating thru self.students = ["Jane", "Eunice"]
# resource: range https://www.pythoncentral.io/pythons-range-function-explained/
# >>> # One parameter
# >>> for i in range(5):
# ...     print(i)
    for i in range(len(self.students)):
      print(f"{i + 1}. {self.students[i].full_name} -{self.students[i].reason}")
    print("Instructors")

#  Instructors
# 1. Vicky Ruby - HTML, JavaScript
#    I want to help people learn coding.
# 2. Nicole McMillan - Ruby
#    I have been programming for 5 years in Ruby and want to spread the love
    for count, item in enumerate(self.instructors, start=1):
      print(f"{count}. {item.full_name} - {', '.join(item.skills)} \n {item.bio}")
    # print(f"Workshop subject on: {self.subject}")
    # print("###############")
    # print("###############!!!!!!!!!!")
    # print(f"length of student array: {len(self.students)}")
    # print("###############!!!!!!!!!!")
    # print(f"length of instructor array: {len(self.instructors)}")
    # print("###############!!!!!!!!!!")

# Create another method print_details that outputs the details of the workshop.

# workshop = Workshop("03/12/2019", "Java")

# instantiate class heggy using Member class
# heggy = Member('heggy')
# call method introduce()
# heggy.introduce() # => Hi, my name is heggy!


# eunice = Student('eunice', "I've been coding in Python for 5 years and want to share the love!")
# eunice.introduce()
# eunice.print_student_details()


# => I've been coding in Python for 5 years and want to share the love!
# print("reason why eunice started to code:")
# print(eunice.reason)

isha = Instructor("isha", "isha bios: she loves to code and loves to teach")
isha.introduce()
isha.add_skill("fishing")
isha.add_skill("skiing")
isha.add_skill("surfing")
isha.instructor_print_details()

# print("show isha's bio")
# print(isha.bio)
# add new skill to isha

# print(f'Hi, my name is {isha.full_name}! and my skill is {isha.skills} and my bio is {isha.bio}')

# workshop.add_participant(isha)
# workshop.add_participant(eunice)
# method that prints detail about the workshop
workshop = Workshop("12/03/2014", "Shutl")

jane = Student("Jane Doe", "I am trying to learn programming and need some help")

lena = Student("Lena Smith", "I am really excited about learning to program!")

vicky = Instructor("Vicky Python", "I want to help people learn coding.")
vicky.add_skill("HTML")
vicky.add_skill("JavaScript")

nicole = Instructor("Nicole McMillan", "I have been programming for 5 years in Python and want to spread the love")
nicole.add_skill("Python")

workshop.add_participant(jane)
workshop.add_participant(lena)
workshop.add_participant(vicky)
workshop.add_participant(nicole)
workshop.print_details()