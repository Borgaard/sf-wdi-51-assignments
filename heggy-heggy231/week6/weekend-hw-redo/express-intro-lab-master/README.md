- step by step instruction: https://git.generalassemb.ly/sf-wdi-51/express-intro-lab/tree/master
1) npm install express --save
2) touch touch server.js
3) update entry point: server.js in package.json
    "main": "server.js",

3.1) inclass excercise: 
- endgoal: http://localhost:3000/api/taquerias shows this
![inclass excercise done](https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2FScreen%20Shot%202019-03-03%20at%201.05.19%20PM.png?1551647174757)
  1) add 

    // server.js
  let taquerias = [
    { name: "La Taqueria" },
    { name: "El Farolito" },
    { name: "Taqueria Cancun" }
  ]

  2) add in more server.js
  // server.js
  // serverside js
  //  export express here
  const express = require('express');
  // set var app to express() lib functions
  const app = express();


  // server.js
  let taquerias = [
    { name: "La Taqueria" },
    { name: "El Farolito" },
    { name: "Taqueria Cancun" }
  ]
  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // set root dir
  app.get('/', (req, res) => res.send('Hello Heggy'));

  // app object has a method called .get() which takes two arguments: a url and a callback function
  // res.jason(taquerias) makes response into json object http://localhost:3000/api/taquerias
  app.get('/api/taquerias', (req, res) => res.json(taquerias) );


  // set up port 3000 to listen
  app.listen(process.env.PORT || 3000,  () => console.log('Server is up and running!!! Example app listening at http://localhost:3000/'));
4) ### Game Plan (https://git.generalassemb.ly/sf-wdi-51/express-intro#hello-world-in-express)

Today's [exercises](https://git.generalassemb.ly/sf-wdi-46/express-intro-lab) are set up a bit like a tutorial to walk you through:


------ done with pre-lab taquerias json -------
  * creating a new project with Node and Express
  > npm init
  > npm install express --save
  > touch server.js
  > 
  * creating routes for clients to make requests to your server
  // inside of server.js
  // serverside js
//  export express here
const express = require('express');
// set var app to express() lib functions
const app = express();


// server.js
let taquerias = [
  { name: "La Taqueria" },
  { name: "El Farolito" },
  { name: "Taqueria Cancun" }
]
// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// set root dir
app.get('/', (req, res) => res.send('Hello Heggy'));

// when I consol.log 
app.get('/', (req, res) => {
  console.log('##### req ##### ', req);
  console.log('##### res ##### ', res);
  res.send('Hello Heggy');
});
I see lot of data coming thru:
- I see params params: {},


  * storing data on the server:


  * responding to GET requests with simple strings (`res.send`), or JSON data (`res.json`)
  * serving static files (images, css...)


# <img src="https://cloud.githubusercontent.com/assets/7833470/10423298/ea833a68-7079-11e5-84f8-0a925ab96893.png" width="60"> Express Practice

### Base Challenges - Build an Express App
<!--
Creator: Cory Fauver & Justin Castilla
Market: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Node.js and Express

### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

These are the first tools we'll use to write server-side code. In order to be a **full-stack** web developer, you'll need to have a grasp on writing code on the backend. Node and Express are the industry standard technologies for writing server-side JavaScript. If you find yourself working in an environment that uses a full JS stack, you will be using Node.js and Express. Node is a lightweight and efficient runtime for building JavaScript servers. Express is a very popular and trending framework with a bevy of modules you can add to it.

### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

- describe the roles that Node.js and Express play in building a server.
- draw a diagram of the request response cycle with Node.js and Express included and labeled.
- use `npm` to initialize a node project and write a local web server to serve JSON and static assets with Express.


### Where should we be now?
<!-- call out the skills that are prerequisites -->
*Before this workshop, developers should already be able to:*

- draw a figure of the request-response cycle with the details filled in on the front end (user, event listeners, AJAX, success callbacks, and HTTP verbs).
- make an AJAX request to a third party API and explore the JSON data it returns.

## What is a server?

<details>
  <summary>Take 5 minutes to search the web to pull together a working definition of what a "server" is and what it does.</summary>
  <h5>Meta question: how did you go about searching? </h5>
</details>

## What does it mean to program a server?

We need to write the code that handles requests and figures out how to respond. It might need to format data into JSON, it might need to talk to a database to request a specific resource, and it might need to check if a user is authorized to see the resource they have requested.

To write server side code, is to lay out all of the possible requests that might come in and give instructions for how to handle each type of request.

