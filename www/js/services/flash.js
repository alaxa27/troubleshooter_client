troubleshooter.factory('FlashService', function ($rootScope, $timeout) {

    var clear = function(){
        $rootScope.rootData.flash = '';
        $rootScope.rootData.loading = false;
        return null;
        };
    return {
        show: function (message, type, timeout) {
            //Type can be: error, success, info
            //Type is used by the view to display the proper color
            var cssType;
            if (type == "error" ) {
                cssType = "assertive";
            } else if ( type == "success" ) {
                cssType = "balanced";
            } else if ( type == "info" ) {
                cssType = "positive";
            } else {
                console.log("Error: Wrong var type in FlashService call.");
            }
            $rootScope.rootData.loading = true;
            $rootScope.rootData.flash = {
                                'message': message
                                , 'type': cssType
                                };
            $timeout(function(){
                clear();
            }, timeout);
            return message;
        },
     
    };
});
