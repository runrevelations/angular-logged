(function() {
  'use strict';

  angular
    .module('finalFront')
    .config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'app/components/register/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/components/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .state('settings', {
        url: '/settings/delete-profile',
        templateUrl: 'app/components/deleteuser/delete.user.html',
        controller: 'DeleteCtrl',
        controllerAs: 'delete'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/components/about/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/components/dashboard/dashboard.main.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .state('dashboard.friends', {
        url: '/friends',
        templateUrl: 'app/components/dashboard/dashboard.friends.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .state('dashboard.listings', {
        url: '/listings',
        templateUrl: 'app/components/dashboard/dashboard.listings.html'
      });

    $urlRouterProvider.otherwise('/');
    
  };

})();
