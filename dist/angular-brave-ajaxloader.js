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
