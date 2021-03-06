	angular.module('saac.leader', ['saac.start'])

	// Routes
	.config(function ($stateProvider) {

		$stateProvider

			.state('tab.leader', {
    			url: '/leader',
    			views: {
      				'tab-leader': {
        				templateUrl: 'templates/tab-leader.html',
        				controller: 'LeaderCtrl'
      				}
    			}
  			})
	})

	//Controllers
	.controller('LeaderCtrl', function ($scope, UserService) {
		$scope.users = [];
		$scope.users.push(UserService.getUser());
	});