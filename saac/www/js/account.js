angular.module('saac.account', [])

	// Routes
	.config(function ($stateProvider) {

		$stateProvider

			.state('tab.account', {
    			url: '/account',
    			views: {
      				'tab-account': {
        				templateUrl: 'templates/tab-account.html',
        				controller: 'AccountCtrl'
      				}
    			}
  			})
	})

	//Controllers
	.controller('AccountCtrl', function ($scope) {

	});