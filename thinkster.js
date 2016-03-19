(function(){
   'use strict'

   angular
         .module('thinkster',[
         	'thinkster.config',
            'routes',
            'thinkster.authentication'
         ])
         .run(run);

   run.$inject = ['$http'];
   
   function run($http){
         $http.defaults.xsrfHeaderName = 'X-CSRFToken';
         $http.defaults.xsrfCookieName = 'csrftoken';
   }

   angular
         .module('thinkster.config',[]);

   angular
         .module('thinkster.routes',['ngRoute']);

})();