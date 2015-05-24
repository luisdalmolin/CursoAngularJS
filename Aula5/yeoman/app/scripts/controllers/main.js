'use strict';

/**
 * @ngdoc function
 * @name cursoAngularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cursoAngularjsApp
 */
angular.module('cursoAngularjsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
