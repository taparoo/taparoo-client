(function() {
  'use strict'
  //just defining the module
    angular
      .module('taparoo')
      .config(config);

    function config($stateProvider, $urlRouterProvider) {
      console.log("hello from router stuff");


      $stateProvider
        .state({
          name: 'tap-select',
          url:'/',
          component: 'selectBeers'
        });

        $urlRouterProvider.otherwise('/');
    }


}());
