(function(){
	
  'use strict'

  angular 
        .module('authentication.services')
        .factory('Authentication',Authentication);


  Authentication.$inject = ['$cookies','$http']

  function Authentication($cookies,$http){
  	var Authentication = {
  		register : register
  	}

  	return Authentication;

    function register(email,password,username){
     return $http.post('http://127.0.0.1:8000/account/api/v1/accounts/',{
     	username : username,
     	password : password,
     	email : email
     });
    }
   }

})();