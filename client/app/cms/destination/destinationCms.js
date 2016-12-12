angular.module('adviser.destinationCms', [])
.controller('destinationCmsController', function($scope, $window, Destination){

	$scope.data= {};
	$scope.destination= {};
	var photos= [];

	$scope.addDestination= function(){
		$scope.destination.destinationName= $scope.destinationName;
		$scope.destination.description= $scope.description;
		$scope.destination.mainPhoto= $scope.mainfile;
		$scope.destination.mapPhoto= $scope.mapfile;
		$scope.destination.photos= photos;
		Destination.addDestination($scope.destination)
		.then(function(destination){
			console.log(destination);
		})
		.catch(function(error){
			throw error;
			console.log(error);
		});
	};

	var uploadMain= function(file){
		Destination.uploadPicture(file)
		.then(function(resp){
			if(resp.data.error_code===0){
				$scope.mainfile= '../../uploads/'+resp.data.file.filename;
			}else{
				$window.alert('An error occured!!!')
			}
		},function (resp) { //catch error
			$window.alert('Error status: ' + resp.status);
        });
	};

	$scope.submitMain= function(){
		console.log('submitMain');
		if($scope.mainfile){
			uploadMain($scope.mainfile);
		}
	};

	var uploadMap= function(file){
		Destination.uploadPicture(file)
		.then(function(resp){
			if(resp.data.error_code===0){
				$scope.mapfile= '../../uploads/'+resp.data.file.filename;
			}else{
				$window.alert('An error occured!!!')
			}
		},function (resp) { //catch error
			$window.alert('Error status: ' + resp.status);
        });
	};

	$scope.submitMap= function(){
		if($scope.mapfile){
			uploadMap($scope.mapfile);
		}
	};

	$scope.uploadFiles= function(){
		if($scope.files && $scope.files.length){
			for(var i=0; i<$scope.files.length; i++){
				Destination.uploadPicture($scope.files[i])
				.then(function(resp){
					if(resp.data.error_code===0){
						$scope.photo='../../uploads/'+resp.data.file.filename;
                		photos.push($scope.photo);
					}else{
						$window.alert('An error occured!!!');
					}
				},function (resp) { //catch error
            		$window.alert('Error status: ' + resp.status);
        		});
			}
		}
	}
});