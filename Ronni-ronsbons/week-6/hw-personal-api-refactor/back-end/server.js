const 
    express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    apiRoutes = require('./routes/api.js');
    profileRoutes = require('./routes/profile.js');
    destinationRoutes = require('./routes/destinations.js');

const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/profile', profileRoutes);
app.use('/destinations', destinationRoutes);

app.listen(3001, () => console.log('Listening on port 3001 :)'))