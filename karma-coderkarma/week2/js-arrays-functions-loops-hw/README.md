# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Arrays, Functions, and Loops, Oh My! Homework
>***Notes:*** Computer programs normally run from the top of the file to the bottom. Programs would be pretty boring if they always did the same thing, though. We will practice using `if/else` statements to create dynamic programs that perform different actions depending on different conditions.

> We will also practice working with arrays. To work with arrays, programmers usually use loops. We'll work on exercises that will have us going through loops, forward and backward (literally). Arrays and loops are going to be fundamental to your knowledge, no matter what computer language you choose to learn.

> Another fundamental part of creating code is writing DRY code (code that doesn't repeat itself). We will create functions that give us code snippets that we can reuse without repeating ourselves.

## Exercise

### Requirements
* Follow the instructions provided in the `main.js` file in the `starter-code` folder.
* Open the `index.html` file and examine the console in the Developer Tools. Look here to see if your code is producing the correct results.
* Submit 2-5 questions that you would like addressed regarding this homework.

### Directions

#### Part 1
We have an array of people's ages, saved in the variable `ages`.
	Write a for-loop that will print each of the elements to the console.

#### Part 2
* Let's create a new variable, `younger`, which holds an empty array.
* Using a `for` loop, populate the `younger` array with numbers from the `ages` array that are less than or equal to 20.
	* Hint: Use the `for` loop to go through each element in the `ages` array.
	* Hint: Use the `array.push()` method to add an element to the end of an array.
	(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
  
#### Part 3
We're comfortable going through an element from beginning to end, but let's flip this around. With the new `younger` array you created in the last part, print out the elements so that the last element is printed out first, and the first element is printed out last.
	* Hint: What should the index for your `for` loop be initialized to if we want to start at the end of the array?
	* Hint: What would the conditional for your `for` loop look like?

#### Part 4
Now that you've finished the first three parts with a `for` loop, repeat the same exercises (Part 1, Part 2, and Part 3) using a `while` loop.

* Hint: Be careful of infinite loops!

#### Part 5
* Create a function, `getDayOfWeek`, that will tell you what day of the week it is.  
  * For example, `getDayOfWeek(1);` would return `"Monday"`, and `getDayOfWeek(5);` would return `"Friday"`.
* An invalid day of the week should return the string, `"Please enter a valid day of the week"`.
	* Hint: Using a "switch" statement might result in cleaner code.
  
#### Bonus - Part 6
All this work is making me hungry. Let's create a new function, `addPepperoniToPizza`, that accepts an array of pizza ingredients. 

* If the array of ingredients already contains pepperoni, then return the pizza ingredients without doing anything to it.
* If the array of ingredients does not contain pepperoni, then add pepperoni to the array and return it.

	* For example: 
		* `addPepperoniToPizza(['onions', 'olives', 'pineapple'])` should return `['onions', 'olives', 'pepperoni']`
		* And `addPepperoniToPizza(['spinach', 'pepperoni', 'mushrooms'])` should return `['spinach', 'pepperoni', 'mushrooms']`.

**Hint:** Take a look at the `array.indexOf()` method. How can we use this to check if we have pepperoni in our array?
	(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
  
## Resources
[MDN Reference for Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
