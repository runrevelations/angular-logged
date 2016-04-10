(function(){
	'use strict'

angular
    .module('finalFront')
    .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['CurrentUserService', 'LogoutService'];

    function NavbarController(CurrentUserService, LogoutService) {

      this.loggedIn = CurrentUserService.loggedIn;
      this.currentUserFirstName = CurrentUserService.currentUserFirstName;
      this.currentUserLastName = CurrentUserService.currentUserLastName;
      this.currentUserFullName = CurrentUserService.currentUserFullName;
      this.logOut = LogoutService.logOut;

    };

})();