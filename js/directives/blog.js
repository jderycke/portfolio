/**
 * @ngdoc directive
 * @name myprofile.directives.directive:msmChallengeContainer
 *
 * @description
 * Directive behind the Challenge Container component. Contains the functionality required to challenge the user to ensure
 * that they are indeed the person who completed the enquiry they are trying to access.
 */

(function(directives) {
    'use strict';

    directives.directive('blog',
        function ($timeout, blogFeedSrvc) {
            return {
                restrict : 'A',
                link : function($scope, $element, $attrs) {
					$scope.showBlogWaiting = true;

			        $timeout(
						blogFeedSrvc.loadFeed().then(
							function (data) {
								$scope.predicate = 'datePublished';
								$scope.feed = {
									items: data.responseData.feed.entries
								};
								$scope.showBlogWaiting = false;
							}
						)
					, 3000);
                }
            };
        }
    );
})(angular.module('portfolioApp.directives'));
