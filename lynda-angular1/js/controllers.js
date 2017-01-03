/**
Define a variable myApp as an Angular module
Normally we add our dependencies in the empty brackets
Name spacing: myApp is going to have all the code for our application.
This will protect our code and make sure no other script or module interfere with our applicaton.
*/
var artistControllers = angular.module('artistControllers', []);

/**
Now we'll create our controller, a piece of javascript code that controlls something
on our page. You can make different controllers to controll different parts of the application.
The controllers takes a name and binds it with a function, using the super variable $scope
  $scope is used to pass things from JavaScript to your application and back
  $http is included to let us access external data by using something called
  Service in Angular.
*/
artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  // on successfully retrieving data from data.json, make a function to store it
  $http.get('js/data.json').success(function(data) {
    // add the data from the file as an artist array
    $scope.artist = data;
    $scope.artistOrder = 'name';
  });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
  // on successfully retrieving data from data.json, make a function to store it
  $http.get('js/data.json').success(function(data) {
    // add the data from the file as an artist array
    $scope.artist = data;
    $scope.whichItem = $routeParams.itemId;

  });
}]);
