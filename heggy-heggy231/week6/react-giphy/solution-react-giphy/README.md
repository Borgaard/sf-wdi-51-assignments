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


## Bonus

### Step 9: Add Styles to your React app

- Load in Bootstrap CDN in `index.html`.
- Modify UI to include Bootstrap classes.
- Create a `styles` directory and make a file for your CSS rule definitions - this will be written in Javascript!.
- Load in that file in any component and then use that to apply inline styling.

### Step 10: Add a single result detail component

- Create a `Details` component that renders information about a single gif.
- When a user clicks on a  gif in the results view, render the detail UI.
