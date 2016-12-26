angular.module('adviser.destination', [])
.controller('destinationController', function($scope, Destination,$routeParams, Package){

	$scope.myInterval= 3000;

	var getDestinationInfo= function(){
		Destination.getDestinationInfo($routeParams.id)
		.then(function(destinationInfo){
			$scope.destinationInfo= destinationInfo;
			$scope.destinationPhotos= destinationInfo.photos;
			$('description').html(destinationInfo.description);
		}).catch(function(error){
			throw error;
			console.log(error);
		});
	};
	getDestinationInfo();

	var getAllDestinations= function(){
		Destination.getAllDestinations()
		.then(function(destinations){
			$scope.destinations= destinations;
			$scope.first= $scope.destinations[0];
			$scope.second= $scope.destinations[1];
			$scope.third= $scope.destinations[2];
			$scope.fourth= $scope.destinations[3];
			$scope.photos= destinations.photos;
		}).catch(function(error){
			throw error;
			console.log(error);
		});
	};
	getAllDestinations();

	var getAllPackages= function(){
		Package.getPackages()
		.then(function(packages){
			$scope.packages= packages;
			$scope.firstP= $scope.packages[$scope.packages.length];
			$scope.secondP= $scope.packages[$scope.packages.length-1];
			$scope.thirdP= $scope.packages[$scope.packages.length-2];
			$scope.fourthP= $scope.packages[$scope.packages.length-3];
			console.log($scope.packages);
		}).catch(function(error){
			throw error;
			console.log(error);
		});
	};
	getAllPackages();
});