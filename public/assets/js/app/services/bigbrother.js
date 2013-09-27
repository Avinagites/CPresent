define(['angular','app'], function(angular, app) {
	app.service('bigbrotherService', ['$rootScope', function ($rootScope) {

		return {
			init: function () {
				$rootScope.songView = false;
				$rootScope.$on('viewChange', function(event, view) {
					switch(view) {
						case 'c':
							$rootScope.songView = false;
							break;
						case '+':
							$rootScope.songView = true;
							break;
					}
				});

				return $rootScope;
			}
		};
		
	}]);
});