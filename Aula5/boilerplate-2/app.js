var app = angular.module('app', ['ui.router']);

angular.module('app')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            controller: 'MainCtrl',
            templateUrl: 'templates/home.html'
        });
    });

angular.module('app')
    .controller('MainCtrl', function($scope) {

    });


angular.module('app')
    .controller('UserCtrl', function($scope) {

    });

