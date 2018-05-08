var mainApp = angular.module("mainApp", ['ngRoute']);
mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/aboutus', {
			templateUrl: 'aboutus.html',
		})
		.when('/viewStudents', {
			templateUrl: 'viewStudents.html',
			controller: 'StudentController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});


