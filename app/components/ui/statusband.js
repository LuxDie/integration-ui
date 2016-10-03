'use strict';

/**
 * @ngdoc directive
 * @name crossoverTestApp.directive:statusBand
 * @description
 * # statusBand
 */
angular.module('crossoverTestApp')
  .directive('statusBand', function () {
    return {
      template: '<div></div>',
      restrict: 'A',
      link: function postLink(scope, element) {
        element.addClass(scope.statuses[scope.run.status].context);
      }
    };
  });
