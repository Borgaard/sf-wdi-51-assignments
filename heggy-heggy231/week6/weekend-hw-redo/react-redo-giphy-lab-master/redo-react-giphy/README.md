
# React Giphy - redo #1

1) connect search button to alert searched
![alert searched!!](https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2FScreen%20Shot%202019-03-03%20at%207.35.52%20PM.png?1551670656346)

- window alerts searched!!
![searched after pressing submit](https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2FScreen%20Shot%202019-03-03%20at%207.35.44%20PM.png?1551670696763)
```javascript
import React, { Component } from 'react';

class Search extends Component {
  // Define your Search component's initial state. It should have a query value that corresponds to a search term.
  state = {
    // query value that corresponds to a search term
    query: ''
  };

  // function that is triggered whenever the user submits the Search form
  onSubmitSearching = (e) => {
    e.preventDefault();
    alert('searched!!');
  }

  render() {
    return (
      <div>
        {/* this points to search component, this.function name is the fuction I need to create!!!  indication that I need to create onSubmitSearching */}
        <form onSubmit={this.onSubmitSearching}>
          <label>
            Search: 
            {/* `this` points to the current obj I am in; Search component 
          interesting read on this topic: https://medium.com/capital-one-tech/how-to-work-with-forms-inputs-and-events-in-react-c337171b923b
          */}
            <input type="text" placeholder="search any giphy" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Search;
```

## resource
starter pack
- https://git.generalassemb.ly/sf-wdi-51/react-giphy-lab

solution pack
- https://git.generalassemb.ly/sf-wdi-51/react-giphy-lab/tree/solution

- Component life cycle: https://git.generalassemb.ly/sf-wdi-51/react-component-lifecycle 
- react router: https://git.generalassemb.ly/sf-wdi-51/react-router-intro


- https://git.generalassemb.ly/sf-wdi-51/react-intro

# Intro to React.js

![react-logo](./images/react-white-logo.png)

## Learning Objectives

* Explain what a frontend framework is and why they can be helpful in writing more complex applications.
* Explain what ReactJS is and where it fits in our applications' stack.
* Explain the component model of web development.
* Create and render React components in the browser.

## Framing

### What is a Frontend Framework? 

