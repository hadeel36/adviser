var Jordan = require('./jordanModel.js');

var repsonseHandler = require('../config/helpers.js').repsonseHandler;

module.exports = {

	deleteJordan: function(req, res, next) { 
		Jordan.remove({}, function (err, jordan) {
			repsonseHandler(err, req, res, {status: 201, returnObj: jordan}, next);
		});
	},

	jordanInfo: function (req, res, next) {
		Jordan.find({})
		.exec(function (err, jordan) {
			repsonseHandler(err, req, res, {status: 201, returnObj: jordan}, next);
		});
	}		
};