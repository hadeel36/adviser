var helpers = require('./helpers.js'); // our custom middleware
var utils = require('./utils.js');
var jordanController = require('../jordan/jordanController.js');
var jordanPlaceController = require('../jordanPlace/jordanPlaceController.js');
var destinationController= require('../destination/destinationController.js');
var packageController= require('../package/packageController.js');
module.exports = function (app, express) {

// jordan api 
app.get('/api/jordan',jordanController.jordanInfo);
app.post('/api/jordan',jordanController.createJordan);

// jordanPlace api
app.get('/api/jordanPlace/placeInfo/:id',jordanPlaceController.placeInfo);
app.post('/api/jordanPlace',jordanPlaceController.createNewJordanPlace);
app.get('/api/jordanPlace/allPlaces',jordanPlaceController.getAllPlaces);

// package api 
app.get('/api/package/allPackages/:type', packageController.getPackagesDependonType);
app.post('/api/package', packageController.createNewPackage);

// destination api
app.post('/api/addDestination', destinationController.createNewDestination);
app.get('/api/destination', destinationController.getAllDestination);

// upload an image 
app.post('/api/upload',utils.uploadImg);
  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
app.use(helpers.errorLogger);
app.use(helpers.errorHandler);
};

