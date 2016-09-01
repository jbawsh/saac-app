angular.module('saac.stream', [])

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
	.controller('StreamCtrl', function ($scope) {

	});