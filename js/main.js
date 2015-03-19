/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('StrokerAir', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/settings", {templateUrl: "partials/settings.html", controller: "PageCtrl"})
    .when("/responses", {templateUrl: "partials/responses.html", controller: "PageCtrl"})
    .when("/food", {templateUrl: "partials/food.html", controller: "PageCtrl"})
    .when("/activities", {templateUrl: "partials/activities.html", controller: "PageCtrl"})
    .when("/medical", {templateUrl: "partials/medical.html", controller: "PageCtrl"})
    .when("/conversation", {templateUrl: "partials/conversation.html", controller: "PageCtrl"})
    .when("/custom", {templateUrl: "partials/custom.html", controller: "PageCtrl"})
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);
