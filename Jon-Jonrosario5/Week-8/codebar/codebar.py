# workshop = Workshop("12/03/2014", "Shutl")

class Member():
    total_members=0
    def __init__(self,full_name=''):
        self.full_name= full_name
        Member.total_members+=1

    def say_hello(self):
        print(f"Hi, my name is {self.full_name}")


class Student(Member):
    total_students=0
    def __init__(self,full_name,reason):
        Member.__init__(self,full_name)
        self.reason = reason
        Student.total_students+=1
    
class Instructor(Member):
    total_instructors=0
    def __init__(self,full_name,bio):
        Member.__init__(self,full_name)
        self.skills = []
        self.bio = bio
        Instructor.total_instructors+=1


    def add_skills(self, new_skill):
        self.skills.append(new_skill)

class Workshop():
    total_workshops=0
    def __init__(self,date,subject):
        self.date = date
        self.subject = subject
        self.instructors = []
        self.students = []
        Workshop.total_workshops+=1
        self.total_students=0
        self.total_instructors=0

    def add_participant(self,participant):
        if isinstance(participant,Instructor):
            self.instructors.append(participant)
            self.total_instructors+=1
        else:
            self.students.append(participant)
            self.total_students+=1
    def print_details(self):
        print(f"Workshop - {self.date} - {self.subject}")
        print("\nStudents\n")
  
        for index,student in enumerate(self.students):
            print(f"{index +1}. {student.full_name} - {student.reason} " )
        
        print("\nInstructors")

        for index,instructor in enumerate(self.instructors):
            print(f"{index +1}. - {instructor.full_name} - {instructor.skills} \n \t -{instructor.bio}\n")



    


workshop = Workshop("12/03/2014", "Shutl")


jane = Student("Jane Doe", "I am trying to learn programming and need some help")
lena = Student("Lena Smith", "I am really excited about learning to program!")
vicky = Instructor("Vicky Python", "I want to help people learn coding.")
vicky.add_skills("HTML")
vicky.add_skills("JavaScript")
nicole = Instructor("Nicole McMillan", "I have been programming for 5 years in Python and want to spread the love")
nicole.add_skills("Python")


workshop.add_participant(jane)
workshop.add_participant(lena)
workshop.add_participant(vicky)
workshop.add_participant(nicole)

# print('\n')
# print(f"Total Students in the {workshop.subject} Workshop - {workshop.total_students}")

# print('\n')
# print(f"Total Instructors in the {workshop.subject} Workshop - {workshop.total_instructors}")

workshop.print_details()
# =>
# Workshop - 12/03/2014 - Shutl
#
# Students
# 1. Jane Doe - I am trying to learn programming and need some help
# 2. Lena Smith - I am really excited about learning to program!
#
# Instructors
# 1. Vicky Ruby - HTML, JavaScript
#    I want to help people learn coding.
# 2. Nicole McMillan - Ruby
#    I have been programming for 5 years in Ruby and want to spread the love
#