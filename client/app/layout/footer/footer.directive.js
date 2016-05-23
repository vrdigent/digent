'use strict';

angular.module('dgentApp')
  .directive('footer', function() {
    return {
      templateUrl: 'app/layout/footer/footer.html',
      restrict: 'E',
      link: function(scope, element) {
        element.addClass('footer');
      }
    };
  });
