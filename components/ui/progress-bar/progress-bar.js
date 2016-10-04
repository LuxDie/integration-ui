'use strict';

angular.module('myApp.ui.progressBar', [])
  .directive('progressBar', function () {
    return {
      templateUrl: 'components/ui/progress-bar/progress-bar.html',
      restrict: 'E',
      link: function postLink(scope) {
        function barWidth (status) {
          if (status === 0 || status === 1 || status === 3) {
            return 0;
          }
          if (status === 2) {
            return 50;
          }
          return 100;
        }

        scope.buildBar = {
          context: scope.statuses[scope.run.build.status].context,
          width: barWidth(scope.run.build.status)
        };

        scope.unitBar = {
          context: scope.statuses[scope.run.unit.status].context,
          width: barWidth(scope.run.unit.status)
        };
      }
    };
  });
