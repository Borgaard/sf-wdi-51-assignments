# imports the entire random library from python
import random


# the list of states and capitals provided by the starter code
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

# Global variable for determining number of games the user has played and if they are retrying their incorrect answers
times_played = 0

# The primary function of the game
def game(questions, retrying):
    """Starts the game environment by declaring local variables for logic"""
    # Updates the global variable to track number of games played
    global times_played
    times_played += 1
    
    # tracks questions asked, correct answers, and wrong answers to future display
    correct_answers = 0
    wrong_answers = 0
    questions_asked = 0

    # initializes an empty list to receive incorrect answers
    wrong_answer_list = []
    
    # checks if the number of games played is 1 or more to correct the plural
    time_pluralizer = ('time' if times_played == 1 else "times")

    # starts a loop hunting for the values of the questions array
    for value in questions:

        # increments the num of questions asked variable 
        questions_asked += 1

        # stores the values of the current index position for more semantic string interpolation
        the_answer = value['capital']
        state = value['name']

        # prompts the user to answer with with the capital of the displayed state of the current index position, converting their answer to Title Case in the process
        user_input = input(f"What is the capital of {state}? ")
        user_input = user_input.title()

        # checks if the user response matches the capital value from the current index
        # on success, display a correct answer message, increment correct answers by 1, and display how many of the answers the user has gotten right relative to the number asked
        if (user_input == the_answer):
            correct_answers += 1
            print(f"Correct! The capital of {state} is {the_answer}! Your current score is {correct_answers}/{questions_asked}.")
        # on incorrect answer, display wrong answer message and show them the correct answer as well as the number of answers they have gotten wrong.
        else:
            wrong_answers += 1
            print(f"You entered: {user_input}, the answer is {the_answer}, You've answered {wrong_answers} incorrectly.")
            wrong_answer_list.append({'name': state, 'capital': the_answer})

    # replaces the questions list with the wrong answers, the later if statement determines if they are going to retry with this list or start a new game with a fresh list
    questions = wrong_answer_list

    # displays the end result, as well as how many times they've played, pluralizing the "times_played" variable so it shows as a singular if they have only played one game
    # prompt the user if they want to play again, forcing them to input new retry or quit to play again, retry, or exit the game respectively
    play_again = input(f'Game Over: You got {correct_answers} correct out of {questions_asked}. \nYou have played {times_played} {time_pluralizer}\nDo you want to play again? Start a new game (new) / Retry your wrong answers (retry) / or quit (quit): ')
    
    # check if they user input a valid answer and either start a new game, retry, exit the game, or prompt them again until a valid answer is returned
    while (play_again != "new" or "retry" or "quit"):
        if (play_again == "new"):
            questions = states
            random.shuffle(questions)
            game(questions, False)
        elif (play_again == "retry"):
            game(questions, True)
        elif (play_again == "quit"):
            print("Thank you for playing!")
            exit()
        else:
            play_again = input("Please enter 'new' to start a new game, 'retry' to try your wrong answers again, or 'quit' to quit: ")

# initializes the function to start the game environment
print("Welcome to 'that game where you try to answer what is the capital of that one state'!\nThe game will display a state, type your answer in the console\n")
questions = states
random.shuffle(questions)
game(questions, False)

