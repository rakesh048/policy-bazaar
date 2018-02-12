
var main_app = angular.module('App', ['ngMaterial','ngAria','ngAnimate','ngMessages','ngRoute','ngCookies','ServiceHTTP']);

main_app.config(['$locationProvider', '$routeProvider',function($locationProvider, $routeProvider) {

    $routeProvider.
    when('/', {
        templateUrl: "pages/home.html",
        controller: 'HomeController',
    }).
    when('/dashboard', {
        templateUrl: "pages/dashboard.html",
        controller: 'deashboardController',
    }).
    otherwise({ redirectTo: '/' });
}]);




