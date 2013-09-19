'use strict';

angular.module('myApp.DailyReports.Photo', [])
	.controller('PhotoListController', ['$scope', '$location', function ($scope, $location) {

        $scope.goToPhotoReport = function(){
            var view = "/Report/123/20130911";
            $location.path(view);
        }
        
        $scope.goToAddPhoto = function() {
            var view = '/Report/123/20130911/Photo/1234';
            $location.path(view);
        }
        
    }])

    .controller('PhotoDetailController', ['$scope', '$location', function ($scope, $location) {

        $scope.goToList = function() {
            var view = '/Report/123/20130911';
            $location.path(view);
        }
        
        $scope.savePhotoEntry = function(){
            $scope.goToList();
        }
    }]);