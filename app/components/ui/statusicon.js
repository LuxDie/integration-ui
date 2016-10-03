'use strict';

/**
 * @ngdoc directive
 * @name crossoverTestApp.directive:statusIcon
 * @description
 * # statusIcon
 */
angular.module('crossoverTestApp')
  .directive('statusIcon', function () {
    return {
      template: '<span class="text-{{contextClass}}"><span class="glyphicon glyphicon-{{icon}}"></span> {{text}}</span>',
      restrict: 'E',
      scope: true,
      link: function postLink(scope, element, attrs) {
        let code = +attrs.code;
        if (attrs.type === 'progress-bars') {
          if (code === 0) {
            return;
          }
          scope.icon = scope.statuses[code].icon.full;
        } else if (attrs.type === 'test-results') {
          scope.icon = scope.statuses[code].icon.square;
        } else {
          if (attrs.type === 'status') {
            scope.text = scope.statuses[code].text;
          }
          if (attrs.type === 'build') {
            scope.icon = scope.statuses[code].icon.folder;
          } else {
            scope.icon = scope.statuses[code].icon.small;
          }
        }
        scope.contextClass = scope.statuses[code].context;
      }
    };
  });
