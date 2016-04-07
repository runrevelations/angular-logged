(function() {
	'use strict'


angular.module('finalFront')
    .factory('GetUserService', GetUserService);

    // API_BASE_URL can be found in index.constants.js
    GetUserService.$inject = ['CurrentUserService','API_BASE_URL', '$resource', '$log'];
    
    function GetUserService(CurrentUserService, API_BASE_URL, $resource, $log) {
        
        var currentUserToken = CurrentUserService.currentUserToken;
        
        return $resource(API_BASE_URL, {}, {
        	query: {
        		method: 'GET',
        		isArray: true,
        		headers: {'x-access-token': currentUserToken}
        	}
        });

    };

})();