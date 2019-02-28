# React Giphy

## resource
starter pack
- https://git.generalassemb.ly/sf-wdi-51/react-giphy-lab

solution pack
- https://git.generalassemb.ly/sf-wdi-51/react-giphy-lab/tree/solution

- demo: https://react-giphy-app.herokuapp.com/

### # Event Handlers and the Component Lifecycle in React

## Learning Objectives
* Understand how to use React's lifecycle methods
* Retrieve data from an API inside of a component
* Handle events in React
* Look at the React documentation to learn more

## Framing (10 min / 0:10)

So far, we've used react components to build simple applications. We've added state and props and controlled data flow through them (using just the render and setState methods). In order to do more complex things, we'll have to use lifecycle methods.

How do we get data from an API? Well we could drop in an AJAX call to fetch some data, but our component would likely render before the AJAX request finished. Our component would see that our data is `undefined` and either render a blank/empty component or throw an error.

How would we animate a component? (i.e. a sidebar that usually lives off the page, except for when a hamburger menu is pressed.) We could write some code to animate the position of the sidebar, but how could we guarantee it was running after our Sidebar component's render method had been called?

This lesson will walk us through the Component Lifecycle: hooks that are fired at different stages of a components "life" for solving the problems described above, as well as many others.

Throughout the course of this lesson, we'll build out a simple flashcard app with vocabulary keywords pulled from the Oxford Dictionary API. Our flashcard app will cycle through a set of flashcards, giving us 10 seconds to think of the definition before moving on to the next card.

But first, what is the Component Lifecycle?

## The Component Lifecycle (10 min / 0:20)

Components provide several lifecycle methods that you can use to control your application based on the state of the UI.

When you include these methods in the component they will be invoked automatically (because we are extending the React.Component class which has them already defined).

Lifecycle methods are called at specific points in the rendering process. You can use these methods to perform actions based on what's happening on the DOM.

* `componentWillUnmount` is called immediately *before* a component is removed from the DOM.
* `componentDidMount`, for example, is called immediately *after* a component is rendered to the DOM.

**What do you use lifecycle methods for?**

