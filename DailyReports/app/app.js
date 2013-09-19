'use strict';

angular.module('myApp', ['myApp.data', 'myApp.DailyReports', 'myApp.DailyReports.Journal', 'myApp.DailyReports.Weather'])
	.config(['$routeProvider', function($routeProvider) {
        
        $routeProvider
        .when('/Report', {
            templateUrl: 'app/DailyReport/list.html',
            controller: 'DailyReportsListController'
        })
        .when('/Report/:project/:date', {
            templateUrl: 'app/DailyReport/detail.html',
            controller: 'DailyReportsDetailController'            
        })

        /* Journal */
        .when('/Report/:project/:date/Journal', {
            templateUrl: 'app/DailyReport/Journal/list.html',
            controller: 'JournalListController'            
        })
        .when('/Report/:project/:date/Journal/:time', {
            templateUrl: 'app/DailyReport/Journal/detail.html',
            controller: 'JournalDetailController'            
        })
        
        /* Weather */
        .when('/Report/:project/:date/Weather', {
            templateUrl: 'app/DailyReport/Weather/list.html',
            controller: 'WeatherListController'            
        })
        .when('/Report/:project/:date/Weather/:time', {
            templateUrl: 'app/DailyReport/Weather/detail.html',
            controller: 'WeatherDetailController'            
        })
        
        
        .otherwise({ redirectTo: '/Report' });
        
	}]);
