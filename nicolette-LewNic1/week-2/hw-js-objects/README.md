# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Objects Homework
>***Notes:*** Object Oriented Programming is one of the most popular patterns of programming. You'll also see this in other programming languages such as Ruby and Python.

> When we program with objects, we model our data as if they were things we see in the real world. For example, what properties do people have? They have a first name, a last name, a height, and much more. They also have plenty of actions that they can perform, such as talking and walking.

> We'll start to use objects to represent our data. We'll practice creating objects to represent animals.

> Arrays are a simpler data structure compared to objects. In a real-world context, you can think of them as shopping lists. A shopping list has a certain order to it; we can read from the list, and we can also add to the list. We'll practice working with arrays and loops to see how they can keep our code DRY and reusable.

> This homework assignment is important! The patterns that we will be working with in these exercises will be used again when we start using JavaScript to create dynamic web pages.

## Exercise

### Requirements
* Follow the instructions provided in the `main.js` file in the `starter-code` folder.
* Open the `index.html` file and examine the console in the Developer Tools. Look here to see if your code is producing the correct results.
* Determine a test to validate your code.

### Directions

#### Part 1
We're going to create animals.

* Create four animal objects: a dog, a cat, a bird, a mouse.
* Each of these animal objects should have a name, a noise that they make, and a `makeNoise` property that prints out their noise.

#### Part 2
Let's use an array to hold all of these animals.
* Create a new variable, `animals`, that contains the four animals we just created.
* Use a `for` loop to iterate through the array of animals, and have each animal make a noise.
  * Hint: Use the makeNoise() function for each animal in the array.

#### Part 3
Let's see how hungry these animals get by adding a `hunger` property to them.

- Use a `for` loop to iterate through the array of animals, and add a `hunger` property with a value of 10. This value will represent how hungry the animal is. A value of 10 means they're pretty full, and a value of 0 means they're starving.
	- Hint: The syntax to add a new property to an object looks like this:
  <br>
    `myObject.newPropertyName = newValue; //` or...
    <br>
	  `myObject['newPropertyName'] = newValue;`

#### Part 4
These animals should be able to walk. Let's add a new `walk` property to them.
* For each animal, the `walk` property should be a function that prints out a string that says they are walking.
* It should also subtract 1 from their `hunger` property.
For example, if I had a duck that looked like this:

``` javascript
var duck = {
	name: 'duck',
	hunger: 8
};
duck.walk();
// => "duck took a walk"
//
console.log(duck.hunger);
// => 7
```
  
  Hint: You will need to use the `this` keyword.
  
#### Part 5

Now these animals can walk and talk by themselves, but they're quite lonely.
* Let's add a `makeFriend` property to each animal. The `makeFriend` property will be a method that takes another animal as an argument, and adds it to their `friend` property.
	
For example, if I had a duck and swan that looked like this:
  
```javascript
var duck = {
	name: 'duck'
};
var swan = {
	name: 'swan',
	noise: 'chirp quack'
};

duck.makeFriend(swan);
console.log(duck.friend);
// => { name: 'swan' }
duck.friend.makeNoise();
// => "chirp quack"  
```

#### Bonus
This bonus will be a challenge! To complete this step, you'll need to do some Googling to look up things that have not yet been covered.

- Take a look at the `index.html` file. You'll notice the following code:

	```html
	<img src="">
	```

	- Here we have an image without a `src` attribute. 

- Now take a peek inside the `images` folder to see what images are there. 

	- Here are the image paths for reference:

		- `images/bird.jpg`
		- `images/cat.jpg`
		- `images/dog.jpg`
		- `images/mouse.jpg`

	- Note that the name of each image is the animal name (bird, cat, dog, or mouse) plus an extension of `.jpg`.

- Now that you're familiar with the code and assets that are available to you, let's add an `appear` property to each animal. The `appear` property will be a method that updates the `src` attribute to the path of the image of that animal.

- Test things out by calling the `appear` method for one of your animals. When you load the page in your browser, the image of the animal should appear!

- **Hint #1:** Google the following:
	- "JavaScript querySelector"
	- "JavaScript setAttribute"

- **Hint #2:** You'll need to use the `this` keyword to access the name of the current animal from within the `appear` method to create the image path. The format to do so should look like this:

	- `'images/' + this.name + '.jpg'`

- **Hint #3:** Still stuck? The code to update the image source should look like this:

	```js
	document.querySelector('img').setAttribute('src', 'images/' + this.name + '.jpg');
	```
	

---

## Resources
[MDN Reference for Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

[MDN Reference for the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
