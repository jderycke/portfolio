/**
 * @ngdoc service
 * @name myprofile.services.service:msmChallengeSrvc
 *
 * @description
 * This service has been created to wrap service calls relating to the Challenge Page.
 *
 **/

(function (services) {
    'use strict';
    services.service('blogFeedSrvc', function($http, $q) {
		this.loadFeed = function() {
            var deferred = $q.defer(),
				url = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=JSON_CALLBACK&num=9&q=' + encodeURIComponent('http://blog.jamiederycke.me.uk/feed/');

            $http.jsonp(url)
                .success(function(response) {
                    deferred.resolve(response);
                })
                .error(function(){
                    deferred.reject();
                });
            return deferred.promise;
        };
    });
})(angular.module('portfolioApp.services'));
