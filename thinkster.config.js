(function(){
   
   'use strict';

   angular
         .module('thinkster.config')
         .config(config);

   		config.$inject = ['$locationProvider'];

	   function config($locationProvider){
	   	 console.log($locationProvider);
	   }

})();