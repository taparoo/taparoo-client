(function() {
  'use strict';

  angular
    .module('taparoo')
    .controller('tapDisplayController', tapDisplayController)
    function tapDisplayController($http){
      const vm = this;
      console.log('hellow frome tha tapDisplay controller');
      $http.get('https://taparoo-server.herokuapp.com/api/v1/beers/on_tap').then(function(res){
        console.log(res.data);
        let tapData = Object.values(res.data)
        vm.tapped1 = [];
        vm.tapped2 = [];
        vm.cooler = [];

        vm.tapped1.push(tapData[0][0]);
        console.log(tapData[0][0]);
        vm.tapped2.push(tapData[0][1]);
        console.log(tapData[0][1]);
        vm.cooler.push(tapData[0][2]);
        console.log(tapData[0][2]);

      } )

    }}());
