(function () {
    "use strict";

    angular
        .module("app")
        .filter("trusted", trusted);

    /* @ngInject */
    function trusted($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        };
    }
})();