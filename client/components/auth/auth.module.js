'use strict';

angular.module('dgentApp.auth', [
  'dgentApp.constants',
  'dgentApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
