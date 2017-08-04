(function() {
  'use strict';

  angular
    .module('taparoo')
    .controller('selectBeersController', selectBeersController)

    controller.$inject = ['$http']
    function selectBeersController($http){
      const vm = this
      $http.get('https://taparoo-server.herokuapp.com/api/v1/beers').then(function(res){
        console.log(res.data.beers["0"].name);
        console.log(res);
        vm.dropdownOptions ={}
        //refactor wo HO Function
        for(let i=0;i<res.data.beers.length; i++){
          // console.log(res[i].name);
          vm.dropdownOptions[res.data.beers[i].name]=res.data.beers[i].name

        }
        } )

      console.log('Whats up says selectBeer Controller');

    vm.addBeer = function(){
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
  }
}

}());
