'use strict';

angular.module('myApp.ui.testResults', [])
  .directive('testResults', function () {
    return {
      templateUrl: 'components/ui/test-results/test-results.html',
      restrict: 'E',
      scope: {
        title: '=',
        suite: '=',
        statuses: '='
      }
    };
  });
