requirejs.config({
	shim:{
		'angular': {
			exports:'angular'
		},
		'angular-mobile': ['angular'],
		'angular-resource':['angular'],
		'angular-ui-sortable':['jquery', 'jquery-ui'],
		'socket-io': {
			exports: 'io'
		}
	},
	paths:{
		lib:'../third-party',
		angular:'../third-party/angular.min',
		jquery:'../third-party/jquery-2.0.3.min',
		'jquery-ui': '../third-party/jquery-ui-1.10.3.custom.min',
		'angular-mobile':'../third-party/angular-mobile.min',
		'angular-resource':'../third-party/angular-resource.min',
		'angular-ui-sortable':'../third-party/angular-ui-sortable',
		'socket-io':'/socket.io/socket.io'
	}
});


requirejs(['jquery','app','angular','load'],function ($,app,angular) {
	$(document).ready(function () {
		var $html = $('body');
		angular.bootstrap($html, [app['name']]);
		// Because of RequireJS we need to bootstrap the app app manually
		// and Angular Scenario runner won't be able to communicate with our app
		// unless we explicitely mark the container as app holder
		// More info: https://groups.google.com/forum/#!msg/angular/yslVnZh9Yjk/MLi3VGXZLeMJ
		$html.addClass('ng-app');
	});
});