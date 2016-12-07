var mongoose = require('mongoose');

 //creating Destination Model
var destinationSchema = new mongoose.Schema({
	destinationName: {type: String, required: true},
	description: {type: String},
	mapPhoto: {type: String},
	mainPhoto: {type: String},
	photos: [String]
	
});

var Destination = mongoose.model('Destination', destinationSchema);
module.exports = Destination;