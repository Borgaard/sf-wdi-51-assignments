class Member():
    def __init__(self, full_name):
        self.full_name = full_name

    def introduce(self):
        print("Hi, my name is ", self.full_name)


class Student(Member):
    def __init__(self, full_name, reason):
        Member.__init__(self, full_name)
        self.reason = reason


class Instructor(Member):
    def __init__(self, full_name, bio):
        Member.__init__(self, full_name)
        self.bio = bio
        self.skills = []

    def add_skill(self, new_skill):
        self.skills.append(new_skill)


class Workshop():
    def __init__(self, date, subject):
        self.date = date
        self.subject = subject
        self.instructors = []
        self.students = []

    def add_participant(self, new_participant):
        if isinstance(new_participant, Instructor):
            self.instructors.append(new_participant)
        elif isinstance(new_participant, Student):
            self.students.append(new_participant)

    def print_details(self):
        print("Workshop - {} - {}\n".format(self.date, self.subject))
        print("Students")
        for i in range(len(self.students)):
            print("{}. {} - {}".format(i+1,
                                       self.students[i].full_name, self.students[i].reason))
        print("\nInstructors")
        for i in range(len(self.instructors)):
            print("{}. {} - {}".format(i+1,
                                       self.instructors[i].full_name, ', '.join(self.instructors[i].skills)))
            print("\t{}".format(self.instructors[i].bio))


workshop = Workshop("12/03/2014", "Shutl")
jane = Student(
    "Jane Doe", "I am trying to learn programming and need some help")
lena = Student("Lena Smith", "I am really excited about learning to program!")
vicky = Instructor("Vicky Python", "I want to help people learn coding.")
vicky.add_skill("HTML")
vicky.add_skill("JavaScript")
nicole = Instructor(
    "Nicole McMillan", "I have been programming for 5 years in Python and want to spread the love")
nicole.add_skill("Python")

workshop.add_participant(jane)
workshop.add_participant(lena)
workshop.add_participant(vicky)
workshop.add_participant(nicole)
workshop.print_details()
