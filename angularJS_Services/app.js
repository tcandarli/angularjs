var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function ($scope, $log, $filter, $resource) {

    $scope.name = 'Taner';
    $scope.formattedName = $filter('uppercase')($scope.name);

    $log.info($scope.name);
    $log.info($scope.formattedName);


    console.log($resource);
    console.log($scope);
    console.log($log);
    $log.log("This an AngularJS log message.");
    $log.info("This is an information about log service");
    $log.warn("Warning!");
    $log.error("This is an error!");
    

});