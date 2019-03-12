class Member:
    def __init__(self, full_name):
        self.full_name = full_name
    
    def introduce(self):
        print('Hi, my name is', self.full_name)


class Student(Member):
    def __init__(self, full_name, reason):
        Member.__init__(self, full_name)
        self.reason = reason

    def __str__(self):
        return self.full_name + ' - ' + self.reason

class Instructor(Member):
    def __init__(self, full_name, bio, skills=None):
        Member.__init__(self, full_name)
        self.bio = bio
        self.skills = []

    def add_skill(self, skill):
        self.skills.append(skill)

    def __str__(self):
        # return self.full_name + ' - ' + self.bio
        if self.skills == None:
            return self.full_name + ' - ' + self.bio
        else:
            return self.full_name + ' - ' + str(self.skills) + ' - ' + self.bio

class Workshop:
    def __init__(self, date, subject, instructors = None, students = None):
        self.date = date
        self.subject = subject
        self.students = []
        self.instructors = []

    def add_participant(self, participant):
        if isinstance(participant, Student):
            self.students.append(participant)
        else:
            self.instructors.append(participant)

    def print_details(self):
        print('Workshop - ' + self.date + ' - ' + self.subject)
        print('Students')
        for student in self.students:
            print(student)
        print('Instructors')
        for instructor in self.instructors:
            print(instructor)

workshop = Workshop("12/03/2014", "Shut1")

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

# skills = nicole.print_skills()
# print(skills)
# print(nicole)

