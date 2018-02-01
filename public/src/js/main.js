var angularApp = angular.module('angularApp', []);

angularApp.controller('homeController', function($scope, $http){
    $http.get('/api/home').success(function (response) {
        $scope.homeData = response;
    });
});


