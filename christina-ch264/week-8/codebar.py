class Member():
    def __init__(self, full_name):
        self.full_name = full_name

    def introduce(self):
        print(f'Hi, my name is {self.full_name}')


class Student(Member):
    def __init__(self, full_name, reason):
        Member.__init__(self, full_name)
        self.reason = reason

    def introduce(self):
        print(f'Hi, my name is {self.full_name} and I am here for {self.reason}')

class Instructor(Member):
    # we do not need to pass skills because we have a method to define them
    def __init__(self, full_name, bio):
        Member.__init__(self, full_name)
        self.bio = bio
        self.skills = []

    # takes the argument, new_skill to define what should be appended to the array
    def add_skill(self, new_skill):
        self.skills.append(new_skill)
    
    def introduce(self):
        print(f'{self.full_name},{self.bio},{self.skills}')

student1 = Student('Janet Smith', 'learn Python')
student1.introduce()

student2 = Student('Tom Pitt', 'learn JavaScript from Nassima')
student2.introduce()

instructor1 = Instructor('Hanna Throne', 'teacher')
# pass in third argument that was left out in __init__ def for Instructor
instructor1.add_skill('HTML')
instructor1.introduce()

instructor2 = Instructor('Noah Humphrey', 'Lone wolf')
# pass in third argument that was left out in __init__ def for Instructor
instructor2.add_skill('C++')
instructor2.introduce()


class Workshops():
    def __init__(self, date, subject):
        self.date = date
        self.subject = subject
        self.students = []
        self.instructors = []

    def add_participant(self, member):
        # this method gives you a boolean value, call on subclass to check if instance is part of parent class
        # you can use type method, but when dealing with inheritance, isinstance is recommended.
        # we are inside method so we do not need self in arguemnt.
        if isinstance(member, Student):
            self.students.append(member)
        elif isinstance(member, Instructor):
            self.instructors.append(member)
        # if self.member == self.instructor:
        #     self.instructor.append(member)
        # else:
        #     self.students.append(member)
    
    def print_details(self):
        print(f'{self.date}, {self.subject}')

    def print_all(self):
        for student in range(len(self.students)):
            print(f'{self.students[student].full_name}, {self.students[student].reason}') 
        for instructor in range(len(self.instructors)):
            print(f'{self.instructors[instructor].full_name}, {self.instructors[instructor].skills}, {self.instructors[instructor].bio}')

shutl = Workshops("03.06.2020", "shutl")
shutl.print_details()
shutl.add_participant(student1)
shutl.add_participant(student2)
shutl.add_participant(instructor1)
shutl.add_participant(instructor2)
shutl.print_all()
