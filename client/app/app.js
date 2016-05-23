'use strict';

angular.module('dgentApp', [
    'dgentApp.auth',
    'dgentApp.admin',
    'dgentApp.constants',

    'dgentApp.core'
  ])
  .config(function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
