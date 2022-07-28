angular.module('stackExchange', [])
  .service('stackExchangeService', function ($http) {
    var service = {
      getUser: function (uid, callback) {
        var url = "http://api.stackexchange.com/2.2/users/" + uid + "?site=stackoverflow&callback=JSON_CALLBACK";
        $http.jsonp(url).success(callback);
      },
      getAnswers: function (uid, callback) {
        var url = "http://api.stackexchange.com/2.2/users/" + uid + "/answers?site=stackoverflow&callback=JSON_CALLBACK";
        $http.jsonp(url).success(callback);
      }
    };
    return service;
  })
  .controller('stackExchangeController', function ($scope, stackExchangeService) {
    var uid = 687677;
    stackExchangeService.getUser(uid, function (data) {
      $scope.user = data.items[0];
    });
    stackExchangeService.getAnswers(uid, function (data) {
      $scope.answers = data.items;
    });
  });
