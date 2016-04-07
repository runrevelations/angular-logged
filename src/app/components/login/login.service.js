(function(){
	'use strict';


angular.module('finalFront')
    .service('LoginService', LoginService)
 

    LoginService.$inject = ['$http', '$log', 'API_AUTH_URL', '$window', '$state'];

	function LoginService($http, $log, API_AUTH_URL, $window, $state) {
            
        this.userLogin = function(formData) {

            // API path can be found in index.constants.js
            $http.post(API_AUTH_URL, formData)
            .then(function(res){

                $log.debug(formData);
                $log.debug(res);

                // store user token and go to dashboard if success
                $window.localStorage.token = res.data.token;
                if (res.data.success == true){
                    $state.go('dashboard')
                    .then(function(){
                        $window.location.reload();
                    })
                    .catch();

                } else {
                  // delete storage token and refresh login
                  delete $window.localStorage.token;
                  //res.data.message;
                  $log.debug(res.data.message);
                  $state.reload();
                };
            })
            .catch(function(err){

                $log.debug(err)

            });


        };

    return this

	};

})();