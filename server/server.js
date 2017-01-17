var https = require('https');
var fs = require('fs');

var express = require('express');
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var app = express();
var mongoURL = ' mongodb://heroku_m7fc1pdh:qb438tll8hk0onk9o23ghgit7s@ds053090.mlab.com:53090/heroku_m7fc1pdh' || 'mongodb://localhost:27017/adviser';


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
