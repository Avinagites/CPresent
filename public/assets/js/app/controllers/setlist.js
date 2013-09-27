define(['angular', 'app'], function(angular, app) {
	return app.controller('setlistController',['$rootScope','$scope', function ($rootScope, $scope) {
		__constuctor__ = function () {
			$scope.setlist = new Array();
		};

		$rootScope.$on('addSongToSetList', function (event, data) {
			$scope.setlist.push(data);
		});

		__constuctor__();
	}]);
});