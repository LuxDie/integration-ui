'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'angularMoment',
  'myApp.runList',
  'myApp.dataSource'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
    .when('/run-list', {
      templateUrl: 'run-list/run-list.html',
      controller: 'RunListCtrl',
      resolve: {
          runs: ['dataSource', function(dataSource) { return dataSource.getRuns(); }]
        }
    })
    .otherwise({redirectTo: '/run-list'});
}]);
