(function () {
    "use strict";
    
    angular
        .module("app")
        .run(configureStates);

    /* @ngInject */
    function configureStates(routerHelper) {
        routerHelper.configureStates({
            "app.filemanager": {
                url: "/filemanager",
                templateUrl: "app/filemanager/filemanager.html"
            }
        });
    }
})();