(function () {
    'use strict';

    function config($animateProvider, $locationProvider, $compileProvider, $httpProvider, $sceProvider) {
        $locationProvider.html5Mode(true);

        $compileProvider.debugInfoEnabled(true); //TODO environment configuration for this

        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $httpProvider.defaults.withCredentials = false;

        //selectively enable $animation by adding class 'enable-ng-animate'
        $animateProvider.classNameFilter(/enable-ng-animate/);

        $sceProvider.enabled(false);
    }

    angular.module('portfolioApp', [
        'duScroll',
        'ngSanitize',
        'portfolioApp.services',
        'portfolioApp.directives',
		'portfolioApp.controllers'
    ])
    .config(config);

})();
