class Workshop():
    def __init__(self, date, subject):
        self.date = date
        self.subject = subject
        self.instructors = []
        self.students = []

    def add_participant(self, participant):
        if isinstance(participant, Instructor):
            self.instructors.append(participant)
        if isinstance(participant, Student):
            self.students.append(participant)

    def print_details(self):
        print(f"Workshop - {self.date} - {self.subject}")
        print("Students")
        for i in range(len(self.students)):
            print(i + 1, self.students[i].full_name,
                  '-', self.students[i].reason, '\n')
        print("Instructors")
        for i in range(len(self.instructors)):
            print(i + 1, self.instructors[i].bio, '-',
                  self.instructors[i].skills, '\n')


class Member():
    def __init__(self, full_name):
        self.full_name = full_name

    def introduce(self):
        print(f'Hi, my name is {self.full_name}!')


class Instructor(Member):
    def __init__(self, full_name, bio):
        Member.__init__(self, full_name)
        self.skills = []
        self.bio = bio

    def add_skill(self, skill):
        self.skills.append(skill)


class Student(Member):
    def __init__(self, full_name, reason):
        Member.__init__(self, full_name)
        self.reason = reason


jane = Student(
    "Jane Doe", "I am trying to learn programming and need some help")
lena = Student("Lena Smith", "I am really excited about learning to program!")
vicky = Instructor("Vicky Python", "I want to help people learn coding.")
vicky.add_skill("HTML")
vicky.add_skill("JavaScript")
nicole = Instructor(
    "Nicole McMillan", "I have been programming for 5 years in Python and want to spread the love")
nicole.add_skill("Python")


workshop = Workshop("12/03/2014", "Shutl")

workshop.add_participant(jane)
workshop.add_participant(lena)
workshop.add_participant(vicky)
workshop.add_participant(nicole)

workshop.print_details()
