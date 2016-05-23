'use strict';

angular.module('dgentApp')
  .directive('navbar', () => ({
    templateUrl: 'app/components/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  }));
