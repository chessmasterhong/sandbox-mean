'use strict';

var meanApp = angular.module('meanApp', [
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '',
            templateUrl: 'views/home.view.html',
            //contorller: ''
            data: {
                pageTitle: 'Home'
            }
        })
});
