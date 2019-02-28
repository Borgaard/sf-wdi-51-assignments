# Semantic HTML Help

Read the text below to walk through the steps necessary for completing your Semantic HTML task.

### Adding Markup to Content

#### Link up the style sheet
First, we have to set up some boilerplate code in our blank `index.html` file. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Fresh Prince</title>
</head>
<body>
	
</body>
</html>
```

We'll go over this in more detail in a future lesson.

Next, we will link to the style sheet our designer has provided. For this, we'll use the `<link>` tag inside of the `<head>` of the document.

```html
<link href="./styles.css" rel="stylesheet" type="text/css" />
```

Your HTML should look like this when the `<link>` tag is added:

```html

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Fresh Prince</title>
	<link href="./styles.css" rel="stylesheet" type="text/css" />

</head>
<body>
	
</body>
</html>
```

The `<link>` tag allows us to link to external files and incorporate them in our HTML. Let's look at what each part of this syntax accomplishes.
- The `href` attribute, or "hypertext reference," tells us where our document is located. The `./` in the path tells us that the file is located in the same directory as the HTML file we are in. If it was one directory above the HTML file, we would use `../` to navigate up a directory. Look in the additional resources to learn more about navigating through directories.
- The `rel` attribute tells us how this linked document relates to our HTML page. The `styles.css` file is a style sheet, so we label it as such.
- The `type` attribute tells us the media type (or, MIME) of the file. Our style sheet is a text file that contains CSS, so we label it as `text/css`. Other MIME types that may sound familiar are:
	1. application/pdf
	2. image/jpeg
	3. text/html

Now that we have our `<link>` set up, let's open our web page. If we linked up our style sheet correctly, we should be able to see updated styling on our page. If you can't, open up your Developer Tools and see if there are any errors.

#### Creating our headings
The `<h1>` to `<h6>` tags refer to headings, with `<h1>` representing the most important heading and `<h6>` representing the least important.

The text, "My Life & Times," is the title of our page and merits an `<h1>` tag because of its importance.

The author's name is also important, but notice how small we want that text to be. If you've played around with HTML before, you know that the `<h1>` element has a larger font size than the `<h2>` element by default. An `<h3>` element has an even smaller font size, and so on.

It's normal to assume that, to give the author's name the appropriate font size, we might have to use an `<h5>` or an `<h6>` tag. But this violates the rules of semantic HTML. Let's discuss what it means to create semantic HTML.

The word "semantic" means "relating to meaning." So, how does this apply to writing semantic HTML?

The HTML elements we use to write our content should relate to the content's meaning. For example, if we use an `<h1>` element, it should indicate that the content it contains is the most important heading on the page. If we use an `<h2>` element, it should indicate that the content it contains is the page's second most important heading, etc.

We should not choose HTML elements just because of the default styling the browser provides us. This is why we have CSS style sheets. When writing semantic HTML, pretend like you're writing the outline of a book.

```
My Life
  Chapter 1
    I was born.
  Chapter 2
    I started coding.
```

If you had this outline, which HTML elements would you use? Your code might look something like this:

```html
<h1>My Life</h1>
<h2>Chapter 1</h2>
<p>I was born.</p>
<h2>Chapter 2</h2>
<p>I started coding.</p>
```

We choose HTML elements based the meaning they give to our content, ignoring what they look like in the browser. However, we don't have to worry about that for this exercise (luckily), thanks to our trusty designer and the style sheet he created for us.

So, let's add the author's name in `<h2>` tags and refresh our browser page. It seems like our designer thought ahead and styled the `<h2>` tag accordingly. Awesome.

#### Creating our header grouping
We've created the content for our website's header, but there's something else we can do to make it more semantic.

Let's think about how a book is structured and how that relates to writing semantic HTML. A book is broken down into sections. We have a table of contents, a glossary, chapters, paragraphs within those chapters, etc.

Our HTML is the same. Similar to a book, it has different sections. Looking at what our final website will be, we have a header, a main body, and a footer. Luckily, HTML provides us with a `<header>` tag that allows us to specify that all of the content it contains is part of the header ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)). We also have a `<footer>` tag that allows us to specify that all of the content it contains is part of the footer.

So, let's wrap the content we have in a `<header>` tag. Our HTML should now look like this:

```html
<header>
  <h1>My Life & Times</h1>
  <h2>By Willard Carroll Smith</h2>
