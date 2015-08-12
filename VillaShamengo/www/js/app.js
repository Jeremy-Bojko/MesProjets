// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('VillaShamengo', ['ionic', 'VillaShamengo.controllers', 'VillaShamengo.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'app/tabs.html'
  })

  .state('tab.listeInnovations', {
    url: '/listeInnovations',
    views: {
      'tab-listeInnovations': {
        templateUrl: 'app/listeInnovations/listeInnovations.html',
        controller: 'listeInnovationsCtrl'
      }
    }
  })

  .state('tab.listeInnovationsBeacon', {
      url: '/listeInnovationsBeacon',
      views: {
        'tab-listeInnovationsBeacon': {
          templateUrl: 'app/listeInnovationsBeacon/listeInnovationsBeacon.html',
          controller: 'listeInnovationsBeaconCtrl'
        }
      }
    })
    .state('tab.ficheInnovation', {
      url: '/listeInnovations/:innovationId',
      views: {
        'tab-listeInnovations': {
          templateUrl: 'app/ficheInnovation/ficheInnovation.html',
          controller: 'ficheInnovationCtrl'
        }
      }
    })

  .state('tab.infoShamengo', {
    url: '/infoShamengo',
    views: {
      'tab-infoShamengo': {
        templateUrl: 'app/infoShamengo/infoShamengo.html',
        controller: 'infoShamengoCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/listeInnovations');

});
