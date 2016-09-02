angular.module('saac.photo', [])

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
	.controller('PhotoCtrl', function ($scope) {

	});