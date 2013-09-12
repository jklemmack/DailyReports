'use strict';

angular.module('myApp.DailyReports.Journal', [])
	.controller('JournalListController', ['$scope', '$http', function ($scope, $http) {

    }]);



angular.module('myApp.DailyReports.Journal', [])
    .controller('JournalDetailController', ['$scope', '$http', '$log', function ($scope, $http, $log) {

        var pictureSource;   // picture source
        var destinationType; // sets the format of returned value 
        
        document.addEventListener("deviceready",onDeviceReady,false);

        // Cordova is ready to be used!
        function onDeviceReady() {
            pictureSource = navigator.camera.PictureSourceType;
            destinationType = navigator.camera.DestinationType;
        }
        
        $scope.capturePhoto = function() {
            // Take picture using device camera and retrieve image as base64-encoded string
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, destinationType: destinationType.DATA_URL });
        }
        
        function onPhotoDataSuccess(imageData) {
            // Uncomment to view the base64 encoded image data
             $log.info(imageData);
    
             // Get image handle
             //var smallImage = document.getElementById('smallImage');
    
             // Unhide image elements
             //smallImage.style.display = 'block';
    
             // Show the captured photo
             // The inline CSS rules are used to resize the image
             //smallImage.src = "data:image/jpeg;base64," + imageData;
            $scope.imgSrc = "data:image/jpeg;base64," + imageData;
        }
            
         // Called if something bad happens.
        function onFail(message) {
            alert('Failed because: ' + message);
        }
    }]);