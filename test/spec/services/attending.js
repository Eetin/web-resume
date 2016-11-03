'use strict';

describe('Service: attending', function () {

  // load the service's module
  beforeEach(module('resumeApp'));

  // instantiate service
  var attending;
  beforeEach(inject(function (_attending_) {
    attending = _attending_;
  }));

  it('should do something', function () {
    expect(!!attending).toBe(true);
  });

});
