class Member():
    def __init__(self, position):
        self.position = position

class Student(Member):
    def __init__(self, first_name="", last_name="", purpose=""):
        Member.__init__(self, "Student")
        self.first_name = first_name
        self.last_name = last_name
        self.full_name = self.first_name + " " + self.last_name
        self.purpose = purpose

    def introduce(self):
        print(f'Hi, my name is {self.first_name}, I am a {self.position} at Codebar. I want to {self.purpose}')

class Instructor(Member):
    def __init__(self, first_name="", last_name="", bio=""):
        Member.__init__(self, "Instructor")
        self.first_name = first_name
        self.last_name = last_name
        self.full_name = self.first_name + " " + self.last_name
        self.bio = bio
        self.skills = []

    def introduce(self):
        print(f'Hi, my name is {self.first_name}, I am a {self.position} at Codebar. {self.bio}')

    def add_skill(self, skill_added=""):
        self.skills.append(skill_added)

class Workshop():
    def __init__(self, name="", date=""):
        self.name = name
        self.date = date
        self.header = (f"Workshop - {name} - {date}")
        self.students = []
        self.instructors = []

    def add_participants(self, participant):
        if isinstance(participant, Instructor):
            self.instructors.append(participant)
        elif isinstance(participant, Student):
            self.students.append(participant)
        else:
            print(f"Failed to add {participant}, is not a student or an instructor")
    
    def participants(self):
        for student in self.students:
            print(student.full_name)





wally = Student('Wally','Walrus',"learn to make sense of all of this stuff.")
joe = Student('Joe','Random','be better at things')
john = Student('John','Q','code and whatnot')
matt = Student('Matthew','Freeland','I want to apply my skills to a better professional than event space marketing')

walrus = Instructor('Matthew','Walrus',"I've been a walrus for my entire life.")
walrus.add_skill("Stuff")
brock = Instructor('Brock','Lobster',"I should try Inward Perfection in Stellaris. Factions don't have to be scary.")
brock.add_skill("Everything")
dalton = Instructor('Dalton','Hart',"wat")
dalton.add_skill("Everything")
isha = Instructor('Isha','Aurora',"Your CSS and HTML aren't very well organized")
isha.add_skill("Everything")

brock.introduce()
dalton.introduce()
isha.introduce()

course_one = Workshop("WDI 51","01/22/2019")
course_one.add_participants(matt)
course_one.add_participants(wally)
course_one.add_participants(john)
course_one.add_participants(brock)
course_one.add_participants(dalton)
course_one.add_participants(isha)

course_one.participants()



