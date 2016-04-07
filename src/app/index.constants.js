(function() {
  'use strict';

  angular
    .module('finalFront')
    .constant('API_REG_URL', 'https://localhost:8443/api/v1/agents/register') // API registration. Use POST.
    .constant('API_AUTH_URL', 'https://localhost:8443/api/v1/agents/auth') // API authentication. Use POST.
    .constant('API_BASE_URL', 'https://localhost:8443/api/v1/agents') // API agents endpoint. Use GET, DELETE, or PUT.

})();
