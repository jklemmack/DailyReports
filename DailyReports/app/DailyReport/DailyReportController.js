'use strict';

angular.module('myApp.DailyReports', ['myApp.data'])
	.controller('DailyReportsListController', ['$scope','$location', 'dataService', function ($scope, $location, dataService) {

        $scope.reports = dataService.all().then(function (reports) {
           
            var start = '11/17/2013';
            
            
            return reports;
        });
        
        $scope.goToReport =  function(){
            var view = '/Report/123/20130911';
            $location.path(view);
        }
        
    }])

.controller('DailyReportsDetailController', ['$scope', '$location', function ($scope, $location) {
        $scope.goToList =  function(){
            var view = '/Report';
            $location.path(view);
        }
        
        $scope.goToAddJournal = function() {
            var view = '/Report/123/20130911/Journal/1234';
            $location.path(view);
        }
    }])

;
