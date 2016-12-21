angular.module('adviser.packageCms', [])
.controller('packageCmsController', function($scope, $routeParams, Package){

	$scope.data= {};

	var getAllPackages= function(){
		Package.getPackages($routeParams.type)
		.then(function(packages){
			$scope.data= packages;
		}).catch(function(error){
			throw error;
			alert(error);
		});
	};
	getAllPackages();
});