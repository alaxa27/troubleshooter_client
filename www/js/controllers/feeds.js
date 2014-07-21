troubleshooter.controller('FeedsCtrl', function($scope, GETFeeds) {
    $scope.feeds = GETFeeds.query();
});
