(function(){
	'use strict'


angular.module('finalFront')
    .service('LogoutService', LogoutService);

    LogoutService.$inject = ['$window', '$state', '$log'];
    
    function LogoutService($window, $state, $log){

    	this.logOut = function() {

            delete $window.localStorage.token;

            $state.go('home')
            .then(function(){
                $window.location.reload()
            })
            .catch(function(err){
                if(err) return err;
            });  
            
        };

    };

})();