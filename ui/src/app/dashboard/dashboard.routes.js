(function () {
    "use strict";
    
    angular
        .module("app")
        .run(configureStates);

    /* @ngInject */
    function configureStates(routerHelper) {
        routerHelper.configureStates({
            "app.home": {
                url: "/",
                templateUrl: "app/dashboard/dashboard.html"
            }
        });
    }
})();