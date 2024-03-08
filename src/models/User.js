const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    roleId: { type: Schema.Types.ObjectId, ref: 'Role' }
});

module.exports = mongoose.model('User', userSchema);
