/*
	Part 1: Create three variables: name, age, address.
	Create a fourth variable, greeting, that combines these 3 variables
	to form a greeting.
	For example, "Hello, I'm Anthony, I'm 20 years old and live in 100 Main St."
	Log this variable to the console (console.log(yourVariableName)).
	Check the console to make sure you're getting the desired result.

*/
var name = "Bobbi Brown";
var age = 61;
var address = "767 Fifth Ave. New York, NY 10153";
var greeting = `Hello, I'm ${name}, I'm ${age} years old and live in ${address}`;
console.log(greeting);

/*
	Part 2: Create another variable called greeting2. This time, use the
	new ES6 Syntax, string interpolation, to create the same greeting.

	Hint: String interpolation uses backticks (`) instead of quotation marks.

	Log this variable to the console (console.log(yourVariableName)).
	Check the console to make sure you're getting the desired result.

*/
const greeting2 = `Hello, this is ${name} from greeing2, I'm ${age} years old and live in ${address}`;
console.log(greeting2);

/*
	Part 3: Pythagorean theorem. We will be using the Math object we saw earlier
	in the lesson for this problem.

	Create 2 variables, side1 and side2, which represent two sides of a triangle.
	Assign these variables any positive integer values.
	Create a third variable, side3, which represents the hypotenuse of the triangle.

	Use the Pythogorean theorem to solve for the value of side3.
	(https://en.wikipedia.org/wiki/Pythagorean_theorem)

	Hint: Take a look at the MDN reference for more information about the Math object.
	(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

	Hint: We need to be able to calculate the square root of a number to find the
	value of the hypotenuse. Does the Math object give us a function to find the square root?

	Hint: We need to be able to calculate the square of a number to find the value
	of the hypotenuse. Does the Math object give us a function find the square of a number?

	Log the side1, side2 and side3 variables to the console (console.log(yourVariableName)).
	Check the console to make sure you're getting the desired result.
*/

var side1 = 3;
var side2 = 4;
var side3 = Math.sqrt(Math.pow(side1,2) + Math.pow(side2,2));
console.log(side3);



/*
	Part 4: (No coding is needed for this part).
	We are given a list of 20 numbers. We have to go through the list and find the
	largest number.

	What would the pseudocode for this problem look like? What variables would we need?

	Hint: How would we solve this problem if we had to do this with pencil and paper?
	What number would we write down to remember? Anything that you write down probably
	belongs in a variable.

	Bonus: What would the pseudocode look like if you also had to find the smallest number?
*/

/*
	PSEUDOCODE

	function findMax takes argument ARRAY
		BEGIN LOOP
			MAX = first item in array
			STORE first item's value as MAX
			Compare each index in ARRAY to the next.
			IF next item in array is bigger than MAX,
				MAX takes on that value
				Loop moves forward
			ELSE
				Loop Moves forward
		END LOOP
		Return MAX

*/


/* Bonus
Take a look at the numbers array below. Use the pseudo code you wrote above to find the largest number and log it to the console in the following format: `"The highest number is #"`.

If you need a hint on how to solve this one, take a look at the steps listed below, along with the linked resources.

Steps:
- First create a variable highestNumber and give it a value of the number 0.
- Then use a for loop(https://www.w3schools.com/js/js_loop_for.asp) to loop through the numbers array.
	Your for loop should look something like this:
	for (var i = 0; i < numbers.length; i++) {

	}
- Within the loop, use an if statement(https://www.w3schools.com/js/js_if_else.asp) to see if the current number (numbers[i]) is greater than the number that is currently stored in highestNumber.
- If so, save numbers[i] in the highestNumber variable.
	- Hint: you only need to use the var keyword when you initially set up a variable. To update a variable, simply use the variable name (highestNumber) followed by = followed by the new value (numbers[i]).
- After the for loop, log highestNumber to the console.
*/

var numbers = [-20, -3, -5, -7, -13, -30];

function findMax(array) {
	var max = array[0];
	for (var i=0; i<array.length;i++) {
		if (array[i+1] > max) {
			max = array[i+1];
		}
	} return max;
}

console.log(findMax(numbers));
