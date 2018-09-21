var app = angular.module('tanerApp', []);

app.controller('ajaxController', ['$scope', '$http', function ($scope, $http) {

    $scope.loadDataPromise = function () {

        $http.get("data.json").then(function (response) {
            console.log("Status: " + response.status);
            console.log("Type: " + response.headers("content-type"));
            $scope.products = response.data;

        });
        $scope.sortField = 'Category';
        $scope.reverse = true;

    }

}]);