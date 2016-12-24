angular.module('adviser.destination', [])
.controller('destinationController', function($scope, Destination){

	$scope.destinations= {};

	var getAllDestination= function(){
		Destination.getAllDestination()
		.then(function(destinations){
			$scope.destinations= destinations;
			console.log($scope.destinations);
			console.log($scope.destinations[2].mapPhoto);
		}).catch(function(error){
			throw error;
			console.log(error);
		});
	};
	getAllDestination();
});