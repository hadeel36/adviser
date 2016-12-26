angular.module('adviser.packageInfo', [])
.controller('packageInfoController', function($scope, $routeParams, Package){
    $scope.myInterval = 3000;
	var getPackageInfo= function(){
		Package.getPackage($routeParams.id)
		.then(function(package){
			$scope.data= package;
			$scope.photos= package.photos;
			$("#des").html(package.description);
			$("#iter").html(package.itinerary);
			$("#include").html(package.include);
			$("#exclude").html(package.exclude);

			console.log($scope.data);
		}).catch(function(error){
			alert("an error occured");
		});
	};
	getPackageInfo();


});