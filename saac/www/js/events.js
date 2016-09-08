  angular.module('saac.events', [])

	//Routes
	.config(function ($stateProvider) {

		$stateProvider

			.state('tab.events', {
      			url: '/events',
      			views: {
        			'tab-events': {
          				templateUrl: 'templates/tab-events.html',
          				controller: 'EventsCtrl'
        			}
      			}
    		})

    		.state('tab.event-detail', {
      			url: '/events/:eventId',
      			views: {
        			'tab-events': {
          				templateUrl: 'templates/event-detail.html',
          				controller: 'EventDetailCtrl'
        			}
      			}
    		})
	})


	//Controllers
	.controller('EventsCtrl', function ($scope) {

	})

	.controller('EventDetailCtrl', function ($scope) {

	});