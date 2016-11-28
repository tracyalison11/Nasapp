'use strict';

describe('nasApp.version module', function() {
  beforeEach(module('nasApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
