(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app [brave.ajaxloader]
   * @description Global ajax preloader
   */
  angular
    .module('brave.ajaxloader', ['ngProgress'])
    .value('version', '1.0.3')
    .config(function ($httpProvider) {
      $httpProvider.interceptors.push('braveAjaxloaderHttpInterceptor');
    });
})();


