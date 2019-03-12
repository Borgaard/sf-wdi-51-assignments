const 
  db = require('../models')

module.exports = {
    index: (req,res)=>{
        db.Dog.find({}, (err,dogs)=>{
            res.json(dogs)
        })
    },
}