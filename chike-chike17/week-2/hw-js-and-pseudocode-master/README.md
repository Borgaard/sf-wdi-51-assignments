# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) JS and Pseudocode Homework

>***Notes:*** In this homework assignment, we are going to practice fundamental programming skills. As programmers, we will be performing numerous calculations that we want to save. We'll practice using variables to save these values so that we can reuse them later on.

>There will also be instances where we won't write our own code from scratch. Instead, we will use code that other people have created and tested heavily. To do this, we'll have to be comfortable reading documentation to learn how to use other people's existing code, as well as how to incorporate it into our own code.

>When tackling a new programming challenge, it is tempting to dive right into the code. For simpler problems that the developer has seen before, this might not be an issue. But for larger problems that they haven't seen before, developers will usually plan out their solution in plain English to make sure their logic is correct. We'll practice pseudocode so we can be comfortable tackling new problems that come our way.

## Exercise

### Requirements
* Follow the instructions provided in the `main.js` file in the `starter-code` folder.
* Open the `index.html` file and examine the console in the Developer Tools. Look here to see if your code is producing the correct results.
* Submit 2-5 questions that you would like addressed regarding this homework.

### Directions

#### Part 1: 
  * Create three variables: `name`, `age`, and `address`.
	* Create a fourth variable, `greeting`, that combines these three variables to form a greeting.
    * For example, "Hello, I'm Anthony, I'm 20 years old and live at 100 Main St."
    * Log this fourth variable to the console. Check the console to make sure you're getting the desired result.
    
#### Part 2:
  * Create another variable called `greeting2`. 
  * This time, use the new ES6 Syntax, string interpolation, to create the same greeting.
    * Hint: String interpolation uses `backticks` instead of quotation marks.
    * Log the `greeting2` variable to the console. Check the console to make sure you're getting the desired result.

#### Part 3: Pythagorean Theory
_We will be using the `Math` object for this problem._

* Create two variables, `side1` and `side2`, which represent two sides of a triangle.
* Assign these variables any positive integer values.
* Create a third variable, `side3`, which represents the hypotenuse of the triangle.
* Use the Pythogorean theorem to solve for the value of `side3`.
	(https://en.wikipedia.org/wiki/Pythagorean_theorem)
	  * _Hint: Take a look at the MDN reference for more information about the Math object._
	(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
	  * _Hint: We need to be able to calculate the square root of a number to find the
	value of the hypotenuse. Does the Math object give us a function to find the square root?_
	  * _Hint: We need to be able to calculate the square of a number to find the value of the hypotenuse. Does the Math object give us a function find the square of a number?_
	  * Log all three variables to the console. Check the console to make sure you're getting the desired result.
  
#### Part 4: (No coding is needed for this part).
* We are given a list of 20 numbers. We have to go through the list and find the largest number.
* What would the pseudocode for this problem look like? What variables would we need?
	* Hint: How would we solve this problem if we had to do this with pencil and paper?
* What number would we write down in order to remember? Anything that you write down probably belongs in a variable.
* **Bonus:** What would the pseudocode look like if you also had to find the smallest number?

#### Bonus: 
Take a look at the array below. Use the pseudocode you wrote above to find the largest number and log it to the console in the following format: `"The highest number is #"`.

```js
var numbers = [20, 3, 5, 7, 13, 30];
```

If you need a hint on how to solve this one, take a look at the steps listed below, along with the linked resources. 

Steps:
- First create a variable `highestNumber` and give it a value of the number `0`.

- Then use a [`for` loop](https://www.w3schools.com/js/js_loop_for.asp) to loop through the `numbers` array. 
	- 	Your `for` loop should look something like this:

		```js
		for (var i = 0; i < numbers.length; i++) {
		
		}
		```
- Within the loop, use an [`if` statement](https://www.w3schools.com/js/js_if_else.asp) to see if the current number (`numbers[i]`) is greater than the number that is currently stored in `highestNumber`.
- If so, save `numbers[i]` in the `highestNumber` variable.
	- Hint: You only need to use `var` when you initially set up a variable. To update a variable, simply use the variable name (`highestNumber`) followed by `=` followed by the new value (`numbers[i]`).
- On the line after the `for` loop, log `highestNumber` to the console in this format: "The highest number is #"`.


## Resources
[MDN Reference for the Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
