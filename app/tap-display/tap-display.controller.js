(function() {
  angular
    .module('taparoo')
    .controller('tapDisplayController', tapDisplayController)
    function tapDisplayController($http, appSocketService, $scope){
      var vm = this;
      //console.log('hellow frome tha tapDisplay controller');
      function getNewTaps(){
        $http.get('https://taparoo-server.herokuapp.com/api/v1/beers/on_tap').then(function(res){
          console.log(res.data);
          var obj = res.data
          var tapData = Object.keys(obj).map(function(e) {
            return obj[e]
          })
          vm.tapped1 = [];
          vm.tapped2 = [];
          vm.cooler = [];
          vm.tapped1.push(tapData[0][0]);
          console.log(tapData[0][0]);
          vm.tapped2.push(tapData[0][1]);
          console.log(tapData[0][1]);
          vm.cooler.push(tapData[0][2]);
          console.log(tapData[0][2]);
        })

      }
      //console.log(appSocketService);
      getNewTaps()
      appSocketService.on('tapUpdate', function(data){
        console.log('sockets!', data);
        vm.tapped1 = [data.left]
        vm.tapped2 = [data.right]
        vm.cooler = [data.cooler]
        $scope.$apply();
      })

    }}());
