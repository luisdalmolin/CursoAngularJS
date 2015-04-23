(function() {
	var code = angular.module('code', []);

	code.filter('unsafe', function($sce, $filter) {
	    return function(val) {
	        return $sce.trustAsHtml(val);
	    };
	});

    code.directive('ngPrism', ['$interpolate', function ($interpolate) {
        return {
            restrict: 'E',
            template: '<pre><code ng-transclude></code></pre>',
            replace:true,
            transclude:true
        };
    }]);
})();