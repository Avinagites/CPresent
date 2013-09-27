define(['angular', 'app'], function(angular, app) {
	return app.controller('songlistController',['songService','$rootScope','$scope', function ($songService, $rootScope, $scope) {
		/**
		 * @name __constructor__
		 * @description neatly house the controllers init
		 */
		__constructor__ = function () {
			// Grab Song List for UI
			$songService.getAll().$then(function(data) {
				$scope.songlist = data.data;
			});
		};

		$scope.addToSetList = function (song) {
			$rootScope.$broadcast('addSongToSetList', song);
		};

		__constructor__();
	}]);
});