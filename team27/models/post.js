/* Restaurant and Reservation Models */
// DO NOT CHANGE THIS FILE

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    Username: String,
    subtitle: String,
    date: String,
    fileurl: String,
    desc: String,
    likes: Number
});


const Post = mongoose.model('Posts', postSchema);

module.exports = { Post };
