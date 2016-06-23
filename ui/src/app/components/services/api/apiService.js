(function () {
    "use strict";

    angular
		.module("app")
		.factory("apiService", apiService);

    /* @ngInject */
    function apiService($http, apiVersions) {
        return { 
            "get": doGet,
            "post": doPost,
            "put": doPut,
            "delete": doDelete
        };
        
        function doGet(opts) {
            return $http.get(buildUrl(opts), {
                params: opts.data
            });
        }
        
        function doPost(opts) {
            return $http.post(buildUrl(opts), opts.data);
        }
        
        function doPut(opts) {
            return $http.put(buildUrl(opts), opts.data);
        }
        
        function doDelete(opts) {
            return $http.delete(buildUrl(opts), {
                params: opts.data
            });
        }
        
        function buildUrl(opts) {
            var version = opts.version || (apiVersions[opts.service] || apiVersions.default);
            return "/api/" + version + "/" + opts.service + "/" + opts.path;
        }
    }
})();