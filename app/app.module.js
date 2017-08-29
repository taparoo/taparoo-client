(function() {
  //just defining the module
    angular
      .module('taparoo', ['ui.router'])
      .component('home', {
        controller: 'homeController',
        templateUrl: 'home/home.html'
      })
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
      .component('inventoryManagement', {
        controller: 'inventoryController',
        templateUrl: 'tap-display/inventory/inventory.html',
        bindings: {
            data: '<'
          }
      })
}());
