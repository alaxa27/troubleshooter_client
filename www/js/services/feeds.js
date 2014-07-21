troubleshooter.factory('GETFeeds', function($resource, $rootScope) {
    return $resource($rootScope.apiUrl + '/feeds');
});

