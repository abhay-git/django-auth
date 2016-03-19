(function(){
   'use strict'

   angular
         .module('thinkster.authentication',[
            'authentication.controllers',
            'authentication.services'
         ]);

  angular
         .module('authentication.controllers',[]);

  angular 
         .module('authentication.services',['ngCookies']);


})();