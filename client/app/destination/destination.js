angular.module('adviser.destination', [])
.controller('destinationController', function($scope, Destination){

	$scope.data= {};

	var getAllDestination= function(){
		Destination.getAllDestination()
		.then(function(destinations){
			$scope.data= destinations;
			console.log($scope.data);
			console.log($scope.data[0].mainPhoto);
		}).catch(function(error){
			throw error;
			console.log(error);
		});
	};
	getAllDestination();
});