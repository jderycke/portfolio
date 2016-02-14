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
                    var sections = angular.element(document.getElementsByClassName('page'));

                    angular.element($window).bind('scroll', function () {

                        var currentScroll = this.pageYOffset,
                            currentSection,
                            pageId,
                            homeHeight = angular.element(document.getElementById('home'))[0].offsetHeight;

                        angular.forEach(sections, function (section, index) {
                            var divPosition = angular.element(section).prop('offsetTop');

                            if (divPosition - 1 < currentScroll) {
                                var currentId = angular.element(section).prop('id');
                                currentSection = angular.element(document.getElementById(currentId));
                            }

                            pageId = angular.element(currentSection).prop('id');
                            angular.element(document.getElementsByClassName('link')).removeClass('active');
                            angular.element(document.querySelectorAll('[href="#' + pageId + '"]')).addClass('active');
                        });

                        if(currentScroll >= homeHeight) {
                            angular.element(document.getElementsByClassName('scroll up')).addClass('show');
                            angular.element(document.getElementsByClassName('home-info-box')).removeClass('show');
                        } else {
                            angular.element(document.getElementsByClassName('scroll up')).removeClass('show');
                            angular.element(document.getElementsByClassName('home-info-box')).addClass('show');
                        }
                    });
                }
            };
        }]);
}(angular.module('portfolioApp.directives')));
