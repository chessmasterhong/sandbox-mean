'use strict';

meanApp.factory('byeFactory', function($http) {
    return {
        get: function() {
            return $http({
                url: '/api/bye',
                method: 'GET'
            });
        }
    };
});
