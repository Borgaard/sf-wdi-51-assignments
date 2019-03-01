/*
	Part 1: Create three variables: name, age, address.
	Create a fourth variable, greeting, that combines these 3 variables
	to form a greeting.
	For example, "Hello, I'm Anthony, I'm 20 years old and live in 100 Main St."
	Log this variable to the console (console.log(yourVariableName)).
	Check the console to make sure you're getting the desired result.

*/

var name = "Siri";
var age = 25
var address = "1064 Ridgemont Dr."

var greeting = "Hi, I'm " + name + ", I'm " + age + " years old, and I live at " + address;
console.log(greeting);
/*
	Part 2: Create another variable called greeting2. This time, use the
	new ES6 Syntax, string interpolation, to create the same greeting.

	Hint: String interpolation uses backticks (`) instead of quotation marks.

	Log this variable to the console (console.log(yourVariableName)).
	Check the console to make sure you're getting the desired result.

*/

var greeting2 = `Hi I\'m ${name}, I\'m ${age} years old, and I live at ${address}`;
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

var side3 = Math.sqrt((side1*side1) + (side2*side2));

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
largestNum
start with the first element of the array. store it as a variable called largestNum
iterate through the array one place at a time.
if the next number in the array is larger than the previous, set the largestNum to that number
return the largestNum

smallestNum
start with the first element of the array. store it as a variable called smallertNum
iterate through the array one place at a time.
if the next number in the array is smaller than the previous, set the smallertNum to that number
return the smallestNum
*/


/*
make an array variable of 20 numbers called array. you can sort using array.sort and the biggest one should be at array[array.length-1]
make a variable called largestNum and set it equal to array[0]
iterate throgh the array and compare largestNum to the next number in the array
 whichever one is bigger, set largestNum to it
 loop stops when you get to end of array
 return largestNum
*/

array = [44, 23, 353452, 24, 123, 23, 989, 324, 88, 66, 4, 794, 1, -44, 56, 2, 898, 9, 19, 12];

array.sort();
console.log(array);

function largestNumber(){
	largestNum = array[0];
	for(i=0; i<array.length; i++){
		if(array[i]>largestNum){
			largestNum = array[i];
		};
	};
	return largestNum;
};



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

var numbers = [20, 3, 5, 7, 13, 30];
var largestNum = numbers[0];
var smallestNum = numbers[0];
for (var i = 0; i < numbers.length; i++) {
	if(numbers[i] >= largestNum){
		largestNum = numbers[i];
	}
	if(numbers[i] <= smallestNum){
		smallestNum = numbers[i];
	}
}

console.log("the largest number is " + largestNum + " and the smallest number is " + smallestNum);









