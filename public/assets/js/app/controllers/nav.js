define(['angular', 'app'], function(angular, app) {
	return app.controller('navController',['$scope','$rootScope',function ($scope, $rootScope) {
		__constructor__ = function () {
			$scope.shown = 'c';
		};

		$scope.showView = function (view) {
			$rootScope.$broadcast('viewChange',view);
			switch (view) {
				case 'c':
					$scope.shown = 'c';
					break;
				case 'a':
					$scope.shown = 'a';
					break;
				case 's':
					$scope.shown = 's';
					break;
				case '+':
					$scope.shown = '+';
					break;
				default:
					console.log("Showing View: " + view);
			}
		};

		__constructor__();
	}]);
});