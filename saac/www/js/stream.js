angular.module('saac.stream', ['saac.photo'])

	// Routes
	.config(function ($stateProvider) {

		$stateProvider

			.state('tab.stream', {
    			url: '/stream',
    			views: {
      				'tab-stream': {
        				templateUrl: 'templates/tab-stream.html',
        				controller: 'StreamCtrl'
      				}
    			}
  			})
	})

	//Controllers
	.controller('StreamCtrl', function ($scope, $rootScope, Picture) {
		Picture.all().success(function (pictures) {
			$scope.pictures = pictures;
		});

		console.log($scope.pictures);

		$scope.doRefresh = function () {
			Picture.all().success(function (pictures) {
				$scope.pictures = pictures;
			});

			console.log($scope.pictures);

			$scope.$broadcast('scroll.refreshComplete');
		}
	});