'use strict';

angular.module('dgentApp.featuresdemo')
  .config(function ($stateProvider) {
    $stateProvider
      .state('featuresdemo', {
        url: '/features',
        template: '<featuresdemo></featuresdemo>'
      });
  });
