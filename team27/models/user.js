/* Restaurant and Reservation Models */
// DO NOT CHANGE THIS FILE

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Username: String,
    firstName: String,
	lastName: String,
	Password: String,
});


const User = mongoose.model('Users', userSchema);

module.exports = { User };
