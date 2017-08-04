(function() {
  'use strict'
  //just defining the module
    angular
      .module('taparoo')
      .config(config);

      // config.$inject = ['$stateProvider, $urlRouterProvider', 'locationProvider']

    function config($stateProvider, $urlRouterProvider) {
      console.log("hello from router stuff");



      $stateProvider
        .state({
          name: 'tapselect',
          url:'/tap-select',
          component: 'selectBeers'
        })

          .state({
            name: 'tapDisplay',
            url: '/tapDisplay',
            component: 'tapDisplay'
          })

          .state({
            name: 'inventory-display',
            url: '/inventoryDisplay',
            component: 'inventoryDisplay'
          })

        $urlRouterProvider.otherwise('/tap-select');
    }


}());
