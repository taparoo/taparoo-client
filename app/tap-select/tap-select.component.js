(function() {
  'use strict'
  //just defining the module
    angular
      .module('taparoo')
      .component('selectBeers', {
        controller: 'selectBeersController',
        templateUrl: 'app/tap-select/tap-select.html',
        bindings: {
            data: '<'
          }
      })

}());
