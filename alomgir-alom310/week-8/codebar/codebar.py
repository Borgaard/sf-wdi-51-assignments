###Part 1

class Member():
    def __init__(self, name):
        self.name = name
    def intro(self):
        print(f'Hi! My name is {self.name}')

class Student(Member):
    def __init__(self,name, reason):
        Member.__init__(self, name)
        self.reason = reason

class Instructor(Member):
    def __init__(self, name, bio):
        Member.__init__(self, name)
        self.bio = bio 
        self.skill = []

    def add_skill(self,new_skill):
        self.skill.append(new_skill)


###Part 2

class Workshops:
    def __init__ (self, date,subject):
        self.date = date 
        self.subject = subject
        self.instructors = []
        self.students = []
    
    def add_participant(self, participant):
        if isinstance( participant, Instructor ):
            self.instructors.append(participant)
        elif isinstance( participant,Student ):
            self.students.append(participant)

    def print_details(self):
        print(f'This workshop is on {self.date} and is {self.subject}')
        print('Students')
        for i in range(len(self.students)):
            print(f'{i + 1}  {self.students[i].name}, {self.students[i].reason}')
        print('Instructors')
        for i, instructor in enumerate(self.instructors):
            print(f"{i +1} {instructor.name} - {instructor.skill} {instructor.bio}")

workshop = Workshops("12/03/2014", "Shutl")

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