'use strict';


meanApp.controller('helloController', function($scope, helloFactory) {
    $scope.pageData = {};

    $scope.pageData = helloFactory.get().success(function(data) {
        $scope.pageData = data;
    });
});
