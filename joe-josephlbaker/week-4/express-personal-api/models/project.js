const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema ({
    name: String,
    description: String,
    githubRepoUrl: String
});

const Project = mongoose.model('Project', ProjectSchema)