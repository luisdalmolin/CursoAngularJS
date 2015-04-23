(function() {
	var code = angular.module('code', []);

	code.filter('unsafe', function($sce, $filter) {
	    return function(val) {
	        return $sce.trustAsHtml(val);
	    };
	});
})();