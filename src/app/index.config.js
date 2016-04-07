(function() {
  'use strict';

angular
    .module('finalFront')
    .config(config);

  function config($httpProvider, $logProvider) {

        // Enable $log.debug
        $logProvider.debugEnabled(true);

        // Serialize POST data
        $httpProvider.defaults.transformRequest = function(data){
    	    if (data === undefined) {
    		    return data;
    	    }
    	    return $.param(data);
        };

        // Set default headers to url encoded
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        
    }

})();
