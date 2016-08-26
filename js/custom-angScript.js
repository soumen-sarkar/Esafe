// create the module and name it scotchApp
    var singlePageApp = angular.module('singlePageApp', ['ngRoute']); 

// configure our routes
	singlePageApp.config(function($routeProvider) {
		$routeProvider
			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})
			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})
            // route for the Meet our Team page
			.when('/meetOurTeam', {
				templateUrl : 'pages/meetOurTeam.html',
				controller  : 'meetOurTeamController'
			})
            // route for the Field Evaluation page
			.when('/fieldEvaluation', {
				templateUrl : 'pages/fieldEvaluation.html',
				controller  : 'fieldEvaluationController'
			})
            // route for the Blog page
			.when('/blog', {
				templateUrl : 'pages/blog.html',
				controller  : 'blogController'
			})
            // route for the Blog article page
			.when('/blogArticle', {
				templateUrl : 'pages/blogArticle.html',
				controller  : 'blogArticleController'
			})
			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})
            // route for the application online page
			.when('/applicationOnline', {
				templateUrl : 'pages/applicationOnline.html',
				controller  : 'applicationOnlineController'
			})
            // route for the Privacy page
			.when('/privacy', {
				templateUrl : 'pages/privacy.html',
				controller  : 'privacyController'
			})
            .otherwise({
                template : '<div class="container bannerWide"><div class="row"><div class="col-sm-12"><dl class="pageHeadingBanner"><dt><div class="titleWithBrd"><h1>Page not found</h1></div></dt><dd><img src="img/bannerImages/banner-about-esafe.jpg" class="img-responsive center-block"></dd></dl></div></div></div>'
            });
	});

	// create the controller and inject Angular's $scope
	singlePageApp.controller('mainController', function($scope) {
		//$scope.message = 'Everyone come and see how good I look!';
	});

	singlePageApp.controller('aboutController', function($scope) {
		//$scope.message = 'Look! I am an about page.';
	});

    singlePageApp.controller('meetOurTeamController', function($scope) {
		//$scope.message = 'Look! I am an about page.';
	});

    singlePageApp.controller('fieldEvaluationController', function($scope) {
		//$scope.message = 'Look! I am an about page.';
	});

	singlePageApp.controller('contactController', function($scope) {
		//$scope.message = 'Contact us! JK. This is just a demo.';
	});

    singlePageApp.controller('blogController', function($scope) {
		//$scope.message = 'Contact us! JK. This is just a demo.';
	});
    
    singlePageApp.controller('blogArticleController', function($scope) {
		//$scope.message = 'Contact us! JK. This is just a demo.';
	});

    singlePageApp.controller('applicationOnlineController', function($scope) {
		//$scope.message = 'Contact us! JK. This is just a demo.';
	});

    singlePageApp.controller('privacyController', function($scope) {
		//$scope.message = 'Contact us! JK. This is just a demo.';
	});