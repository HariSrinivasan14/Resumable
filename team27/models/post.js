/* Restaurant and Reservation Models */
// DO NOT CHANGE THIS FILE

const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
   Username: String,
   text: String,
   time: String
});
const postSchema = new mongoose.Schema({
    Username: String,
    title: String,
    subtitle: String,
    date: String,
    file: mongoose.Schema.Types.ObjectId,
    desc: String,
    likes: Number,
    comments: [CommentSchema]
});


const Post = mongoose.model('Posts', postSchema);

module.exports = { Post };
