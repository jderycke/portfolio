(function () {
    'use strict';

    angular.module('portfolioApp.services', []);
    angular.module('portfolioApp.directives', ['portfolioApp.services']);
	angular.module('portfolioApp.controllers', []);
    angular.module('portfolioApp', [
        'portfolioApp.services',
        'portfolioApp.directives',
		'portfolioApp.controllers'
    ]);
})();
