const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    gender: String,
    telp: String,
    address: String,
});

module.exports = mongoose.model('User', UserSchema);
