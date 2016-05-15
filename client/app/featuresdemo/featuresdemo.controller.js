'use strict';
(function () {

  class FeaturesdemoComponent {
    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('thing');
      });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', { name: this.newThing });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }

    $onInit() {
      this.$http.get('/api/things').then(response => {
        this.awesomeThings = response.data;
        this.socket.syncUpdates('thing', this.awesomeThings);
      });
    }
  }

  angular.module('dgentApp.featuresdemo')
    .component('featuresdemo', {
      templateUrl: 'app/featuresdemo/featuresdemo.html',
      controller: FeaturesdemoComponent
    });
})();
