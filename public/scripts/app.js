'use strict';

var meanApp = angular.module('meanApp', [
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('hello', {
            url: '/hello',
            templateUrl: 'partials/hello.partial.html',
            //contorller: ''
            data: {
                pageTitle: 'Hello'
            }
        })
        .state('bye', {
            url: '/bye',
            templateUrl: 'partials/bye.partial.html',
            //contorller: ''
            data: {
                pageTitle: 'Bye'
            }
        })
});
