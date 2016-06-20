window.mmtUtils = {
    configureStates: function (states) {
        angular
            .module("app")
            .run(["routerHelper", function (routerHelper) {
                routerHelper.configureStates(states);
            }]);
    }
};

(function() {
    "use strict";
    
    angular.module("app", [
        "ngSanitize",
        "ngAnimate",
        "ui.router",   
        "sun.scrollable"
    ]);
})();
