const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const PostsSchema = new Schema({
    postsAuthor: String,
    postsDate: String,
    postsTitle: String,
    postsContents: String,
});

module.exports = mongoose.model('Posts', PostsSchema);
