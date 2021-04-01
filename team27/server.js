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


const session = require("express-session");
const MongoStore = require('connect-mongo');


// for session
app.use(
    session({
        secret: process.env.SESSION_SECRET || "our hardcoded secret", // make a SESSION_SECRET environment variable when deploying (for example, on heroku)
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 6000,
            httpOnly: true
        },
        // store the sessions on the database in production
        store: MongoStore.create({mongoUrl: 'mongodb+srv://Team27:Team27@cluster0.arl4q.mongodb.net'})
    })
);

const authenticate = (req, res, next) => {
    if (req.session.user) {
        User.findById(req.session.user).then((user) => {
            if (!user) {
                return Promise.reject()
            } else {
                req.user = user
                next()
            }
        }).catch((error) => {
            res.status(401).send("user not authorized");
        })
    } else {
        res.status(401).send("user not authorized");
    }
}


app.use(express.static(path.join(__dirname, '/public')))

app.get("/users/checkSession", (req, res) => {
    if (req.session.user) {
        res.send({ currentUser: req.session.Username });
    } else {
        res.status(401).send();
    }
});



app.post('/loginUser', (req, res) => {
	
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal mongoose server error');
		return;
	}
	
	const username = req.body.Username;
	const password = req.body.Password;
	
	User.findByUsernamePassword(username, password)
        .then(userToLogin => {
			console.log("made it here no server error");
			if(userToLogin !== null){
				console.log(userToLogin.Username);
				req.session.user = userToLogin._id;
				req.session.Username = userToLogin.Username;
				res.send({currentUser: userToLogin.Username, success: true});
			}else{
				res.send({currentUser: undefined, success: false});
			}
        })
        .catch(error => {
			console.log("made it here server error", error);
			
            res.status(400).send()
		});
		
		
})

app.post('/addUser', (req, res) => {

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  


	User.findOne({Username: req.body.Username}).then((foundUser) => {
		if(!foundUser){
			const newUser = new User({
				Username: req.body.Username,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				password: req.body.Password
			})

			newUser.save().then((result) => {
				res.status(404).send('User added');
			}).catch((error) => {
				if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
					res.status(500).send('Internal server error')
				} else {
					res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
				}
			})
		}else{
			res.send({userFound: true});
		}
	}).catch((error) => {
		if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
		}
	})
})


/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log("Listening on port 5000....");
}) 

