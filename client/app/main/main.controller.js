'use strict';

(function () {

  class MainController {
    constructor() {
    }
  }

  angular.module('dgentApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });

})();
