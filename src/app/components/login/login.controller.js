(function(){
'use strict';


angular.module('finalFront')
    .controller('LoginCtrl', LoginCtrl);


    LoginCtrl.$inject = ['$http', '$log', 'LoginService', 'CurrentUserService'];

    function LoginCtrl($http, $log, LoginService, CurrentUserService) {

    	this.user = {};
        this.userLogin = LoginService.userLogin;
        this.loggedIn = CurrentUserService.loggedIn;

    };


})();