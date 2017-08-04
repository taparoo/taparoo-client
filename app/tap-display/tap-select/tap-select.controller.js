(function() {
  'use strict';

  angular
    .module('taparoo')
    .controller('tapSelectController', tapSelectController)

    function tapSelectController($http, $stateParams, $state){
      const vm = this

      $http.get('https://taparoo-server.herokuapp.com/api/v1/beers').then(function(res){
        //console.log(res.data.beers["0"].name);
        vm.beerAPI = res.data.beers
        vm.dropdownOptions ={}
        //refactor wo HO Function
        for(let i=0;i<res.data.beers.length; i++){
          // console.log(res[i].name);
          vm.dropdownOptions[res.data.beers[i].name]=res.data.beers[i].name
        }
        } )

    vm.addBeer = function(){
      //just logs the name from dropdown
      console.log('beer1', vm.beer1);
      vm.tapped = [];
      vm.tapped1 = [];
      vm.tapped2 = [];
      vm.cooler = [];
      for(let i=0;i<vm.beerAPI.length;i++){
        if(vm.beer1.name === vm.beerAPI[i].name){
          console.log(vm.beerAPI[i]);
            vm.tapped1.push(vm.beerAPI[i])
        }
        if(vm.beer2.name === vm.beerAPI[i].name){
          console.log(vm.beerAPI[i]);
            vm.tapped2.push(vm.beerAPI[i])
        }
        if(vm.cooler.name === vm.beerAPI[i].name){
          console.log(vm.beerAPI[i]);
            vm.tapped3.push(vm.beerAPI[i])
        }


      }
      vm.tapped.push(vm.tapped1[0], vm.tapped2[0], vm.tapped3[0])
      console.log(vm.tapped[0]);
      console.log(vm.tapped[1]);
      console.log(vm.tapped[2]);
      // vm.tapped.push(vm.tapped1[0], vm.tapped2[0], vm.tapped3[0])
      //console.log(vm.tapped)
      //$state.go('/tap-display')
    }

    // vm.tapped = function(){
    //   console.log('test');
    //   // $http.put()
    //
    // }
  }
}());
