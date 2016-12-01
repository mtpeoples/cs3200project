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
  }
]);
