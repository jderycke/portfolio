(function () {
	'use strict';
	var portfolioApp = angular.module('portfolioApp', []);

    portfolioApp.directive('lazy', function($timeout) {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                $timeout(function() {
                    angular.element(element).lazyload({
                        effect: 'fadeIn',
                        effectspeed: 500,
                        'skip_invisible': false
                    });
                }, 0);
            }
        };
    });
    
	portfolioApp.controller('PortfolioCtrl', function ($scope, $q, $http, $timeout) {
        $scope.showWaiting = true;
        $scope.results = [];
        $scope.result = null;
		
		/* -- Load Photos --------------------------------------------------------------- */
		$scope.loadPhotos = function () {
			var deferred = $q.defer();
			$http.get('./js/data/portfolio.json?v=8')
			.success(function (data) {
				 deferred.resolve(data);
			})
			.error(function () {
				deferred.reject();
                $scope.showWaiting = false;
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
        $timeout(photos, 2000);
        
        angular.element('#portfolio').mixItUp({
            animation: {
                effects: 'fade',
                duration: 450
            },
            selectors: {
                target: 'li'
            },
            load: {
                filter: 'all'
            }
        });
	});
    
    portfolioApp.controller('BlogFeedCtrl', function ($scope, $q, $http, $timeout) {
        $scope.showWaiting = true;
           
        $scope.loadFeed = function () {
			var deferred = $q.defer();
            var url = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=JSON_CALLBACK&q=' + encodeURIComponent('http://blog.jamiederycke.me.uk/feed/');
            $http.jsonp(url).
                success(function(data) {
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
        $timeout(feed, 1500);
    });
})();