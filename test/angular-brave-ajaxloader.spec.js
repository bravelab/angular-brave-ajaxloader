(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name brave.ajaxloader
   * @description brave.ajaxloader tests
   *
   */
  describe('brave.ajaxloader module', function () {

    beforeEach(module('brave.ajaxloader'));

    describe('value - version', function () {
      it('should return current version', inject(function (version) {
        expect(version).toEqual('1.0.3');
      }));
    });

  });
})();

