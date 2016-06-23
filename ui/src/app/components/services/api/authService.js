(function () {
    "use strict";

    angular
		.module("app")
		.factory("authService", authService);

    /* @ngInject */
    function authService(apiService) {
        return { 
            signup: signup
        };
        
        function signup(request) {
            return apiService.post(opts(request, "signup"));
        }
        
        function opts(request, path) {
            return {
                service: "auth",
                data: request,
                path: path
            };
        }
    }
})();