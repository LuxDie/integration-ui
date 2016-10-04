'use strict';

angular.module('myApp.runList', ['myApp.dataSource', 'myApp.ui'])
  .controller('RunListCtrl', function ($scope, runs, statuses) {
    function passedPrct(passed, skipped) {
      let total = passed + skipped;
      if (total) {
        return Math.round(passed / total * 100);
      }
      return 0;
    }

    $scope.runs = runs;
    $scope.statuses = statuses;
    $scope.selected = null;

    $scope.runs.forEach((el) => {

      el.build.status = el.build.release.status || el.build.debug.status;
      el.status = el.functional.status || el.unit.status || el.build.status;
      if (el.status === 1) {
        el.status = 3;
      }

      el.unit.percent = passedPrct(el.unit.passed, el.unit.skipped);
      el.functional.percent = passedPrct(el.functional.passed, el.functional.skipped);

    });

    $scope.toggleOpen = (index) => {
      $scope.selected = index === $scope.selected ? null : index;
    };
  });
