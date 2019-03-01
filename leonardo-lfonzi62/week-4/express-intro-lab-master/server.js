// server.js
// SERVER-SIDE JAVASCRIPT
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// Seed Data
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

const taquerias = [
{ name: "La Taqueria" },
{ name: "El Farolito" },
{ name: "Taqueria Cancun" }
];


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/vendor'));
app.use(bodyParser.urlencoded({ extended: false }));




// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
app.use((req, res, next) => {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

// when the user is at the root route, send back hello world in the browser
app.get('/', (req, res) =>  {
res.sendFile('views/index.html' , { root : __dirname});
console.log('req = ', req);
console.log('res =', res);
});

app.get('/api/taquerias', (req,res) => {
res.json(taquerias);
})

app.get('/api/albums', (req, res ) => {
res.json(albums);
})
// in production use the production port, otherwise use 3000 (for development)
//  server-side console logs





app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));