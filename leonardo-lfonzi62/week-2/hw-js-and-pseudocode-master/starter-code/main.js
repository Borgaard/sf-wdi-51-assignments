/*
	Part 1: Create three variables: name, age, address.
	Create a fourth variable, greeting, that combines these 3 variables
	to form a greeting.
	For example, "Hello, I'm Anthony, I'm 20 years old and live in 100 Main St."
	Log this variable to the console (console.log(yourVariableName)).
	Check the console to make sure you're getting the desired result.
*/
let name = "Leonardo";
let age = 25;
let address = "222 Main Street SF Ca 94272";

let greeting = "Hello, my name is " + name + " I'm " +  age +  " years old and live at " +
address + "."

console.log(greeting);
/*
	Part 2: Create another variable called greeting2. This time, use the
	new ES6 Syntax, string interpolation, to create the same greeting.

	Hint: String interpolation uses backticks (`) instead of quotation marks.

	Log this variable to the console (console.log(yourVariableName)).
	Check the console to make sure you're getting the desired result.

*/

 let greeting2 = `Hello, my name is ${name}.I'm ${age} years old and live at ${address}. `

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

let side1 = 3;
let side2 = 4;
let side3 = Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
console.log( ` Triangle Side Lengths: a = ${side1}, b = ${side2}, c = ${side3}`);

/*
	Part 4: (No coding is needed for this part).
	We are given a list of 20 numbers. We have to go through the list and find the
	largest number.

	What would the pseudocode for this problem look like? What variables would we need?

	Hint: How would we solve this problem if we had to do this with pencil and paper?
	What number would we write down to remember? Anything that you write down probably
	belongs in a variable.

	Bonus: What would the pseudocode look like if you also had to find the smallest number?

 *********** MY PSEUDOCODE *************
1.Create a var that stores the first value in the list.

2. Go through each item in the list and see if the next number in the list is greater than the intial value
if that number is greater , update the variable to the larger number.

3. Loop through this process until there are no more numbers in  the list and you have your largest number!

1. If you had to check a smaller number as well , create  two variables var smallNumber & var largeNumber
and set it equal to the intial number in the list.

Go through each item in the list and see if the next number in the list is greater than the largeNumber variable
or smaller than the smallNumber variable. if that number is greater , update the largeNumber variable to the larger number.
if that number is smaller , update the smallNumber variable to the smaller number

Loop through this process until there are no more numbers in  the list and you have your smallest and largest number!


 *********** MY PSEUDOCODE *************
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
//  CODE SOLUTION USING MY PSEUDOCODE
var numbers = [20, 3, 5, 7, 13, 30];
var highestNumber = numbers[0];
var smallNumber = numbers[0];
for (var i = 0; i < numbers.length; i++) {
	if (numbers[i] > highestNumber) {
		highestNumber = numbers[i];
	}
	else if (numbers[i] < smallNumber ) {
		smallNumber = numbers[i];
	}
}
console.log(`The largest Number is # ${highestNumber}`);
console.log( `The smallest Number is # ${smallNumber}`);
//  CODE SOLUTION USING MY PSEUDOCODE

// CODE SOLUTION USING INSTRUCTIONAL STEPS
var numbers = [20, 3, 5, 7, 13, 30];
var highestNumber = 0;
var smallNumber = numbers[5];
for (var i = 0; i < numbers.length; i++) {
	if (numbers[i] > highestNumber) {
		highestNumber = numbers[i];
	}
	else if (numbers[i] < smallNumber ) {
		smallNumber = numbers[i];
	}
}
console.log(`The largest Number is ${highestNumber}`);
console.log( `The smallest Number is ${smallNumber}`);

// CODE SOLUTION USING INSTRUCTIONAL STEPS


