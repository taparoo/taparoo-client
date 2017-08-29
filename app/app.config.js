(function() {
  angular.module('taparoo').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name:'home',
        url:'/home',
        component: 'home'
      })
      .state({
        name:'tapDisplay',
        url:'/tap-display',
        component: 'tapDisplay'
      }).state({
        name:'selectBeers',
        url:'/tap-select',
        component: 'selectBeers'
      }).state({
        name:'inventoryManagement',
        url:'/inventory',
        component: 'inventoryManagement'
      })

      //backup-page...
      $urlRouterProvider.otherwise('/home')
  }
}());
