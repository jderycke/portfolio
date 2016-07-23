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
    services.service('portfolioSrvc', ['$http', '$q',
        function ($http, $q) {
            this.loadFeed = function () {
                var deferred = $q.defer(),
                    url = './js/data/portfolio.min.js';

                $http.get(url, {headers: {'Content-Type': 'text/plain'}})
                    .success(function (response) {
                        deferred.resolve(response);
                    })
                    .error(function () {
                        deferred.reject();
                    });
                return deferred.promise;
            };
        }]);
}(angular.module('portfolioApp.services')));
