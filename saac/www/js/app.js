angular.module('saac', ['ionic', 'saac.config', 'saac.stream', 'saac.events', 'saac.photo', 'saac.leader', 'saac.account', 'saac.s3uploader', 'saac.start'])

.run(function ($window, $location, $rootScope, $state, $ionicPlatform, $http, SERVER_URL) {

  var user = JSON.parse($window.localStorage.getItem('user'));

  $rootScope.user = user;

  $rootScope.server = {url: SERVER_URL}

  $ionicPlatform.ready(function() {
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

  });

  $rootScope.$on('$stateStartChange', function (event, toState) {
    if (toState.name !== 'welcome.start' && !$window.localStorage.getItem('token')) {
      $location.path('/welcome/start');
      event.preventDefault();
    }
  });

  $state.go('tab.stream');
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

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/welcome/start');

  })




















