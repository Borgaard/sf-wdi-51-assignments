const express = require('express');
const app = express();

const albums = [{
  title: "Cupid Deluxe",
  artist: "Blood Orange"
},
{
  title:"Thriller",
  artist: "Michael Jackson"
},
{
  title: "Get Rich or Die Trying",
  artist: "50 Cent"
}];

const taquerias = [
  { name: "La Taqueria" },
  { name: "El Farolito" },
  { name: "Taqueria Cancun" }
];

app.use(express.static(__dirname + '/public'));


app.use((req,res,next) => {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
next();
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root : __dirname});
});


app.get('/api/albums',(req,res)=>
        res.json(albums));

app.get('/api/taquerias', (req, res) => res.json(taquerias));


app.listen(process.env.Port || 3000, () => console.log('Example app listening at http://localhost:3000/'));

