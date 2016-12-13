angular.module('adviser.jordan', [])

.controller('jordanController', function ($scope, Jordan, $location) {
  // Your code here

  $scope.data = {};

  var inite = function () {
    Jordan.getJordanInfo()
      .then(function (jordan) {
        $scope.data = jordan;
        console.log($scope.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  var initePlaces = function () {
    Jordan.getPlaces()
      .then(function (places) {
        $scope.places = places;
        console.log(places);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  

  inite();
  initePlaces();
  });
