'use strict';

/**
 * @ngdoc overview
 * @name programmableWebApp
 * @description
 * # programmableWebApp
 *
 * Main module of the application.
 */
angular
  .module('programmableWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
