(function() {
  angular.module('taparoo').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name:'tapDisplay',
        url:'/tap-display',
        component: 'tapDisplay'
      }).state({
        name:'selectBeers',
        url:'/tap-select',
        component: 'selectBeers'
      }).state({
        name:'inventory',
        url:'/inventory',
        component: 'inventory'
      })

      //backup-page...
      $urlRouterProvider.otherwise('/tap-select')
  }
}());
