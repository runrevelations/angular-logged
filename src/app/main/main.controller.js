(function() {
  'use strict';


angular
  .module('finalFront')
  .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['CurrentUserService'];

    function MainCtrl(CurrentUserService) {
    
      this.loggedIn = CurrentUserService.loggedIn;

    };



})();