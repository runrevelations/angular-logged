(function() {
	'use strict'


angular.module('finalFront')
    .controller('DeleteCtrl', DeleteCtrl);

    DeleteCtrl.$inject = ['DeleteUserService'];

    function DeleteCtrl(DeleteUserService){

    	this.deleteUser = DeleteUserService.deleteUser;
    	this.currentUserId = DeleteUserService.currentUserId;
    	this.currentUserToken = DeleteUserService.currentUserToken;

    };

})();