(function() {
  angular
    .module('taparoo')
    .controller('tapDisplayController', tapDisplayController)
    function tapDisplayController($http, appSocketService, $scope){
      var vm = this;
      vm.$onInit = function laod(){
        getNewTaps()
      }
      function getNewTaps(){
        $http.get('https://taparoo-server.herokuapp.com/api/v1/beers').then(function(res){
          vm.beerAPI = res.data.beers
          vm.dropdownOptions =[]
          vm.setTappedForDropdopwns = res.data.beers.map(function(currentVal, i, array){

              res.data.beers[i].tap == 'left' ?
              (vm.beer1 = res.data.beers[i])
              && (vm.tapped1 = [])
              && (vm.tapped1.push(vm.beer1)) : "false" ;

              res.data.beers[i].tap == 'right' ?
              (vm.beer2 = res.data.beers[i])
              && (vm.tapped2 = [])
              && (vm.tapped2.push(vm.beer2)) : "false";

              res.data.beers[i].tap == 'cooler' ?
              (vm.beer3 = res.data.beers[i])
              && (vm.cooler = [])
              && (vm.cooler.push(vm.beer3)) : "false" ;

              vm.dropdownOptions.push(res.data.beers[i])
            })
      })
      appSocketService.on('tapUpdate', function(data){
        console.log('sockets!', data);
        vm.tapped1 = [data.left]
        vm.tapped2 = [data.right]
        vm.cooler = [data.cooler]
      $scope.$apply();
      })
    }
    getNewTaps()
  }}());
