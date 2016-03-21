(function(){
  'use strict';

  angular
        .module('authentication.controllers')
        .controller('RegisterController',RegisterController);

        RegisterController.$inject = ['$location','$scope','$http','Authentication'];


        function RegisterController($location,$scope,$http,Authentication){
           
           var vm = this;

           vm.register = register

           function register() {
            alert(vm.email);

        $scope.option = {
              "email": vm.email,
              "username": vm.username,
              "password" : vm.password,
              "last_name" : vm.last_name,
        };
        $http.post('http://127.0.0.1:8000/account/api/v1/accounts/',$scope.option).then(function(response){
          alert("User Successfully register");
        },function(error){
          alert("fail");
        })           }
        }
})();