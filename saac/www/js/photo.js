angular.module('saac.photo', ['saac.s3Uploader'])

	// Routes
	.config(function ($stateProvider) {

		$stateProvider

			.state('tab.photo', {
    			url: '/photo',
    			views: {
      				'tab-photo': {
        				templateUrl: 'templates/tab-photo.html',
        				controller: 'PhotoCtrl'
      				}
    			}
  			})
	})

	//Controllers
	.controller('PhotoCtrl', function ($scope, $window, $ionicPopup, S3Uploader) {

		$scope.addPicture = function (from) {

            if (!navigator.camera) {
                $ionicPopup.alert({title: 'Sorry', content: 'This device does not support Camera'});
                return;
            }

            var fileName,
                options = {   quality: 45,
                    allowEdit: true,
                    targetWidth: 300,
                    targetHeight: 300,
                    destinationType: Camera.DestinationType.FILE_URI,
                    encodingType: Camera.EncodingType.JPEG };
            if (from === "LIBRARY") {
                options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
                options.saveToPhotoAlbum = false;
            } else {
                options.sourceType = Camera.PictureSourceType.CAMERA;
                options.saveToPhotoAlbum = true;
            }

            navigator.camera.getPicture(
                function (imageURI) {
                    // without setTimeout(), the code below seems to be executed twice.
                    setTimeout(function () {
                        fileName = new Date().getTime() + ".jpg";
                        S3Uploader.upload(imageURI, fileName).then(function () {
                            $scope.user.pictureurl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/' + fileName;
                        });
                    });
                },
                function (message) {
                    // We typically get here because the use canceled the photo operation. Seems better to fail silently.
                }, options);
            return false;
        };

	});