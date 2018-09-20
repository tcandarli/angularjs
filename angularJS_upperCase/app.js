var app = angular.module('upper', []);

app.controller('upperCaseController', function ($scope, $filter) {
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.convertUpperCase = function () {
        return $filter('uppercase')($scope.firstName);
    }
});