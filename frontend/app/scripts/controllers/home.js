'use strict';

/**
 * @ngdoc function
 * @name programmableWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the programmableWebApp
 */
angular.module('programmableWebApp')
  .controller('HomeCtrl',['$scope', 'Music', '$cookies', '$location', function ($scope, Music, $cookies, $location) {
    //This cookie will store the song the user wants to play - We reset it when you get on the music list
    $cookies.remove('song');
    $scope.songs=[];
    $scope.inError=false;
    Music.all(function(result) {
      $scope.songs=result;
        $scope.songs.forEach(function(song) {
          var imgURI = song.image;
          //TODO: use CONSTANTS, BUT got undefined when I tried.. :(
          song.image = 'http://localhost:3001/' + imgURI;
        });
    },
    function() {
      console.log('in error...');
      $scope.inError=true;
    });

  $scope.getSpecificSong = function(songName) {
    Music.get(songName, function(successAnswer) {
      $cookies.music = successAnswer.data;
      //$window.location.href = pathIWant;
      $cookies.music.image = 'http://localhost:3001/' + $cookies.music.image;
      $location.url('/musicPlayer');
    }, function() {
      console.log('in error :((');
    });
  };
    // default view is cards
    $scope.mode = 2;






  }]);
