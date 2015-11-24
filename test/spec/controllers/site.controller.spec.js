describe('Controller: SiteCtrl', function () {
    'use strict';

    var SiteCtrl,
        scope;

    beforeEach(function () {
        module('portfolioApp.controllers');

        inject(function ($controller) {
            scope = {};
            SiteCtrl = $controller('SiteCtrl', {
                $scope: scope
            });
        });
    });

    it('should exist', function () {
        expect(!!SiteCtrl).toBe(true);
    });
});

describe('Dependencies: portfolioApp', function () {
    'use strict';

    var module;
    beforeEach(function () {
        module = angular.module('portfolioApp');
    });

    it('should be registered', function () {
        expect(module).not.toEqual(null);
    });

    describe('Dependencies:', function () {
        var dependencies,
            hasModule = function (m) {
                return dependencies.indexOf(m) >= 0;
            };
        beforeEach(function () {
            dependencies = module.value('portfolioApp').requires;
        });

        it('should have portfolioApp.controllers as a dependency', function () {
            expect(hasModule('portfolioApp.controllers')).toEqual(true);
        });

        it('should have portfolioApp.directives as a dependency', function () {
            expect(hasModule('portfolioApp.directives')).toEqual(true);
        });

        it('should have portfolioApp.services as a dependency', function () {
            expect(hasModule('portfolioApp.services')).toEqual(true);
        });
    });
});

describe('Dependencies: portfolioApp.controllers', function () {
    'use strict';

    var module;
    beforeEach(function () {
        module = angular.module('portfolioApp.controllers');
    });

    it('should be registered', function () {
        expect(module).not.toEqual(null);
    });
});

describe('Dependencies: portfolioApp.directives', function () {
    'use strict';

    var module;
    beforeEach(function () {
        module = angular.module('portfolioApp.directives');
    });

    it('should be registered', function () {
        expect(module).not.toEqual(null);
    });

    describe('Dependencies:', function () {
        var dependencies,
            hasModule = function (m) {
                return dependencies.indexOf(m) >= 0;
            };
        beforeEach(function () {
            dependencies = module.value('portfolioApp.directives').requires;
        });

        it('should have portfolioApp.services as a dependency', function () {
            expect(hasModule('portfolioApp.services')).toEqual(true);
        });
    });
});

describe('Dependencies: portfolioApp.services', function () {
    'use strict';

    var module;
    beforeEach(function () {
        module = angular.module('portfolioApp.services');
    });

    it('should be registered', function () {
        expect(module).not.toEqual(null);
    });
});
