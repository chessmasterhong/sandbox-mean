'use strict';

meanApp.factory('helloFactory', function($http) {
    return {
        get: function() {
            return $http({
                url: '/api/hello',
                method: 'GET'
            });
        }
    };
});
