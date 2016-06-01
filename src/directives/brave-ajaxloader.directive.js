(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app [brave.ajaxloader]
   * @description braveAjaxloader directive
   */
  angular
    .module('brave.ajaxloader')
    .directive('braveAjaxloader', function () {
      return function ($scope, element) {
        $scope.$on('braveAjaxloader:show', function () {
          return element.show();
        });
        return $scope.$on('braveAjaxloader:hide', function () {
          return element.hide();
        });
      };
    });

})();
