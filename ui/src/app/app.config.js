(function () {
    "use strict";

    angular
        .module("app")
        .config(configure) 
        .constant("apiVersions", {
            "default": "v1",
            "auth": "v1"
        });

    /* @ngInject */
    function configure(nanoScrollerDefaults, $httpProvider, $urlRouterProvider, $locationProvider) {      
        
        //
        // configure nano scroller
        // -----------------------------------
        nanoScrollerDefaults.flash = true;
        
        //
        // configure http interceptor
        // -----------------------------------
        $httpProvider.interceptors.push("httpInterceptor");
        
        //
        // configure default route
        // -----------------------------------
        $urlRouterProvider.otherwise("/");
        
        //
        // configure location provider html5 mode
        // -----------------------------------
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
})();