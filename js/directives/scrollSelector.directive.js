(function (directives) {
    'use strict';

    function scroll ($window) {
        return {
            restrict : 'A',
            link : function ($scope, $element, $attrs) {
                var sections = angular.element(document.getElementsByClassName('page')),
                    windowEle = angular.element($window);

                var windowScroll = windowEle.bind('scroll', function () {

                    var currentScroll = this.pageYOffset,
                        currentSection,
                        pageId,
                        headerHeight = angular.element(document.getElementsByClassName('site-header'))[0].offsetHeight;

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

                        angular.element(document.getElementsByTagName('a')).removeClass('nav__menu__link--active');
                        angular.element(document.querySelectorAll('.nav__menu__link[href="#' + pageId + '"]')).addClass('nav__menu__link--active');

                        angular.element(document.getElementsByClassName('page')).removeClass('active');
                        angular.element(currentSection).addClass('active');
                    });

                    if(currentScroll >= headerHeight) {
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
    };
    
    angular
        .module('portfolioApp.directives')
        .directive('scroll', scroll);

}());
