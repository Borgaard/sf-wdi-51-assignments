import random

states = [
{
    "name": "Alabama",
    "capital": "Montgomery",
}, {
    "name": "Alaska",
    "capital": "Juneau",
}, {
    "name": "Arizona",
    "capital": "Phoenix",
}, {
    "name": "Arkansas",
    "capital": "Little Rock",
}, {
    "name": "California",
    "capital": "Sacramento",
}, {
    "name": "Colorado",
    "capital": "Denver",
}, {
    "name": "Connecticut",
    "capital": "Hartford",
}, {
    "name": "Delaware",
    "capital": "Dover",
}, {
    "name": "Florida",
    "capital": "Tallahassee",
}, {
    "name": "Georgia",
    "capital": "Atlanta",
}, {
    "name": "Hawaii",
    "capital": "Honolulu",
}, {
    "name": "Idaho",
    "capital": "Boise",
}, {
    "name": "Illinois",
    "capital": "Springfield",
}, {
    "name": "Indiana",
    "capital": "Indianapolis",
}, {
    "name": "Iowa",
    "capital": "Des Moines",
}, {
    "name": "Kansas",
    "capital": "Topeka",
}, {
    "name": "Kentucky",
    "capital": "Frankfort",
}, {
    "name": "Louisiana",
    "capital": "Baton Rouge",
}, {
    "name": "Maine",
    "capital": "Augusta",
}, {
    "name": "Maryland",
    "capital": "Annapolis",
}, {
    "name": "Massachusetts",
    "capital": "Boston",
}, {
    "name": "Michigan",
    "capital": "Lansing",
}, {
    "name": "Minnesota",
    "capital": "St. Paul",
}, {
    "name": "Mississippi",
    "capital": "Jackson",
}, {
    "name": "Missouri",
    "capital": "Jefferson City",
}, {
    "name": "Montana",
    "capital": "Helena",
}, {
    "name": "Nebraska",
    "capital": "Lincoln",
}, {
    "name": "Nevada",
    "capital": "Carson City",
}, {
    "name": "New Hampshire",
    "capital": "Concord",
}, {
    "name": "New Jersey",
    "capital": "Trenton",
}, {
    "name": "New Mexico",
    "capital": "Santa Fe",
}, {
    "name": "New York",
    "capital": "Albany",
}, {
    "name": "North Carolina",
    "capital": "Raleigh",
}, {
    "name": "North Dakota",
    "capital": "Bismarck",
}, {
    "name": "Ohio",
    "capital": "Columbus",
}, {
    "name": "Oklahoma",
    "capital": "Oklahoma City",
}, {
    "name": "Oregon",
    "capital": "Salem",
}, {
    "name": "Pennsylvania",
    "capital": "Harrisburg",
}, {
    "name": "Rhode Island",
    "capital": "Providence",
}, {
    "name": "South Carolina",
    "capital": "Columbia",
}, {
    "name": "South Dakota",
    "capital": "Pierre",
}, {
    "name": "Tennessee",
    "capital": "Nashville",
}, {
    "name": "Texas",
    "capital": "Austin",
}, {
    "name": "Utah",
    "capital": "Salt Lake City",
}, {
    "name": "Vermont",
    "capital": "Montpelier",
}, {
    "name": "Virginia",
    "capital": "Richmond",
}, {
    "name": "Washington",
    "capital": "Olympia",
}, {
    "name": "West Virginia",
    "capital": "Charleston",
}, {
    "name": "Wisconsin",
    "capital": "Madison",
}, {
    "name": "Wyoming",
    "capital": "Cheyenne"
}]

times_played = 0
total_questions = 0
total_correct = 0
def game():
    global times_played
    times_played += 1
    correct_answers = 0
    wrong_answers = 0
    questions_asked = 0
    questions = states
    random.shuffle(questions)
    time_pluralizer = ('time' if times_played == 1 else "times")
    for value in questions:
        questions_asked += 1
        the_answer = value['capital']
        state = value['name']
        user_input = input(f"What is the capital of {state}? ")
        user_input = user_input.title()
        if (user_input == the_answer):
            correct_answers += 1
            print(f"Correct! The capital of {state} is {the_answer}! Your current score is {correct_answers}/{questions_asked}.")
        else:
            wrong_answers += 1
            print(f"You entered: {user_input}, the answer is {the_answer}, You've answered {wrong_answers} incorrectly.")
    play_again = input(f'Game Over: You got {correct_answers} correct out of {questions_asked}. \nYou have played {times_played} {time_pluralizer}\nYou have answered Do you want to play again? y/n ')
    while (play_again != "y" or "n"):
        if (play_again == "y"):
            game()
        elif (play_again == "n"):
            print("Thank you for playing!")
            return
        else:
            play_again = input("Please enter y to play again, or n to quit")


game()

