// Brings in Express Module
const express = require("express");
// Creates App by calling Express Object
const app = express();

const albums = [
  {
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

app.use(express.static("public"));
// Allows CORS so we do not get CORS errors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// Get Home Route to Test Connection and Send Data
app.get("/", (req, res) => {
  res.send("Hello World!");

  res.sendFile("views/index.html", { root: __dirname });
});

app.get("/api/albums", (req, res) => {
  res.json(albums);
});

// Sets our app to listen to production port or local port.
app.listen(process.env.PORT || 3000, () =>
  console.log("Example app listening.")
);
