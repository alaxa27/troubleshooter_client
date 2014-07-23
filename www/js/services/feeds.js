troubleshooter.factory('GETFeeds', function($resource, $rootScope) {
    return $resource($rootScope.rootData.apiUrl + '/feeds');
});

