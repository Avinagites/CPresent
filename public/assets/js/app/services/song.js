define(['angular', 'app'], function (angular, app) {
	return app.service('songService', ['$resource', '$http', function ($resource, $http) {
		var song = $resource('/songs/:id', {id: '@_id'});
		return {
			getAll: function () {
				return song.query();
			},

			get: function (songID, fn) {
				return song.get({id:songID}, fn);
			},

			edit: function (song) {
				song.$update();
			},

			create: function (song, fn) {
				$http.put('/songs', song);
			},

			remove: function (song) {
				song.$remove();
			}

		}
	}]);
});