(function() {
  'use strict';

  angular
    .module('taparoo')
    .controller('tapDisplayController', tapDisplayController)


    controller.$inject = ['$http']
    function tapDisplayController($http){
      console.log('hellow frome tha tapDisplay controller');
      $http.get('https://taparoo-server.herokuapp.com/api/v1/beers').then(function(res){
        console.log(res)
      } )

    }}());
