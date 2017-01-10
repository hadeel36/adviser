angular.module('adviser.packageInfo', [])
.controller('packageInfoController', function($scope, $routeParams, Package, $mdToast, $http){

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

	$scope.toastPosition = {
	          bottom: false,
	          top: true,
	          left: false,
	          right: true
	      };
 $scope.getToastPosition = function () {
      return Object.keys($scope.toastPosition)
          .filter(function (pos) {
              return $scope.toastPosition[pos];
          })
          .join(' ');
  };

	$scope.sendMail= function(){
       var data= ({
           destinationName : 'hiiiiiiiiiiiiii',
           contactEmail : "hadylgk87@gmail.com",
           contactMsg : 'hiiiiiiiiiiiiiiiiiiiiiiii'
       });
		
       // Simple POST request example (passing data) :
       $http.post('/api/send_Mail', data).
           success(function(data, status, headers, config) {
               // this callback will be called asynchronously
               // when the response is available
               console.log(data);
               $mdToast.show(
                   $mdToast.simple()
                       .content('Thanks for your message ' + data.destinationName + ' You Rock!')
                       .position($scope.getToastPosition())
                       .hideDelay(5000)
               );

           }).
           error(function(data, status, headers, config) {
               // called asynchronously if an error occurs
               // or server returns response with an error status.
           });

	};
});