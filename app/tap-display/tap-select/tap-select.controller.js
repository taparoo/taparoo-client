(function() {

  angular
    .module('taparoo')
    .controller('tapSelectController', tapSelectController)

    function tapSelectController($http, $stateParams, $state, appSocketService){
      var vm = this
      // console.log(appSocketService);
      $http.get('https://taparoo-server.herokuapp.com/api/v1/beers').then(function(res){
        //console.log(res.data.beers["0"].name);
        vm.beerAPI = res.data.beers
        vm.dropdownOptions ={}
        //refactor wo HO Function
        for(var i=0;i<res.data.beers.length; i++){
        console.log(res.data.beers[i].id);
          vm.dropdownOptions[res.data.beers[i].id]=res.data.beers[i].name
        }
        } )

    vm.inventoryList = function(){
      $http.get('https://taparoo-server.herokuapp.com/api/v1/beers').then(function(res){
        vm.inventory = res.data.beers
      })
    }

    vm.addToInventory = function(){
      var newBeer = ({
          'name': vm.newBeer.name,
          'brewery': vm.newBeer.brewery,
          'type': vm.newBeer.type,
          'image_url': vm.newBeer.imageURL,
          'abv': vm.newBeer.abv
        })
        console.log("why?");
        console.log(newBeer);
      $http.post('https://taparoo-server.herokuapp.com/api/v1/beers', newBeer, function(newBeer) {
        console.log(res);
      })
  }

    vm.updateBeerList = function(){
      //just logs the name from dropdown
      var onTap = {
        //name is ID!!!!
        left: vm.beer1.name,
        right: vm.beer2.name,
        cooler: vm.beer3.name
      }
      console.log('obj: ', onTap);
      $http.put('https://taparoo-server.herokuapp.com/api/v1/beers/on_tap', onTap).then(function(res){
          console.log('success?', res);
          appSocketService.emit('ping', 'test');
          //appSocketService.emit('ping');
          //handle error

      })
      //what the y fuck am I doing?
    }

    function sockitToMe(){
      socket.emit("tapUpdate", {message: "updated"})
    }

  }
}());
