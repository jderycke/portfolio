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
					$element.addClass('waiting');

			        var timer = $timeout(
						blogFeedSrvc.loadFeed().then(
							function (data) {
								$scope.feed = {
									items: data.responseData.feed.entries
								};
								$element.removeClass('waiting');
							}
                        ),
                        3000
                    );

                    $scope.$on(
                        "$destroy",
                        function(event) {
                            $timeout.cancel(timer);
                        }
                    );

                }
            };
        }]);
}(angular.module('portfolioApp.directives')));
