'use strict';

angular.module('dgentApp')
  .directive('navbar', () => ({
    templateUrl: 'app/layout/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  }));
