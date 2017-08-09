(function() {
  angular
    .module('taparoo')
    .controller('tapDisplayController', tapDisplayController)
    function tapDisplayController($http, appSocketService, $scope){
      console.log("here");
      var vm = this;
      //console.log('hellow frome tha tapDisplay controller');
      function getNewTaps(){
        // console.log('something');
        $http.get('https://taparoo-server.herokuapp.com/api/v1/beers').then(function(res){
          vm.beerAPI = res.data.beers
          vm.dropdownOptions =[]
          //refactor wo HO Function
          console.log(res.data.beers);
          for(var i=0;i<res.data.beers.length; i++){
            if(res.data.beers[i].tap == 'left'){
              vm.beer1 = res.data.beers[i]
              vm.tapped1 = [];
              vm.tapped1.push(vm.beer1);
              console.log(vm.beer1);
              console.log('left yes!');
            }else if(res.data.beers[i].tap == 'right'){
              vm.beer2 = res.data.beers[i]
              vm.tapped2 = [];
              vm.tapped2.push(vm.beer2);
              console.log('right yes!');
            }else if(res.data.beers[i].tap == 'cooler'){
              vm.beer3 = res.data.beers[i]
              vm.cooler = [];
              vm.cooler.push(vm.beer3);
              console.log('cooler yes!');
            }
            vm.dropdownOptions.push(res.data.beers[i])
          } console.log(vm.tapped1, vm.tapped2, vm.cooler);
      })
      //console.log(appSocketService);
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