</header>
```

Now our HTML is more semantic (a.k.a., it has more meaning). Just by looking at the HTML, we can tell that this content is the header of our page and contains two pieces of important information.

#### Add the Content
##### First paragraph
Now, we will add our first paragraph of content. To denote this, we'll use a `<p>` tag. It looks like we have a link in the phrase, "In West Philadelphia." Let's use the `<a>` tag to create that link.

##### List element
After that, we have a list of items we would like to display.

* Chilling out
* Maxing
* Relaxing, all cool


We have two options for creating this list in HTML. We could use the `<ol>` element, which gives us an "ordered list." We will generally use this for a list that has an order to it (think about a list that ranks people's heights or ages). If we have a list that doesn't depend on a certain order (think about a grocery shopping list), we will use the `<ul>` element, which produces an "unordered list."

Some default styling comes along with using an `<ol>` as opposed to a `<ul>`, but remember that creating semantic HTML means we ignore styling and instead concentrate on the meaning of the content. Does the list we are creating have a certain order to it? It doesn't matter if we "relax" and then "chill," or vice versa, so we'll use an `<ul>` to create our list.

##### `<strong>` element
Now we'll write our second paragraph. Notice that we want to add some emphasis to the words "no good."

We have an HTML element, `<strong>`, that denotes a word with strong importance. Its content is typically displayed as bold.

HTML also gives us a `<b>` tag, but it simply styles the text as bold. It makes no claims about the meaning of that text.

Remember that writing semantic HTML means that we use the HTML elements that best describe the meaning of their content. We will let CSS worry about styling the HTML.

Another reason to use `<strong>` instead of `<b>` is accessibility. Screen readers for the visually impaired don't make any distinctions for their users based on styling, but do for semantic HTML elements. For example, if you were to use the `<b>` tag to emphasize a phrase, screen reader users wouldn't know the difference. However, if you used the `<strong>` element, the screen reader would tell them that the phrase is emphasized.

##### `<img>` element
Now let's add our image to the page. It will look something like this:

```html
<img src="./bball.jpg" alt="Shooting some bball" />
```

The `src` attribute tells us where the image file is located. Similar to how we linked up our CSS style sheet, we can use `./bball.jpg` to look for a file in the same directory as our HTML file.

The `alt` attribute is the alternate text for our image. This is the text that displays if our image isn't found for some reason (e.g., the image file was moved or corrupted). It is also the text read by screen readers.

##### `<em>` element
In our last paragraph, we want to emphasize the text "one little fight." To denote this, we will use the `<em>` element.

The `<em>` element is very similar to the `<strong>` element in that it also emphasizes a phrase.

The `<em>` element typically displays its content as italicized. HTML also gives us an `<i>` tag, but it simply styles the text as italicized. Just like the `<b>` tag, it makes no claims as to the meaning of the text — only its style. It also presents the same accessibility issues as the `<b>` tag.

There is no clear rule about when to use the `<strong>` element versus the `<em>` element. Some say that the `<strong>` tag is used to indicate that a sentence or phrase is more important than the words around it and the `<em>` tag is used to indicate the stress of a word within a sentence.

##### `<blockquote>` element
We have a quote that we want to display, and HTML provides us with an element, `<blockquote>`, that wraps around quoted content. Check out the HTML elements referenced by MDN in the Resources section to see the many you have at your disposal. It's up to you to choose the best elements for creating semantic HTML.

#### Add a Footer
We have one last piece of content to create: "© 1990, All rights reserved." Similar to the header, we have a `<footer>` tag we will use to wrap this text.

Now we have sections for our header and our footer. But what about the content in between? Is there something we can use to wrap this content so we can signify that it's the main content of the page? Luckily enough, we have the `<main>` tag. We'll use it to wrap all of this content so we have three groupings: the header, the main body, and the footer.

### Learning to Use the Validator
Now that we've created our HTML page, we want to see if we've made any mistakes. There are various tools we can use to check if our HTML is valid.

HTML is a very forgiving language. It will help you close off any missing tags, and the browser will do its best to fix up your other mistakes. But it's best to not leave it up to your browser to clean up your code. Instead, run your code through a validator to make sure it's working correctly.

Take a look at this [exercise](starter_code/html_fixit/readme.md). Here, you can get accustomed to using an HTML validator. While running your HTML, it will display any errors, as well as hints for how to fix it. Take 10 minutes working through all of the examples, and fix up their HTML.

### Validating Our Own HTML
Now that we're comfortable using the HTML validator, let's validate the HTML page we've just created. Were there any mistakes?

### Bonus
### Developer Tools
If you're ever curious about how a web developer created HTML or used CSS to style a certain element on a website, you can open up Developer Tools to inspect the HTML. If you're using Chrome, you can right-click on the page and click "Inspect." From there, you will see the HTML and CSS styling for the web page. You can even delete elements, add elements, and edit the CSS styling.

### Page Source Tool
Developer Tools allow us to inspect HTML elements that the browser has generated, but what if we want to access all of the page's HTML? In Chrome, you can easily do so by right-clicking on the page and then clicking "View Page Source." A new tab will open containing all of the raw HTML the developer wrote — not just what the browser generated.

Take a look at the page source of some of your favorite websites. Run their HTML code through the HTML validator. Were there any mistakes in their code?
