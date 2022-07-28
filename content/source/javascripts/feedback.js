
(function() {

  var feedbackController = function($scope, $firebaseObject, $firebaseAuth, firebaseUrl) {
    var ref = new Firebase(firebaseUrl);

    $scope.feedback = {}

    var auth = $firebaseAuth(ref);

    var login = function() {
      $scope.authData = null;
      $scope.error = null;

      auth.$authAnonymously().then(function(authData) {
        $scope.authData = authData;
        var syncObject = $firebaseObject(ref.child("feedback/" + authData.uid));
        syncObject.$bindTo($scope, "feedback");
        $scope.date = new Date();
      }).catch(function(error) {
        $scope.error = error;
      });
    };

    login()
  };

  angular.module('feedback', [])
    .controller('feedbackController', feedbackController);

})();
