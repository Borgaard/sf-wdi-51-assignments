class Member():
    def __init__(self,full_name):
        self.full_name = full_name
    def introduce(self):
        print(f'Hi, my name is {self.full_name}')

class Student(Member): #STUDENT class is a child of the MEMBER class   
    def __init__(self, full_name,reason): # initialize the STUDENT class object.
        Member.__init__(self,full_name) # Init the PARENT class MEMBER object
        self.reason = reason

class Instructor(Member): #INSTRUCTOR class is a child of the MEMBER CLASS
    def __init__(self, full_name, bio,):
        Member.__init__(self,full_name)
        self.bio = bio
        self.skills = []
    def add_skill(self, newSkills): # defining a function. newSkills is a param that will append to the empty self.skills array
        self.skills.append(newSkills)
class Teacher_Assistant(Member):
    def __init__(self,full_name,purpose):
        Member.__init__(self, full_name)
        self.purpose = purpose

class Workshop():
    def __init__ (self, date, subject):
        self.date = date
        self.subject = subject
        self.instructors = []
        self.students = []
    def add_participant(self, member):
         if isinstance(member, Instructor): #checking if the var passed to this funciton has a class of Instructor, then push that member into the instructor array
             self.instructors.append(member)
         elif isinstance(member, Student):
             self.students.append(member)

    def print_details(self):
        print(f'Workshop - {self.date} -{self.subject}')
        print('STUDENTS IN THE COURSE')

        for i in range(len(self.students)): # looping from the range from 0 to the len of the self.students array
            print(f'{i + 1}. {self.students[i].full_name} - {self.students[i].reason}') #printing out different attributes of the students class 
        print('INSTRUCTORS TEACHING THE COURSE')
        for i in range(len(self.instructors)):
            print(f'{i + 1}. {self.instructors[i].full_name} - {self.instructors[i].skills} - {self.instructors[i].bio}')



        
workshop = Workshop("12/03/2014", "Shutl")
Leo = Student("Leonardo Fontenette", "Hi, I love learning about Web Dev and coding principles.This is why I am here")
Brock = Instructor("I am a dev ops engineer", 'Brock Turner')

print(Leo.introduce()) # Prints Leo's intro message, which is a function that comes from the Parent class MEMBER

print(Leo.reason) # Print's Leo's reason message that comes fromm the STUDENT class

print(Brock.add_skill("Anjular JS"))  # Calling the add_skill func and passing in the AJ argument

print(f'Brocks skills are {Brock.skills}') #Printing Brocks skills



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

