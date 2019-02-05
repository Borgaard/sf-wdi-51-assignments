# Fix It: HTML

Below are several snippets of HTML. Each one contains the complete code necessary to render a "valid" web page, but something is also missing from each.

Using this [HTML validator](https://validator.w3.org/nu/#textarea), describe what's missing from each snippet.

### 1.

```html
<html>
  <head>
    <link rel="stylesheet" href="styles.css" />
    <script src="javascript.js"></script>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Nic Cage</title>
  </head>
  <body>
    <p><a href="https://en.wikipedia.org/wiki/Nicolas_Cage">Nicolas Kim Coppola</a>, known professionally as Nicolas Cage, is an American actor and producer. He has performed in the leading roles of a variety of films, ranging from romantic comedies and dramas to science fiction and action films.</p>
  </body>
</html>
```
<!-- What is missing is the !DOCTYPE html -->
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
<!-- What is missing is a head and a title tag -->
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
<!-- The DOCTYPE html is repeated twice; there does not need to be a / at the end of picture.jpg. and the document is missing <html></html> tags -->

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
<!-- There is a missing </title>  -->
### Questions

- What does `title` do? Title displays the document name in the browser
- What information do images need, and why? They need an alt name and a text just in case the image does not load
- What's the difference between `head` and `body`? The head contains the title in the browser tab as well as CSS/Bootstrap Scripts where as the body displays the content. 
- Based on the messages from the validator, write the bare-minimum HTML you need to have a "valid" web page.
<!DOCTYPE html>
<head>
<title></title>
</head>
<body>
</body>
</html>
