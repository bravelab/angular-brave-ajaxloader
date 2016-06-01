(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app [brave.ajaxloader]
   * @description braveAjaxloaderHttpInterceptor directive
   */
  angular
    .module('brave.ajaxloader')
    .factory('braveAjaxloaderHttpInterceptor', function ($q, $rootScope) {
      var numLoadings = 0;
      return {
        request: function (config) {
          numLoadings++;
          $rootScope.$broadcast('braveAjaxloader:show', {'numLoadings': numLoadings});
          return config || $q.when(config);
        },
        response: function (response) {
          if ((--numLoadings) === 0) {
            $rootScope.$broadcast('braveAjaxloader:hide', {'numLoadings': numLoadings});
          }
          return response || $q.when(response);
        },
        responseError: function (response) {
          if (!(--numLoadings)) {
            $rootScope.$broadcast('braveAjaxloader:hide', {'numLoadings': numLoadings});
          }
          return $q.reject(response);
        }
      };
    });

})();
