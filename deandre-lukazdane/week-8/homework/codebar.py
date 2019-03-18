class Member():
     def __init__(self, full_name=""):
        self.full_name = full_name
class Student():
    def __init__(self, full_name="", sname="", reason=""):
        Member.__init__(self)
        self.full_name = full_name
        self.sname = sname
        self.reason = reason

    def hello(self):
        print(f'Hello my name is {self.full_name}, but you can call me {self.sname}. The reason why i\'m here? {self.reason}')

class Instructor():
    def __init__(self, full_name="", bio="", skills = []):
        Member.__init__(self)
        self.full_name = full_name
        self.bio = bio
        self.skills = skills
        
    def intro(self):
        print(f'My name is {self.full_name} and i will be your instructor today. My skills include {self.skills}. I\'m here because {self.bio} \n')

        
    def add_skill(self, new_skill):
        #new_skill=input("Some new skill")
        self.skills.append(new_skill)
        #To add skill Instructor.add_skill("new skill")


class workshop():
    def __init__(self, date ="", subject = ""):
        self.date = date
        self.subject = subject
        self.students = [ ]
        self.instructors = [ ]

    def add_participant(self, participant):
        if type(participant) is Instructor:
            self.instructors.append(participant)
        elif type(participant) is Student:
            self.students.append(participant)


    def print_details(self):
        print(f"Workshop - {self.date} - {self.subject}")
        print("Students:")
        for index in range(len(self.students)):
            print(f"{index + 1}. {self.students[index].full_name} - {self.students[index].reason}")
        print("Instructors:")
        for index, instructor in enumerate(self.instructors):
            print(f"{index + 1}. {instructor.full_name} - {', '.join(instructor.skills)} \n {instructor.bio}")

    #  this returns full obj <>obj at #x#######
    # def desc(self):
    #     print(f'This workshop is for {self.subject} starts on {self.date}. Participants include:\n Students: {self.students} \n Teachers: {self.instructors}\n')

print('#Students')

Matthew = Student('Matthew Derringer', 'Matt', 'For the lulz\n')
Matthew.hello()

Mark = Student("Markedly Seripticious Johnson", "Mark", "To avenge the death of my father\n")
Mark.hello()

Luke = Student('Lukaz Worley', 'Luke', '*Money by Cardi B starts playing in the background*\n')
Luke.hello()

John = Student('Johnathan Nathanial Thibideaux', 'John', '...bored\n')
John.hello()

print('#Instructors')

Natsu = Instructor('Etherios Natsu Dragneel', 'this will be my greatest challange!!', ["Fire: Dragon Slayer Magic", "Inhuman Strength", "Neigh Immortality"])
Natsu.intro()

Grey = Instructor('Grey Fullbuster', "Natsu roped me into this...", ["Ice: Demon Slayer Magic", "Temperture Immunity", "Acrobatics"])
Grey.intro()

Lucy  = Instructor('Lucy Heartfilia', "Somebody has to keep an eye on those two!", ["Celestial Magic", "Archery", "Bullriding"])
Lucy.intro()

print('#Workshops')
WDI = workshop("March - x794", "Battle Magic")
WDI.print_details()