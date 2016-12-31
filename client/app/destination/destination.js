angular.module('adviser.destination', [])
.controller('destinationController', function($scope, Destination,$routeParams, Package){

	$scope.myInterval= 6000;
    $scope.chunkSize = 4;

     function chunk(arr, size) {
  var newArr = [];
  var arrayLength = arr.length;
  for (var i = 0; i < arrayLength; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
	var getDestinationInfo= function(){
		Destination.getDestinationInfo($routeParams.id)
		.then(function(destinationInfo){
			$scope.destinationInfo= destinationInfo;
			$scope.destinationPhotos= destinationInfo.photos;
			$('#description').html(destinationInfo.description);
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
			$scope.chunkedSlides = chunk(destinations, $scope.chunkSize);
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
		Package.getPackages("specialPromotions")
		.then(function(packages){
			$scope.firstP= packages[packages.length-4];
			$scope.secondP= packages[packages.length-1];
			$scope.thirdP= packages[packages.length-2];
			$scope.fourthP= packages[packages.length-3];
		}).catch(function(error){
			alert("an error eccured");
		});
	};
	getAllPackages();
 
});