![request](https://i.imgur.com/YXgj8.png)


![image](https://cloud.githubusercontent.com/assets/6520345/18041555/0345ba10-6d6f-11e6-9a6f-c008aac1935a.png)

### What is Node?

![image](https://cloud.githubusercontent.com/assets/6520345/18023104/d38c2168-6ba9-11e6-997c-24b3a2652991.png)

![image](https://cloud.githubusercontent.com/assets/6520345/18023096/c368ce26-6ba9-11e6-805a-4562a8853721.png)

V8, the JavaScript engine that runs Chrome, is a piece of code written in C++. It creates a processor to take in JS code and translate it to make actionable assembly code/machine code so that the CPU can “do” what you have asked it to in JavaScript. Node is a program that has all of the V8 code and more. It extends V8; V8 is embedded in NodeJS, and Node adds more functionality and syntax that V8 wouldn’t be able to understand. This syntax allows you to write server-side code. (V8 is created to meet the EcmaScript 6 - the standard that defines JavaScript).

- Node.js provides the ability to handle requests and issue responses.
- It is fast.
- It is fast largely because it is asynchronous, meaning code can run in parallel without "blocking" the call stack (the list of other concurrent commands).
- Node really shines when it comes to heavy input-output type operations.
- Realtime services like chat applications or conferencing platforms benefit from using Node.
- APIs are also input/output heavy, and they also tend to work with JavaScript out of the box (think JSON). What better platform than Node?
- Node is designed to accommodate [the module pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript), which means that it allows developers to write useful functionality and then share it with other developers. It is easy to pull in useful modules into your project (like express). This keeps functionality separate and helps projects feel organized.

### NPM and NPM Init
- Node Package Manager, usually called NPM, is a tool that allows us to easily download community-built Node packages.
  * For example, instead of using a CDN to download bootstrap and make sure your version is up-to-date, you can install it with NPM, which will help you manage the downloads and versions.
- Initialize new Node project with NPM: `npm init`. This will simply create one file, `package.json`.
- NPM works with `package.json`, a file in your project, which is a list of project information. NPM makes sure that packages do not get uploaded or tracked in git (imagine how much unnecessary code you could be pushing and pulling each time). To make sure all collaborators are still on the same page, any package listed in `package.json` can easily be downloaded with one command, `npm install`, when somebody clones your project.
- To install NPM packages *and* save them to `package.json`, use the `--save specification`: `npm install --save express` or `npm install --save bootstrap`.



### Express JS
Express is a cutting-edge, unopinionated, server-side JavaScript framework that runs on a Node.js server. It is a popular framework with a bevy of modules you can add to it. Node is the platform and Express provides the specific functionality. If you were building a house rather than a server, Node would be the foundation and utilities, express would be the building material that comprises the above ground building.

![image](https://cloud.githubusercontent.com/assets/6520345/18060592/f5954682-6dd3-11e6-99ba-5dc0b42a4ff8.png)




- Express is a framework built on top of Node.js that makes development of web servers more intuitive and quicker.
- Express allows us to easily set up routes that will trigger actions such as rendering pages or returning JSON.

Much like jQuery does for JavaScript, Express provides easy, intuitive syntax and a lot of built in functionality.

### Hello World in Express

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'))

const server = app.listen(3000);
```




### Express file tree

With frontend and backend code to organize, we should make sure to keep our files in a logical order.

```
├── server.js  // your server code
├── package.json    // lists dependencies; changed by npm install --save somePackage
├── public  // i.e. client-side
│   ├── images  // images to serve to client
│   ├── scripts
│       └── app.js   // client-side javascript file
│   └── styles
│       └── style.css
├── vendor // optional 2nd public dir for jQuery & bootstrap if we choose not to use CDNs
├── views  // html files that we'll serve
│   └── index.html
└── node_modules  // don't edit files in here!
    ├── express // etc
```

> We should also add `node_modules` to a `.gitignore` file so it is not checked into git.  Future developers can just run `npm install` to get the packages listed in `package.json`

**In Express**

Let's look at a basic `get` method in an express app.

```js
// server.js
  let taquerias = [
    { name: "La Taqueria" },
    { name: "El Farolito" },
    { name: "Taqueria Cancun" }
  ]
```

```js
  app.get('/api/taquerias', (req, res) => res.json(taquerias) );
```

Note that the `app` object has a method called `.get()` which takes two arguments: a url and a callback function. The callback takes two arguments: `req` and `res`. These stand for "Request" and "Response" from the request response cycle. We'll be console logging these objects in the exercises.

### Game Plan

Today's [exercises](https://git.generalassemb.ly/sf-wdi-46/express-intro-lab) are set up a bit like a tutorial to walk you through:

  * creating a new project with Node and Express
  * creating routes for clients to make requests to your server
  * storing data on the server
  * responding to GET requests with simple strings (`res.send`), or JSON data (`res.json`)
  * serving static files (images, css...)



## Closing Thoughts
- This afternoon we're going to learn more about the details of routes and resource serving in Express apps.
- Check your own understanding: Do you know the differences between Node's role and Express's role? What do each of them do?
- You'll be using this technology for the next several weeks!

## Additional Resources
1. <a href="http://expressjs.com/starter/installing.html" target="_blank">Starting an Express Project</a>
2. <a href="http://expressjs.com/starter/hello-world.html" target="_blank">Express Hello World</a>
3. <a href="http://expressjs.com/starter/static-files.html" target="_blank">Express Static Files</a>
4. <a href="http://expressjs.com/4x/api.html#res.render" target="_blank">Express res.render()</a>

intro: 
Game Plan
Today's exercises are set up a bit like a tutorial to walk you through:

creating a new project with Node and Express
creating routes for clients to make requests to your server
storing data on the server
responding to GET requests with simple strings (res.send), or JSON data (res.json)
serving static files (images, css...)





Solution in the solution branch.

**Check Install**

1. You should have Node.js and NPM installed from installfest. Run the Terminal commands `which node` and `which npm` to check that they are installed. If they are installed, you will see a file path after each command, like `/usr/local/bin/node`.

1. **Only if you do not have node and npm installed**:
  Install Node & NPM   

    1. To install Homebrew:

      ```bash
        ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
      ```

    2. To install Node.js: `brew install node`
    3. If you encounter issues, ask for help!

**Initialize a Node.js Project with Express**

1. Go to your `~/wdi` directory and clone this repo.  (You don't need to fork.)  From inside your `express-intro` directory, enter the Terminal command `npm init`. It asks a series of questions about your project and uses the information to create a `package.json` file for you. For now, we'll use all of the defaults except "entry point". **Type in `server.js` for your entry point**, and then you can just hit enter until `npm init` is done.  Take a look at `package.json` to see the initial information `npm init` helps you set up.

2. Add express to the local project using `npm`. Use the `save` option so that NPM automatically adds express to your dependencies in `package.json`.

  ```bash
  npm install express --save
  ```

  Notice that a new folder called `node_modules` was created. Open it up and you'll see that there is an `express` folder. `node_modules` is where the dependencies in `package.json` are downloaded to.  If you look at `package.json` again, you'll see express has been added as a dependency for this project.

**Express Hello World!**

1. Create a `server.js` file and add this basic hello world code:

  ```js
    // server.js
    // SERVER-SIDE JAVASCRIPT
    const express = require('express');
    const app = express();

    // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    app.get('/', (req, res) => res.send('Hello World!'));

    app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));
  ```
2. Add a comment above each line of code saying what each line does.

  > **Hint**: Reference [the express documentation](http://expressjs.com/en/4x/api.html#app).
  > **Hint**: `process.env.PORT || 3000` means "in production use the production port, otherwise use 3000 (for development)".

3. Run `node server.js` in the Terminal. You should see 'Example app listening at http://localhost:3000/' _in the Terminal_.  When we're using express, this is where our server-side console logs show up!  Also, visit `http://localhost:3000/` in your browser. You should see "Hello World!"  The browser console only shows client-side console outputs. **Every time you make a change in your server code and want it to run, you need to end the previous server and run `node server.js`**.

4. Console log the `req` (request) and the `res` (response) objects inside your server code's `app.get` method for the `/` path. (The `/` path is often called the "root" path.) Restart the server and briefly check out what the `req` and `res` are.


**Add Some Data on the Server**

1. In server.js, add some starter data  (often called "seed data") to serve when the users visit '/api/albums'.

  ```js
    // server.js
    const albums = [
      {
        title: 'Cupid Deluxe',
        artist: 'Blood Orange'
      },
      {
        title: 'M3LL155X - EP',
        artist: 'FKA twigs'
      },
      {
        title: 'Fake History',
        artist: 'letlive.'
      }
    ];
  ```

2.  To have this data be accessible, we'll need to set up a route to serve it. Add an `app.get` method for the path `/api/albums`.  Inside the new route, use `res.json(albums)` to respond with some JSON containing all the albums from our albums variable.

  > Restart your server, and you should see our albums when you use postman to request the `http://localhost:3000/api/albums` URL.  You could also try using curl: `curl -X GET http://localhost:3000/api/albums` or just your browser.

**Request Data From the Server**

1. Let's get this working with our index page now.  In your browser, open `index.html` and then open the javascript console.  You should see 'Sanity Check: JS is working!'  Try running the following AJAX request in the JavaScript console:

  ```js
  $.ajax({
     method: 'GET',
     url: 'http://localhost:3000/api/albums',
     success: handleSuccess,
     error: handleError
   });

   const handleSuccess = json =>  console.log(json);

   const handleError = (xhr, status, errorThrown) => console.log('uh oh');

  ```
  > Note: you must be on a page with jQuery in order to use .ajax in the browser console!  Fortunately, the included index.js does have jQuery.

  You should get something back like:
  ```
  [Object, Object, Object]
  ```
  Dig into those and see what they look like.

2. Next edit `app.js` to run the same ajax call as above and console log the data.  Remember to put your ajax call inside the handler for the document ready event: `$(document).ready(function() {})`. Consider moving the success handling function definition outside the ajax call, since it's about to get more complicated!

3. Once you have that, edit `app.js` to display this data on your `index.html` page using jQuery.  Decide how you want it to look.  **Hint:** You might also find it useful to edit `index.html`!

4. Restart your server and refresh the page. You should see a list of album titles on the page.

**Serve our index page**

At this point, `server.js` and our client-side files (`index.html`, `app.js`, and `styles.css`) are only connected by the ajax request made in `app.js`. Let's make a route to serve our `index.html`.  We're just going to serve the index on the route GET `/` for now.

1. First let's be sure we follow a good convention for file location and directory structure. This will help a lot when organizing larger projects.  Move `index.html` into a new `views` directory. (Create the directory first.)

  _A good express file tree structure_:

  ```
  ├── server.js  // your server code
  ├── package.json    // project info and dependencies; changed by npm init or npm install --save somePackage
  ├── public  // i.e. client-side
  │   ├── images  // images to serve to client
  │   ├── scripts  // or js
  │       └── app.js   // client-side javascript file
  │   └── styles // or css
  │       └── styles.css
  ├── vendor // an optional 2nd public directory that includes jQuery & bootstrap if we choose not to use a CDN
  └── views  // html files that we'll serve
  │   ├── index.html
  ```

2. We're just going to serve our index on the root route, `/`, so change the current GET `/` route from serving the string `'hello world'` to instead sending the `index.html` file, with `res.sendFile('views/index.html' , { root : __dirname});`. Curious about what this does? Try logging `__dirname` to your console.

  > If you restart your server now and visit 'localhost:3000' in the browser, you'll notice the site now shows the contents of the html file instead of just the hello world message! Congratulations; you now have a server serving a page!

  > But the page looks a little different than when we just opened it as a file, and you'll see some errors in the console.  That's because we're not yet serving the js and css files the page needs.  Let's fix that next.

**Add Static Files (CSS, JS, Images)**

1. Make a directory in your project called `public`; then create `public/scripts`, `public/styles` and `public/images` subdirectories.  Move `styles.css`, and `app.js`, into their public subdirectories.  These files are called static files. (You can delete the old directories they were in.)

2. Set up the express app to serve the static files (actually, the whole public directory.)

  ```js
    // server.js
    app.use(express.static('public'));
  ```

3. Get a `console.log("Sanity Check: JS is working!")` from your `app.js` to appear in your browser dev tools console.

4. Get the css styles in `styles.css` working again on the index page.

5. Everything should be working again now, and you should see your albums when you visit `localhost:3000`.  If not, fix it!

**Challenge**

We're making a weird app. Albums and taquerias.  Treat your senses.  

1. Add some taqueria seed data to your server file.

  ```js
    // server.js
    const taquerias = [
      { name: "La Taqueria" },
      { name: "El Farolito" },
      { name: "Taqueria Cancun" }
    ];
  ```

2. Add a route to your server side javascript that clients can use to get taqueria data.  The route's path should be `/api/taquerias`.  Instead of `res.send` (for simple strings) or `res.sendFile`, this route will use `res.json`.


  ```js
    app.get('/api/taquerias', (req, res) => res.json(taquerias));
  ```

3. Navigate to http://localhost:3000/api/taquerias (remember to restart your server first!) and check that the data is showing up.


4. In your `app.js` file, write a jQuery AJAX request to get the taqueria data. When the response comes back, display all the taqueria names above the albums on your site's root page (localhost:3000/).  

  <details><summary> Want a reminder of the ajax call structure? Click here!</summary>

  ```js
  $.ajax({
    method: 'GET',
    url: '/api/taquerias',
    success: handleResponse
  });

  const handleResponse = (json) => {
    // your code here
  }
  ```

  </details>

### Stretch Challenges

1. Add a `vendor` folder to your project. The `vendor` folder is traditionally used for third-party (external) library code.  Download Bootstrap's CSS and JavaScript files and add them to the `vendor` folder. Can you include Bootstrap in your project from this location instead of the CDN? What is the benefit of having a separate `vendor` folder for external front-end libraries?

  > **Hint**: Remember to serve the static vendor files to make them available to your front end.

  ```js
    // server.js
    app.use(express.static('vendor'));
  ```

2. Add an image to your `public/images` folder and display it in `index.html`.
