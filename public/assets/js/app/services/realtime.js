define(['angular', 'app', 'socket-io'], function (angular, app, io) {
	return app.service('realtimeService', ['$rootScope', function($rootScope) {
		var socket = io.connect();
	}]);
});