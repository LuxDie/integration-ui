'use strict';

/**
 * @ngdoc directive
 * @name crossoverTestApp.directive:testResults
 * @description
 * # testResults
 */
angular.module('crossoverTestApp')
  .directive('testResults', function () {
    return {
      templateUrl: 'views/test-results.html',
      restrict: 'E',
      scope: {
        title: '=',
        suite: '=',
        statuses: '='
      }
    };
  });
