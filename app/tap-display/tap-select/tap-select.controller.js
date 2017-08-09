(function() {

  angular
    .module('taparoo')
    .controller('tapSelectController', tapSelectController)

    function tapSelectController($scope, $http, $stateParams, $state, appSocketService){
      var vm = this


      vm.$onInit = function(){
        vm.loadDropdowns()
      }
      vm.loadDropdowns = function(){
        $http.get('https://taparoo-server.herokuapp.com/api/v1/beers').then(function(res){
          vm.beerAPI = res.data.beers
          vm.dropdownOptions =[]
          //refactor wo HO Function
          console.log(res.data.beers);
          for(var i=0;i<res.data.beers.length; i++){
            if(res.data.beers[i].tap == 'left'){
              vm.beer1 = res.data.beers[i]
              console.log('left yes!');
            }else if(res.data.beers[i].tap == 'right'){
              vm.beer2 = res.data.beers[i]
              console.log('right yes!');
            }else if(res.data.beers[i].tap == 'cooler'){
              vm.cooler = res.data.beers[i]
              console.log('cooler yes!');
            }
            vm.dropdownOptions.push(res.data.beers[i])
          }
          })

      }
      // console.log(appSocketService);


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

    //just logs the name from dropdown
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
