'use strict';

meanApp.controller('byeController', function($scope, byeFactory) {
    $scope.pageData = {};
    $scope.pageData = byeFactory.get().success(function(data) {
        $scope.pageData = data;
    });
});
