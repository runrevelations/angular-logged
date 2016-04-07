(function(){
'use strict';



angular.module('finalFront')
    .service('RegisterService', RegisterService);

    RegisterService.$inject = ['$http', '$window', '$log', '$state', 'API_REG_URL'];


    function RegisterService($http, $window, $log, $state, API_REG_URL){
    
        
        // POST request for user registration
        this.registerUser = function(formData){
        	
                $log.debug(formData)
                
                // API_REG_URL can be found in index.constants.js
                $http.post(API_REG_URL, formData)
                .then(function (res){

            	    $log.debug(res);
                    $window.localStorage.token = res.data.token;
                    $state.go('dashboard')
                    .then(function(){

                      $window.location.reload();
                      $log.debug('Sent from register to dashboard successfully.');
                    })
                    .catch(function(err){

                      $log.debug(err);
                      $state.go('register');
                    });
                })
                .catch(function (err){

            	  $log.debug(err);
    	          delete $window.localStorage.token;
    	          $window.location.reload();
                });
            };

    };

})();