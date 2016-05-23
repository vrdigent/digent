'use strict';
(function(){

class BookingComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('dgentApp.booking')
  .component('booking', {
    templateUrl: 'app/components/booking/booking.html',
    controller: BookingComponent
  });

})();
