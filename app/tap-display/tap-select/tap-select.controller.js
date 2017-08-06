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
        console.log(res.data.beers[i].id);
          vm.dropdownOptions[res.data.beers[i].id]=res.data.beers[i].name
        }
        } )

    vm.addBeer = function(){
      //just logs the name from dropdown
      let onTap = {
        //name is ID!!!!
        left: vm.beer1.name,
        right: vm.beer2.name,
        cooler: vm.beer3.name
      }
      console.log('obj: ', onTap);
      $http.put('https://taparoo-server.herokuapp.com/api/v1/beers/on_tap', onTap).then(function(res){
          console.log('success?', res);
      })
      //what the y fuck am I doing?
    }

  }
}());
