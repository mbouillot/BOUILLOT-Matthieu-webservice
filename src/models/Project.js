const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('Project', projectSchema);
