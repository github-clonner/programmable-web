/**
 * Created by Garance on 04/01/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name programmableWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the programmableWebApp
 */
angular.module('programmableWebApp')
  .controller('MusicPlayerCtrl',["$scope", "$http", "$rootScope", function ($scope, $http, $rootScope) {
    $scope.currentTrack = 0;
    $scope.pageSize = 5;
    $scope.data=[];

    var updateTrack = function(){
      $rootScope.$broadcast('audio.set', 'assets/music/' + $scope.data[$scope.currentTrack].folder+"/", $scope.data[$scope.currentTrack], $scope.currentTrack, $scope.data.length);
    };

    $http.get('assets/music.json')
      .success(function(response){
        $scope.data = response;
        updateTrack();
      });
  }]);
