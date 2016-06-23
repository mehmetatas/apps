(function () {
    "use strict";
    
    angular
        .module("app")
        .run(configureStates);

    /* @ngInject */
    function configureStates(routerHelper) {
        routerHelper.configureStates({
            viewBase: "app/auth/",
            states: {
                "signin": null,
                "signup": null,
                "recoverPasswordRequest": null,
                "recoverPasswordReset": null,
                "activation": null
            }
        });
    }
})();