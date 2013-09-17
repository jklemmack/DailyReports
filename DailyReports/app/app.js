'use strict';

angular.module('myApp', ['myApp.data', 'myApp.DailyReports', 'myApp.DailyReports.Journal'])
	.config(['$routeProvider', function($routeProvider) {

        var x = 2;
        
        $routeProvider
        .when('/Report', {
            templateUrl: 'app/DailyReport/list.html',
            controller: 'DailyReportsListController'
        })
        .when('/Report/:project/:date', {
            templateUrl: 'app/DailyReport/detail.html',
            controller: 'DailyReportsDetailController'            
        })

        .when('/Report/:project/:date/Journal', {
            templateUrl: 'app/DailyReport/Journal/list.html',
            controller: 'JournalListController'            
        })

        .when('/Report/:project/:date/Journal/:time', {
            templateUrl: 'app/DailyReport/Journal/detail.html',
            controller: 'JournalDetailController'            
        })
        
        .otherwise({ redirectTo: '/Report' });
        
	}]);
