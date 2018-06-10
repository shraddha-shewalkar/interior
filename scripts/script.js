  var mainApp = angular.module("mainApp", ['ngRoute']);
	mainApp.config(function($locationProvider, $routeProvider) {
	  $locationProvider.hashPrefix('');
	  $routeProvider
	    .when('/', {
	      templateUrl: '/view/home.html',
	    })
	    .when('/home', {
	      templateUrl: '/view/home.html',
	    })
	    .when('/about', {
	      templateUrl: '/view/about.html',
	    })
	    .when('/services', {
	      templateUrl: '/view/services.html',
	    })
	    .when('/ourteam', {
	      templateUrl: '/view/ourteam.html',
	    })
	    .when('/gallary', {
	      templateUrl: '/view/gallary.html',
	    })
	    .when('/contact', {
	      templateUrl: '/view/contact.html',
	    })
	    
	    .otherwise({
	      redirectTo: '/'
    });
});


