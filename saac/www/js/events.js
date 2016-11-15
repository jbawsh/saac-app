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

  //Services
  .factory('Events', function() {
  var events = [{
    id: 0,
    name: 'Basketball',
    date: '10/15/2016',
    time: '2:30 pm',
    loc: 10
  }, {
    id: 1,
    name: 'Football',
    date: '10/20/2016',
    time: '1:30 pm',
    loc: 10
  }, {
    id: 2,
    name: 'Baseball',
    date: '3/25/2017',
    time: '11:30 am',
    loc: 10
  }, {
    id: 3,
    name: 'Hockey',
    date: '4/15/2017',
    time: '6:30 pm',
    loc: 10
  }, {
    id: 4,
    name: 'Soccer',
    date: '2/10/2017',
    time: '7:30 pm',
    loc: 10
  }];

  return {
    all: function() {
      return events;
    },
    get: function(eventId) {
      for (var i = 0; i < events.length; i++) {
        if (events[i].id === parseInt(eventId)) {
          return events[i];
        }
      }
      return null;
    }
  };
  })

	//Controllers
	.controller('EventsCtrl', function ($scope, Events) {
      $scope.events = Events.all();
	})

	.controller('EventDetailCtrl', function ($scope, $stateParams, Events) {
      $scope.event = Events.get($stateParams.eventId);
	});