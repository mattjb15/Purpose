/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('Purpose', [
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

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});