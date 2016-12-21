var Package = require('./packageModel.js');

var repsonseHandler = require('../config/helpers.js').repsonseHandler;

module.exports = {
	createNewPackage: function (req, res, next) {
		var package = req.body		
		var newPackage = new Package({
			packageName: package.packageName,
			outline: package.outline,
			description: package.description,
			mainPhoto: package.mainPhoto,
			photos: package.photos,
			parentDestination: package.parentDestination,
			destination: package.destination,
			type: package.type,
			itinerary: package.itinerary,
			include: package.include,
			exclude: package.exclude,
			places: package.places,
			days: package.days,
			nights: package.nights,
			price: package.price,
			threeStarHotels: package.threeStarHotels,
			fourStarHotels: package.fourStarHotels,
			fiveStarHotels: package.fiveStarHotels,
			startAvailableDate: package.startAvailableDate,
			endAvailableDate: package.endAvailableDate
		});
		newPackage.save(function (err, package) {
			repsonseHandler(err, req, res, {status: 201, returnObj: package}, next);
		});
	},

	packageInfo: function (req, res, next) {
		Package.findOne({_id: req.params.id}, function (err,package) {
			repsonseHandler(err, req, res, {status: 201, returnObj: package}, next);
		});
	},

	deletePackage: function(req, res, next) {
		Package.findOneAndRemove({_id: req.params.id}, function (err, package) {
			repsonseHandler(err, req, res, {status: 201, returnObj: package}, next);
		});
	},

	getAllPackages: function (req, res, next) {
		Package.find({})
		.exec(function (err, packages) {
			repsonseHandler(err, req, res, {status: 201, returnObj: packages}, next);
		})
	},

	getPackagesDependonType: function (req, res, next) {
		Package.find({type: req.params.type}, function (err,packages) {
			repsonseHandler(err, req, res, {status: 201, returnObj: packages}, next);
		});
	}

};