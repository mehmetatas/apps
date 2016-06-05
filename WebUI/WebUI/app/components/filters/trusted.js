(function () {
    "use strict";

    angular
        .module("app")
        .filter("trusted", trusted);

    trusted.$inject = ["$sce"];

    function trusted($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        };
    }
})();