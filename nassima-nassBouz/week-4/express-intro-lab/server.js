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

  // app.get('/', (req, res) => res.send('Hello World!'));

// app.get('/',(req,res)=>
//consoel.log('req =', req);
//console.log(root));

// 4 add some data to the Server
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
/// display my albums object   // localhost:3010/api/albums
app.get('/api/albums',(req,res)=>{
        res.json(albums);
        });

///////////////////// part 2/////////////////
// app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  consoel.log('req =', req);
  consoel.log('res =', res);
  res.sendFile('views/index.html' , { root : __dirname});
})


  app.listen(process.env.PORT || 3010,  () => console.log('Example app listening at http://localhost:3010/'));
