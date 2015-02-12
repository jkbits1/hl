'use strict';

/**
 * @ngdoc function
 * @name hlApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the hlApp
 */
angular.module('hlApp')
  .controller('GalleryCtrl', function ($scope) {

    var pictures = $scope.pictures = [];

    var baseURL = "http://lorempixel.com/300/180/";

    var titles = ["Healthy Food", "Healthy @ Work", "City Life", "Staying Fit", "Looking Good", "Nightlife !!"];

    var keywords = ["food", "business", "city", "sports", "fashion", "nightlife"];

    var dummyText = "Nulla nec porta nunc. Sed faucibus, ligula ac tempor efficitur, mauris urna porttitor ex, non egestas erat mauris in sapien. Vivamus rhoncus feugiat turpis, sit amet ullamcorper quam molestie vel. Donec dapibus est non turpis ultrices fermentum.";

    $scope.rate = 0;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.addPics = function(i) {

      pictures.push(
        {
          url:      baseURL + keywords[i],
          title:    titles[i],
          summary:  dummyText
        }
      );
    };

    titles.forEach(function (value, index) {

      $scope.addPics(index);
    });

  });
