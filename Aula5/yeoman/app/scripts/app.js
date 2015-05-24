'use strict';

/**
 * @ngdoc overview
 * @name cursoAngularjsApp
 * @description
 * # cursoAngularjsApp
 *
 * Main module of the application.
 */
angular
  .module('cursoAngularjsApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
