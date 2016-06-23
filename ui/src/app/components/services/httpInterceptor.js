(function () {
    "use strict";

    angular
		.module("app")
		.factory("httpInterceptor", httpInterceptor);

    /* @ngInject */
    function httpInterceptor($q) {
        return {
            "request": function(config) {
                // todo: add auth token to header
                return config;
            },
            "responseError": function(response, status, headers, config) {
                // todo: handle auth error and redirect to login page
                if (response.data.message) {
                    alert(response.data.message);
                }
                else {
                    alert("Unknown Error: " + JSON.stringify(response.data));
                }
                return $q.reject(response);
            }
        };
    }
})();