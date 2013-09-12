'use strict';

angular.module('myApp.data', [])
    .factory('dataService', ['$http', function($http) {
        var path = 'js/data.js';
        
        var reports = $http.get(path).then(function(response) {
            return response.data.DailyReports;
        });
        
        var factory = {};
        factory.all = function () {
            return reports;
        };
        
        factory.get = function(date)
        {
            return reports.then(function() {
                return utils.findByDate(reports, date);
            });
        };
        
        return factory;
    }])

    .factory('utils', [function() {
       
        var factory = {}
        
        factory.findByDate = function(data, date){
            for (var i = 0; i < data.length; i++)
            {
                if (data[i].date == date) return data[i].date;
            }
        }
        
        return factory;
    }])
;