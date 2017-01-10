var https = require('https');
var fs = require('fs');

var express = require('express');
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var app = express();
var mongoURL = process.env.MONGODB_URI || 'mongodb://localhost/adviser';

var mongoOpt = {
      "server": { 
        "sslValidate": false,
        "sslKey": fs.readFileSync('mongodb.pem'),
        "sslCert": fs.readFileSync('mongodb-cert.key')
      }
    }
// connect to mongo database named "shortly"
var connection = mongoose.connect(mongoURL, mongoOpt);
autoIncrement.initialize(connection);


// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var sslkey = fs.readFileSync('./key.pem');
var sslcert = fs.readFileSync('./cert.pem')

var options = {
    key: sslkey,
    cert: sslcert
};

https.createServer(options, app).listen(process.env.PORT || 8000);
console.log("server start at http://127.0.0.1:8000/");
// start listening to requests on port 8000
// app.listen(process.env.PORT || 8000);
// console.log("server start at http://127.0.0.1:8000/")

// export our app for testing and flexibility, required by index.js
module.exports = app;
