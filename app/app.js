'use strict';

// Declare app level module which depends on views, and components
angular.module('nasApp', [
  'ngRoute',
  'nasApp.view1',
  'nasApp.view2',
  'nasApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
