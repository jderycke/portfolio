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

    directives.directive('blog',
        function ($timeout, portfolioSrvc) {
            return {
                restrict : 'A',
                link : function($scope, $element, $attrs) {
					$scope.showWorkWaiting = true;
					$scope.results = [];
			        $scope.result = null;

			        $timeout(
						portfolioSrvc.loadFeed().then(
			                function (data) {
			                    $scope.results = data.items;
			                    $scope.predicate = 'id';
			                    $scope.showWorkWaiting = false;
			                }
			            )
					, 3000);
                }
            };
        }
    );
})(angular.module('portfolioApp.directives'));
