// import mongoose library
const mongoose = require('mongoose')
Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  description: String
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;