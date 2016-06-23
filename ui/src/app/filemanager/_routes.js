(function () {
    "use strict";
    
    angular
        .module("app")
        .run(configureStates);

    /* @ngInject */
    function configureStates(routerHelper) {
        routerHelper.configureStates({
            viewBase: "app/filemanager/",
            states: {
                "app.filemanager": null
            }
        });
    }
})();