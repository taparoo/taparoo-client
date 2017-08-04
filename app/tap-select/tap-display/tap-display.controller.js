(function() {
  'use strict';

  angular
    .module('taparoo')
    .controller('tapDisplayController', tapDisplayController)


    controller.$inject = ['$http']
    function tapDisplayController($http){
      const vm = this;
      console.log('hellow frome tha tapDisplay controller');
      $http.get('https://taparoo-server.herokuapp.com/api/v1/beers/on_tap').then(function(res){
        console.log(res.data["0"]);
        vm.tapped1 = [];
        vm.tapped2 = [];
        vm.tapped1.push(res.data["0"]);
        vm.tapped2.push(res.data["1"]);
        console.log(vm.tapped1);
      } )

    }}());
