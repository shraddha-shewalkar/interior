  var App = angular.module("mainApp", ['ngRoute']);
	App.config(function($locationProvider, $routeProvider) {
	  $locationProvider.hashPrefix('');
	  $routeProvider
	    .when('/', {
	      templateUrl: '/view/home.html',
	    })
	    .when('/about', {
	      templateUrl: '/view/about.html',
	    })
	    .when('/gallary', {
	      templateUrl: '/view/gallary.html',
	    })
	    .when('/contact', {
	      templateUrl: '/view/contact.html',
	    })
	    .when('/ourteam', {
	      templateUrl: '/view/ourteam.html',
	    })
	    .otherwise({
	      redirectTo: '/'
    });
});


