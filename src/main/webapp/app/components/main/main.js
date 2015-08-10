'use strict';

angular.module('integrationDashboardApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                parent: 'site',
                url: '/',
                data: {
                    roles: []
                },
                views: {
                    'content@': {
                        templateUrl: '/app/components/main/main.html',
                        controller: 'MainController'
                    }
                }
            });
    });
