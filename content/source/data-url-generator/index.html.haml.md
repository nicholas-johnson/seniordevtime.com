
  %h1 Data URL Generator
  
  :markdown
    Data URLS allow you to embed images directly into your web page or email. Use this form to convert your image into a data url.
  
  %canvas
  
  %script
    :plain
      /*jslint browser: true*/
  
      var myApp = angular.module('myApp', [])
        .controller('imageResizerController', function (imageCanvas, $scope) {
          $scope.setImageSrc = function() {
            image.src = $scope.image.inputDataUrl;
          }
          $scope.redraw = function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(
              image,
              $scope.image.x * canvas.width,
              $scope.image.y * canvas.height,
              $scope.image.zoom * image.width,
              $scope.image.zoom * image.height
            );
            $scope.image.outputDataUrl = canvas.toDataURL();
          };
  
          $scope.image = {
            zoom: 1,
            x: 0,
            y: 0,
            inputDataUrl: ""
          };
          var context = imageCanvas.init();
          var canvas = imageCanvas.canvas;
          var image = new Image();
          $scope.setImageSrc();
          image.onload = function () {
            $scope.redraw();
          };
  
          $scope.$watch('image.inputDataUrl', $scope.setImageSrc);
          $scope.$watch('image.inputDataUrl', $scope.redraw);
        })
        .service('imageCanvas', function () {
          return {
            init: function () {
              this.canvas = document.getElementById('image-canvas');
              this.context = this.canvas.getContext('2d');
              return this.context;
            }
          };
        })
        .directive("toDataUrl", [function () {
          return {
            link: function (scope, element, attributes) {
              element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (event) {
                  scope.$apply(function () {
                    scope.image.inputDataUrl = event.target.result;
                  });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
              });
            }
          }
        }]);
  