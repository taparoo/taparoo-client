(function() {

  angular
    .module('taparoo')
    .controller('tapSelectController', tapSelectController)

    function tapSelectController($scope, $http, $stateParams, $state, appSocketService){

      var vm = this

      vm.$onInit = function laod(){
        vm.loadDropdowns()
      }
      vm.loadDropdowns = function drop(){
        $http.get('https://taparoo-server.herokuapp.com/api/v1/beers').then(function(res){
          vm.dropdownOptions =[]
          res.data.beers.map(function(currentVal, i, array){
            res.data.beers[i].tap == 'left' ? vm.beer1 = res.data.beers[i] : "false"
            res.data.beers[i].tap == 'right' ? vm.beer2 = res.data.beers[i] : "false"
            res.data.beers[i].tap == 'cooler' ? vm.cooler = res.data.beers[i] : "false"
            vm.dropdownOptions.push(res.data.beers[i])
            })
          })
      }



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

  vm.updateBeerList = function(){
    console.log('updateBeerList');
    var onTapData= {
      left: vm.beer1,
      right: vm.beer2,
      cooler: vm.cooler
    }
    var onTap = {
      left: vm.beer1.id,
      right: vm.beer2.id,
      cooler: vm.cooler.id
    }
    $http.put("https://taparoo-server.herokuapp.com/api/v1/beers/on_tap", JSON.stringify(onTap)).then((res) => {
      console.log(res);
    appSocketService.emit('tapUpdate', onTapData);
    var payload = {"text": `${onTapData.left.name} and ${onTapData.right.name} are tapped :beers:`}
    console.log(payload);
    $.post("https://hooks.slack.com/services/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", JSON.stringify(payload))
  });
  }
}}());
