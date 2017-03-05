(function (directives) {
    'use strict';

    function work ($timeout, portfolioSrvc) {
        return {
            restrict : 'A',
            link : function ($scope, $element, $attrs) {
                var timeoutHandle;
                $scope.results = [];
                $scope.waitingWork = true;

                if (timeoutHandle) {
                    $timeout.cancel(timeoutHandle);
                }

                timeoutHandle = $timeout(
                    portfolioSrvc.loadFeed(function (response) {
                        $scope.results = response.items;
                        $scope.waitingWork = false;
                    }),
                    5000
                );

                var unbindDestroy = $scope.$on('$destroy', function destroyPortfolio() {
                    if (timeoutHandle) {
                        $timeout.cancel(timeoutHandle);
                    }
                    unbindDestroy();
                });
            }
        };
    };

    angular
        .module('portfolioApp.directives')
        .directive('work', work);

}());
