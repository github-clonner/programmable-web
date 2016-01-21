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
  .controller('MusicPlayerCtrl', ["$scope", "$http", "$rootScope", '$cookies', function ($scope, $http, $rootScope, $cookies) {
    $scope.currentTrack = 0;
    $scope.pageSize = 5;
    $scope.data = [];
    console.log($cookies.music);


    $cookies.music.tracks.forEach(function (track) {
      track.uri = 'http://localhost:3001/' + $cookies.music.uri + '/' + track.uri;
    });



    $rootScope.$broadcast('audio.set', $cookies.music, 0, 1);
    //$rootScope.audioSet($cookies.music);
    /*   $http.get('assets/music.json')
     .success(function(response){
     console.log(response);
     $scope.data = response;
     updateTrack();
     });*/
  }]);
