(function () {
	'use strict';
	var portfolioApp = angular.module('portfolioApp', ['duScroll']);

    portfolioApp.directive('scroll', function ($window) {
        return function(scope, element, attrs) {
            var headerHeight = angular.element('header').height();
            scope.showScrollUp = false;
            scope.pinHeader = false;

            angular.element($window).bind("scroll", function() {
                if ($(this).scrollTop() > (headerHeight * 2)) {
                    scope.showScrollUp = true;
                    scope.pinHeader = true;
                } else {
                    scope.showScrollUp = false;
                    scope.pinHeader = false;
                }
                scope.$apply();
            });
        };
    });
    
    portfolioApp.directive('lazy', function($timeout) {
        return {
            restrict: 'C',
            link: function (scope, elm) {
                $timeout(function() {
                    $(elm).lazyload({
                        effect: 'fadeIn',
                        effectspeed: 500,
                        'skip_invisible': false
                    });
                }, 0);
            }
        };
    });
    
	portfolioApp.controller('PortfolioCtrl', function ($q, $scope, $http, $timeout, $document) {
        $scope.showNavMenu = false;
        $scope.showWaiting = true;
        $scope.showModal = false;
		$scope.isPinned = false;
        $scope.results = [];
        $scope.result = null;
		
		/* -- Menu ----------------------------------------------------- */
        $scope.toggleMenu = function (e) {
            $scope.showNavMenu = !$scope.showNavMenu;
			e.preventDefault();
		};
        
        $scope.goToPage = function (e, id, duration) {
            angular.element('.menu a').removeClass();
            $(e.target).parent().addClass('active');
            $document.scrollToElement(angular.element(id), 0, duration === undefined ? 1400 : duration);
			e.preventDefault();
		};

		/* -- Load Photos --------------------------------------------------------------- */
		$scope.loadPhotos = function () {
			var deferred = $q.defer();
			$http.get('./js/data/portfolio.json?v=2')
			.success(function (data) {
				 deferred.resolve(data);	
			})
			.error(function () {
				deferred.reject();
			});
			return deferred.promise;
		};
		
        var photos = function () { 
            $scope.loadPhotos().then(
                function (data) {
                    $scope.results = data.items;
                    $scope.predicate = 'name';
                    $scope.showWaiting = false;
                }
            );
        };
        $timeout(photos, 2500);
        
        $scope.getPhoto = function(e, item) {
            $scope.showModal = true;
            $scope.result = item;
            e.preventDefault();
        };
        
        $scope.closeModal = function(e) {
            $scope.showModal = false;
            $scope.goToPage(e, '#work', 400);
        };

		/* -- 3rd Party setup --------------------------------------------------------------- */
        $('#portfolio').mixitup({
            targetSelector: '.item',
            transitionSpeed: 450
		});
	});
})();