define(['angular','app'], function (angular, app) {
	app.run(['bigbrotherService', function(bigbrother) {
		bigbrother.init();
	}]);
});