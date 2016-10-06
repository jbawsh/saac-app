angular.module('saac.account', ['saac.start'])

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
	.controller('AccountCtrl', function ($scope, UserService, $ionicActionSheet, $state, $ionicLoading) {
		$scope.user = UserService.getUser();

		$scope.test = function () {
			console.log($scope.user);
		}

		$scope.showLogOutMenu = function() {
			var hideSheet = $ionicActionSheet.show({
				destructiveText: 'Logout',
				titleText: 'Are you sure you want to logout? This app is awsome so I recommend you to stay.',
				cancelText: 'Cancel',
				cancel: function() {},
				buttonClicked: function(index) {
					return true;
				},
				destructiveButtonClicked: function(){
					$ionicLoading.show({
						template: 'Logging out...'
					});

        		// Facebook logout
        		facebookConnectPlugin.logout(function(){
        			$ionicLoading.hide();
        			UserService.removeUser();
        			console.log(UserService.getUser);
        			$state.go('welcome.start');
        		},
        		function(fail){
        			$ionicLoading.hide();
        		});
        	}
        });
	};
	});