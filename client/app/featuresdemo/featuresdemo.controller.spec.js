'use strict';

describe('Component: FeaturesdemoComponent', function () {

  // load the controller's module
  beforeEach(module('dgentApp.featuresdemo'));

  var FeaturesdemoComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    FeaturesdemoComponent = $componentController('FeaturesdemoComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
