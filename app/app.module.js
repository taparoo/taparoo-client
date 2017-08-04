(function() {
  'use strict'
  //just defining the module
    angular
      .module('taparoo', ['ui.router'])
      .component('tapDisplay', {
        controller: 'tapDisplayController',
        templateUrl: 'tap-display/tap-display.html'
      })
      .component('selectBeers', {
        controller: 'tapSelectController',
        templateUrl: 'tap-display/tap-select/tap-select.html',
        bindings: {
            data: '<'
          }
      })
      // .component('tapDisplay', {
      //   controller: 'tapDisplayController',
      //   templateUrl: 'tap-disaply/tap-select/tap-display.html'
      // })
}());
