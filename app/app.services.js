(function() {

    angular
      .module('taparoo')
      .service('appSocketService', appSocketService)

      function appSocketService(){
        console.log('socketService Test');
          return io.connect('https://taparoo-server.herokuapp.com/');

}
}());
