

# #### Exercise 1

# - Create a list named `students` containing some student names (strings).
# - Print out the second student's name.
# - Print out the last student's name.
print('Exercise 1')
students = ['nass','dabi','karima','samira']
print(students[1])
print(students[3])


# #### Exercise 2

# - Create a tuple named `foods` containing the same number of foods (strings) as there are names in the `students` list.
# - Use a `for` loop to print out the string "_food goes here_ is a good food"

foods = ('chips', 'bread','chocolate','soda')
print('Exercise 2')
for food in foods:
    print (food, 'is a good food')

# #### Exercise 3
# - Using a `for` loop, print just the last two food strings from `foods`.
print('//////////////////')
print('Exercise 3')
print('//////////////////')
lenght_foods = len(foods)
two_last = foods[2:lenght_foods]
# for foods in range(1,lenght_foods,1):
#     print()
print(two_last)



# #### Exercise 4

# - Create a dictionary named `home_town` containing the keys of `city`, `state` and `population`.
# - Print a string with this format:<br>"I was born in _city_, _state_ - population of _population_"
print('//////////////////')
print("Exercise 4")
print('//////////////////')
home_town = {
    'city': 'Oakland',
    'state': 'California',
    'population': '1 million'
}
print("I was born in "+ home_town['city'] + "," + home_town['state'] + ' , population of ' + home_town['population'])

# #### Exercise 5
# - Iterate over the _key: value_ pairs in `home_town` and print a string for each item, for example:<br>"city = Arcadia"<br>"state = California"<br>"population = 58000"
for key in home_town:
     print( f"{key} = {home_town[key]}")
# #### Exercise 6

# - Create an empty list named `cohort`.
# - Using a `for` loop, add one dictionary to the `cohort` list for each student name. Each dictionary should have this shape:

# 	```python
# 	{
# 		'student': 'Tina',
# 		'fav_food' 'Cheeseburger'
# 	}
# 	```
# - Iterate over `cohort` printing out each element.
cohort = []
students = ['nass','dabi','karima','samira']
for student in students:
    # 'fav_food': "cheesberger"
    print(students)






# #### Exercise 7

# - Using the list of `students` and list comprehension, assign to a variable named `awesome_students` a new list containing strings similar to this:<br>["Tina is awesome!", "Fred is awesome!", "Wilma is awesome!"]
# - Iterate over `awesome_students` printing out each string.

# #### Exercise 8

# - Using the tuple `foods` and list comprehension within a `for` loop, print each food string that contains the letter `a`.












