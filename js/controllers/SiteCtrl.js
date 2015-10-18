/**
 * @ngdoc controller
 * @name myprofile.portfolioApp.controller:SiteCtrl
 *
 * @description
 * Main controller for My Profile pages
 */

(function () {
    'use strict';

    angular.module('portfolioApp.controllers')
        .controller('SiteCtrl', function ($scope, $window) {

			angular.element('.toggle-back').on('click', function () {
	            $window.history.back();
	            return false;
	        });

	        angular.element('a[href*=#]:not([href=#])').on('click', function () {
	            var target = angular.element(this.hash);
	            target = target.length ? target : $('[id=' + this.hash.slice(1) + ']');

	            if (target.length) {
	                angular.element('.active').removeClass('active');
	                angular.element(this).addClass('active');

	                angular.element('html, body').animate({scrollTop: target.offset().top}, 1000);

	                return false;
	            }
	        });

	        angular.element('[data-ga-category]').on('click', function () {
	            var category = angular.element(this).prop('data-ga-category'),
	                action = angular.element(this).prop('data-ga-action'),
	                label = angular.element(this).prop('data-ga-label');

	            ga('send', '_trackEvent', category, action, label);
	        });
	    }
	);
}());
