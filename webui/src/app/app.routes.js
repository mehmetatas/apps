(function () {
    "use strict";

    angular
        .module("app")
        .config(configureStates);

    /* @ngInject */
    function configureStates($stateProvider, $urlRouterProvider, $locationProvider, nanoScrollerDefaults) {
        nanoScrollerDefaults.flash = true;

        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });

        // default route to dashboard
        $urlRouterProvider.otherwise("/");

        //
        // app routes
        // -----------------------------------
        $stateProvider
            // Home
            // -----------------------------------
            .state("app.home", {
                url: "/",
                templateUrl: "app/dashboard/dashboard.html"
            })
            // File Manager
            // -----------------------------------
            .state("app.filemanager", {
                url: "/filemanager",
                templateUrl: "app/filemanager/filemanager.html"
            })
            // Mail
            // -----------------------------------
            .state("app.mail", {
                url: "/mail",
                templateUrl: "app/mail/mail.html"
            });
    }
})();