'use strict';

meanApp.controller('meanController', function($scope, $location) {
    $scope.siteTitle = 'MEAN Sandbox';

    $scope.$on('$stateChangeSuccess', function(event, toState) {
        $scope.pageTitle = toState.data.pageTitle;
    });

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});
