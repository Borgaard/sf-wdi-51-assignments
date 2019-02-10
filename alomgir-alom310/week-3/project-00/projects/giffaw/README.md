# Giffaw

Your goal is to integrate with the Giphy API.

https://developers.giphy.com/docs/

Basic Requirements:

* A user can see the top 25 gifs (on page load)
* A user can search for gifs, using the input field
* Super Bonus: A user can "load more" gifs

Your site should look something like:

![desktop layout](https://cloud.githubusercontent.com/assets/3010270/13936044/2ffadf60-ef78-11e5-95c5-55b8aefe68d6.png)

Solution in the `solution` branch. Load More button solution in the `solution-more` branch.
```
	git checkout solution
```
OR just view in the browser by selecting the branch you want from the branch dropdown.

## Introduction

You're about to write a lot of AJAX-backed JavaScript using jQuery that will complete our little Gif app.

Make use of the fantastic Giphy api:
http://api.giphy.com/

Check out the documentation here:
https://developers.giphy.com/docs/

#### Thinking Like An Engineer

As we get into more complicated problems, we need to start thinking more and more like engineers. Engineers break down large problems into the smallest possible parts, and tackle each small part one at a time.

This is one of the major skills for web development!

Here's some steps to follow to help get you in this mindset:

1. Familiarize yourself with the [docs](https://github.com/Giphy/GiphyAPI)
	- Specifically, we will be using the [search endpoint](https://github.com/Giphy/GiphyAPI#search-endpoint)
		- Also note the ever-important API Key situation (We will be using the [Public Beta API key](https://github.com/Giphy/GiphyAPI#public-beta-key))

2. Test the API out in your browser!
	- Go to http://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC. This is the API request for the search term `cats`.
	- What do you see? It's a JSON Object!

3. Clone this project. We first want to write jQuery that returns and `console.log()`s that same object we saw when we opened the API in our browser. BUT HOW DO I AJAX!!??
	- Look at this example of an `$.ajax` request:
	```js
	$.ajax({

		// What kind of request
		method: "GET",

		// The URL for the request
		url: "http://api.api.com/search",

		// The data to send aka query parameters
		data: $("form").serialize(),

		// Code to run if the request succeeds;
		// the response is passed to the function
		success: onSuccess,

		// Code to run if the request fails; the raw request and
		// status codes are passed to the function
		error: onError
	});

	function onSuccess(json) {
		$("div").append("<h1>"+json.title+"</h1>");
	}

	function onError(xhr, status, errorThrown) {
		alert("Sorry, there was a problem!");
		console.log("Error: " + errorThrown);
		console.log("Status: " + status);
		console.dir(xhr);
	}
	```
	- How would you repurpose this to GET the data you want from the URL you want.
		- What is your base API url? What are the query parameters?
		- HINT: you need to `serialize()` your form data.

4. Start playing in your scripts/app.js file.
	- Your first step is to make an Ajax call fire when your page loads. Don't try to do everything at once! First try to log the data to the console. Then work on logging specific data you want. What do you need to get the gifs to actually load on the page? There is a bunch of stuff in this data object and you need to figure out what you need.
	- Once you narrowed that down, THEN you want to build functions that generate HTML Strings and `append()` them to the page.
	- First log those strings to the console, and make sure they look like you think they should. THEN append them into the DOM!

5. Can you bonus? Get the input box to make a different AJAX call to the search URL.
	- Does a search box button have a default action? What do we want do with that?
	- Are we just appending more and more gifs to the dom? Do we need to clear previous gifs before loading more?
	- OMG are you making a one page app using AJAX like a boss?

6. Can you super bonus? Add a `Load More` button that, when clicked, appends 25 more gifs to the bottom of the page.
	- You will need to make use of the `offset` query parameter. See [Search Endpoint](https://github.com/Giphy/GiphyAPI#search-endpoint) section for more information.

## Additional Resources

- [http://youmightnotneedjquery.com](http://youmightnotneedjquery.com/)
- [jQuery AJAX Docs](http://api.jquery.com/jquery.ajax/)
- [Some useful jQuery DOM Manipulation Docs](http://api.jquery.com/prepend/)
