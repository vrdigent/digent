'use strict';

angular.module('dgentApp.booking', [])
  .config(function ($stateProvider) {
    $stateProvider
      .state('booking', {
        url: '/booking',
        template: '<booking></booking>'
      });
  });
