(function () {
    "use strict";

    angular
        .module("app")
		.controller("ActivationController", ActivationController);

    ActivationController.$inject = [];

    function ActivationController() {
        var vm = this;

        // activate
        activate();

        function activate() {
            // TODO
        }

        // vm members
    }
})();