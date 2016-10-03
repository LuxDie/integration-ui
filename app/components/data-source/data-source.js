'use strict';

angular.module('myApp.dataSource', [])
  .factory('dataSource', function ($http) {

    let apiUrlBase = 'components/data-source/mock-data/',
      runsUrl = 'runs.json';

    return {
      getRuns() {
        return $http.get(apiUrlBase + runsUrl).then(response => {
          return response.data;
        });
      }
    };
  });