Making asynchronous requests (ajax calls), binding event listeners to components, animating components (once they've rendered), and optimizing for performance (shouldComponentUpdate).

**Why is it called a lifecycle?**
It's an action that repeats in a specific order.

![ ](./images/react_lifecycle_methods.png  "React-component-lifecycle")

### At a very high level

There are two types of component lifecycle methods:

* **Mounting** lifecycle methods. e.g. What happens when the component is created? Was an initial state set? Methods:
  - `constructor(props)`
  - `UNSAFE_componentWillMount()`
  - `static getDerivedStateFromProps(props, state)`
  - `render()`
  - `componentDidMount()`

* **Updating** lifecycle methods. e.g. Has state changed? Methods:
  - `UNSAFE_componentWillReceiveProps()`
  - `shouldComponentUpdate(nextProps, nextState)`
  - `UNSAFE_componentWillUpdate()`
  - `render()`
  - `getSnapshotBeforeUpdate(prevProps, prevState)`
  - `componentDidUpdate(prevProps, prevState, snapshot)`
 
* **Unmounting** lifecycle method when the component is removed from DOM
  - `componentWillUnmount()`
	
The documentation gives good examples of what each method should be used for. [Check out the documentation on components!](https://facebook.github.io/react/docs/react-component.html)

## We do: Exploring the Lifecycle methods (20 min / 0:40)

Let's clone down [this repository](https://git.generalassemb.ly/SF-WDI/react-component-lifecycle/tree/master/react-component-lifecycle) with a short exercise for exploring the lifecycle methods.

This exercise is a simple, 2 "page" website where each page is a component. We'll be adding the component lifecycle methods to each page-component. As we do consider the following questions:

* What order are the methods run in? Before or after rendering?
* How many times is the method invoked?
* What causes the method to be (re)invoked?

> Add the mounting methods to HomePage.js and the update methods to AboutPage.js. console.log something in each method to understand the order.

### An Aside: Axios (10 min / 0:50)

For our first example of working with the component lifecycle methods, we'll be retrieving data from an API using AJAX.
AJAX calls are asynchronous, so we have to be mindful of how long our request will take and when our components will render.

We're going to use a module named `axios` to make our calls. Axios is a node module commonly used with React to send HTTP requests to an API. It functions much like jQuery's Ajax method, or window.Fetch(). Some benefits to using Axios:

* It is a promise-based library with an interface for simpler and cleaner syntax (compared to native XHR especially).
* It is lightweight and focused solely on handling HTTP requests (as opposed to jQuery which brings in an extensive set of new functions and methods)
* It is very configurable and has a number of useful methods for doing more complex requests from one or multiple API endpoints
* It handles a lot of the http header manual work for you (e.g. send a json file, it sets `Content-Type: application/json`)

Read more at the [Axios Documentation](https://github.com/mzabriskie/axios)

> Note: Axios is just one of many Javascript libraries that we could use for handling requests. One of the big selling points of javascript is the ability to mix and match technologies according to preference. Other commonly-used tools for handling requests are fetch and jQuery.

To load in the Axios module:

```js
// If you are using Babel to compile your code
import axios from 'axios'

// In standard vanilla Javascript
let axios = require('axios')
```

To use Axios to query an API at a given url endpoint:

```js
axios.get('url')
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
```

<!-- You can also append values to the parameters by passing in a second input to `.get()`:

```js
  axios.get('url', {
    params: {
      key1: value1,
      key2: value2
    }
  })
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
```

Which would result in a GET request to: `url?key1=value1&key2=value2`.
 -->

<!-- ### We Do: Axios and AJAX inside a React Component:
> 15 min / 1:05

We will be using Axios to query the PokéAPI in [this exercise](https://git.generalassemb.ly/ga-wdi-exercises/react-components-axios). -->

## Flashcards (90 min / 2:30)

As we dive deeper in to each of the component lifecycle methods and what they're used for, we'll work through the following exercise to create a simple flashcards app.

The starter code for this exercise can be found [here](https://git.generalassemb.ly/SF-WDI/flashcards).

Let's go ahead and clone the repository:

```bash
$ git clone https://git.generalassemb.ly/SF-WDI/flashcards
$ npm install
$ npm start
```

The app we're going to build will pull characters from a dictionary API and create a flashcard for each word and definition`. The app will then cycle through each word, giving the user 10 seconds to think of the definition before moving on to the next card. 

The solution code is [here](https://git.generalassemb.ly/SF-WDI/flashcards/tree/solution)

### We Do: Adding the Flashcard Container

#### Use Axios to query the dictionary API

<details>
    <summary>Solution</summary>

```js
// FlashcardContainer.js

class FlashcardContainer extends Component {
  constructor() {
    super(); 

    this.state = {
      flashcards: [],
      currentIndex: 0
    }
  }

  componentDidMount() {
    axios.get(CLIENT_URL)
      .then((response) => {
          console.log(response)
          this.setState({flashcards: response.data})
        })
  }

  render() {
    let detail = this.state.flashcards[this.state.currentIndex]
    let card;

    if(detail) {
      card = <Flashcard detail={detail}/>
    }

    return (
      <div>
        {card}
      </div>
    )
  }
}
```

</details>

The componentDidMount method is called once, immediately after your component is rendered to the DOM. If you want to make an AJAX request when your component first renders, this is where to do it (not in the constructor, or in componentWillMount). componentWillMount shouldn't be used for server requests because it may be invoked multiple times before render. Side effects should be avoided in the constructor, and so server requests shouldn't be made there.

#### Add an event listener to switch between cards

<details>
    <summary>Solution</summary>

```js
//FlashcardContainer.js

class FlashcardContainer extends Component {
  state = {
      flashcards: [],
      currentIndex: 0
    }

  // increment currentIndex
  next () {
    let nextIndex = (this.state.currentIndex + 1) === this.state.flashcards.length
      ? this.state.currentIndex
      : this.state.currentIndex + 1

    this.setState({currentIndex: nextIndex})
  }

  // decremement currentIndex
  prev () {
    let prevIndex = (this.state.currentIndex - 1) < 0
      ? 0
      : (this.state.currentIndex - 1)

    this.setState({currentIndex: prevIndex})
  }

  // callback to be used in the event listener below
  handleKeyUp (event) {
    if (event.keyCode === 39) this.next()
    if (event.keyCode === 37) this.prev()
  }

  componentDidMount () {
    window.addEventListener('keyup', this.handleKeyUp)

    axios
      .get(CLIENT_URL)
      .then(response => this.setState({flashcards: response.data}))
      .catch(err => console.log(err))
  }

  render() {
    let detail = this.state.flashcards[this.state.currentIndex]
    let card;

    if(detail) {
      card = <Flashcard detail={detail}/>
    }

    return (
      <div>
        {card}
      </div>
    )
  }
}
```

</details>

In this example, we have added a constructor that has a few initial state properties. We also add an event listener that switches to the next card on right arrow press. Finally, we add an API pull to fetch the dynamic data we will use for the app.

### You Do: Adding a Timer to the Flashcard

Add a timer to the Flashcard Detail component.

* Initialize the timer to have 10 seconds on it
* Every second the same flashcard is still on the board, remove a second from it
> **hint**: use `setInterval()`)
* When the timer reaches zero, switch to the next card
> **hint**: where did you define the `next()` method? How can you access it from `Flashcard.js`?
* When the `Flashcard` component receives a new card, restart the timer


#### We Do: Adding the Definition Component

Now that we have our flashcard displayed, lets add their definitions as well.

For this, we will use a pure functional component -- or a component created by a function instead of a class -- and then change its style dynamically based on its index.

<details>
    <summary>Solution</summary>

```js
//Definition.js

import React from 'react';

let Definition = (props) => {

	return (
		<div className="">
			<p>{props.def}</p>
		</div>
	)
}

export default Definition;
```

```js
// Flashcard.js
...
class Flashcard extends Component {
  render() {
    let defs = this.props.detail.definitions[0].definitions 

    return (
      <div class="card">
        <p>{this.props.detail.word}</p>
        { defs.map(def => <Definition def={def} /> )}
      </div>
    )
  }
}
...
```

</details>

## You Do: Show or Hide the Definition

Add a button that, when clicked, toggles whether or not the definition card is displayed on the page.

## React Documentation

* What is an uncontrolled component in React? Why would we use it instead of a controlled one?
* Describe 1-way and 2-way data binding. Which model does React use? Explain and compare to other popular front-end frameworks.
* Describe how to best gather information from a form in React. Be prepared to show code!
* Compare and contrast stateful, stateless, and functional components in React. List the pros and cons of each. When would we use one over the other?

## Bonus



## Event Handlers
https://git.generalassemb.ly/sf-wdi-51/react-component-lifecycle/edit/master/readme.md

Throughout the last few classes, you've seen a couple event handlers. These look similar to including them inline in HTML.

In the React Intro class, we went over how we are not actually interacting directly with the DOM when we write React code, rather, we are interacting with the virtualDOM. Because of this, when we call an event listener, we use `SyntheticEvent`'s instead of the usual event objects we are used to dealing with in JQuery events. We still get all of the same properties attached to them, and some additional ones. Because of this, the traditional documentation on event handlers is sometimes not accurate. Instead, use the React event handling documentation found [here](https://facebook.github.io/react/docs/events.html). Spend a few minutes looking at the different events on listed here.

**See Headers Below For Step By Step Outline**

> **Note**: each step has a corresponding commit with the implemented actions on the solution branch of this repo.

### Step 0a: Examine the Solution

Take a look at the [completed app here](https://react-giphy-app.herokuapp.com/) repo.

Spend time playing around with the completed exercise. Think about how you would separate your different components and functionality.


### Step 0b: Create React App

Create a new React app called react-giphy.

Remove everything from `Index.js` and `App.js`.

Now go ahead and setup `Index.js` and `App.js` from scratch (look at docs or previous labs if you need to).


### Step 1: Set up a `HelloWorld` Component

Before we start building our React app, let's create a `HelloWorld` component just to make sure that we've tied everything together properly.  

- In your `/src` directory, configure your `App.js` and `index.js` files to render a `HelloWorld` component.
- Run `npm start` and make sure everything is working (sanity check).

### Step 2: Add UI for Home

- Rename `App.js` to `Home.js` to better indicate the purpose of the file. Make sure to update references to this file elsewhere in your application accordingly.
- Create a Home component that returns a container `<div>` element, which should in turn contain a `<h1>` element.
- Render that component to the DOM in your app's main `index.js` file

### Step 3: Add UI for Search

- Create a new file for your `Search` component.
- Define a `Search` component that renders a search form. This can be a simple form with a single input and submit button.
- Import the `Search` file to your `Home` file.
- Render the `Search` component in the `Home` component.

### Step 4: Wire up the Search Button

- Define your `Search` component's initial state. It should have a `query` value that corresponds to a search term.
- Define a function that is triggered whenever the user submits the Search form. Start by just logging `"searched!"` to make sure it works.
  - Use an event listener to attach this function to your form. Try googling `onSubmit`.
- Define a function that updates your `query` value in state whenever a change is made to the input field. You can do this using an `onInput` function on your text box, or by using `ref`.
- Update your submit function so that it now logs the `query` value in state.

### Step 5: Move search logic to a `SearchContainer` component

- Create a new `SearchContainer` component that that renders the `Search` component. This `SearchContainer` will also handle search results. 
- Refactor your `Search` component so that it only renders a UI. It should use properties passed into the Search component.
- Move all of the business logic related to state for the search into the `SearchContainer` component. The `SearchContainer` component should still render the `Search` component, with any necessary properties.

### Step 6: When a User Searches...

- Define a `Results` component that will take in a collection of gif objects and render each one's `source` url as well as a fixed height image.  Go ahead an look at the [Giphy search documentation](https://developers.giphy.com/docs/) to see the structure of the JSON it sends.
- Update your `SearchContainer` component's state to include whether the user has submitted a search.
- Update `SearchContainer`'s state to include a list of results.
- If a user has searched, instead of rendering the `Search` component, render a `Results` component with hard coded data.
- This is starting to look like a single page app, but we don't have routing yet. If you'd like, update the component so that the search bar and any results are always displayed on the page, and clear out old results when a new search is submitted. 


<details><summary>click for simplified hard-coded gif data you could use</summary>

```js
{
  "data": [
    {
      "type": "gif",
      "id": "iuHaJ0D7macZq",
      "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
      "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
      "rating": "pg",
      "images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/iuHaJ0D7macZq/200.gif"
        }
      }
    },
    {
      "type": "gif",
      "id": "Z1kpfgtHmpWHS",
      "url": "http://giphy.com/gifs/cat-way-make-Z1kpfgtHmpWHS",
      "source": "http://shewhoseeks.blogspot.com/2016/03/cat-gifs-that-make-me-laugh-way-more.html",
      "rating": "g",
      "images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/Z1kpfgtHmpWHS/200.gif"
        }
      }
    }
  ],
  "meta": {
    "status": 200,
    "msg": "OK"
  },
  "pagination": {
    "total_count": 1947,
    "count": 25,
    "offset": 0
  }
}
```

</details>

### Step 7: Search the Giphy API

- With the API we're using, you will need to [register for an API key](https://developers.giphy.com/). The API key is free, and only takes a minute or two to setup.
- Go ahead an look at the [documentation](https://developers.giphy.com/docs/) to determine the API's proper usage.
- We're going to be searching the giphy API based on a word or phrase to return a collection of results.
- Load in Axios, and use it to make an HTTP request to the API search endpoint using the user's query.
- Pass the data to the Results component to be displayed.

### Step 8: 

- Lets get rid of Search button and call the external API whenever User is entering string to search (Hint: you may have to make some changes in onInput()).
- Now that you have that working, lets introduce some performance optimization. Make changes such that component is only re-rendered if the User changes the search string (Hint: use a lifecycle hook. Also, you may have to set the value of `state.query` in another method).
- After you have made these changes you will notice that even though you are not re-rendering the component, but your app is still making the third-party API call. Use one of the other lifecycle hooks to prevent that from happening (Hint: think about componentDidUpdate() lifecycle method).

You can view the solution [here](https://git.generalassemb.ly/SF-WDI/react-giphy-lab/tree/solution).
## Bonus

### Step 9: Add Styles to your React app

- Load in Bootstrap CDN in `index.html`.
- Modify UI to include Bootstrap classes.
- Create a `styles` directory and make a file for your CSS rule definitions - this will be written in Javascript!.
- Load in that file in any component and then use that to apply inline styling.

### Step 10: Add a single result detail component

- Create a `Details` component that renders information about a single gif.
- When a user clicks on a  gif in the results view, render the detail UI.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)
# Intro to React Router

For this lesson, students should:

- Understand components
- Understand state and props

The first part is a demonstration of how Router works. Students can then work on each lab and the challenges.

## Learning Objectives
- Learn about routing with react-router
<!-- - Using data from APIs and JSON files -->
<!-- - Create a Stock Trading app -->

## Preparation

First, we'll create a new app to learn how React Router works.

1. Create a new react app: `create-react-app learn-react-router`
2. `cd learn-react-router`
3. `npm install react-router-dom`

Once we're done learning the basics, students can clone this repository and use the starter files to get started with the labs.

## What is React Router?

React Router is a module that makes it easy to make single page apps (SPAs). SPAs are web apps which load different sections of a website within the same page. The user feels as though they've never left the homepage because links swap out content and replace it with new content.

The main components of the router are:

1. `BrowserRouter`: The module that stores all the routes for the app as well as route history, current location and url.
2. `Route`: Used to define each individual route by relating each path to a specific component.

Since `BrowserRouter` is the parent component, we'll configure it in `index.js`. It would look like this:

```
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from "react-router-dom"

import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
```

Update `index.js` to include this code.

Next, let's add some routes. Open `App.js` and let's add let's import the routing components we'll need first.

```
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
```

- `Route` is used to connect paths to components
- `Link` is used to create links to `Route` paths.
- `Switch` will find the *first* route to match a given path. Once found, it will stop looking, just like a Javascript switch statement

Now we need some routes. But first, let's create a new component that we can attach to a route:

<details>
<summary>About.js</summary>

```
import React, { Component } from 'react';

class About extends Component {
    render () {
        return (
            <div>
                All about stocks. Read it here, folks!
            </div>
        )
    }
}

export default About;
```

<summary>App.js</summary>

```diff
import React, { Component } from 'react';
import './styles/App.css';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

+ import About from './About';

class App extends Component {
    render() {
        return (
+           <header>
+               <h1>Learn Routing</h1>
+               <nav>
+                   {/* Create our nav bar links using the Link element from react router */}
+                   <ul>
+                       <li><Link to="/about">About</Link></li>
+                   </ul>
+               </nav>

                {/* Create the routes. This will not appear on the page. */}
+               <div className="main">
+                   <Switch>
+                       <Route path="/about" component={ About } />
+                   </Switch>
+               </div>
+           </header>
        );
    }
}

export default App;

```

</details>

Done. We've successfully added a link to a route in our app. Try visiting the route in the browser!

Try adding a route back to the homepage. Don't worry about content for now!
- resource : react router intro https://git.generalassemb.ly/sf-wdi-51/react-router-intro/edit/master/README.md


# React Giphy

**See Headers Below For Step By Step Outline**

> **Note**: each step has a corresponding commit with the implemented actions on the solution branch of this repo.

### Step 0a: Examine the Solution

Take a look at the [completed app here](https://react-giphy-app.herokuapp.com/) repo.

Spend time playing around with the completed exercise. Think about how you would separate your different components and functionality.


### Step 0b: Create React App

Create a new React app called react-giphy.

Remove everything from `Index.js` and `App.js`.

Now go ahead and setup `Index.js` and `App.js` from scratch (look at docs or previous labs if you need to).


### Step 1: Set up a `HelloWorld` Component

Before we start building our React app, let's create a `HelloWorld` component just to make sure that we've tied everything together properly.  

- In your `/src` directory, configure your `App.js` and `index.js` files to render a `HelloWorld` component.
- Run `npm start` and make sure everything is working (sanity check).

### Step 2: Add UI for Home

- Rename `App.js` to `Home.js` to better indicate the purpose of the file. Make sure to update references to this file elsewhere in your application accordingly.
- Create a Home component that returns a container `<div>` element, which should in turn contain a `<h1>` element.
- Render that component to the DOM in your app's main `index.js` file

### Step 3: Add UI for Search

- Create a new file for your `Search` component.
- Define a `Search` component that renders a search form. This can be a simple form with a single input and submit button.
- Import the `Search` file to your `Home` file.
- Render the `Search` component in the `Home` component.

### Step 4: Wire up the Search Button

- Define your `Search` component's initial state. It should have a `query` value that corresponds to a search term.
- Define a function that is triggered whenever the user submits the Search form. Start by just logging `"searched!"` to make sure it works.
  - Use an event listener to attach this function to your form. Try googling `onSubmit`.
- Define a function that updates your `query` value in state whenever a change is made to the input field. You can do this using an `onInput` function on your text box, or by using `ref`.
- Update your submit function so that it now logs the `query` value in state.

### Step 5: Move search logic to a `SearchContainer` component

- Create a new `SearchContainer` component that that renders the `Search` component. This `SearchContainer` will also handle search results. 
- Refactor your `Search` component so that it only renders a UI. It should use properties passed into the Search component.
- Move all of the business logic related to state for the search into the `SearchContainer` component. The `SearchContainer` component should still render the `Search` component, with any necessary properties.

### Step 6: When a User Searches...

- Define a `Results` component that will take in a collection of gif objects and render each one's `source` url as well as a fixed height image.  Go ahead an look at the [Giphy search documentation](https://developers.giphy.com/docs/) to see the structure of the JSON it sends.
- Update your `SearchContainer` component's state to include whether the user has submitted a search.
- Update `SearchContainer`'s state to include a list of results.
- If a user has searched, instead of rendering the `Search` component, render a `Results` component with hard coded data.
- This is starting to look like a single page app, but we don't have routing yet. If you'd like, update the component so that the search bar and any results are always displayed on the page, and clear out old results when a new search is submitted. 


<details><summary>click for simplified hard-coded gif data you could use</summary>

```js
{
  "data": [
    {
      "type": "gif",
      "id": "iuHaJ0D7macZq",
      "url": "http://giphy.com/gifs/cat-day-tomorrow-iuHaJ0D7macZq",
      "source": "https://www.reddit.com/r/CatGifs/comments/5f0h9a/tomorrow_is_legs_day/",
      "rating": "pg",
      "images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/iuHaJ0D7macZq/200.gif"
        }
      }
    },
    {
      "type": "gif",
      "id": "Z1kpfgtHmpWHS",
      "url": "http://giphy.com/gifs/cat-way-make-Z1kpfgtHmpWHS",
      "source": "http://shewhoseeks.blogspot.com/2016/03/cat-gifs-that-make-me-laugh-way-more.html",
      "rating": "g",
      "images": {
        "fixed_height": {
          "url": "http://media4.giphy.com/media/Z1kpfgtHmpWHS/200.gif"
        }
      }
    }
  ],
  "meta": {
    "status": 200,
    "msg": "OK"
  },
  "pagination": {
    "total_count": 1947,
    "count": 25,
    "offset": 0
  }
}
```

</details>

### Step 7: Search the Giphy API

- With the API we're using, you will need to [register for an API key](https://developers.giphy.com/). The API key is free, and only takes a minute or two to setup.
- Go ahead an look at the [documentation](https://developers.giphy.com/docs/) to determine the API's proper usage.
- We're going to be searching the giphy API based on a word or phrase to return a collection of results.
- Load in Axios, and use it to make an HTTP request to the API search endpoint using the user's query.
- Pass the data to the Results component to be displayed.

### Step 8: 

- Lets get rid of Search button and call the external API whenever User is entering string to search (Hint: you may have to make some changes in onInput()).
- Now that you have that working, lets introduce some performance optimization. Make changes such that component is only re-rendered if the User changes the search string (Hint: use a lifecycle hook. Also, you may have to set the value of `state.query` in another method).
- After you have made these changes you will notice that even though you are not re-rendering the component, but your app is still making the third-party API call. Use one of the other lifecycle hooks to prevent that from happening (Hint: think about componentDidUpdate() lifecycle method).

You can view the solution [here](https://git.generalassemb.ly/SF-WDI/react-giphy-lab/tree/solution).
## Bonus

### Step 9: Add Styles to your React app

- Load in Bootstrap CDN in `index.html`.
- Modify UI to include Bootstrap classes.
- Create a `styles` directory and make a file for your CSS rule definitions - this will be written in Javascript!.
- Load in that file in any component and then use that to apply inline styling.

### Step 10: Add a single result detail component

- Create a `Details` component that renders information about a single gif.
- When a user clicks on a  gif in the results view, render the detail UI.


- resource : react giphy lab
  https://git.generalassemb.ly/sf-wdi-51/react-giphy-lab/edit/master/README.md


  # Event Handlers and the Component Lifecycle in React

## Learning Objectives
* Understand how to use React's lifecycle methods
* Retrieve data from an API inside of a component
* Handle events in React
* Look at the React documentation to learn more

## Framing (10 min / 0:10)

So far, we've used react components to build simple applications. We've added state and props and controlled data flow through them (using just the render and setState methods). In order to do more complex things, we'll have to use lifecycle methods.

How do we get data from an API? Well we could drop in an AJAX call to fetch some data, but our component would likely render before the AJAX request finished. Our component would see that our data is `undefined` and either render a blank/empty component or throw an error.

How would we animate a component? (i.e. a sidebar that usually lives off the page, except for when a hamburger menu is pressed.) We could write some code to animate the position of the sidebar, but how could we guarantee it was running after our Sidebar component's render method had been called?

This lesson will walk us through the Component Lifecycle: hooks that are fired at different stages of a components "life" for solving the problems described above, as well as many others.

Throughout the course of this lesson, we'll build out a simple flashcard app with vocabulary keywords pulled from the Oxford Dictionary API. Our flashcard app will cycle through a set of flashcards, giving us 10 seconds to think of the definition before moving on to the next card.

But first, what is the Component Lifecycle?

## The Component Lifecycle (10 min / 0:20)

Components provide several lifecycle methods that you can use to control your application based on the state of the UI.

When you include these methods in the component they will be invoked automatically (because we are extending the React.Component class which has them already defined).

Lifecycle methods are called at specific points in the rendering process. You can use these methods to perform actions based on what's happening on the DOM.

* `componentWillUnmount` is called immediately *before* a component is removed from the DOM.
* `componentDidMount`, for example, is called immediately *after* a component is rendered to the DOM.

**What do you use lifecycle methods for?**

Making asynchronous requests (ajax calls), binding event listeners to components, animating components (once they've rendered), and optimizing for performance (shouldComponentUpdate).

**Why is it called a lifecycle?**
It's an action that repeats in a specific order.

![ ](./images/react_lifecycle_methods.png  "React-component-lifecycle")

### At a very high level

There are two types of component lifecycle methods:

* **Mounting** lifecycle methods. e.g. What happens when the component is created? Was an initial state set? Methods:
  - `constructor(props)`
  - `UNSAFE_componentWillMount()`
  - `static getDerivedStateFromProps(props, state)`
  - `render()`
  - `componentDidMount()`

* **Updating** lifecycle methods. e.g. Has state changed? Methods:
  - `UNSAFE_componentWillReceiveProps()`
  - `shouldComponentUpdate(nextProps, nextState)`
  - `UNSAFE_componentWillUpdate()`
  - `render()`
  - `getSnapshotBeforeUpdate(prevProps, prevState)`
  - `componentDidUpdate(prevProps, prevState, snapshot)`
 
* **Unmounting** lifecycle method when the component is removed from DOM
  - `componentWillUnmount()`
	
The documentation gives good examples of what each method should be used for. [Check out the documentation on components!](https://facebook.github.io/react/docs/react-component.html)

## We do: Exploring the Lifecycle methods (20 min / 0:40)

Let's clone down [this repository](https://git.generalassemb.ly/SF-WDI/react-component-lifecycle/tree/master/react-component-lifecycle) with a short exercise for exploring the lifecycle methods.

This exercise is a simple, 2 "page" website where each page is a component. We'll be adding the component lifecycle methods to each page-component. As we do consider the following questions:

* What order are the methods run in? Before or after rendering?
* How many times is the method invoked?
* What causes the method to be (re)invoked?

> Add the mounting methods to HomePage.js and the update methods to AboutPage.js. console.log something in each method to understand the order.

### An Aside: Axios (10 min / 0:50)

For our first example of working with the component lifecycle methods, we'll be retrieving data from an API using AJAX.
AJAX calls are asynchronous, so we have to be mindful of how long our request will take and when our components will render.

We're going to use a module named `axios` to make our calls. Axios is a node module commonly used with React to send HTTP requests to an API. It functions much like jQuery's Ajax method, or window.Fetch(). Some benefits to using Axios:

* It is a promise-based library with an interface for simpler and cleaner syntax (compared to native XHR especially).
* It is lightweight and focused solely on handling HTTP requests (as opposed to jQuery which brings in an extensive set of new functions and methods)
* It is very configurable and has a number of useful methods for doing more complex requests from one or multiple API endpoints
* It handles a lot of the http header manual work for you (e.g. send a json file, it sets `Content-Type: application/json`)

Read more at the [Axios Documentation](https://github.com/mzabriskie/axios)

> Note: Axios is just one of many Javascript libraries that we could use for handling requests. One of the big selling points of javascript is the ability to mix and match technologies according to preference. Other commonly-used tools for handling requests are fetch and jQuery.

To load in the Axios module:

```js
// If you are using Babel to compile your code
import axios from 'axios'

// In standard vanilla Javascript
let axios = require('axios')
```

To use Axios to query an API at a given url endpoint:

```js
axios.get('url')
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
```

<!-- You can also append values to the parameters by passing in a second input to `.get()`:

```js
  axios.get('url', {
    params: {
      key1: value1,
      key2: value2
    }
  })
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
```

Which would result in a GET request to: `url?key1=value1&key2=value2`.
 -->

<!-- ### We Do: Axios and AJAX inside a React Component:
> 15 min / 1:05

We will be using Axios to query the PokéAPI in [this exercise](https://git.generalassemb.ly/ga-wdi-exercises/react-components-axios). -->

## Flashcards (90 min / 2:30)

As we dive deeper in to each of the component lifecycle methods and what they're used for, we'll work through the following exercise to create a simple flashcards app.

The starter code for this exercise can be found [here](https://git.generalassemb.ly/SF-WDI/flashcards).

Let's go ahead and clone the repository:

```bash
$ git clone https://git.generalassemb.ly/SF-WDI/flashcards
$ npm install
$ npm start
```

The app we're going to build will pull characters from a dictionary API and create a flashcard for each word and definition`. The app will then cycle through each word, giving the user 10 seconds to think of the definition before moving on to the next card. 

The solution code is [here](https://git.generalassemb.ly/SF-WDI/flashcards/tree/solution)

### We Do: Adding the Flashcard Container

#### Use Axios to query the dictionary API

<details>
    <summary>Solution</summary>

```js
// FlashcardContainer.js

class FlashcardContainer extends Component {
  constructor() {
    super(); 

    this.state = {
      flashcards: [],
      currentIndex: 0
    }
  }

  componentDidMount() {
    axios.get(CLIENT_URL)
      .then((response) => {
          console.log(response)
          this.setState({flashcards: response.data})
        })
  }

  render() {
    let detail = this.state.flashcards[this.state.currentIndex]
    let card;

    if(detail) {
      card = <Flashcard detail={detail}/>
    }

    return (
      <div>
        {card}
      </div>
    )
  }
}
```

</details>

The componentDidMount method is called once, immediately after your component is rendered to the DOM. If you want to make an AJAX request when your component first renders, this is where to do it (not in the constructor, or in componentWillMount). componentWillMount shouldn't be used for server requests because it may be invoked multiple times before render. Side effects should be avoided in the constructor, and so server requests shouldn't be made there.

#### Add an event listener to switch between cards

<details>
    <summary>Solution</summary>

```js
//FlashcardContainer.js

class FlashcardContainer extends Component {
  state = {
      flashcards: [],
      currentIndex: 0
    }

  // increment currentIndex
  next () {
    let nextIndex = (this.state.currentIndex + 1) === this.state.flashcards.length
      ? this.state.currentIndex
      : this.state.currentIndex + 1

    this.setState({currentIndex: nextIndex})
  }

  // decremement currentIndex
  prev () {
    let prevIndex = (this.state.currentIndex - 1) < 0
      ? 0
      : (this.state.currentIndex - 1)

    this.setState({currentIndex: prevIndex})
  }

  // callback to be used in the event listener below
  handleKeyUp (event) {
    if (event.keyCode === 39) this.next()
    if (event.keyCode === 37) this.prev()
  }

  componentDidMount () {
    window.addEventListener('keyup', this.handleKeyUp)

    axios
      .get(CLIENT_URL)
      .then(response => this.setState({flashcards: response.data}))
      .catch(err => console.log(err))
  }

  render() {
    let detail = this.state.flashcards[this.state.currentIndex]
    let card;

    if(detail) {
      card = <Flashcard detail={detail}/>
    }

    return (
      <div>
        {card}
      </div>
    )
  }
}
```

</details>

In this example, we have added a constructor that has a few initial state properties. We also add an event listener that switches to the next card on right arrow press. Finally, we add an API pull to fetch the dynamic data we will use for the app.

### You Do: Adding a Timer to the Flashcard

Add a timer to the Flashcard Detail component.

* Initialize the timer to have 10 seconds on it
* Every second the same flashcard is still on the board, remove a second from it
> **hint**: use `setInterval()`)
* When the timer reaches zero, switch to the next card
> **hint**: where did you define the `next()` method? How can you access it from `Flashcard.js`?
* When the `Flashcard` component receives a new card, restart the timer


#### We Do: Adding the Definition Component

Now that we have our flashcard displayed, lets add their definitions as well.

For this, we will use a pure functional component -- or a component created by a function instead of a class -- and then change its style dynamically based on its index.

<details>
    <summary>Solution</summary>

```js
//Definition.js

import React from 'react';

let Definition = (props) => {

	return (
		<div className="">
			<p>{props.def}</p>
		</div>
	)
}

export default Definition;
```

```js
// Flashcard.js
...
class Flashcard extends Component {
  render() {
    let defs = this.props.detail.definitions[0].definitions 

    return (
      <div class="card">
        <p>{this.props.detail.word}</p>
        { defs.map(def => <Definition def={def} /> )}
      </div>
    )
  }
}
...
```

</details>

## You Do: Show or Hide the Definition

Add a button that, when clicked, toggles whether or not the definition card is displayed on the page.

## React Documentation

* What is an uncontrolled component in React? Why would we use it instead of a controlled one?
* Describe 1-way and 2-way data binding. Which model does React use? Explain and compare to other popular front-end frameworks.
* Describe how to best gather information from a form in React. Be prepared to show code!
* Compare and contrast stateful, stateless, and functional components in React. List the pros and cons of each. When would we use one over the other?

## Bonus



## Event Handlers

Throughout the last few classes, you've seen a couple event handlers. These look similar to including them inline in HTML.

In the React Intro class, we went over how we are not actually interacting directly with the DOM when we write React code, rather, we are interacting with the virtualDOM. Because of this, when we call an event listener, we use `SyntheticEvent`'s instead of the usual event objects we are used to dealing with in JQuery events. We still get all of the same properties attached to them, and some additional ones. Because of this, the traditional documentation on event handlers is sometimes not accurate. Instead, use the React event handling documentation found [here](https://facebook.github.io/react/docs/events.html). Spend a few minutes looking at the different events on listed here.
