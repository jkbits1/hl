'use strict';

/**
 * @ngdoc function
 * @name hlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hlApp
 */
angular.module('hlApp')
  .controller('MainCtrl', function ($scope) {
    //$scope.awesomeThings = [
    //  'HTML5 Boilerplate',
    //  'AngularJS',
    //  'Karma'
    //];

    var baseURL = 'http://lorempixel.com/960/450/';
    $scope.setInterval = 5000;

    $scope.slides = [
      {
        title: '7 ways',
        image:baseURL + 'sports/',
        text: 'get busy!'
      },
      {
        title: 'Healthy Food',
        image:baseURL + 'food/',
        text: 'food for you!'
      },
      {
        title: 'Relaxing holidays',
        image:baseURL + 'nature/',
        text: '10 places for walkers'
      }
    ];


    var baseURLContent = 'http://lorempixel.com/200/200/';

    $scope.content = [
      {
        image: baseURLContent + 'people',
        title: 'About Us',
        summary: 'we are the best'
      },
      {
        image: baseURLContent + 'business',
        title: 'Our Services',
        summary: 'we tell you what to do .. all the time!'
      },
      {
        image: baseURLContent + 'transport',
        title: 'Contact Us',
        summary: '#1 healthy street, north pole'
      }
    ];
  });
