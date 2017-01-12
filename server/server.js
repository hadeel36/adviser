var https = require('https');
var fs = require('fs');

var express = require('express');
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var app = express();
<<<<<<< 20415a6f72b9e7c079dd21fcda8a6f309b6e4faa
<<<<<<< e078e75d1c9a6c6ddb1ca2d79a69acc7fe5b4ea0
var mongoURL = process.env.MONGODB_URI || 'mongodb://localhost/adviser';


<<<<<<< 91169b8f1c8f7371e7813eddf639bd934c8e4504
=======
var mongoURL = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017?ssl=true';
=======
var mongoURL = process.env.MONGODB_URI || 'mongodb://localhost/adviser';
>>>>>>> faild to get data but server working

var mongoOpt = {
      "server": { 
        "sslValidate": false,
        "sslKey": fs.readFileSync('mongodb.pem'),
        "sslCert": fs.readFileSync('mongodb-cert.key')
      }
    }
>>>>>>> fix conflict
=======
>>>>>>> the server working
// connect to mongo database named "shortly"
var connection = mongoose.connect(mongoURL);
autoIncrement.initialize(connection);


// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

<<<<<<< 91169b8f1c8f7371e7813eddf639bd934c8e4504
<<<<<<< e078e75d1c9a6c6ddb1ca2d79a69acc7fe5b4ea0


=======
var sslkey = fs.readFileSync('./key.pem');
var sslcert = fs.readFileSync('./cert.pem')
=======
>>>>>>> the server working


<<<<<<< 91169b8f1c8f7371e7813eddf639bd934c8e4504
https.createServer(options, app).listen(process.env.PORT || 8000);
console.log("server start at http://127.0.0.1:8000/");
>>>>>>> fix conflict
=======
>>>>>>> the server working
// start listening to requests on port 8000
app.listen(process.env.PORT || 8000);
console.log("server start at http://127.0.0.1:8000/")

// export our app for testing and flexibility, required by index.js
module.exports = app;
