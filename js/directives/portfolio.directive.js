/**
 * @ngdoc directive
 * @name myprofile.directives.directive:msmChallengeContainer
 *
 * @description
 * Directive behind the Challenge Container component. Contains the functionality required to challenge the user to ensure
 * that they are indeed the person who completed the enquiry they are trying to access.
 */

(function (directives) {
    'use strict';

    directives.directive('work', ['$timeout', 'portfolioSrvc',
        function ($timeout, portfolioSrvc) {
            return {
                restrict : 'A',
                link : function ($scope, $element, $attrs) {
                    var timeoutHandle;
                    $scope.results = [];
                    $scope.waiting = true;

                    if (timeoutHandle) {
                        $timeout.cancel(timeoutHandle);
                    }

                    timeoutHandle = $timeout(
                        portfolioSrvc.loadFeed().then(
                            function (data) {
                                $scope.results = data.items;
                                $scope.waiting = false;
                            }
                        ),
                        3000
                    );

                    var unbindDestroy = $scope.$on('$destroy', function destroyPortfolio() {
                        if (timeoutHandle) {
                            $timeout.cancel(timeoutHandle);
                        }
                        unbindDestroy();
                    });
                }
            };
        }]);
}(angular.module('portfolioApp.directives')));
