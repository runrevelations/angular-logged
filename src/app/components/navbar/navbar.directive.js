(function() {
  'use strict';

  angular
    .module('finalFront')
    .directive('mainNavbar', mainNavbar);

  function mainNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
         
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    NavbarController.$inject = ['CurrentUserService', 'LogoutService'];

    function NavbarController(CurrentUserService, LogoutService) {

      this.loggedIn = CurrentUserService.loggedIn;
      this.currentUserFirstName = CurrentUserService.currentUserFirstName;
      this.currentUserLastName = CurrentUserService.currentUserLastName;
      this.currentUserFullName = CurrentUserService.currentUserFullName;
      this.logOut = LogoutService.logOut;

    };

  };

})();
