
const db = require('./models');

const new_videogame = [{
        title: 'Majoras Mask',
        avatar: 'Link'
    },
    {
        title: 'Donkey Kong',
        avatar: 'Diddy Kong'
    },
    {
        title: 'Super Mario Kart',
        avatar: 'Yoshi'
    }]

    db.Videogame.remove({}, (err, videogame) => {
        db.Videogame.create(new_videogame, function(err, videogame){
            if (err){
                return console.log("Error:", err);
            }
            console.log("Created new game entry", videogame._id)
            process.exit();
        })
    });