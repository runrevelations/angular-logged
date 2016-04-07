(function(){
	'use strict'


angular.module('finalFront')
    .service('DeleteUserService', DeleteUserService);

    DeleteUserService.$inject = ['$http', '$window', '$state', '$log', 'CurrentUserService'];

    function DeleteUserService($http, $window, $state, $log, CurrentUserService){
        
        this.currentUserId = CurrentUserService.currentUserId;
        this.currentUserToken = CurrentUserService.currentUserToken;

    	this.deleteUser = function() {

    	    $http.delete('https://localhost:8443/api/v1/agents/' + this.currentUserId, {headers: {'x-access-token': this.currentUserToken }} )
    	    .then(function(){
    		    delete $window.localStorage.token;
    		    $window.location.reload(true);
    		    $log.debug('Successfully deleted user!');
    		    return;
    	    })
    	    .catch(function(err){
    		    if (err) $log.debug(err);
    		    return;
    	    });

        };

    };

})();