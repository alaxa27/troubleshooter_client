troubleshooter.controller('FeedsCtrl', function($scope, GETFeeds) {
    $scope.limChar = 140; //onClick on div, change value gonna be tough ugh!
    $scope.feeds = GETFeeds.query();
 });
