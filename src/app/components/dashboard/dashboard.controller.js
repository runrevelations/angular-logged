(function(){

angular.module('finalFront')
    .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['CurrentUserService', 'GetUserService'];
    
    function DashboardCtrl(CurrentUserService, GetUserService){

        this.currentUserId = CurrentUserService.currentUserId;
        this.currentUserEmail = CurrentUserService.currentUserEmail;
        this.currentUserFirstName = CurrentUserService.currentUserFirstName; 
        this.currentUserLastName = CurrentUserService.currentUserLastName;
        this.currentUserFullName = CurrentUserService.currentUserFullName;
        this.loggedIn = CurrentUserService.loggedIn;

        this.allUsers = GetUserService.query();
    }

})();