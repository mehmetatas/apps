(function () {
    "use strict";

    angular
        .module("app")
        .config(configureStates) 
        .constant("apiVersions", {
            "default": "v1",
            "auth": "v1"
        });

    /* @ngInject */
    function configureStates(nanoScrollerDefaults, $httpProvider, $urlRouterProvider, $locationProvider, $stateProvider) {      
        
        //
        // configure nano scroller
        // -----------------------------------
        nanoScrollerDefaults.flash = true;
        
        //
        // configure http interceptor
        // -----------------------------------
        $httpProvider.interceptors.push("httpInterceptor");
        
        //
        // default route routes
        // -----------------------------------
        $urlRouterProvider.otherwise("/");
        
        //
        // location provider html5 mode
        // -----------------------------------
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

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