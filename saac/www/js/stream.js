angular.module('saac.stream', ['saac.photo', 'saac.start'])

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
	.controller('StreamCtrl', function ($scope, $rootScope, Picture, UserService) {
		$scope.user = UserService.getUser();
		$scope.photos = Picture.all();

		$scope.doRefresh = function () {
			$scope.photos = Picture.all();

			$scope.$broadcast('scroll.refreshComplete');
		}
	});