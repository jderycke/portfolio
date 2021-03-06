(function () {
    'use strict';

    function siteController ($scope, $window, $document) {
        $scope.scrollTo = function (target, $event) {
            if ($event.target.tagName === 'SPAN') {
                angular.element($event.target.parentNode).addClass('nav__menu__link--active');
            } else {
                angular.element($event.target).addClass('nav__menu__link--active');
            }

            $document.scrollToElementAnimated(angular.element(document.getElementById(target)), 0, 1200);
            $event.preventDefault();
        };

        $scope.toggleMenu = function ($event) {
            angular.element(angular.element(document.getElementsByTagName('body'))).toggleClass('menu-active');
            $event.preventDefault();
        };

        angular.element(document.getElementsByClassName('blocker')).on('click', function () {
            angular.element(angular.element(document.getElementsByTagName('body'))).removeClass('menu-active');
        });

        angular.element(document.getElementsByClassName('nav__menu__link')).on('click', function () {
            angular.element(angular.element(document.getElementsByTagName('body'))).removeClass('menu-active');
        });

        angular.element(document.querySelectorAll('[data-ga-category]')).on('click', function () {
            var category = angular.element(this).attr('data-ga-category'),
                action = angular.element(this).attr('data-ga-action'),
                label = angular.element(this).attr('data-ga-label');

            ga('send', '_trackEvent', category, action, label);
        });
    };

    angular
        .module('portfolioApp.controllers')
        .controller('siteController', siteController);
}());
