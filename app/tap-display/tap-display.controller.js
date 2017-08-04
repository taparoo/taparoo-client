(function() {
  'use strict';

  angular
    .module('taparoo')
    .controller('tapDisplayController', tapDisplayController)

    function tapDisplayController($http, $stateParams, $state){
      vm.getInventory = function(){
        //$http.get(//the inventory)
        console.log('hellow frome tha tapDisplay controller');

        //get request to API to get what's on tap.
      }




    }
    }());
