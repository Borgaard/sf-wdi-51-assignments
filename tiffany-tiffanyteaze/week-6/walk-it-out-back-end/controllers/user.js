const 
  bcrypt = require('bcrypt'),
  db = require('../models'),
  jwt = require('jsonwebtoken')

module.exports = {
    show: (req,res)=>{
      console.log('trigger Show', req.userId)
      if(req.userId){
        db.User.findById(req.userId, (err, foundUser)=>{
          res.json(foundUser)
        })
      } else {
        res.json('No user Id provided')
      }
    }
}