var app = angular.module('newApp', []);

app.controller('MainCtrl', function($scope, $log) {
  $scope.name = 'Longlife';
  $scope.secondName = 'Learning!';
  console.log('Hello from console')
  $log.warn('Hello from log service')
});
