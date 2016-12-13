angular.module('adviser.jordanPlace', [])
.controller('jordanPlaceController', function ($scope, $route, $window, $routeParams, Jordan) {
  // Your code here

  $scope.data = {};

  var inite = function () {
    Jordan.getPlaceInfo($routeParams.id)
      .then(function (place) {
        $scope.data = place;
        console.log($scope.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  
  inite();

  });
