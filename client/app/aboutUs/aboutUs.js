angular.module('adviser.aboutUs', [])
.controller('aboutUsController', function($scope, $mdToast, $http){
  $scope.submitMail= function(){
       var data= ({
           name : $scope.name,
           contactEmail : $scope.email,
           contactMsg : $scope.text
       });
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
       // Simple POST request example (passing data) :
       $http.post('/api/submit_Mail', data).
           success(function(data, status, headers, config) {
               // this callback will be called asynchronously
               // when the response is available
               console.log(data);
               $mdToast.show(
                   $mdToast.simple()
                       .content('Thanks for your message ' + data.name + ' You Rock!')
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