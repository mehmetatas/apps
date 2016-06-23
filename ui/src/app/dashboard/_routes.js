(function () {
    "use strict";
    
    angular
        .module("app")
        .run(configureStates);

    /* @ngInject */
    function configureStates(routerHelper) {
        routerHelper.configureStates({
            viewBase: "app/dashboard/",
            states: {
                "app.dashboard": "/"
            }
        });
    }
})();