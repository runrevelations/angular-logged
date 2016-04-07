(function() {
  'use strict';

angular
    .module('finalFront')
    .run(runBlock);

  function runBlock($log) {
    $log.debug('runBlock end');
  };

})();
