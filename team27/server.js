/* server.js, with mongodb API */
'use strict';
const log = console.log
const path = require('path')

const env = process.env.NODE_ENV


const express = require('express')
// starting the express server
const app = express();

// mongoose and mongo connection
const { mongoose } = require('./db/mongoose')
mongoose.set('bufferCommands', false);  // don't buffer db requests if the db server isn't connected - minimizes http requests hanging if this is the case.

const cors = require('cors')
if (env !== 'production') { app.use(cors()) }


// import the mongoose models
const { User } = require('./models/user')

// to validate object IDs
const { ObjectID } = require('mongodb')

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser') 
app.use(bodyParser.json())

/*** Helper functions below **********************************/
function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
	return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}

/*** Webpage routes below **********************************/
/// We only allow specific parts of our public directory to be access, rather than giving
/// access to the entire directory.

// static js directory
app.use(express.static(path.join(__dirname, '/public')))

app.post('/addUser', (req, res) => {
	// log(req.body)

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	// Create a new student using the Student mongoose model
	const newUser = new User({
		Username: req.body.Username,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		Password: req.body.Password
	})


	newUser.save().then((result) => {
		res.send(result)
	}).catch((error) => {
		log(error) // log server error to the console, not to the client.
		if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
		}
	})

})
app.get('/getUser', (req, res) => {
	
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal mongoose server error');
		return;
	}
	
	User.find().then((temp) => {
		// res.send(students) // just the array
		res.send({ temp }) // can wrap students in object if want to add more properties
	})
	.catch((error) => {
		log(error)
		res.status(500).send("Internal Server Error")
	})
	
})


/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log("Listening on port 5000....");
}) 

