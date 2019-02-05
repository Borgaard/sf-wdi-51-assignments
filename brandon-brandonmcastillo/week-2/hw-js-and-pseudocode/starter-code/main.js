/*
	Part 1: Create three variables: name, age, address.
	Create a fourth variable, greeting, that combines these 3 variables
	to form a greeting.
	For example, "Hello, I'm Anthony, I'm 20 years old and live in 100 Main St."
	Log this variable to the console (console.log(yourVariableName)). 
	Check the console to make sure you're getting the desired result. DONE.

*/
var name = "Brandon";
var age = 22;
var address = "100 Street";
var greeting = console.log("Hello I'm " + name + " , I'm " + age + " years old and live in " + address);
/*
	Part 2: Create another variable called greeting2. This time, use the
	new ES6 Syntax, string interpolation, to create the same greeting.

	Hint: String interpolation uses backticks (`) instead of quotation marks.

	Log this variable to the console (console.log(yourVariableName)). 
	Check the console to make sure you're getting the desired result. DONE.

*/var greeting2 = console.log(`Hello I'm ${name}. I'm ${age} years old and live in ${address}`)

/*
	Part 3: Pythagorean theorem. We will be using the Math object we saw earlier
	in the lesson for this problem.

	Create 2 variables, side1 and side2, which represent two sides of a triangle.
	Assign these variables any positive integer values.
	Create a third variable, side3, which represents the hypotenuse of the triangle. DONE.

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
var side1 = 2;
var side2 = 2;
var side3 = Math.pow(side1,2)+ Math.pow(side2,2);
var hypotenuse = Math.sqrt(side3);
console.log (`Your numbers are ${side1} ${side2} ${side3}`);


/*
	Part 4: (No coding is needed for this part).
	We are given a list of 20 numbers. We have to go through the list and find the
	largest number.

	What would the pseudocode for this problem look like? What variables would we need?


	Hint: How would we solve this problem if we had to do this with pencil and paper?
	What number would we write down to remember? Anything that you write down probably
	belongs in a variable.

1. You will have 20 random numbers. 
2.	Write down the first number that shows. 
3. When you see a number higher than the other, write it down on the side. 
4. If a number is higher than the previous one, cross  it out and write that current number instead.
5. If the number is smaller than the highest number, leave it as is. 
6. When you go through all numbers, the lhighest number will be remaining.

	Bonus: What would the pseudocode look like if you also had to find the smallest number?

	1. You will have 20 random numbers. 
	2. Write down the first number that shows.
3. When you see a number smaller than the other, write it down on the side. 
4. If a number is smaller than the previous one, cross it out and write that current number instead.
5. If the number is higher than your current number, leave it as is. 
6. When you go through all numbers, the smallest number will be remaining.
*/



//  Bonus
// Take a look at the numbers array below. Use the pseudo code you wrote above to find the largest number and log it to the console in the following format: `"The highest number is #"`.

// If you need a hint on how to solve this one, take a look at the steps listed below, along with the linked resources. 
var highestNumber = [0];
var numbers = [2,1,6,8000,100,1];
for (var i = 0; i < numbers.length; i++) {
	if (numbers[i] > highestNumber)
	highestNumber = (numbers[i]);
};
console.log(`The highest number is ${highestNumber}`);


// Steps:
// - First create a variable highestNumber and give it a value of the number 0.
// - Then use a for loop(https://www.w3schools.com/js/js_loop_for.asp) to loop through the numbers array. 
// 	Your for loop should look something like this:
// 	for (var i = 0; i < numbers.length; i++) {
	
// 	}
// - Within the loop, use an if statement(https://www.w3schools.com/js/js_if_else.asp) to see if the current number (numbers[i]) is greater than the number that is currently stored in highestNumber.
// - If so, save numbers[i] in the highestNumber variable.
// 	- Hint: you only need to use the var keyword when you initially set up a variable. To update a variable, simply use the variable name (highestNumber) followed by = followed by the new value (numbers[i]).
// - After the for loop, log highestNumber to the console.


// var numbers = [20, 3, 5, 7, 13, 30];