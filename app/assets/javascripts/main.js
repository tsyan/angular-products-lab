// TODO: Add angular application module and routes.

// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var StoreFront = angular.module('StoreFront',['ngRoute']);

StoreFront.config(['$routeProvider', function($routeProvider){
    // Default Route
    $routeProvider.otherwise({
        templateUrl: '../assets/mainIndex.html',
        controller: 'IndexCtrl'
    });
}]);
