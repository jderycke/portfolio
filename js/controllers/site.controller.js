/**
 * @ngdoc controller
 * @name myprofile.portfolioApp.controller:SiteCtrl
 *
 * @description
 * Main controller for My Profile pages
 */

(function () {
    'use strict';

    angular.module('portfolioApp.controllers').controller('SiteController', ['$scope', '$window',
        function ($scope, $window) {
            $scope.scrollTo = function (target, $event) {
                angular.element(document.getElementsByClassName('toggle-nav')).removeClass('active');
                angular.element($event.target.parentNode).addClass('active');

                angular.element('html,body').animate({
                    scrollTop: angular.element(document.getElementById(target)).offset().top
                }, 1400);

                $event.preventDefault();
            };

	        angular.element(document.querySelectorAll('[data-ga-category]')).on('click', function () {
	            var category = angular.element(this).attr('data-ga-category'),
	                action = angular.element(this).attr('data-ga-action'),
	                label = angular.element(this).attr('data-ga-label');

	            ga('send', '_trackEvent', category, action, label);
	        });
	    }]);
}());
