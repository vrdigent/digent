'use strict';

angular.module('dgentApp', [
  'dgentApp.auth',
  'dgentApp.admin',
  'dgentApp.constants',
  'dgentApp.featuresdemo',
  
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  
  'btford.socket-io',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
