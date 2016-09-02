angular.module('saac', ['ionic', 'saac.config', 'saac.stream', 'saac.events', 'saac.photo', 'saac.leader', 'saac.account'])

.run(function ($rootScope, $ionicPlatform, $http, SERVER_URL) {

  $rootScope.server = {url: SERVER_URL}

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    .state('welcome', {
      url: "/welcome",
      abstract: true,
      templateUrl: 'templates/welcome.html'
    })

    .state('welcome.start', {
      url: "/start",
      views: {
        'welcome-content': {
          templateUrl: 'templates/start.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/welcome/start');

});
