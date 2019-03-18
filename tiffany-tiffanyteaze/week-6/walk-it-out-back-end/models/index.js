const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/walk-it-out',
  { useNewUrlParser: true })

module.exports= {
    Dog: require('./Dog'),
    User: require('./User')
}
