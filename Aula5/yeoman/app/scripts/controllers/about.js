'use strict';

/**
 * @ngdoc function
 * @name cursoAngularjsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cursoAngularjsApp
 */
angular.module('cursoAngularjsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
