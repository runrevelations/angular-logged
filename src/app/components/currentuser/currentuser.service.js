(function(){
'use strict';


angular.module('finalFront')
    .service('CurrentUserService', CurrentUserService);


    CurrentUserService.$inject = ['jwtHelper', '$http', '$log', '$window', '$state'];
    

    function CurrentUserService(jwtHelper, $http, $log, $window, $state){

        if ($window.localStorage.token != null) {
          // Get and store token from response
          const currentUserToken = $window.localStorage.token;
          $log.debug(currentUserToken);
            
          // Check if token is expired
          const tokenExpired = jwtHelper.isTokenExpired(currentUserToken);
          $log.debug(tokenExpired);

          // Token payload 
          const tokenData = jwtHelper.decodeToken(currentUserToken);
          $log.debug(tokenData);
          
          this.currentUserEmail = tokenData._doc.email;
          this.currentUserToken = $window.localStorage.token;
          this.currentUserId = tokenData._doc._id;
          this.currentUserFirstName = tokenData._doc.firstName;
          this.currentUserLastName = tokenData._doc.lastName;
          this.currentUserFullName = this.currentUserFirstName + ' ' + this.currentUserLastName;


            // checks if user is logged or not based on token data
            this.loggedIn = function(){

                // delete token from storage if expired
                if (tokenExpired === true) {
            	    delete $window.localStorage.token;
            	    $state.go('home');
                } else {

                    // payload email not empty user signed in
                    if (tokenData._doc.email === null) {

            	        delete $window.localStorage.token;
                        $state.go('home');
                        $log.debug('Logged in: ',false);
                        return false;

                    } else {
                        return true;
                    };
                };
            };
        };
    };

})();