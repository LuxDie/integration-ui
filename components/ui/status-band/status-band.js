'use strict';

angular.module('myApp.ui.statusBand', [])
  .directive('statusBand', function () {
    return {
      template: '<div></div>',
      restrict: 'A',
      link: function postLink(scope, element) {
        element.addClass(scope.statuses[scope.run.status].context);
      }
    };
  });
