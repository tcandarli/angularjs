var myApp = angular.module('myApp', []);

myApp.controller('mainController', function ($scope) {
   
    $scope.name = 'Taner Candarli';
    $scope.occupation = "Developer"

    $scope.getName = function() {
        return 'Zafer Candarli';
    }

    console.log($scope);


});