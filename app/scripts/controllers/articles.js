'use strict';

/**
 * @ngdoc function
 * @name hlApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the hlApp
 */
angular.module('hlApp')
  .controller('ArticlesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.posts = [
      {
        title: 'Almonds are good for you',
        content: 'Almonds are great. Nam ut neque non odio tincidunt finibus. Fusce quis fringilla est. Pellentesque eget consequat risus. Vestibulum sagittis tempor tristique. Pellentesque interdum sapien eu cursus aliquam. Aliquam molestie, urna ut interdum vulputate, mi ante vestibulum massa, ut convallis risus nisl vitae lorem. Vestibulum efficitur, leo id egestas fermentum, ex dui pulvinar velit, a egestas orci justo sit amet tellus. Nam venenatis vestibulum lorem quis blandit. Sed augue velit, porta laoreet nibh a, tincidunt suscipit tellus.'
      },
      {
        title: 'Coffee',
        content: 'Drink more coffee. Quisque in maximus lorem. Vivamus consequat malesuada est, nec egestas nisi interdum eu. Quisque vehicula accumsan magna, vitae bibendum tortor pretium ac. Nulla nec porta nunc. Sed faucibus, ligula ac tempor efficitur, mauris urna porttitor ex, non egestas erat mauris in sapien. Vivamus rhoncus feugiat turpis, sit amet ullamcorper quam molestie vel. Donec dapibus est non turpis ultrices fermentum. '
      },
      {
        title: 'Less carbs',
        content: 'Eat less carbs. Donec a euismod purus. Proin laoreet placerat pharetra. Vestibulum vitae elit sem. Aliquam quis augue dolor. Quisque in arcu mi. Phasellus sagittis tellus id sem scelerisque blandit. Morbi et orci ac felis bibendum aliquam in vitae metus. Nullam ultricies eros ac diam ultricies sodales et id justo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sit amet tempor dolor. '
      }

    ];
  });
