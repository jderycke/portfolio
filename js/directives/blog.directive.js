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

    directives.directive('blog', ['$timeout', 'blogFeedSrvc',
        function ($timeout, blogFeedSrvc) {
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
						blogFeedSrvc.loadFeed().then(
							function (data) {
								$scope.feed = {
									items: data.responseData.feed.entries
								};
                                $scope.waiting = false;
							}
                        ),
                        3000
                    );

                    var unbindDestroy = $scope.$on('$destroy', function destroylog() {
                        if (timeoutHandle) {
                            $timeout.cancel(timeoutHandle);
                        }
                        unbindDestroy();
                    });
                }
            };
        }]);
}(angular.module('portfolioApp.directives')));
