'use strict';

angular.module('integrationDashboardApp')
    .controller('NavbarController', function ($scope, $state) {
        $scope.$state = $state;

        $scope.logout = function () {
            $state.go('home');
        };
    });
