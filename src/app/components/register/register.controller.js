(function(){
'use strict';


angular.module('finalFront')
  .controller('RegisterCtrl', RegisterCtrl);

    RegisterCtrl.$inject = ['RegisterService', 'CurrentUserService'];

    function RegisterCtrl(RegisterService, CurrentUserService) {
        
        this.user = {};
        this.registerUser = RegisterService.registerUser;
        this.loggedIn = CurrentUserService.loggedIn;
        
    };

})();