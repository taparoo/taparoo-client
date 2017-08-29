(function() {

  angular
    .module('taparoo')
    .controller('homeController', homeController)

    function homeController(appSocketService){
      console.log('hellow from tha homeController ');
    }
  }());
