var app = angular.module("TeamManager", ['ui.router'])
	     .controller('MainController', MainController);
		 //.controller('TestController' TestController);
		 
app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', URL.home);
    $urlRouterProvider.when('/', URL.home);
    $urlRouterProvider.otherwise(URL.home);

    $stateProvider
            .state('home', {
                url: URL.home,
                templateUrl: templateUrls.home
            })
            .state('register', {
                url: URL.register,
                templateUrl: templateUrls.register
            });
});

var URL = {
    home: '/home',
    register: '/register'
};

var templateUrls = {
    home: 'index-02.html',
    register: 'member-register.html'
};