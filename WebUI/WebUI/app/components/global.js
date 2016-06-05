var mmtUtils = {
    configureStates: function (states) {
        angular
            .module("app")
            .run(["routerHelper", function (routerHelper) {
                routerHelper.configureStates(states);
            }]);
    }
};