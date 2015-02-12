'use strict';

/**
 * @ngdoc function
 * @name hlApp.controller:SubscribersCtrl
 * @description
 * # SubscribersCtrl
 * Controller of the hlApp
 */
angular.module('hlApp')
  .controller('SubscribersCtrl', [
    '$scope', '$http', '$modal',
    function ($scope, $http, $modal) {

      $scope.gridOptions = {
        data: 'subscribers',
        showGroupPanel: true,
        enableCellSelection: true,
        enableRowSelection: false,
        enableCellEdit: true,
        columnDefs: [
          {field: 'no', displayName: 'No.'},
          {field: 'name', displayName: 'Name'},
          {field: 'userType', displayName: 'Subs Type'},
          {field: 'loyalty', displayName: 'Loyalty Score'},
          {field: 'joinDate', displayName: 'Date Joined'}
        ]
      };

      $http.get('http://localhost:9000/subscribers.json')
        .success(function (data
          //, status, hdrs, cfg
          ) {

          $scope.subscribers = data;

        })
        .error(function (data
          //, status, hdrs, cfg
          ) {

          console.error("no http response", data);
        });

      $scope.showModal = function() {

        $scope.newUser = {};
        var modalInstance = $modal.open(
          {
            templateUrl: 'views/add-user.html',
            controller: 'AddNewUserCtrl',
            resolve: {
              newUser: function() {
                return $scope.newUser;
              }
            }
          }
        );

        // NOTE: it looks as if we could use this fn's
        //       param instead of passing and getting
        //       back the newUser object. Both approaches
        //       would seem to work, although only the
        //       current one has been tested.
        modalInstance.result.then(function (
          //selectedItem
        ) {

          $scope.subscribers.push({
            no: $scope.subscribers.length + 1,
            name: $scope.newUser.name,
            userType: $scope.newUser.userType,
            loyalty: $scope.newUser.loyalty,
            joinDate: $scope.newUser.joinDate
          });
        });
      };
  }])
  .controller('AddNewUserCtrl', [ '$scope', '$modalInstance', 'newUser', function($scope, $modalInstance, newUser) {

    $scope.newUser = newUser;

    $scope.saveNewUser = function() {

      $modalInstance.close(newUser);
    };

    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
    };
  }]);
