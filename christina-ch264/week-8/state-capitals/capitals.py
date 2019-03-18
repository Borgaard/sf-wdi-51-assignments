import random
# an array of state dictionaries
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
}, {
    "name": "Connecticut",
    "capital": "Hartford"
}, {
    "name": "Delaware",
    "capital": "Dover"
}, {
    "name": "Florida",
    "capital": "Tallahassee"
}, {
    "name": "Georgia",
    "capital": "Atlanta"
}, {
    "name": "Hawaii",
    "capital": "Honolulu"
}, {
    "name": "Idaho",
    "capital": "Boise"
}, {
    "name": "Illinois",
    "capital": "Springfield"
}, {
    "name": "Indiana",
    "capital": "Indianapolis"
}, {
    "name": "Iowa",
    "capital": "Des Moines"
}, {
    "name": "Kansas",
    "capital": "Topeka"
}, {
    "name": "Kentucky",
    "capital": "Frankfort"
}, {
    "name": "Louisiana",
    "capital": "Baton Rouge"
}, {
    "name": "Maine",
    "capital": "Augusta"
}, {
    "name": "Maryland",
    "capital": "Annapolis"
}, {
    "name": "Massachusetts",
    "capital": "Boston"
}, {
    "name": "Michigan",
    "capital": "Lansing"
}, {
    "name": "Minnesota",
    "capital": "St. Paul"
}, {
    "name": "Mississippi",
    "capital": "Jackson"
},
{
    "name": "Missouri",
    "capital": "Jefferson City"
}, {
    "name": "Montana",
    "capital": "Helena"
}, {
    "name": "Nebraska",
    "capital": "Lincoln"
}, {
    "name": "Nevada",
    "capital": "Carson City"
}, {
    "name": "New Hampshire",
    "capital": "Concord"
}, {
    "name": "New Jersey",
    "capital": "Trenton"
}, {
    "name": "New Mexico",
    "capital": "Santa Fe"
}, {
    "name": "New York",
    "capital": "Albany"
}, {
    "name": "North Carolina",
    "capital": "Raleigh"
}, {
    "name": "North Dakota",
    "capital": "Bismarck"
}, {
    "name": "Ohio",
    "capital": "Columbus"
}, {
    "name": "Oklahoma",
    "capital": "Oklahoma City"
}, {
    "name": "Oregon",
    "capital": "Salem"
}, {
    "name": "Pennsylvania",
    "capital": "Harrisburg"
}, {
    "name": "Rhode Island",
    "capital": "Providence"
}, {
    "name": "South Carolina",
    "capital": "Columbia"
}, {
    "name": "South Dakota",
    "capital": "Pierre"
}, {
    "name": "Tennessee",
    "capital": "Nashville"
}, {
    "name": "Texas",
    "capital": "Austin"
}, {
    "name": "Utah",
    "capital": "Salt Lake City"
}, {
    "name": "Vermont",
    "capital": "Montpelier"
}, {
    "name": "Virginia",
    "capital": "Richmond"
}, {
    "name": "Washington",
    "capital": "Olympia"
}, {
    "name": "West Virginia",
    "capital": "Charleston"
}, {
    "name": "Wisconsin",
    "capital": "Madison"
}, {
    "name": "Wyoming",
    "capital": "Cheyenne"
}]

# [x] Make sure the states don't appear in alphabetical order in the prompts. This will make the game a bit more challenging for the user.

# [x] Provide a welcome message to introduce the player to the game.

# [x] Initialize new keys in the dictionaries that store the number of times a user gets a capital correct and the number of times the answer is wrong.

# [x] Through all 50 states, prompt the user to name the capital of the state.

# [x] If the answer is correct, display a message saying so, and increment the correct key.

# [x] If the answer is wrong, display a message saying so, and increment the wrong key.

# [x] After each prompt, display a message telling the reader how many times the state was answered correctly out of the total number of times answered.

# [x] Once the user has gone through all 50 states, ask them if they'd like to play again.



print("Welcome to the coolest Capitol guessing game there is!")

def shuffle():
    random.shuffle(states)

def counter():
    for i in range(len(states)):
        states[i]['countUp'] = 0
        states[i]['countDown'] = 0

def question():
    up = 0
    down = 0
    for i in range(len(states)):
        print("What is the capital of: " + states[i]['name'])
        x = input()
        print("The capital is, " + x)
        
        if x == states[i]['capital']:
            print("you won")
            states[i]['countUp'] = states[i]['countUp'] + 1
            up = up + 1
        else:
            print("you lose")
            states[i]['countDown'] = states[i]['countDown'] + 1
            down = down + 1
        # give me that key and add one to its value if x == states[i]['capitol']
        print("You were wrong:" + str(down))
        print("You were right:" + str(up))
        
def play_again():
    answer = input("Would you like to keep playing? yes or no?")
    if answer == 'yes':
        shuffle()
        counter()
        question()
        play_again()
    else:
        print("So looong, farewell, Auf Wiedersehen, good byyyeee! Adieu, adieu, to you and you and you and you.")

shuffle()
counter()
question()
play_again()
