(function () {
    "use strict";

    angular
        .module("app")
        .provider("routerHelper", routerHelperProvider);

    /* @ngInject */
    function routerHelperProvider($stateProvider) {
        /* jshint validthis: true */
        this.$get = RouterHelper;

        RouterHelper.$inject = ["$state"];

        function RouterHelper($state) {
            return {
                configureStates: configureStates,
                getStates: getStates
            };
            
            function configureStates(states) {
                for(var state in states) {
                    if (states.hasOwnProperty(state)) {
                        $stateProvider.state(state, states[state]);
                    }
                }
            }

            function getStates() { 
                return $state.get(); 
            }
        }
    }
})();