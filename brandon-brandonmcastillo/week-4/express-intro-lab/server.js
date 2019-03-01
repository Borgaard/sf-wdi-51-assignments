// / server.js
//   // SERVER-SIDE JAVASCRIPT
//jshint esversion:6
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
// app.use([path,] callback [, callback function...])
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// server.js
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// app.get(path, callback [, callback ...])

app.get('/', (req, res) => res.sendFile('views/index.html', { root: __dirname }));

// server.js
const albums = [{
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

app.get('/api/albums/', (req, res) =>
    res.json(albums));

// server.js
const taquerias = [
    { name: "La Taqueria" },
    { name: "El Farolito" },
    { name: "Taqueria Cancun" }
];

app.get('/api/taquerias', (req, res) =>
    res.json(taquerias));

// app.listen([port[, host[, backlog]]][, callback])
app.listen(process.env.PORT || 3000, () =>
    console.log('Example app listening at http://localhost:3000/'));