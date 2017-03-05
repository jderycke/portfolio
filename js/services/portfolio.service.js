(function () {
    'use strict';

    function portfolioSrvc($http, $log) {

        function loadFeed(successHandler) {
            var url = './js/data/portfolio.min.json';

            $http.get(url, {headers: {'Content-Type': 'text/plain'}, cache: true}).then(function (response) {
                successHandler(response.data);
            }, function (response) {
                $log.error(response);
            });
        }

        return {
            loadFeed: loadFeed
        };
    }

    angular
        .module('portfolioApp.services')
        .factory('portfolioSrvc', portfolioSrvc);

})();
