# [X] Welcome user to the game!

# [X] array to print "capital Columbus state Ohio" for all
#     do I need to user f?  no just use for in loop
#   for key in student:
#   print( f"{key} = {student[key]}" )
#   https://git.generalassemb.ly/sf-wdi-51/intro-to-python-1#dictionaries---iterating-items
# correct for state Wyoming number that state got correct0
# convert number to string: str(state["correct"]))


# [X] get the array to show up shuffled! 
# [X] get python to ask for name of capitol "please "
# [X] store the user's input
# [X] check user's input is correct or not and give feedback

# tips: Potentially Useful Methods
# print
# input
# for loop
# sorted
# random.shuffle()
# str <== debugging

# get random library!
import random

states = [
{
    "name": "Alabama",
    "capital": "Montgomery"
}, {
    "name": "Pennsylvania",
    "capital": "Harrisburg"
}, {
    "name": "New Jersey",
    "capital": "Trenton"
}, {
    "name": "Wyoming",
    "capital": "Cheyenne"
}]


# use random lib method shuffle to shuffle states
random.shuffle(states)
# print(states)

print("Welcome to name your capital game!!!")
# input("Tell me the capital of: " + states[3]["name"])

for state in states: 
    capital_guess = input("Tell me the capital of: " + state["name"] + "state capital is " + state["capital"])
    print("your answer: " + capital_guess)

    if capital_guess == state["capital"]:
        print("yes! you are correct!")
    else:
        print("Sorry wrong capital. Try a new state!")


    # if capital_guess == state["capital"]:
# for state in states:
#   print("capital " + state["capital"] + " state " + state["name"])

# assign each state { "correct": 0, "wrong":0}
for state in states: 
  state["correct"] = 0
  state["wrong"] = 0

# print(states[0]["correct"])
# expect to see each state's name with number of each state got correct which is set to 0 at first
  # print("correct for state " + state["name"] + " " + " number that state got correct" + str(state["correct"]))

# for state in states:
#   print("capital " + state["capital"] + " state " + state["name"] + " number that state got correct " + str(state["correct"]) + " number that user got wrong for that state " + str(state["wrong"]))


