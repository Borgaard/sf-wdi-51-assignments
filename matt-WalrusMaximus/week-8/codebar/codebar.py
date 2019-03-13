# constructor for universal member traits
class Member():
    def __init__(self, position):
        self.position = position

# constructor for students
class Student(Member):
    def __init__(self, first_name="", last_name="", purpose=""):
        Member.__init__(self, "Student")
        self.first_name = first_name
        self.last_name = last_name
        self.full_name = self.first_name + " " + self.last_name
        self.purpose = purpose

    def introduce(self):
        print(f'Hi, my name is {self.first_name}, I am a {self.position} at Codebar. {self.purpose}')

# constructor for members
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

# constructor for adding workshops
class Workshop():
    def __init__(self, name="", date=""):
        self.name = name
        self.date = date
        self.header = (f"Workshop - {name} - {date}\n")
        self.students = []
        self.instructors = []

    # allows you to add participants into the instance of workshop. checks if student, instructor, or exception
    def add_participants(self, participant):
        if isinstance(participant, Instructor):
            self.instructors.append(participant)
        elif isinstance(participant, Student):
            self.students.append(participant)
        else:
            print(f"Failed to add {participant}, is not a student or an instructor")
    
    # runs a function to build out a response with the contents of the workshop
    def print_details(self):
        print("\n")
        print(self.header)
        print("Students:")
        for idx, student in enumerate(self.students):
            print(f"{idx+1}. {student.full_name} - {student.purpose}")
        print("\nInstructors:")
        for idx, instructor in enumerate(self.instructors):
            print(f"{idx+1}. {instructor.full_name} - {' / '.join(instructor.skills)}\n   {instructor.bio}")
        print("\n")

# populates students
wally = Student('Wally','Walrus',"I want to learn to make sense of all of this stuff.")
joe = Student('Joe','Random','I should be better at things')
john = Student('John','Q','I want to code and whatnot')
matt = Student('Matthew','Freeland','I want to apply my skills to a better professional than event space marketing')

# populates instructors based on classes
brock = Instructor('Brock','Lobster',"I should try Inward Perfection in Stellaris. Factions don't have to be scary.")
brock.add_skill("Everything")
brock.add_skill("More")
dalton = Instructor('Dalton','Hart',"wat")
dalton.add_skill("Everything")
dalton.add_skill("More")
isha = Instructor('Isha','Aurora',"Your CSS and HTML aren't very well organized")
isha.add_skill("Everything")
isha.add_skill("More")

# Make the course and populate it with participants
course_one = Workshop("WDI 51","01/22/2019")
course_one.add_participants(matt)
course_one.add_participants(wally)
course_one.add_participants(john)
course_one.add_participants(brock)
course_one.add_participants(dalton)
course_one.add_participants(isha)

course_one.print_details()



