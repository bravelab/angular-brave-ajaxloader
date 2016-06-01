(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app [brave.ajaxloader]
   * @description braveAjaxloaderProgress directive
   */
  angular
    .module('brave.ajaxloader')
    .directive('braveAjaxloaderProgress', function (ngProgressFactory) {
      return function ($scope, element) {
        $scope.progressbar = ngProgressFactory.createInstance();
        $scope.$on('braveAjaxloader:show', function () {
          $scope.progressbar.start();
        });
        return $scope.$on('braveAjaxloader:hide', function () {
          $scope.progressbar.complete();
        });
      };
    });

})();
