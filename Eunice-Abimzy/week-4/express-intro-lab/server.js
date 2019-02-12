//server.js
// SERVER-SIDE JAVASCRIPT
const express = require("express");
const app = express();

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

//the front slash indicates the root directory for the url and Hello World is the suggested response
app.get("/", (req, res) => res.send("Hello World!"));

//Seed data to serve when users visit url below:
const albums = [{
        title: "Cupid Deluxe",
        artist: "Blood Orange"
    },
    {
        title: "M3LL155X - EP",
        artist: "FKA twigs"
    },
    {
        title: "Fake History",
        artist: "letlive."
    }
];

app.get("/api/albums", (req, res) => {
    res.json(albums);
});


//Use port 3000 for development or production port in production
app.listen(process.env.PORT || 3000, () =>
    console.log("Example app listening at http://localhost:3000/")
);