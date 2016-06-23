(function () {
    "use strict";
    
    angular
        .module("app")
        .run(configureStates);

    /* @ngInject */
    function configureStates(routerHelper) {
        routerHelper.configureStates({
            "app": {
            	url: "",
            	abstract: true,
            	templateUrl: "app/layout/app.html",
            	controller: "AppController"
            }
        });
    }
})();