(function (directives) {
    'use strict';

    function blog ($timeout, $log, blogFeedSrvc) {
        return {
            restrict : 'A',
            link : function ($scope, $element, $attrs) {
                var timeoutHandle;
                $scope.feed = [];
                $scope.waitingBlog = true;

                if (timeoutHandle) {
                    $timeout.cancel(timeoutHandle);
                }

		        timeoutHandle = $timeout(
                    blogFeedSrvc.loadFeed(function (response) {
                        angular.forEach(response, function(entry) {
                            entry.publishedDate = new Date(entry.date);
                            if (entry.thumbnail) {
                                entry.thumbnail = entry.thumbnail.split(',')[0].replace('500w', '');
                            }
                        });
                        $scope.feed = {
                            items: response
                        };
                        $scope.waitingBlog = false;
                    }),
                    5000
                );

                var unbindDestroy = $scope.$on('$destroy', function destroylog() {
                    if (timeoutHandle) {
                        $timeout.cancel(timeoutHandle);
                    }
                    unbindDestroy();
                });
            }
        };
    };

    angular
        .module('portfolioApp.directives')
        .directive('blog', blog);

}());
