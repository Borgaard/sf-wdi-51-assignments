class Member():
    def __init__(self, full_name):
        self.full_name = full_name
    def introduce(self):
        print(f"Hi, my name is {self.full_name}")

class Student(Member):
    def __init__(self, full_name, reason):
        Member.__init__(self, full_name)
        self.reason = reason

class Instructor(Member):
    def __init__(self, full_name, bio):
        Member.__init__(self, full_name)
        self.bio = bio
        self.skills = skills = []

    def add_skill(self, skill):
        self.skills.append(skill)

class Workshop():
    def __init__(self, date, subject):
        self.date = date
        self.subject = subject
        self.instructors = []
        self.students = []
    def add_participant(self, member):
        if isinstance(member, Instructor):
            self.instructors.append(member)
        elif isinstance(member, Student):
            self.students.append(member)
        else:
            print("This person is not a member.")
    def print_details(self):
        # print(self.date)
        print(f"Workshop - {self.date} - {self.subject}")
        print(f"")
        print(f"Students")
        for student in range(len(self.students)):
            print(f"{student + 1}. {self.students[student].full_name} - {self.students[student].reason}")
        print(f"")
        print(f"Instructors")
        for instructor in range(len(self.instructors)):
            print(f"{instructor + 1}. {self.instructors[instructor].full_name} - {self.instructors[instructor].bio}")
    
workshop = Workshop("12/03/2014", "Shutl")

jane = Student("Jane Doe", "I am trying to learn programming and need some help")
lena = Student("Lena Smith", "I am really excited about learning to program!")
vicky = Instructor("Vicky Python", "I want to help people learn coding.")
vicky.add_skill("HTML")
vicky.add_skill("JavaScript")
nicole = Instructor("Nicole McMillan", "I have been programming for 5 years in Python and want to spread the love")
nicole.add_skill("Python")

Member.introduce(lena)
workshop.add_participant(jane)
workshop.add_participant(lena)
workshop.add_participant(vicky)
workshop.add_participant(nicole)
workshop.print_details()