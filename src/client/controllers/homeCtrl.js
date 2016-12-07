angular.module('cs3200-project').controller('homeCtrl', ['$scope', '$http', '$httpParamSerializer',
  function($scope, $http, $httpParamSerializer) {
    'use strict';

    $scope.query = {
    	title: ''
    }

    $scope.search = function() {
      var qs = $httpParamSerializer({ title: $scope.query.title });

      $http.get('/api/movie?' + qs).then(function(response) {
        $scope.movie = response.data;
        console.log($scope.movie);
      }, function(error) {
      	console.log(error);
      });
    }

    $scope.delete = function() {
      $http.delete('/api/movie/' + $scope.movie._id).then(function(response) {
        $scope.movie = '';
      }, function(error) {
        console.log(error);
      });
    }

    $scope.update = function() {
      $http.put('/api/movie/' + $scope.movie._id, $scope.movie).then(function(response) {
        $scope.movie = response.data;
        console.log($scope.movie);
      }, function(error) {
        console.log(error);
      });
    }
  }
]);
