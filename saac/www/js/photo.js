angular.module('saac.photo', ['saac.s3uploader'])

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

	.factory('Picture', function ($http, $rootScope) {

		return {
			all: function() {
				return $http.get($rootScope.server.url + '/photos');
			},
			create: function(picture) {
				return $http.post($rootScope.server.url + '/photos', picture);
			}
		};
	})

	//Controllers
	.controller('PhotoCtrl', function ($scope, $rootScope, $window, $ionicPopup, S3Uploader, Picture) {

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
                            var p = {
                                    url: 'https://s3.amazonaws.com/saac-static-media-content/' + fileName,
                                    userId: $rootScope.user.userId
                        };
                            Picture.create(p);
                        });
                    });
                },
                function (message) {
                    // We typically get here because the use canceled the photo operation. Seems better to fail silently.
                }, options);
            return false;
        };

	});