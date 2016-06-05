(function () {
    "use strict";

    angular.module("app")
        .run(runFunc);

    runFunc.$inject = ["$rootScope", "$state", "$stateParams"];

    function runFunc($rootScope, $state, $stateParams) {
        // User information
        $rootScope.user = {
            name: "Jimmie Stevens",
            job: "Developer",
            picture: "app/img/user/02.jpg"
        };
    }
})();