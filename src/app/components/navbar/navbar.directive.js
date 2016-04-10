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
      controller: 'NavbarController',
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

  };

})();
