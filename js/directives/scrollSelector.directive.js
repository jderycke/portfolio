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
                            id;

                        angular.forEach(sections, function (section, index) {
                            var divPosition = angular.element(section).offset().top;

                            if (divPosition - 1 < currentScroll) {
                                currentSection = angular.element(section);
                            }

                            id = angular.element(currentSection).prop('id');
                            angular.element(document.getElementsByClassName('link')).removeClass('active');
                            angular.element(document.querySelectorAll('[href="#' + id + '"]')).addClass('active');
                        });
                    });
                }
            };
        }]);
}(angular.module('portfolioApp.directives')));
