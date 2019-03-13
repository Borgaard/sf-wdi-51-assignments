students = ["Walrus", "JSON", "Siri the Human", "Paris, France", "Alo", "Cold as Isaac",
            "It's all good Pham", "Christina Millian", "Martin from the accclaimed series Martin", "Luke"]

print(students[0])

print(students[-1])

foods = ("bellpepper", "carrots", "anju pears", "cashew apples", "almonds",
         "purple stuff", "Sunny D", "some kind of vegetrian meat substitute", "sticky rice", "takoyaki", "onigiri")

for n in foods:
    print('this ' + n + ' is so good!')

for n in foods[9:11]:
    print(foods[10], foods[9])

home_town = {'city': 'D-Rock City,',
             'state': ' Hell', 'population': '1000000000'}

print('I was born in ' + home_town.get('city') + home_town.get('state') + '. ' +
      'Population of ' + home_town.get('population') + ' and growing by the second!')

for x, y in home_town.items():
    print("'" + x, '=', y + "'")


# need to limit this to one, stopped at step 6
cohort = []

for n in students:

    cohort.append("{" + n + "}")

    print(cohort)
