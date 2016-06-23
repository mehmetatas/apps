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
            
            function configureStates(options) {                
                for(var state in options.states) {                        
                    if (options.states.hasOwnProperty(state)) {
                        addState(options, state);
                    }                    
                }
            }

            function getStates() { 
                return $state.get(); 
            }
            
            // private functions
            
            function addState(options, state) {
                var states = options.states;
                
                var stateName = state;
                if (stateName.indexOf(".") > 0) {
                    var ss = stateName.split(".");
                    stateName = ss[ss.length - 1];
                }

                var config = createConfig(states, state, stateName);

                if (config.views) {
                    configureViews(config.views, options.viewBase);
                }
                else {
                    configure(config, stateName, options.viewBase);
                }

                $stateProvider.state(state, config);
            }
            
            function createConfig(states, state, stateName) {
                if (states[state] === null) {
                    return {
                        url: "/" + stateName
                    };
                }
                else if (typeof states[state] === "string") {
                    return {
                        url: states[state]
                    };
                }
                
                return states[state];
            }
            
            function configureViews(views, viewBase) {
                for (var view in views) {
                    if (!views.hasOwnProperty(view)) {
                        continue;
                    }
                    
                    var viewName = view.split("@")[0];
                    var viewConfig = views[view];

                    if (viewConfig === null) {
                        viewConfig = { };
                        views[view] = viewConfig;
                    }

                    configure(viewConfig, viewName, viewBase);
                }
            }
            
            function configure(cfg, name, viewBase) {
                cfg.templateUrl = viewBase + toDashed(name) + ".html";
                cfg.controller = toCamelCase(name) + "Controller";
                cfg.controllerAs = "vm";  
            }
            
            function toCamelCase(stateName) {
                return stateName.charAt(0).toUpperCase() + stateName.substr(1);
            }
            
            function toDashed(stateName) {
                var res = "";
                
                for (var i =0 ; i < stateName.length; i++) {
                    var character = stateName.charAt(i); 
                    
                    if (character === character.toUpperCase()) {
                        res += "-";
                        character = character.toLocaleLowerCase();
                    }
                    
                    res += character;
                }
                
                return res;
            }
        }
    }
})();