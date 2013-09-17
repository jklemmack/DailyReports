'use strict';

angular.module('myApp.DailyReports.Journal', [])
	.controller('JournalListController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

        $scope.goToDailyReport = function(){
            var view = "/Report/123/20130911";
            $location.path(view);
        }
        
        $scope.goToAddJournal = function() {
            var view = '/Report/123/20130911/Journal/1234';
            $location.path(view);
        }
        
    }])

    .controller('JournalDetailController', ['$scope', '$http', '$log', '$location', function ($scope, $http, $log, $location) {

        var pictureSource;   // picture source
        var destinationType; // sets the format of returned value 
        
        document.addEventListener("deviceready",onDeviceReady,false);

        $scope.goToList = function() {
            var view = '/Report/123/20130911';
            $location.path(view);
        }
        
        $scope.saveJournalEntry = function(){
            $scope.goToList();
        }
        
        $scope.photos = [];
        
        // Cordova is ready to be used!
        function onDeviceReady() {
            pictureSource = navigator.camera.PictureSourceType;
            destinationType = navigator.camera.DestinationType;
        }
        
        $scope.capturePhoto = function() {
            // Take picture using device camera and retrieve image as base64-encoded string
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 25, destinationType: destinationType.DATA_URL });
        }
        
        $scope.captureFromAlbum = function() {
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, destinationType: destinationType.DATA_URL, sourceType: pictureSource.PHOTOLIBRARY })                        
        }
        
        function onPhotoDataSuccess(imageData) {
            $scope.photos.push({"id": $scope.photos.length, "imageData" : "data:image/jpeg;base64," + imageData});
            $scope.$digest();            
        }
            
         // Called if something bad happens.
        function onFail(message) {
            alert('Failed because: ' + message);
        }
    }]);