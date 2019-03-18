class Member():
  def __init__(self, full_name):
    self.full_name = full_name
  
  def intro(self):
    print(f'Hi, my name is {self.full_name.split()[0]}!')

# test Member class
# ronni = Member('Ronni Louie')
# print(ronni.full_name)
# ronni.intro()


class Student(Member):
  def __init__(self, full_name, reason):
    Member.__init__(self, full_name)
    self.full_name = full_name
    self.intro
    self.reason = reason

# test Student class
# jen = Student('Jen Merrick', 'supporting others')
# jen.intro()
# print(jen.reason)


class Instructor(Member):
  def __init__(self, full_name, bio, skills = None):
    Member.__init__(self, full_name)
    self.full_name = full_name
    self.intro
    self.bio = bio
    self.skills = skills
    if self.skills == None:
      self.skills = []
    # including None and if self.skills == None makes skills act as an instance variable; otherwise, it acts as a class variable, and anytime you add in a skill, ALL instances of instructor inherits it
  
  def add_skill(self, new_skill):
    self.skills.append(new_skill)

# test Instructor class
# brock.intro()
# print(brock.skills)
# print(brock.skills)

# print(brock.__class__)
# if brock.__class__ == Instructor:
#   print(True)


class Workshop():
  def __init__(self, date, subject):
    self.date = date
    self.subject = subject
    self.instructors = []
    self.students = []
    # another way to fix the empty list as a class/instance variable, don't pass it as an argument, and just define it as an empty list

  def add_participant(self, member):
    if isinstance(member, Instructor):
    # if member.__class__ == Instructor:
      self.instructors.append(member)
    elif isinstance(member, Student):
    # elif member.__class__ == Student:
      self.students.append(member)
  
  def print_details(self):
    print(f'Workshop - {self.date} - {self.subject}')
    print('Students')
    for i, student in enumerate(self.students):
      print(f'{i + 1}. {student.full_name} - {student.reason}')
    print('Instructors')
    for i, instructor in enumerate(self.instructors):
      print(f'{i + 1}. {instructor.full_name} - {instructor.skills}')
      print(f'      {instructor.bio}')

# test Workshop class
# wdi = Workshop('Mar 12', 'WDI')
# wdi.add_participant(brock)
# print(wdi.instructors)
# wdi.add_participant(jen)
# print(wdi.students)
# wdi.print_details()


# homework prompt code
workshop = Workshop('12/03/2014', 'Shutl')
# print(workshop.subject)

jane = Student('Jane Doe', 'I am trying to learn programming and need some help')
# jane.intro()
lena = Student('Lena Smith', 'I am really excited about learning to program!')
# print(lena.full_name)

vicky = Instructor('Vicky Python', 'I want to help people learn coding.')
# print(vicky.bio)
vicky.add_skill('HTML')
# print(vicky.skills)
vicky.add_skill('JavaScript')
# print(vicky.skills)

nicole = Instructor('Nicole McMillan', 'I have been programming for 5 years in Python and want to spread the love')
# nicole.intro()
# print(nicole.bio)
# [] WHY DOES THIS HAVE HTML AND JAVASCRIPT IN IT?
# print(nicole.skills)
nicole.add_skill('Python')
# [] WHY DOES THIS HAVE HTML AND JAVASCRIPT IN IT?
# print(nicole.skills)

workshop.add_participant(jane)
workshop.add_participant(lena)
workshop.add_participant(vicky)
workshop.add_participant(nicole)
workshop.print_details()