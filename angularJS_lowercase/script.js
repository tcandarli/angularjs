var app = angular.module('main', []);

app.controller('MainCtrl', function($scope, $filter) {
  $scope.name = '';
  $scope.phone = "555-55555";
  
  $scope.makeTheNameLowerCase = function(){
    return $filter('lowercase')($scope.name)
  }
});
