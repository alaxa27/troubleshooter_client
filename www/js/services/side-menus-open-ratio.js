troubleshooter.factory('SideMenusOpenRatioService', function($ionicSideMenuDelegate) {
    /////////////////////////////
    //This function is used to shorten the FlashService size bar
    $scope.ratio = $scope.$watch(function () {
        return $ionicSideMenuDelegate.getOpenRatio();
    },
    function (ratio) {
        if (ratio < 0) {
            //Right menu is open, then handle it:
        } else {
            //Left menu is open, then handle it:
        }
    });
});
