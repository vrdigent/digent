'use strict';

describe('Component: BookingComponent', function () {

  // load the controller's module
  beforeEach(module('dgentApp.booking'));

  var BookingComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    BookingComponent = $componentController('BookingComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
