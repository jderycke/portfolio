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

    directives.directive('scroll', ['$window',
        function ($window) {
            return {
                restrict : 'A',
                link : function ($scope, $element, $attrs) {
                    var sections = angular.element(document.getElementsByClassName('page')),
                        windowEle = angular.element($window);

                    var windowScroll = windowEle.bind('scroll', function () {

                        var currentScroll = this.pageYOffset,
                            currentSection,
                            pageId,
                            homeHeight = angular.element(document.getElementById('home'))[0].offsetHeight;

                        angular.forEach(sections, function (section, index) {
                            var divPosition = angular.element(section).prop('offsetTop');

                            if (divPosition < currentScroll) {
                                var currentId = angular.element(section).prop('id');
                                currentSection = angular.element(document.getElementById(currentId));
                            }

                            if (currentSection) {
                                pageId = angular.element(currentSection).prop('id');
                            } else {
                                pageId = angular.element(sections[0]).prop('id');
                            }

                            angular.element(document.getElementsByClassName('nav__menu__link')).removeClass('nav__menu__link--active');
                            angular.element(document.querySelectorAll('[href="#' + pageId + '"]')).addClass('nav__menu__link--active');

                            angular.element(document.getElementsByClassName('page')).removeClass('active');
                            angular.element(currentSection).addClass('active');
                        });

                        if(currentScroll >= homeHeight) {
                            angular.element(document.getElementsByClassName('home')).removeClass('active');
                            angular.element(document.getElementsByClassName('btn__scroll--up')).addClass('show');
                            angular.element(document.getElementsByClassName('site-header')).addClass('site-header--scrolled');
                        } else {
                            angular.element(document.getElementsByClassName('home')).addClass('active');
                            angular.element(document.getElementsByClassName('btn__scroll--up')).removeClass('show');
                            angular.element(document.getElementsByClassName('site-header')).removeClass('site-header--scrolled');
                        }
                    });

                    $element.one('$destroy', function scrollDestroy() {
                        windowEle = off('scroll', windowScroll);
                    });
                }
            };
        }]);
}(angular.module('portfolioApp.directives')));
