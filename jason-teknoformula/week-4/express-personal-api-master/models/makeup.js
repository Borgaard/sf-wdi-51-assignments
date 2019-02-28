const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const MakeUpSchema = new Schema({
    name: String,
    brand: String,
    type: String,
    color: String
});

const MakeUp = mongoose.model('MakeUp', MakeUpSchema);

module.exports = MakeUp;