angular.module("dropdownMenu", [])
  .directive('dropdown', function() {
    directive = {
      scope: true,
      link: function($scope, el, attrs) {
        $scope.dropdown = {
          show: false
        }
        var showOrHide = function() {
          if ($scope.dropdown.show) {
            el.addClass('visible');
          } else {
            el.removeClass('visible');
          }
        }
        el.on('click', function(e) {
          e.preventDefault();
          $scope.dropdown.show = !$scope.dropdown.show;
        });
        $scope.$watch('dropdown.show', showOrHide);
      }
    };
    return directive;
  });
