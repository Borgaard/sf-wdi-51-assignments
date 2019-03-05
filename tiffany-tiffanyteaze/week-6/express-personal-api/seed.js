const db = require('./models');

const new_game = [{
    title: "Majora's Mask",
    avatar: "Link"
}]

db.Game.remove({}, (err, game) => {
    db.Game.create(new_game, function(err, game){
        if (err){
            return console.log("Error:", err);
        }
        console.log("Created new game entry", game._id)
        process.exit();
    })
})
