(function () {
    "use strict";
    
    angular
        .module("app")
        .run(configureStates);

    /* @ngInject */
    function configureStates(routerHelper) {
        routerHelper.configureStates({
            "app.mail": {
                url: "/mail",
                templateUrl: "app/mail/mail.html"
            }
        });
    }
})();