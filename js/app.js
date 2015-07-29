(function () {
	'use strict';
    
	var app = angular.module('portfolioApp', []);
    
    app.directive('scroll', function ($window) {
        return function(scope, element, attrs) {
            
            var sections = angular.element('.page');
            
            angular.element($window).bind('scroll', function() {
                
                var currentScroll = this.pageYOffset,
                    currentSection,
                    id;
                    
                angular.forEach(sections, function (section, index) {
                    var divPosition = angular.element(section).offset().top;

                    if (divPosition - 1 < currentScroll) {
                        currentSection = angular.element(section);
                    }

                    id = angular.element(currentSection).prop('id');
                    angular.element('a').removeClass('active');
                    angular.element('[href=#' + id + ']').addClass('active');
                });
                scope.$apply();
            });
        };
    });
    
    app.controller('SiteController', function ($scope, $window, $location) {
        angular.element('.toggle-nav').on('click', function () {
            angular.element('body').toggleClass('is-sidebar-expanded');
            return false;
        });
        
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
    });
    
	app.controller('PortfolioController', function ($scope, $q, $http, $timeout) {
        $scope.showWaiting = true;
        $scope.results = [];
        $scope.result = null;
		
		/* -- Load Photos --------------------------------------------------------------- */
		$scope.loadFeed = function () {
			var deferred = $q.defer();
            
			$http.get('./js/data/portfolio.js', {headers: {'Content-Type': 'text/plain'}})
			     .success(function (data) {
                    deferred.resolve(data);
                })
			     .error(function () {
				    deferred.reject();
                    $scope.showWaiting = false;
			    });
			return deferred.promise;
		};

        var feed = function () {
            $scope.loadFeed().then(
                function (data) {
                    $scope.results = data.items;
                    $scope.predicate = 'id';
                    $scope.showWaiting = false;
                }
            );
        };
        $timeout(feed, 2500);
	});
    
    app.controller('BlogFeedController', function ($scope, $q, $http, $timeout) {
        $scope.showWaiting = true;
        
        $scope.loadFeed = function () {
			var deferred = $q.defer(),
                url = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=JSON_CALLBACK&q=' + encodeURIComponent('http://blog.jamiederycke.me.uk/feed/');
            
            $http.jsonp(url).
                success(function (data) {
                    deferred.resolve(data);
                })
			    .error(function () {
				    deferred.reject();
                    $scope.showWaiting = false;
			    });
			return deferred.promise;
        };
        
        var feed = function () {
            $scope.loadFeed().then(
                function (data) {
                    $scope.predicate = 'datePublished';
                    $scope.feed = {
                        items: data.responseData.feed.entries
                    };
                    $scope.showWaiting = false;
                }
            );
        };
        $timeout(feed, 2500);
    });
})();