angular.module('dashApp', [
	'ngRoute', 
	'appRoutes', 
	'MainCtrl', 
	'DashCtrl', 
	'DashService', 
	'ChartCtrl',
	'ChartService',
	'WidgetCtrl',
	'GeekCtrl', 
	'GeekService', 
	
// Modules
	'ui.bootstrap',
	'highcharts-ng',
	'gridster'
]);