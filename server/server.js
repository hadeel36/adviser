var express = require('express');
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var app = express();
<<<<<<< 0f7924cd9db940faef3d465cddfa97ef77a162ce
<<<<<<< 53e6262a347d5c2d8fc68f1648b5eef42af19c46
var mongoURL = process.env.MONGODB_URI || 'mongodb://localhost/adviser';


// connect to mongo database named "shortly"
var connection = mongoose.connect(mongoURL);
autoIncrement.initialize(connection);


// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(process.env.PORT || 8000);
console.log("server start at http://127.0.0.1:8000/")

// export our app for testing and flexibility, required by index.js
module.exports = app;
