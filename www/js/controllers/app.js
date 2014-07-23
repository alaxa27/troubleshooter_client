troubleshooter.controller('AppCtrl', function($scope, $rootScope, $ionicModal, $timeout, FlashService) {
  $rootScope.rootData = {
    'apiUrl' : "http://localhost:1337/api"
    , 'flash': ''
    , 'Modal': {
        'isShown': false
    }
  };
  // Form data for the login modal
  $scope.loginData = {};
  $scope.currentUser = false;
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.LoginModal = modal;
  });
  // When modal is closed
  $scope.$on('modal.hidden', function() {
    $rootScope.rootData.Modal.isShown = false;
  });

  // Triggered in the login modal to close it
  $scope.closeLoginModal = function() {
    $scope.LoginModal.hide();
  },

  // Open the login modal
  $scope.openLoginModal = function() {
    $scope.LoginModal.show();
    $rootScope.rootData.Modal.isShown = true;
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    if ($scope.loginData.username == $scope.loginData.password) {
        $timeout(function() {
          $scope.closeLoginModal();
          $scope.loginData.username = '';
          $scope.loginData.password = '';
          FlashService.show("Succesfully logged in.", "success", 2000);
        }, 1000);
        $scope.currentUser = true
    } else {
        FlashService.show("Incorrect username/password", "error", 2000); 
        $scope.loginData.username = '';
        $scope.loginData.password = '';
    }
  };

  $scope.doLogout = function() {
    $scope.currentUser = false;
    FlashService.show("Successfully logged out.", "success", 2000);
  };
});


