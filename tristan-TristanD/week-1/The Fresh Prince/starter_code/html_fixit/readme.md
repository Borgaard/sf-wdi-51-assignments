# Fix It: HTML

Below are several snippets of HTML. Each one contains the complete code necessary to render a "valid" web page, but something is also missing from each.

Using this [HTML validator](https://validator.w3.org/nu/#textarea), describe what's missing from each snippet.

### 1.

```html
<html>
  <head>
    <link rel="stylesheet" href="styles.css">
    <script src="javascript.js"></script>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width" />
    <title>Nic Cage</title>
  </head>
  <body>
    <p><a href="https://en.wikipedia.org/wiki/Nicolas_Cage">Nicolas Kim Coppola</a>, known professionally as Nicolas Cage, is an American actor and producer. He has performed in the leading roles of a variety of films, ranging from romantic comedies and dramas to science fiction and action films.</p>
  </body>
</html>
```

### 2.

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>This is a very small web page.</h1>
    <p>That's all.</p>
  </body>
</html>
```

### 3.

```html
<!DOCTYPE html>
<head>
  <title>My Favorite Image</title>
</head>
<body>
  <img src="picture.jpg" />
</body>
</!DOCTYPE html>
```

### 4.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Some Thoughts On Turtles
  </head>
  <body>
    <h1>I like turtles.</h1>
  </body>
</html>
```

### Questions

- What does `title` do? = The title displays the name of the project on the website.
- What information do images need, and why? = Images need the the source of the file in order for the image to be linked to the html file.
- What's the difference between `head` and `body`? Head is an area in which  head section is usually used to contain information about the page that you dont neccessarily see like the meta keywords meta description or title of a page. You would also link to any external files like .css .js files in the head section as they need to load before the page is displayed.

    Anything in the body section is what you would expect to be see on screen.
- Based on the messages from the validator, write the bare-minimum HTML you need to have a "valid" web page.
 htm

