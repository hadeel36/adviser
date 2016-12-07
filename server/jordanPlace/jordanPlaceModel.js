var mongoose = require('mongoose');

 //creating JordanPlace Model
var jordanPlaceSchema = new mongoose.Schema({
	placeName: {type: String, required: true},
	description: {type: String},
	mainPhoto: {type: String},
	photos: [String]
	
});

var JordanPlace = mongoose.model('JordanPlace', jordanPlaceSchema);
module.exports = JordanPlace;