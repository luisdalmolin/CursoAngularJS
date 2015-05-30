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
        alert('ok');
    })

    .controller('UserCtrl', function($scope) {

    });




angular.module('app')
    .factory('GithubService', function() {
        return {

        };
    });
