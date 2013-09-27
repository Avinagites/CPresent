define(function(require, exports, module) {
	exports = function () {
		//require('globals');
		require('services/main');
		require('controllers/main');
		require('directives/main');
		require('filters/main');
		require('config/main');
	};
});