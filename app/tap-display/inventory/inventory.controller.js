(function() {

  angular
    .module('taparoo')
    .controller('inventoryController', inventoryController)

    function inventoryController(appSocketService, $http){
      console.log('hellow frome tha inventoryController');
      const vm = this
      vm.inventoryList = function(){
        console.log('someshit');
        $http.get('https://taparoo-server.herokuapp.com/api/v1/beers').then(function(res){
          vm.inventory = res.data.beers
          console.log(vm.inventory);
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
        }).then(function(){location.reload();})
        var newBeer = ({
            'name': "",
            'brewery': "",
            'type': "",
            'image_url': "",
            'abv': ""
          })
    }

    vm.removeFromInventory = function(beer){
      console.log(beer.id);
      var beerId = beer.id
      var URL = 'https://taparoo-server.herokuapp.com/api/v1/beers/'
      $http.delete(`${URL}${beerId}`, function() {
        console.log(res);
      }).then(function(){location.reload();})

    }
    console.log('end?');
    }
  }());
