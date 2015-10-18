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

    directives.directive('scroll', 
		function ($window) {
        	return function (scope, element, attrs) {

	            var sections = angular.element('.page');

	            angular.element($window).bind('scroll', function () {

	                var currentScroll = this.pageYOffset,
	                    currentSection,
	                    id;

	                angular.forEach(sections, function (section, index) {
	                    var divPosition = angular.element(section).offset().top;

	                    if (divPosition - 1 < currentScroll) {
	                        currentSection = angular.element(section);
	                    }

	                    id = angular.element(currentSection).prop('id');
	                    angular.element('a').removeClass('active');
	                    angular.element('[href=#' + id + ']').addClass('active');
	                });
	                scope.$apply();
	            });
	        };
	    }
	);
})(angular.module('portfolioApp.directives'));
