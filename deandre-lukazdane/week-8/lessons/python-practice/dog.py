class Animal():
    def __init__(self, species, is_extinct=False):
        self.is_extinct = is_extinct
        self.species = species

    def hello(self):
        print(f'Bow before your {self.species} overlord!')

class Dog(Animal):
    totalDogs = 0
    def __init__(self, species, is_extinct, n='', a= 0, color=""):
        Animal.__init__(self, species, is_extinct)
        self.name = n
        self.age = a
        self.color = color
        Dog.totalDogs+=1
        print(n, "created:", self,)
        print(Dog.totalDogs)

    def bark_hello(self):
        print(f'Oi! My name is {self.name}, Im with the {self.color} and i am {self.age} years old. Fear not my metal skin, that\'s common for a {self.species}')

gracie = Dog('cybertronian', False, 'Thotimous Prime', 1, 'Authothots')
gracie.bark_hello()

lassie = Dog('cybertronian', False, 'Thotatron', 3, 'Thotcepticons')
lassie.hello()

clifford_the_big_red_dog = Dog('cybertronian', False, 'Light Skin Starscream', 2, 'Thotcepticons')
clifford_the_big_red_dog.bark_hello()

spot = Dog('cybertronian', False, 'Tokyo Jetstream', 0, 'Autothots')
spot.bark_hello()

#remake this for transformers