- A framework is software providing generic functionality and structure that serves as foundation to build and deploy applications.
- Express is a framework that runs on the server, receiving incoming request from the client, preforming some work that you have defined, and returning some response to the client.  Front-end frameworks run in the client's browser, receive input from interactions with the page, perform some work that you have defined, and make any updates necessary.
- Frameworks can help standardize code, give you additional functionality and performance, and can help get your code off the ground faster.  
- There are [many](https://stateofjs.com/2017/front-end/) front end frameworks and each go about solving problems of how state is managed, updated, and represented by a view but there are many commonalities.
- There is a lot of debate over whether frontend frameworks count as frameworks at all -- some people say that they are just libraries and should be referred to as such.

### What is ReactJS?

React is a JavaScript library used to craft modern day UI and views for the front-end in web applications.

> **Selling Point:** By modeling small compatible components that focus on just rendering a view, we can move business logic out of the DOM, and therefore improve our app's performance, maintainability, modularity and readability.

#### Some History

The first thing most people hear about React is "Facebook uses it."
* First used by Facebook in 2011.
* Then Instagram in 2012.
* Went open source in May 2013.

**BEHOLD! The OLD FACEBOOK!** 

*2008*

<img src='https://lh3.googleusercontent.com/d4ypmybEZT8SAOj1efmy9CCkKwNG3Dd-Mv0__FoIsWgK0iWuYWBS4NPHOf71ANpKcx2ElOndGeiDInxm8p-sOMqNXBkPy3y-HsH45lGscqJepxFOYkU1_6BbAw' alt='old facebook' width='400px'>

*2011*

<img src='https://lh4.googleusercontent.com/lNCcVZlrC08vdkMrMZ8XCGjD5a3w8yUybFm2YN7VJJzOttmEl99lR_bXcW21hw7AVtKDRvQajA4AsqJHVHqzhHnkNsVmMRXMvi9uuoV3iIU5gIJjSSkUee8fpg' alt='old facebook' width='400px'>

React was born out of Facebook's frustration with the traditional MVC model and how..
  * Re-rendering something meant re-rendering everything (or just a lot).
  * That had negative implications on processing power and ultimately user experience, which at times became glitchy and laggy.

> If you want to get a taste of what React is all about, [here's an introduction from React.js Conf 2015](https://www.youtube.com/watch?v=KVZ-P-ZI6W4&feature=youtu.be&t=510). Recommend starting around the 8:35 mark and watching until 16:30.

### React in MVC

React can be thought of as the "Views" layer.

React will work with any back-end language, but for project 3 and in our in-class examples we will be using Mongoose and Express for the models and controllers.

<details>
  <summary><strong>What is the role of a "view" in a front-end Javascript application?</strong></summary>
  The visual template the user sees, often populated with data from our models.
</details>

## Components

One comment made about React when it was first open sourced was "Rethinking established best practices" which kind of became the React motto.  In React, we want to move away from template pages, away from separating code based purely on file type, and more towards a **component-based** separation of concerns.  [Templates vs Components](https://wanderoak.co/fixed-templates-vs-components/)

![Templates Page](images/templates-page.png)
![Components Page](images/components-page.png)
> [WanderOak - Fixed Templates vs. Components](https://wanderoak.co/fixed-templates-vs-components/)

When taking a look at Facebook, you could think of each status post as a mini-component in React. And a list of those updates, is a component that contains several of those mini-components. You could take that one step further and think of the Facebook app, as one giant component with several components within it. (Things like the list of status updates, the friends list, the header, etc...)

Imagine you worked at Facebook when they wanted to shift from using likes to reactions. Using traditional JavaScript, HTML, and CSS the shift would make you have to change your code in a bunch of places. Component based architecture allows us to maintain our code more easily.

![Wireframe](images/wireframe.png)
![Wireframe with components](images/wireframe_deconstructed.png)
> [MakeTea - Building Robust Apps with React](http://maketea.co.uk/2014/03/05/building-robust-web-apps-with-react-part-1.html)

Notice the structure of how the various components are nested. 
```
- TubeTracker
    - Network
        - Line
    - Predictions
        - DepartureBoard
            - Trains
```

TubeTracker contains the application
Network displays each line on the network
Line displays the stations on a line
Predictions controls the state of the departure board
DepartureBoard displays the current station and platforms
Trains displays the trains due to arrive at a platform

### [F.I.R.S.T. Components](https://addyosmani.com/first/)

A React component is built to expect an input and render a UI with it. More importantly, a well-structured component only receives data specific to its purpose.

This is because React follows a more **functional** approach to programming. For React components under this approach, **the same input will always produce the same output**.

Best practice is that React components follow the **F.I.R.S.T.** guidelines

#### Focused

Components should do one thing and do it well.

#### Independent

Components should increase cohesion and reduce coupling. Behavior in one component should not impact the behavior of another. In other words, components should not rely on one another.

> But they should compliment one another.

#### Reusable

Components should be written in a way that reduces the duplication of code.

#### Small

Ideally, components should be short and condensed.

#### Testable

Because the same input will always produce the same output, components are easily unit testable.

> If you're interested, [Jest](https://facebook.github.io/jest/docs/tutorial-react.html) is a popular testing library for React.


## Exercise: Identifying Components

* Break into groups of three and take a look at Facebook, Craigslist, Ebay, or a website of your choice. Identify the visual "components" the website is comprised of. Use markers to draw these out on the wall.

As you're drawing this out, think about the following questions...
* Where do you see "nested components"? Where do you not?
* Are there any components that share the same structure?
* Of these similar components, what is different about them?

## Initial Setup

In order to create a new project and to get our development environment setup, we are going to use the Terminal command `create-react-app`. It will create a new folder in your current directory for the in-class application.

`create-react-app` is an NPM package also built by Facebook that writes our build dependencies for us so that we can do less configuration. It allows us to use React, JSX, and ES6. It also allows us to import our CSS, it autoprefixes our CSS so that we don't have to worry about cross browser compatibility, it gives us a dev server to run, and it enables hot reloading which updates the code in our browser without us refreshing the page.

It uses Webpack which is a build tool that enables many of the features listed above. It also includes Babel which transpiles our JavaScript from ES6 to be compatible with older browsers. It also includes Autoprefixer for CSS compatibility, ESLint for linting, and Jest for testing.

You can also set up all this yourself, but for now `create-react-app` allows us to worry more about our code and less about configuration.

```bash
$ npm i -g create-react-app
$ create-react-app blog-app
$ cd blog-app
$ code .
$ npm start
```

> Here you will begin setting up a blog app that you will continue working on during this lesson's exercises. For demonstration purposes, We will be creating a simple "hello world" app.

After running `$ npm start`, we can view the app at `http://localhost:3000`

`create-react-app` provides us with all the necessary tools and configuration necessary to start writing React. `npm start` refers to an included script that starts up the development server.

Along with installing the necessary dependencies, it creates an initial app skeleton that looks like this...

```bash
├──README.md
├──  favicon.ico
├──  index.html
├──  node_modules
├──  package.json
└──  src
    ├──  App.css
    ├──  App.js
    ├──  index.css
    ├──  index.js
    └──  logo.svg
```

Most of the important files, which are primarily the ones where we will be working today, are in the `/src` directory.

Take some time and look at what's been generated. Specifically look in `App.js` and `index.js`


### We Do: Hello World - A Very Basic Component

The basic unit you'll be working with in ReactJS is a **component**.

* Components can be thought of as functional elements that take in data and as a result, produce a dynamic UI.

Throughout class we have separated HTML, CSS and Javascript.
* With components, the lines between those three become a bit blurry.
* Instead, we organize our web apps according to small, reusable components that define their own content, presentation and behavior.  

What does a component look like? Let's start with a simple "Hello World" example...

To start, in our `/src/App.js` file, let's remove the contents and in its place add this component definition...

```js
// bring in React and Component instance from React
import React, {Component} from 'react'

// define our Hello component
class Hello extends Component {
  // what should the component render
  render () {
    // Make sure to return some UI
    return (
      <h1>Hello World!</h1>
    )
  }
}

export default Hello
```

Let's break down the things we see here...

##### `class Hello`
This is the component we're creating. In this example, we are creating a "Hello" component.

##### `extends Component`
This is the React library class we inherit from to create our component definition.

##### `render()`
Every component has, at minimum, a render method. It generates a **Virtual DOM** node that will be added to the actual DOM.
* Looks just like a regular ol' DOM node, but it's not yet attached to the DOM.

##### `export default Hello`
This exposes the Hello class to other files which import from the App.js file. The `default` keyword means that any import that's name doesn't match a named export will automatically revert to this. Only one default is allowed per file.

### JSX

> Hey you got your html in my javascript!
>
> You got your javascript in my html!
>
> (https://youtu.be/O7oD_oX-Gio?t=5s)

Let's talk about the value that the render method returns. It looks an awful lot like an HTML heading, but it's not. We often write out React components in JSX.

JSX is [a language that compiles to Javascipt](http://blog.yld.io/2015/06/10/getting-started-with-react-and-node-js/#.V8eDk5MrJPN) that allows us to write code that strongly resembles HTML. It is eventually compiled to lightweight JavaScript objects.

Your Hello component's render method:

* Currently returns JSX, not HTML.
The JSX creates a heading with 'Hello World!'.
* Your component reads this and renders a "Hello World!" heading.

> React can be written without JSX. If you want to learn more, [check out this blog post](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/).  

Here is an example of React code without JSX-

![Templates Page](images/react-without-jsx.png)


## Virtual DOM 

You may have noticed that our `src/index.js` code mentions ReactDOM. ReactDOM doesn't refer to the same DOM we know. Instead, it refers to a Virtual DOM. The Virtual DOM is a key piece of how React works.

The Virtual DOM is a Javascript representation of the actual DOM. The virtual DOM is a staging area for changes that will eventually be implemented.

* Because of that, React can keep track of changes in the actual DOM by comparing different instances of the Virtual DOM.
* React then isolates the changes between old and new instances of the Virtual DOM and then only updates the actual DOM with the necessary changes.
* By only making the "necessary changes," as opposed to re-rendering an entire view altogether, we save up on processing power.
* This is not unlike Git, with which you compare the difference -- or `diff` -- between two commits.

![Virtual DOM Diagram](https://docs.google.com/drawings/d/11ugBTwDkqn6p2n5Fkps1p3Elp8ZToIRzXzvM4LJMYaU/pub?w=543&h=229)

> If you're interested in learning more about the Virtual DOM, [check this video out](https://www.youtube.com/watch?v=-DX3vJiqxm4).

So we've created the template for our component. Now, let's use `/src/index.js` to load in our new component and render it on the DOM...

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './App.js'

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
)
```
> In place of `ReactDOM.render` some tutorials will use React.renderComponent, which has been phased out. The change is outlined [here](http://bit.ly/1E81Whs).

`ReactDOM.render` takes the Virtual DOM node created by `extends Component` and adds it to the actual DOM. It takes two arguments...

  1. The component.
  2. The DOM element we want to append it to.

> **NOTE:** Whenever you use a self-closing tag in JSX, you **MUST** end it with a `/` like `<Hello />` in the above example.

---

### Hello World: A Little Dynamic

Our `Hello` component isn't too helpful. Let's make it more interesting.
* Rather than simply display "Hello world", let's display a greeting to the user.
* So the question is, how do we feed a name to our `Hello` component without hardcoding it into our render method?

First, we pass in data wherever we are rendering our component, in this case in `src/index.js`...

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './App.js'

ReactDOM.render(
  <Hello name={"Nick"} />,
  document.getElementById('root')
)
```

Then in our component definition, we have a reference to that data via as a property on the `props` object...

```js
class Hello extends Component {
  render () {
    return (
      <h1>Hello {this.props.name}</h1>
    )
  }
}
```

In the above example, we replaced "world" with `{this.props.name}`.

#### What are `.props`?

Properties! Every component has `.props`
* Properties are immutable. That is, they cannot be changed while your program is running.
* We define properties in development and pass them in as attributes to the JSX element in our `.render` method.

First we can pass multiple properties to our component when its rendered in `src/index.js`..

```js
import React from 'react';
import ReactDOM from 'react-dom'
import Hello from './App.js'

ReactDOM.render(
  <Hello name={"Nick"} age={24} />,
  document.getElementById('root')
)
```

Then in our component definition we have access to both values...

```js
class Hello extends Component {
  render () {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>You are {this.props.age} years old</p>
      </div>
    )
  }
}

```

> **NOTE:** The return statement in `render` can only return one DOM element. You can, however, place multiple elements within a parent DOM element, like we do in the previous example with `<div>`.

---

## You Do: A Blog Post 

Let's have some practice creating a React component from scratch. How about a blog post?
* Create a `post` object literal in `src/index.js` above `ReactDOM.render()` that has the below properties.
  1. `title`
  2. `author`
  3. `body`
  4. `comments` (array of strings)
* Render these properties using a Post component.
* The composition of your Post is up to you.

If you finish early, try experimenting with CSS (Make Sure you use `className` instead of `class` in `JSX`!)

#### [Solution](https://github.com/ga-wdi-exercises/simple-react-blog/commit/f1088165898d1a20df956647c8e9b5ed67d9ad32)

---


#### Q: What problems did you encounter when trying to add multiple comments to your Post?

It would be a pain to have to explicitly define every comment inside of `<Post />`, especially if each comment itself had multiple properties.
* This problem is a tell tale sign that our separation of concerns is being stretched, and it's time to break things into a new component.

We can nest a Comment component within a Post component.
* We create these comments the same way we did with posts: `extends Component` and `render`
* Then we can reference a comment using `<Comment />` inside of Post's render method.

Let's create a new file for our Comment component, `src/Comment.js`...

```js
import React, {Component} from 'react'

class Comment extends Component {
  render () {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default Comment
```

Then in `src/App.js`, we need to load in our `Comment` component and render it inside of our `Post` component...

```js
import React, { Component } from 'react';
// Load in Comment component
import Comment from './Comment.js'


class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>By {this.props.author}</p>
        <div>
          <p>{this.props.body}</p>
        </div>
        <h3>Comments:</h3>
        // Render Comment component, passing in data
        <Comment message={this.props.comments[0]} />
      </div>
    );
  }
}

export default Post;
```

> **Note**: We could put all of our code in one file, but it's considered a good practice to break components out into different files to help practice separation of concerns. The only downside is we have to be extra conscious of remembering to **export / import** each component to where it's rendered.

The above code works, but we'd have to hard-code all of our `Comments`.  This is not very dry and our code will not dynamically change.  The best way to handle this is to set a variable equal to all of the `<Comments />` for this post.  We can do this using `.map` in `Post's` `render` method.

We can use `.map` in `Post's` `render` method to avoid having to hard-code all of our `Comments`

```js
class Post extends Component {
  render() {
    let comments = this.props.comments.map((comment, index) => (
      <Comment message={comment} key={index}/>
    ))
    return(
      <div className='post-page'>
        <h1>{this.props.title}</h1>
        <h2>By {this.props.author}</h2>
        <p>{this.props.body}</p>

        <h3>Comments</h3>
        {comments}
      </div>
    )
  }
}
```

---

## Closing

* Why do we use components in React?
* What is the Virtual DOM?
* What is JSX?
* What features does `create-react-app` give us?


- https://git.generalassemb.ly/sf-wdi-51/monument-react-refactor
# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> Monument Refactor (React)


## Overview

#### What is this lab?

Remember our Monument magazine website from the first week? Today we're going to modernize that project. It is now time to refactor our code for use with a modern front-end framework: React!

**The objective of this lab is to:**

* Refactor a static html site to use a component-based approach
* Familiarize yourself with React's filesystem and architecture on your terms
* Create reusable, robust codebase that will serve as a boilerplate for other work
* Continually grow the *Monument* brand until you are sick of light-blue branding styles


## Refactor!

**To refactor your Monument project, first ensure you have either:**

  A) Your working version of a static Monument site
  
**-or-**

  B) The static version of Monument provided in this github repo labeled `starter-static-site`.



**Suggested implementation**
1. Create a React application in this repository, preferably in a new folder.
2. Move *all* of your `html` content (minus the `head` tag) into a new component.
3. Copy images and css into your `public` folder. 
4. Link all of the images and styles into your new component. You may overwrite the `index.css` with the original *Monument* css.
5. Logically separate different pieces of the *Monument* html into smaller components.  


**Suggested components for `index.html`:**
   
    - NavBar
    - Index
      - Hero/Header
      - Archive
        - Article
        - Article
        - Article
      - About
      - VisualGuide/Gallery
      - Contact
    - Footer

**Suggested components for `blog.html`:**
   
    - Header
      - Nav
    - Main
      - PostsList
        - Post
        - Post
        - Post
      - About
      - Issues
      - Comment
    - Footer

Keep components as large as possible until you begin to see opportunities to capitalize on repetition or obvious semantic separations, such as articles, sections, header/main/footer, etc. This will keep your workflow comprehensive and straightforward.  One early but major pitfall of React development is the tendency to prematurely optimize components to their smallest kernels. Taking the time to work incrementally ensures consistent code.


- demo: https://react-giphy-app.herokuapp.com/


### Event Handlers and the Component Lifecycle in React

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
