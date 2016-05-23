'use strict';

angular.module('dgentApp')
  .directive('oauthButtons', function() {
    return {
      templateUrl: 'app/components/oauth-buttons/oauth-buttons.html',
      restrict: 'EA',
      controller: 'OauthButtonsCtrl',
      controllerAs: 'OauthButtons',
      scope: {
        classes: '@'
      }
    };
  });
