angular.module('adviser.header',[])
.controller('headerController', function($scope, Destination, Package){

	var getAllDestinations= function(){
		Destination.getAllDestinations()
		.then(function(destinations){
			$scope.destinations= destinations;
			console.log($scope.destinations);
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
			$scope.first= $scope.packages[$scope.packages.length];
			$scope.second= $scope.packages[$scope.packages.length-1];
			$scope.third= $scope.packages[$scope.packages.length-2];
			$scope.fourth= $scope.packages[$scope.packages.length-3];
			console.log($scope.packages);
		}).catch(function(error){
			throw error;
			console.log(error);
		});
	};
	getAllPackages();
});