## jQuery Playground

In this lab you will use jQuery methods to answer questions about what's happening on the page, and make changes to elements on the page.

![screen shot 2017-01-26 at 10 07 23 am](https://cloud.githubusercontent.com/assets/1489337/22344041/4be2f7fe-e3af-11e6-81c4-bb528843e802.png)

For example, given the following prompt:

``` js
    problem_set.how_many_h1_tags_are_on_the_page.answer = "YOUR JQUERY GOES HERE";
```

You would need to select all the `h1` tags on the page, and then count them:

``` js
    // using jQuery (preferred)
    $("h1").length;
    
    // or using vanilla javascript
    document.querySelector("h1").length;
```

So your solution would look like this:

``` js
    problem_set.how_many_h1_tags_are_on_the_page.answer = $("h1").length;
```

See `challenge.js` for the full problem set.

## Getting Started
1. Clone this repo, and open it in your text editor of choice.
1. Launch `index.html` in your Chrome Browser.
1. Open you Chrome Javascript Console.
    - You will see a list of questions, and whether you have answered them correctly.
1. We encourage you to primarily code in your console. When you think you've solved a problem, copy your answer into `challenge.js`. And then refresh the page to see if you got it right.

## Handy jQuery Methods
`.text()`, `.val()`, `.attr()`, `.addClass()`, `.removeClass()`, `.show()`, `.hide()`, `.append()`
