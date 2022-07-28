angular.module('exercise', [])
  .directive('hiddenanswer', function () {
    var directive = {
      restrict: 'C',
      scope: true,
      transclude: true,
      template: `
        <div ng-show="!showAnswer">
          <a ng-click="showAnswer=true">Show Answer</a>
        </div>
        <div ng-show="showAnswer">
          <ng-transclude></ng-transclude>
        </div>`
    }
    return directive;
  });
