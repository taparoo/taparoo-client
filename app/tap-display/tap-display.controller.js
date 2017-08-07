(function() {
  angular
    .module('taparoo')
    .controller('tapDisplayController', tapDisplayController)
    function tapDisplayController($http, appSocketService){
      var vm = this;
      //console.log('hellow frome tha tapDisplay controller');
      function getNewTaps(){
        $http.get('https://taparoo-server.herokuapp.com/api/v1/beers/on_tap').then(function(res){
          console.log(res.data);
          var obj = res.data
          var tapData = Object.keys(obj).map(function(e) {
            return obj[e]
          })

          //console.log(Object.values(res.data));
          //var tapData = res.data.on_tap
          //console.log(tapData);
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
      appSocketService.on('ping', function(){
        console.log('tester appSocketService');
        getNewTaps()
      })

    }}());
