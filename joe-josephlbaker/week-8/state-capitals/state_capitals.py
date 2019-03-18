import random

# an array of state dictionaries
# states = [
#     {
#         "name": "Alabama",
#         "capital": "Montgomery"
#     }, {
#         "name": "Alaska",
#         "capital": "Juneau"
#     }, {
#         "name": "Arizona",
#         "capital": "Phoenix"
#     }, {
#         "name": "Arkansas",
#         "capital": "Little Rock"
#     }, {
#         "name": "California",
#         "capital": "Sacramento"
#     }, {
#         "name": "Colorado",
#         "capital": "Denver"
#     }, {
#         "name": "Connecticut",
#         "capital": "Hartford"
#     }, {
#         "name": "Delaware",
#         "capital": "Dover"
#     }, {
#         "name": "Florida",
#         "capital": "Tallahassee"
#     }, {
#         "name": "Georgia",
#         "capital": "Atlanta"
#     }, {
#         "name": "Hawaii",
#         "capital": "Honolulu"
#     }, {
#         "name": "Idaho",
#         "capital": "Boise"
#     }, {
#         "name": "Illinois",
#         "capital": "Springfield"
#     }, {
#         "name": "Indiana",
#         "capital": "Indianapolis"
#     }, {
#         "name": "Iowa",
#         "capital": "Des Moines"
#     }, {
#         "name": "Kansas",
#         "capital": "Topeka"
#     }, {
#         "name": "Kentucky",
#         "capital": "Frankfort"
#     }, {
#         "name": "Louisiana",
#         "capital": "Baton Rouge"
#     }, {
#         "name": "Maine",
#         "capital": "Augusta"
#     }, {
#         "name": "Maryland",
#         "capital": "Annapolis"
#     }, {
#         "name": "Massachusetts",
#         "capital": "Boston"
#     }, {
#         "name": "Michigan",
#         "capital": "Lansing"
#     }, {
#         "name": "Minnesota",
#         "capital": "St. Paul"
#     }, {
#         "name": "Mississippi",
#         "capital": "Jackson"
#     }, {
#         "name": "Missouri",
#         "capital": "Jefferson City"
#     }, {
#         "name": "Montana",
#         "capital": "Helena"
#     }, {
#         "name": "Nebraska",
#         "capital": "Lincoln"
#     }, {
#         "name": "Nevada",
#         "capital": "Carson City"
#     }, {
#         "name": "New Hampshire",
#         "capital": "Concord"
#     }, {
#         "name": "New Jersey",
#         "capital": "Trenton"
#     }, {
#         "name": "New Mexico",
#         "capital": "Santa Fe"
#     }, {
#         "name": "New York",
#         "capital": "Albany"
#     }, {
#         "name": "North Carolina",
#         "capital": "Raleigh"
#     }, {
#         "name": "North Dakota",
#         "capital": "Bismarck"
#     }, {
#         "name": "Ohio",
#         "capital": "Columbus"
#     }, {
#         "name": "Oklahoma",
#         "capital": "Oklahoma City"
#     }, {
#         "name": "Oregon",
#         "capital": "Salem"
#     }, {
#         "name": "Pennsylvania",
#         "capital": "Harrisburg"
#     }, {
#         "name": "Rhode Island",
#         "capital": "Providence"
#     }, {
#         "name": "South Carolina",
#         "capital": "Columbia"
#     }, {
#         "name": "South Dakota",
#         "capital": "Pierre"
#     }, {
#         "name": "Tennessee",
#         "capital": "Nashville"
#     }, {
#         "name": "Texas",
#         "capital": "Austin"
#     }, {
#         "name": "Utah",
#         "capital": "Salt Lake City"
#     }, {
#         "name": "Vermont",
#         "capital": "Montpelier"
#     }, {
#         "name": "Virginia",
#         "capital": "Richmond"
#     }, {
#         "name": "Washington",
#         "capital": "Olympia"
#     }, {
#         "name": "West Virginia",
#         "capital": "Charleston"
#     }, {
#         "name": "Wisconsin",
#         "capital": "Madison"
#     }, {
#         "name": "Wyoming",
#         "capital": "Cheyenne"
#     }]

states = [
    {
        "name": "Alabama",
        "capital": "Montgomery"
    }, {
        "name": "Alaska",
        "capital": "Juneau"
    }, {
        "name": "Arizona",
        "capital": "Phoenix"
    }, {
        "name": "Arkansas",
        "capital": "Little Rock"
    }, {
        "name": "California",
        "capital": "Sacramento"
    }, {
        "name": "Colorado",
        "capital": "Denver"
    }]

random.shuffle(states)

num_correct = 0
num_wrong = 0

print('Hello and welcome to the state capitals game! Would you like to play?')
ask_user_to_play = input()
if(ask_user_to_play == 'yes'):
    print('Get ready...')
    for i in states:
        print('What is the capital of ', i['name'])
        x = input()
        if (x == i['capital']):
            print('correct')
            num_correct += 1
        else:
            print('wrong!')
            num_wrong += 1

    print('The number of correct answers you got is ', num_correct,
          'and the number of wrong answers you got is ', num_wrong)
    print('Would you like to play again?')

if(ask_user_to_play != 'yes'):
    print('Have it your way then.')


# def capitals_game():
#     print('Get ready...')
#     for i in states:
#         print('What is the capital of ', i['name'])
#         x = input()
#         if (x == i['capital']):
#             print('correct')
#             num_correct += 1
#         else:
#             print('wrong!')
#             num_wrong += 1

#     print('The number of correct answers you got is ', num_correct,
#           'and the number of wrong answers you got is ', num_wrong)
#     print('Would you like to play again?')


# num_correct = 0
# num_wrong = 0

# print('Hello and welcome to the state capitals game! Would you like to play?')
# ask_user_to_play = input()
# if(ask_user_to_play == 'yes'):
#     capitals_game()
