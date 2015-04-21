/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('Apphasia', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "MainCtrl"})
    // Pages
    .when("/settings", {templateUrl: "partials/settings.html", controller: "MainCtrl"})
    .when("/responses", {templateUrl: "partials/responses.html", controller: "PageCtrl"})
    .when("/food", {templateUrl: "partials/food.html", controller: "PageCtrl"})
    .when("/medical", {templateUrl: "partials/medical.html", controller: "PageCtrl"})
    .when("/emotions", {templateUrl: "partials/emotions.html", controller: "PageCtrl"})
    .when("/hygiene", {templateUrl: "partials/hygiene.html", controller: "PageCtrl"})
    .when("/activities", {templateUrl: "partials/activities.html", controller: "PageCtrl"})
    .when("/custom", {templateUrl: "partials/custom.html", controller: "MainCtrl"})
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) 
{
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */)
{
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  });


});


/**
 * Controls the db
 */
app.controller('MainCtrl', function ($scope) 
{
    $scope.items = '';

    var initCallback = function()
    {
      getItems();
    };
 
    var messages = new IDBStore(
    {
      storeName: 'messages', 
      keyPath: 'id',
      autoIncrement: true,
      onStoreReady: function(){
        console.log('Store ready!');
        initCallback();
/*
        categories.clear();
        categories.batch(
          [
            { type: "put", value: {text: 'Responses'} },
            { type: "put", value: {text: 'Food and Drink'} },
            { type: "put", value: {text: 'Medical'} },
            { type: "put", value: {text: 'Emotions'} },
            { type: "put", value: {text: 'Hygiene'} },
            { type: "put", value: {text: 'Activities'} }
          ],
          getItems,
          errorCallback); */
      }
    });

    var getInitialCategories = function(data)
    {
      //messages.put({'text' : 'responses'},getItems,errorCallback); 
    };

    var getItemsSuccess = function(data)
    {
        $scope.items = data;
        $scope.$apply(); 
    };
 
    var errorCallback = function()
    {
        console.log('error'); 
    };
 
    var getItems = function()
    {
      messages.getAll(getItemsSuccess,errorCallback);
      console.log('getItems'); 
    };
 
    $scope.deleteItem = function(item)
    {
      messages.remove(item,getItems,errorCallback);
    }
 
    $scope.addItem = function()
    {
      messages.put({'text' : $scope.itemname},getItems,errorCallback); 
      $scope.itemname = ''; 
    };


});