// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.htm',
            controller: 'haiController'
        })

        // nerds page that will use the NerdController
        .when('/play', {
            templateUrl: 'views/play.htm',
            controller: 'laskuController'
        });

    $locationProvider.html5Mode(true);

}]);