class Dog():
    totalDogs = 0
    def __init__(self, n='', a=0, c='hello there'):
        self.name = n
        self.age = a
        Dog.totalDogs+=1

    def bark_hello(self):
        print(f'Woof! I am called {self.name} and I am {self.age} old')

gracie = Dog('Boby', 3)
gracie.bark_hello()
dog2 = Dog("Joe",6)
dog1 = Dog('lassy', 2)
dog1.bark_hello()
print(Dog.totalDogs)

print(f'name of the dog {dog2.name}')

# //////////////////////
class Animal():
    def __init__(self, species, is_extinct=False):
        self.species = species
        self.is_extinct = is_extinct

class Dog(Animal):
    def __init__(self, species, is_extinct, n='', a=0):
        Animal.__init__(self, species, is_extinct)
            self.name = n
            self.age = a

    def bark_hello(self):
        print(f'Woof! I am called {self.name} and I am {self.age} old')

gracie = Dog('canine',False, 'gracie')
gracie.bark_hello()

print(f'name of the dog {gracie.name}')



# ////////////


