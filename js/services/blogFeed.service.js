(function () {
    'use strict';

    function blogFeedSrvc($http, $sce, $log) {
        function loadFeed(successHandler) {
            var url = 'http://blog.jamiederycke.me.uk/feed/json';
            $sce.trustAsResourceUrl(url);

            /*$http.jsonp(url, {jsonpCallbackParam: 'callback'}).then(function (response) {
                successHandler(response.data);
            }, function (response) {
                $log.error(response);
            });*/

            $http.jsonp(url, {headers: {'Content-Type': 'text/plain'}, cache: true}).then(function(response) {
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
        .factory('blogFeedSrvc', blogFeedSrvc);

})();
